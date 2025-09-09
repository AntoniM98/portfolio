import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import './BackButton.css';

export default function BackButton() {
  return (
    <div className="back-button">
      <HashLink to="/#projects">
        <FontAwesomeIcon icon={faCaretLeft} />
        Terug
      </HashLink>
    </div>
  );
}