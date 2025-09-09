import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './ContactLinks.css';

export default function ContactLinks() {
  return (
    <div className="contact-links-container">
      <h2 className="contact-header">Contact</h2>
      <p className="contact-description">Meer weten? Neem gerust contact met mij op via een van de onderstaande kanalen of stuur mij hier een berichtje.</p>
      
      <a href="mailto:antoni.magendans@hotmail.com" className="social-media-link">
        <div className="social-media-link-icon">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        antoni.magendans@hotmail.com
      </a>
      <a href="https://www.linkedin.com/in/antoni-magendans/" className="social-media-link" target="_blank">
        <div className="social-media-link-icon">
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
        Antoni Magendans
      </a>
    </div>
  );
}