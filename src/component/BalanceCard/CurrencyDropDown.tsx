import styles from "./currencyDropdown.module.css";

interface CurrencyOption {
  code: string;
  label: string;
  flag: string;
}

const currencies: CurrencyOption[] = [
  { code: "AUD", label: "Australian Dollar", flag: "🇦🇺" },
  { code: "USD", label: "US Dollar", flag: "🇺🇸" },
  { code: "EUR", label: "Euro", flag: "🇪🇺" },
  { code: "GBP", label: "British Pound", flag: "🇬🇧" },
  { code: "JPY", label: "Japanese Yen", flag: "🇯🇵" },
  { code: "CAD", label: "Canadian Dollar", flag: "🇨🇦" },
];

export default function CurrencyDropDown() {
  return (
    <select className={styles.dropdown} defaultValue="AUD">
      {currencies.map((currency) => (
        <option key={currency.code} value={currency.code}>
          {`${currency.flag} ${currency.code}`}
        </option>
      ))}
    </select>
  );
}
