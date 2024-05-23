import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <div>
      <p>
        Sorry, page not found! Return to <Link className={css.pageNotFoundLink} to="/">home page</Link>!
      </p>
    </div>
  );
}