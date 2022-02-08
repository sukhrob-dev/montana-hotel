import s from '../styles/About.module.css';
import { Link } from "react-router-dom";

const About = () => {
  return (
      <div className={s.container}>
          <div className={s.left}>
            <p className={s.sup__heading}>about us</p>
            <h2 className={s.heading}>A Luxuries Hotel with Nature</h2>
            <p className={s.text}>Suscipit libero pretium nullam potenti. Interdum, blandit phasellus consectetuer dolor ornare dapibus enim ut tincidunt rhoncus tellus sollicitudin pede nam maecenas, dolor sem. Neque sollicitudin enim. Dapibus lorem feugiat facilisi faucibus et. Rhoncus.</p>
            <Link to="/" className={s.btn}>learn more</Link>
          </div>
          <div className={s.right}>
            <img src="images/about/about_1.webp" alt="resort room" />
            <img src="images/about/about_2.webp" alt="montana room" />
          </div>
      </div>
  );
};

export default About;
