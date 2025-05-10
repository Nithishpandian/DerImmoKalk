import type { FormData, Region, TaxClass } from "./types"

export const REGIONS: Region[] = [
  { id: "bayern", name: "Bavaria (Bayern)", tax_rate: 3.5 },
  { id: "sachsen", name: "Saxony (Sachsen)", tax_rate: 3.5 },
  { id: "hamburg", name: "Hamburg", tax_rate: 5.5 },
  { id: "baden-wuerttemberg", name: "Baden-Württemberg", tax_rate: 5.0 },
  { id: "bremen", name: "Bremen", tax_rate: 5.0 },
  { id: "rheinland-pfalz", name: "Rhineland-Palatinate (Rheinland-Pfalz)", tax_rate: 5.0 },
  { id: "berlin", name: "Berlin", tax_rate: 6.0 },
  { id: "hessen", name: "Hesse (Hessen)", tax_rate: 6.0 },
  { id: "brandenburg", name: "Brandenburg", tax_rate: 6.5 },
  { id: "nordrhein-westfalen", name: "North Rhine-Westphalia (Nordrhein-Westfalen)", tax_rate: 6.5 },
  { id: "saarland", name: "Saarland", tax_rate: 6.5 },
  { id: "schleswig-holstein", name: "Schleswig-Holstein", tax_rate: 6.5 },
  { id: "thueringen", name: "Thuringia (Thüringen)", tax_rate: 6.5 },
]

export const TAX_CLASSES: TaxClass[] = [
  { id: "I", description: "Single", rate: 30 },
  { id: "II", description: "Single parent", rate: 25 },
  { id: "III", description: "Married (main earner)", rate: 15 },
  { id: "IV", description: "Married (equal)", rate: 22 },
  { id: "V", description: "Married (second earner)", rate: 35 },
  { id: "VI", description: "Side job", rate: 42 },
]

export const initialFormData: FormData = {
  // Purchase & Loan
  purchase_price: 0,
  land_share_percent: 20,
  region: "",
  broker_percent: 3.57,
  notary_percent: 1.5,
  down_payment: 0,
  loan_amount: 0,
  interest_rate: 0,
  repayment_rate: 2,
  loan_duration: 0,

  // Rental & Expenses
  monthly_rent: 0,
  vacancy_rate: 5,
  property_size: 0,
  hoa_fee: 0,
  maintenance_reserve: 0,
  building_insurance: 0,
  utility_costs_owner: 0,
  renovation_costs: 0,
  advisor_fees: 0,
  travel_km: 0,
  travel_visits: 0,

  // Taxes
  annual_income: 0,
  tax_class: "",
}
