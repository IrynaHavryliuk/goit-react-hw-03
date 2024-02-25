import styles from './SearchBox.module.css';

function SearchBox({ value, onChange }) {
  return (
    <div className={styles.searchContainer}>
      <h2>Finde contacts by name</h2>
      <input
        type="text"
        placeholder="Finde contacts..."
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
}

export default SearchBox;
