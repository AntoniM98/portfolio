import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>&copy; {currentYear} Antoni Magendans</footer>
  );
}