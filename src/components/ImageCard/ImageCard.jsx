import css from "../ImageCard/ImageCard.module.css"

export default function ImageCard({ image: { urls, description }, onClick }) {
  return (
    <div className={css.img}>
      <img
        onClick={() => onClick(urls.regular, description)}
        src={urls.small}
        alt={description}
        width="320"
        height="240"
      />
    </div>
  );
}