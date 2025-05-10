export interface FormData {
  // Purchase & Loan
  purchase_price: number
  land_share_percent: number
  region: string
  broker_percent: number
  notary_percent: number
  down_payment: number
  loan_amount: number
  interest_rate: number
  repayment_rate: number
  loan_duration: number

  // Rental & Expenses
  monthly_rent: number
  vacancy_rate: number
  property_size: number
  hoa_fee: number
  maintenance_reserve: number
  building_insurance: number
  utility_costs_owner: number
  renovation_costs: number
  advisor_fees: number
  travel_km: number
  travel_visits: number

  // Taxes
  annual_income: number
  tax_class: string
}

export interface CalculationResults {
  // Purchase & Financing
  total_purchase_cost: number
  loan_amount: number
  monthly_loan_payment: number
  annual_loan_payment: number

  // Income & Expenses
  annual_rent: number
  annual_operating_costs: number
  annual_deductible_amount: number

  // Tax Impact
  taxable_income: number
  tax_saved: number
  tax_owed: number

  // Cash Flow & Return
  annual_cashflow: number
  monthly_cashflow: number
  return_on_equity: number
}

export interface Region {
  id: string
  name: string
  tax_rate: number
}

export interface TaxClass {
  id: string
  description: string
  rate: number
}
