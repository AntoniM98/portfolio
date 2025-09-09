import ContactLinks from './ContactLinks';
import ContactForm from './ContactForm';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <ContactLinks />
      <ContactForm />
    </section>
  );
}