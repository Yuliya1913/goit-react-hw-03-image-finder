import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export const ImageGallery = ({ imagesData, onClick }) => {
  return (
    <ul className={css.gallery} width="50" height="50">
      {imagesData.map(imageData => {
        return (
          <ImageGalleryItem
            image={imageData}
            key={imageData.id}
            onClick={onClick}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  imagesData: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};
