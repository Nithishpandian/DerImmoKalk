"use client";

import { useLanguage } from "../../contexts/LanguageContext";
import type { FormData } from "../../types";
import { TAX_CLASSES } from "../../constants";
import InputField from "../ui/InputField";
import SelectField from "../ui/SelectField";

interface TaxesSectionProps {
  data: FormData;
  onChange: (data: Partial<FormData>) => void;
}

function TaxesSection({ data, onChange }: TaxesSectionProps) {
  const { t } = useLanguage();

  return (
    <div className=" flex flex-col gap-4">
      <h2 className=" font-bold text-xl text-stone-700">{t.taxes}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          label={t.grossIncome}
          type="number"
          value={data.annual_income}
          onChange={(value) => onChange({ annual_income: Number(value) })}
          required
        />

        <SelectField
          label={t.taxClass}
          value={data.tax_class}
          onChange={(value) => onChange({ tax_class: value })}
          options={TAX_CLASSES.map((taxClass) => ({
            value: taxClass.id,
            label: `${taxClass.id} - ${
              t[`taxClass${taxClass.id}` as keyof typeof t]
            } (${taxClass.rate}%)`,
          }))}
          required
        />
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-bold text-stone-700 mb-4">
          {t.taxRatesReference}
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-md shadow-sm">
            <thead className="bg-gray-200 text-gray-700 ">
              <tr>
                <th className="px-5 py-3 text-left font-bold border-b border-gray-200">
                  {t.taxClassLabel}
                </th>
                <th className="px-5 py-3 text-left font-bold border-b border-gray-200">
                  {t.taxClassDescription}
                </th>
                <th className="px-5 py-3 text-left font-bold border-b border-gray-200">
                  {t.taxRate}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white font-medium">
              {TAX_CLASSES.map((taxClass) => (
                <tr
                  key={taxClass.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-5 py-4 text-sm text-gray-800 border-b border-gray-200">
                    {taxClass.id}
                  </td>
                  <td className="px-5 py-4 text-sm text-gray-800 border-b border-gray-200">
                    {t[`taxClass${taxClass.id}` as keyof typeof t]}
                  </td>
                  <td className="px-5 py-4 text-sm text-gray-800 border-b border-gray-200">
                    {taxClass.rate}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TaxesSection;
