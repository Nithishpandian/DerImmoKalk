"use client";

import { useLanguage } from "../../contexts/LanguageContext";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  required?: boolean;
}

function SelectField({
  label,
  value,
  onChange,
  options,
  required = false,
}: SelectFieldProps) {
  const { t } = useLanguage();

  return (
    <div className=" flex flex-col gap-1 ">
      <label className=" font-medium text-stone-700">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className=" w-full px-4 py-2 border border-stone-300 bg-white rounded-xl text-stone-600 font-medium placeholder:text-stone-600 focus:outline-none duration-300"
        required={required}
      >
        <option value="">{t.select}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;
