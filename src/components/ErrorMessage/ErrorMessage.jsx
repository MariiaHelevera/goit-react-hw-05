import { BsEmojiFrown } from "react-icons/bs";
import css from './ErrorMessage.module.css'

export default function ErrorMessage({ message }) {
  return (
    <div className={css.errorMessageContainer} style={{ color: 'red', fontWeight: 'bold' }}>
      <BsEmojiFrown color="red" size={35}/>
      {message}
    </div>
  );
}