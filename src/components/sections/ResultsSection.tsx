"use client";

import { useLanguage } from "../../contexts/LanguageContext";
import type { CalculationResults } from "../../types";
import { formatCurrency, formatPercent } from "../../utils/format";
import { motion } from "framer-motion";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { HiReceiptTax } from "react-icons/hi";
import { IoIosCash } from "react-icons/io";

interface ResultsSectionProps {
  results: CalculationResults | null;
}

function ResultsSection({ results }: ResultsSectionProps) {
  const { t } = useLanguage();

  if (!results) {
    return (
      <></>
      // <div className="flex flex-col items-center justify-center py-12 text-center bg-white shadow">
      //   <h2 className="">{t.results}</h2>
      //   <p className="text-slate-400 mt-4">{t.calculate}</p>
      // </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=" grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 w-full"
    >
      <ResultCard
        title={t.purchaseAndFinancing}
        icon={<BiSolidPurchaseTag className=" text-lg" />}
        items={[
          {
            label: t.totalPurchaseCost,
            value: formatCurrency(results.total_purchase_cost),
          },
          { label: t.loanAmount, value: formatCurrency(results.loan_amount) },
          {
            label: t.monthlyLoanPayment,
            value: formatCurrency(results.monthly_loan_payment),
          },
        ]}
        delay={0.1}
      />

      <ResultCard
        title={t.incomeAndExpenses}
        icon={<FaMoneyBill1Wave className=" text-lg" />}
        items={[
          { label: t.annualRent, value: formatCurrency(results.annual_rent) },
          {
            label: t.annualOperatingCosts,
            value: formatCurrency(results.annual_operating_costs),
          },
          {
            label: t.annualDeductibleAmount,
            value: formatCurrency(results.annual_deductible_amount),
          },
        ]}
        delay={0.2}
      />

      <ResultCard
        title={t.taxImpact}
        icon={<HiReceiptTax className=" text-lg" />}
        items={[
          {
            label: results.tax_saved > 0 ? t.annualTaxSavings : t.annualTaxOwed,
            value: formatCurrency(
              results.tax_saved > 0 ? results.tax_saved : results.tax_owed
            ),
          },
          {
            label: t.taxEffect,
            value: results.tax_saved > 0 ? t.positiveSavings : t.negativeOwed,
          },
        ]}
        delay={0.3}
      />

      <ResultCard
        title={t.cashFlowAndReturn}
        icon={<IoIosCash className=" text-lg" />}
        items={[
          {
            label: t.annualNetCashFlow,
            value: formatCurrency(results.annual_cashflow),
            highlight: true,
            positive: results.annual_cashflow > 0,
          },
          {
            label: t.monthlyNetCashFlow,
            value: formatCurrency(results.monthly_cashflow),
            highlight: true,
            positive: results.monthly_cashflow > 0,
          },
          {
            label: t.cashFlowStatus,
            value: results.annual_cashflow > 0 ? t.positive : t.negative,
            positive: results.annual_cashflow > 0,
          },
          {
            label: t.returnOnEquity,
            value: formatPercent(results.return_on_equity),
            highlight: true,
            positive: results.return_on_equity > 0,
          },
        ]}
        delay={0.4}
      />

      {results.taxable_income < 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className=" border border-stone-300 text-stone-700 bg-white p-4 rounded-xl mt-4"
        >
          <p className="text-stone-600 font-medium text-sm">{t.note}</p>
        </motion.div>
      )}
    </motion.div>
  );
}

interface ResultCardProps {
  title: string;
  icon: React.ReactNode;
  items: {
    label: string;
    value: string;
    highlight?: boolean;
    positive?: boolean;
  }[];
  delay?: number;
}

function ResultCard({ title, icon, items, delay = 0 }: ResultCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className=" py-4 px-5 border border-stone-300 bg-white shadow rounded-xl"  
    >
      <h3 className=" flex items-center gap-3 text-xl font-bold text-stone-700 bg-clip-text bg-gradient-to-r mb-3">
        <span>{icon}</span>
        <span>{title}</span>
      </h3>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className=" space-x-2">
            <span className=" font-medium">{item.label}:</span>
            <span
              className={`result-value ${
                item.highlight
                  ? item.positive
                    ? " text-green-400"
                    : " text-red-400"
                  : ""
              }`}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default ResultsSection;
