import Photo from '../../assets/photo.png';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-textcontainer">
        <h2>Wie ben ik?</h2>
        <p>Hoi, mijn naam is Antoni Magendans. In 2018 begon ik de opleiding Communication & Multimedia Design met een specialisatie in Experience Design aan de HAN University of Applied Sciences in Arnhem. Deze opleiding heb ik in 2023 afgerond en hiermee mijn Bachelor of Science behaald.</p>
        <p>Gedurende mijn opleiding heb ik gewerkt aan diverse projecten gericht op het ontwerpen van interactieve oplossingen voor problemen/vraagstukken voor zowel fictieve casussen als voor daadwerkelijke opdrachtgevers. Binnen mijn ontwerpprojecten doorloop ik iteratieve processen volgens Design Thinking om elk ontwerp zo goed mogelijk aan te laten sluiten op de gebruiker en het ontwerpdoel.</p>
        <p>Ik haal met name uit prototyping veel energie. Hierdoor heb ik ervaring met front-end development en beheers ik over diverse prototyping tools als Adobe XD of Figma, maar ook programmeertalen als HTML, CSS, JavaScript en C# (binnen de Unity game engine).</p>
      </div>
      <div className="photo-container">
        <img className="photo" src={Photo} />
      </div>
    </section>
  );
}