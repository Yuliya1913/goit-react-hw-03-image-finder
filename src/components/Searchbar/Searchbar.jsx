export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    //   находим данные введенные в инпут
    const valueInput = e.currentTarget.elements.name.value.toLowerCase().trim();

    //   если в инпуте пустая строка, то выйти
    if (valueInput === '') {
      alert('Введите данные для поиска');
      return;
    }

    onSubmit(valueInput);
  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          name="name"
        />
      </form>
    </header>
  );
};
