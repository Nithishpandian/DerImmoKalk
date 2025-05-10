import { useLanguage } from "../../contexts/LanguageContext"
import type { FormData } from "../../types"
import { REGIONS } from "../../constants"
import InputField from "../ui/InputField"
import SelectField from "../ui/SelectField"

interface PurchaseLoanSectionProps {
  data: FormData
  onChange: (data: Partial<FormData>) => void
}

function PurchaseLoanSection({ data, onChange }: PurchaseLoanSectionProps) {
  const { t } = useLanguage()

  return (
    <div className=" flex flex-col gap-4">
      <h2 className=" font-bold text-xl text-stone-700">{t.purchaseAndLoan}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          label={t.purchasePrice}
          type="number"
          value={data.purchase_price}
          onChange={(value) => onChange({ purchase_price: Number(value) })}
          required
        />

        <InputField
          label={t.landSharePercent}
          type="number"
          value={data.land_share_percent}
          onChange={(value) => onChange({ land_share_percent: Number(value) })}
          required
        />

        <SelectField
          label={t.region}
          value={data.region}
          onChange={(value) => onChange({ region: value })}
          options={REGIONS.map((region) => ({
            value: region.id,
            label: region.name,
          }))}
          required
        />

        <InputField
          label={t.brokerFee}
          type="number"
          value={data.broker_percent}
          onChange={(value) => onChange({ broker_percent: Number(value) })}
          required
          step="0.01"
        />

        <InputField
          label={t.notaryFees}
          type="number"
          value={data.notary_percent}
          onChange={(value) => onChange({ notary_percent: Number(value) })}
          required
          step="0.01"
        />

        <InputField
          label={t.downPayment}
          type="number"
          value={data.down_payment}
          onChange={(value) => onChange({ down_payment: Number(value) })}
          required
        />

        <InputField
          label={t.loanAmount}
          type="number"
          value={data.loan_amount}
          onChange={(value) => onChange({ loan_amount: Number(value) })}
          disabled
        />

        <InputField
          label={t.interestRate}
          type="number"
          value={data.interest_rate}
          onChange={(value) => onChange({ interest_rate: Number(value) })}
          required
          step="0.01"
        />

        <InputField
          label={t.repaymentRate}
          type="number"
          value={data.repayment_rate}
          onChange={(value) => onChange({ repayment_rate: Number(value) })}
          required
          step="0.01"
        />

        <InputField
          label={t.loanDuration}
          type="number"
          value={data.loan_duration}
          onChange={(value) => onChange({ loan_duration: Number(value) })}
        />
      </div>
    </div>
  )
}

export default PurchaseLoanSection
