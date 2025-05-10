
interface InputFieldProps {
  label: string;
  type: string;
  value: number | string;
  onChange: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
  step?: string;
}

function InputField({
  label,
  type,
  value,
  onChange,
  required = false,
  disabled = false,
  step,
}: InputFieldProps) {

  return (
    <div className=" flex flex-col gap-1">
      <label className=" font-medium text-stone-700">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <input
        type={type}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-stone-300 bg-white rounded-xl text-stone-600 font-medium placeholder:text-stone-600 focus:outline-none duration-300"
        required={required}
        disabled={disabled} 
        step={step}
      />
    </div>
  );
}

export default InputField;
