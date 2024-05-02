import styles from "./search-input.module.scss";
import { ChangeEvent } from "react";

type SearchInputProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
};

export const SearchInput = ({ value, onChange, onFocus }: SearchInputProps) => {
  return (
    <div className={styles.input}>
      <input
        placeholder="Поиск"
        type="text"
        value={value}
        onChange={onChange}
        onFocus={onFocus}
      />
    </div>
  );
};
