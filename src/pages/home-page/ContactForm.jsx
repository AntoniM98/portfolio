import './ContactForm.css';

export default function ContactForm() {
  return (
    <form className="form-container" action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value="c1bc80d9-0835-4170-8fa8-2e620c1a671e" />
      <div className="input-container">
        <label htmlFor="name">Naam</label>
        <input type="text" id="name" name="name" placeholder="Naam" autoComplete="off" required />
      </div>
      <div className="input-container">
        <label htmlFor="email">E-mailadres</label>
        <input type="email" id="email" name="email" placeholder="E-mailadres" autoComplete="off" required />
      </div>    
      <div className="input-container">
        <label htmlFor="message">Bericht</label>
        <textarea id="message" name="message" rows="6" placeholder="Type hier je bericht" autoComplete="off" required></textarea>    
      </div>
      <button className="submit-button" type="submit">Verzenden</button>
    </form>
  );
}