import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/imageGallery.module.css";

export default function ImageGallery({ listImages, openModal }) {
  return (
    <ul className={css.list}>
      {listImages.map((item) => {
        return (
          <li className={css.item} key={item.id}>
            <ImageCard onClick={openModal} image={item} />
          </li>
        );
      })}
    </ul>
  );
}