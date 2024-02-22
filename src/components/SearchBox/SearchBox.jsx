import styles from './SearchBox.module.css';

function SearchBox({ value, onChange }) {
  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="Пошук контактів..."
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
}

export default SearchBox;
