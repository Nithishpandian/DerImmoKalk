import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { calculateResults } from "../utils/calculator";
import type { FormData, CalculationResults } from "../types";
import { initialFormData } from "../constants";
import PurchaseLoanSection from "./sections/PurchaseLoanSection";
import RentalExpensesSection from "./sections/RentalExpensesSection";
import TaxesSection from "./sections/TaxesSection";
import ResultsSection from "./sections/ResultsSection";

function Calculator() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [results, setResults] = useState<CalculationResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleFormChange = (newData: Partial<FormData>) => {
    setFormData((prev) => {
      const updated = { ...prev, ...newData };

      if (
        newData.purchase_price !== undefined ||
        newData.down_payment !== undefined
      ) {
        updated.loan_amount = updated.purchase_price - updated.down_payment;
      }

      return updated;
    });
  };

  const handleCalculate = () => {
    setIsCalculating(true);

    setTimeout(() => {
      try {
        const calculatedResults = calculateResults(formData);
        setResults(calculatedResults);
      } catch (error) {
        console.error("Calculation error:", error);
      } finally {
        setIsCalculating(false);
      }
    }, 600);
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setResults(null);
  };

  return (
    <div className=" sm:px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        <div className="lg:col-span-2 space-y-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white rounded-2xl p-6 relative z-10"
          >
            <PurchaseLoanSection data={formData} onChange={handleFormChange} />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 relative z-10"
          >
            <RentalExpensesSection
              data={formData}
              onChange={handleFormChange}
            />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-white rounded-2xl p-6 relative z-10"
          >
            <TaxesSection data={formData} onChange={handleFormChange} />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex space-x-4 justify-end"
          >
            <button
              onClick={handleReset}
              className=" border border-emerald-600 py-2 px-4 rounded-md bg-white text-emerald-600 font-semibold flex items-center cursor-pointer"
            >
              {t.reset}
            </button>
            <button
              onClick={handleCalculate}
              disabled={isCalculating}
              className=" border border-emerald-600 bg-emerald-600 py-2 px-4 rounded-md text-white font-semibold flex items-center cursor-pointer"
            >
              {isCalculating ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {t.calculate}...
                </>
              ) : (
                t.calculate
              )}
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className=" lg:col-span-2"
        >
          <div className="neon-border">
            <div className="sm:p-6 z-10 sticky top-24">
              <ResultsSection results={results} />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Calculator;
