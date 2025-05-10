import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

interface optionType {
  value: string;
  label: string;
}

const languageOptions: optionType[] = [
  { value: "de", label: "German" },
  { value: "en", label: "English" },
];

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState<optionType | null>(
    languageOptions[0] 
  );

  const handleChange = (option: optionType | null) => {
    setSelectedOption(option);
  };

  return (
    <div className=" bg-[#4CAF50] text-white py-4 px-6 flex items-center justify-between rounded-xl">
      <h1 className=" font-bold text-stone-50 text-2xl">DerImmoKalk</h1>
      <div className=" flex items-center gap-6 font-semibold">
        <Link to={"/"} className=" text-stone-100 text-lg">
          Home
        </Link>
        <div style={{ width: 180 }}>
          <Select
            className=" text-stone-600 "
            options={languageOptions}
            value={selectedOption}
            onChange={handleChange}
            placeholder="Sprache wählen"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
