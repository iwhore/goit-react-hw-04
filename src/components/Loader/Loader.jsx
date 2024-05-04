import { Bars } from "react-loader-spinner";
import css from "./Loader.module.css";
export default function Loader() {
  return (
    <Bars
      height="25"
      width="25"
      color="#4fa94d"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass={css.container}
      visible={true}
    />
  );
}