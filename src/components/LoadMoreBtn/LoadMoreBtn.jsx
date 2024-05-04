import css from "../LoadMoreBtn/LoadMoreBtn.module.css"

export default function LoadMoreBtn({ onClick }) {
    return (
      <div className={css.container}>
        <button className={css.btn} onClick={onClick}>
          Load more
        </button>
      </div> 
    );
}