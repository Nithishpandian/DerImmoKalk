import { useLanguage } from "../../contexts/LanguageContext"
import type { FormData } from "../../types"
import InputField from "../ui/InputField"

interface RentalExpensesSectionProps {
  data: FormData
  onChange: (data: Partial<FormData>) => void
}

function RentalExpensesSection({ data, onChange }: RentalExpensesSectionProps) {
  const { t } = useLanguage()

  return (
       <div className=" flex flex-col gap-4">
      <h2 className=" font-bold text-xl text-stone-700 red-hat-display-900">{t.rentalAndExpenses}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 red-hat-display-400">
        <InputField
          label={t.coldRent}
          type="number"
          value={data.monthly_rent}
          onChange={(value) => onChange({ monthly_rent: Number(value) })}
          required
        />

        <InputField
          label={t.vacancyRate}
          type="number"
          value={data.vacancy_rate}
          onChange={(value) => onChange({ vacancy_rate: Number(value) })}
          step="0.1"
        />

        <InputField
          label={t.propertySize}
          type="number"
          value={data.property_size}
          onChange={(value) => onChange({ property_size: Number(value) })}
          required
        />

        <InputField
          label={t.hoaFee}
          type="number"
          value={data.hoa_fee}
          onChange={(value) => onChange({ hoa_fee: Number(value) })}
          required
        />

        <InputField
          label={t.maintenanceReserve}
          type="number"
          value={data.maintenance_reserve}
          onChange={(value) => onChange({ maintenance_reserve: Number(value) })}
          required
        />

        <InputField
          label={t.buildingInsurance}
          type="number"
          value={data.building_insurance}
          onChange={(value) => onChange({ building_insurance: Number(value) })}
        />

        <InputField
          label={t.utilityCostsOwner}
          type="number"
          value={data.utility_costs_owner}
          onChange={(value) => onChange({ utility_costs_owner: Number(value) })}
        />

        <InputField
          label={t.renovationCosts}
          type="number"
          value={data.renovation_costs}
          onChange={(value) => onChange({ renovation_costs: Number(value) })}
        />

        <InputField
          label={t.advisorFees}
          type="number"
          value={data.advisor_fees}
          onChange={(value) => onChange({ advisor_fees: Number(value) })}
        />

        <InputField
          label={t.travelDistance}
          type="number"
          value={data.travel_km}
          onChange={(value) => onChange({ travel_km: Number(value) })}
        />

        <InputField
          label={t.travelVisits}
          type="number"
          value={data.travel_visits}
          onChange={(value) => onChange({ travel_visits: Number(value) })}
        />
      </div>
    </div>
  )
}

export default RentalExpensesSection
