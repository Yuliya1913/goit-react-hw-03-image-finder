import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ imagesData }) => {
  return (
    <ul className="gallery" width="50" height="50">
      {imagesData.map(imageData => {
        return <ImageGalleryItem imageData={imageData} key={imageData.id} />;
      })}
    </ul>
  );
};

// export const ImageGallery = ({ imagesData }) => {
//   return (
//     <ul className="gallery" width="50" height="50">
//       {imagesData.map(({ id, webformatURL, largeImageURL }) => {
//         return (
//           <li className="gallery-item" key={id}>
//             <img src={webformatURL} alt="" />
//           </li>
//         );
//       })}
//     </ul>
//   );
// };
