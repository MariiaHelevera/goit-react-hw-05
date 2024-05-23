import css from './SearchForm.module.css';

export default function SearchBox({ updateQueryParams }) {
  function handleSubmit(event) {
    event.preventDefault();
    updateQueryParams(event.currentTarget.elements.query.value);
  }

  return (
    <div>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          name="query"
          placeholder="Movie name"
        />
        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}