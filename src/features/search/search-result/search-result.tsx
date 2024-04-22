import styles from './search-result.module.scss'
import { ReactNode } from "react";

type SearchResultProps = {
  isVisible: boolean
  searchText: string
  children: ReactNode
}
export const SearchResults = ({ isVisible,children, searchText }: SearchResultProps) => {
  return (
    <div className={styles['search-group']}>
      {isVisible && searchText.trim().length > 0 &&
        children
      }
    </div>
  );
};