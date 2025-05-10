import type { FormData, CalculationResults, Region } from "../types"
import { REGIONS, TAX_CLASSES } from "../constants"

export function calculateResults(data: FormData): CalculationResults {
  // Find the region and tax rate
  const selectedRegion = REGIONS.find((region) => region.id === data.region) as Region
  const transferTaxRate = selectedRegion ? selectedRegion.tax_rate : 0

  const selectedTaxClass = TAX_CLASSES.find((taxClass) => taxClass.id === data.tax_class)
  const taxRate = selectedTaxClass ? selectedTaxClass.rate / 100 : 0

  // 2.1 Total Purchase Cost
  const grunderwerbsteuer = data.purchase_price * (transferTaxRate / 100)
  const notary_fee = data.purchase_price * (data.notary_percent / 100)
  const broker_fee = data.purchase_price * (data.broker_percent / 100)
  const total_purchase_cost = data.purchase_price + grunderwerbsteuer + notary_fee + broker_fee + data.renovation_costs

  // 2.2 Loan & Monthly Payment
  const monthly_loan_payment = (data.loan_amount * (data.interest_rate + data.repayment_rate)) / 100 / 12
  const annual_loan_payment = monthly_loan_payment * 12

  // 2.3 Depreciation (AfA)
  const building_value = data.purchase_price * (1 - data.land_share_percent / 100)
  const annual_depreciation = building_value * 0.02 // 2%

  // 2.4 Net Rent
  const net_rent = data.monthly_rent * 12 * (1 - data.vacancy_rate / 100)

  // 2.5 Deductible Expenses
  const loan_interest = (data.loan_amount * data.interest_rate) / 100
  const hoa_deductible = data.hoa_fee * 12 * 0.7
  const travel = data.travel_km * data.travel_visits * 0.3

  const deductibles =
    annual_depreciation +
    loan_interest +
    hoa_deductible +
    data.maintenance_reserve +
    data.building_insurance +
    data.utility_costs_owner +
    data.advisor_fees +
    travel

  // 2.6 Tax Effect
  const taxable_income = net_rent - deductibles
  let tax_saved = 0
  let tax_owed = 0

  if (taxable_income < 0) {
    tax_saved = Math.abs(taxable_income) * taxRate
  } else {
    tax_owed = taxable_income * taxRate
  }

  // 2.7 Cash Flow
  const operating_costs =
    data.hoa_fee * 12 +
    data.maintenance_reserve +
    data.utility_costs_owner +
    data.advisor_fees +
    data.building_insurance

  const annual_cashflow = net_rent - annual_loan_payment - operating_costs + (tax_saved > 0 ? tax_saved : -tax_owed)

  const monthly_cashflow = annual_cashflow / 12

  // 2.8 Eigenkapitalrendite (Return on Equity)
  const return_on_equity = data.down_payment > 0 ? (annual_cashflow / data.down_payment) * 100 : 0

  return {
    // Purchase & Financing
    total_purchase_cost,
    loan_amount: data.loan_amount,
    monthly_loan_payment,
    annual_loan_payment,

    // Income & Expenses
    annual_rent: net_rent,
    annual_operating_costs: operating_costs,
    annual_deductible_amount: deductibles,

    // Tax Impact
    taxable_income,
    tax_saved,
    tax_owed,

    // Cash Flow & Return
    annual_cashflow,
    monthly_cashflow,
    return_on_equity,
  }
}
