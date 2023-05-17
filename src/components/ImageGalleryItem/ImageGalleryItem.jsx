import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  image: { webformatURL, largeImageURL },
  onClick,
}) => {
  return (
    <>
      <li className={css.item}>
        <img
          src={webformatURL}
          alt="phot"
          className={css.image}
          // при клике на кнопку пробрасываем пропс наверх в Арр в метод toggleModal
          onClick={() => {
            onClick(largeImageURL);
          }}
        />
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
