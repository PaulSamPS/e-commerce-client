import styles from './earch-input.module.scss'
import { ChangeEvent } from "react";

type SearchInputProps = {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <div className={styles.input}>
      <input
        placeholder='Поиск'
        type='text'
        value={value}
        onChange={onChange}
      />
    </div>
  );
};