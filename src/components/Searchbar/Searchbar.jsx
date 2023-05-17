import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

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
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.button}>
          <span className={css.label}>Search</span>
        </button>

        <input
          className={css.input}
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

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// форма через Класс

// import { Component } from 'react';
// export class Searchbar extends Component {
//   handleSubmit = e => {
//     e.preventDefault();
//     //   находим данные введенные в инпут
//     const valueInput = e.currentTarget.elements.name.value.toLowerCase().trim();

//     //   если в инпуте пустая строка, то выйти
//     if (valueInput === '') {
//       alert('Введите данные для поиска');
//       return;
//     }

//     this.props.onSubmit(valueInput);
//   };

//   render() {
//     return (
//       <header className={css.searchbar}>
//         <form className={css.searchForm} onSubmit={this.handleSubmit}>
//           <button type="submit" className={css.button}>
//             <span className={css.label}>Search</span>
//           </button>

//           <input
//             className={css.input}
//             type="text"
//             autocomplete="off"
//             autofocus
//             placeholder="Search images and photos"
//             name="name"
//           />
//         </form>
//       </header>
//     );
//   }
// }
