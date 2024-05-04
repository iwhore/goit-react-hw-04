import toast from "react-hot-toast";
import css from "../SearchBar/SearchBar.module.css";


export default function SearchBar({ onSubmit }) {
    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
  
      if (form.elements.query.value.trim() === "") {
        toast.error("Please, enter text to search");
      }
      onSubmit(form.elements.query.value.trim());
      form.reset();
    };
  
    return (
      <header>
        <form className={css.container} onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
          />
          <button type="submit">
            Search
          </button>
        </form>
      </header>
    );
}