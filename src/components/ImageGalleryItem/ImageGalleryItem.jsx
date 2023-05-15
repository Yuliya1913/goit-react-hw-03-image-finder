export const ImageGalleryItem = ({ imageData: { webformatURL } }) => {
  return (
    <>
      <li className="gallery-item">
        <img src={webformatURL} alt="#" />
      </li>
    </>
  );
};
