import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import About from "../components/About";
import s from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <div className={s.banner}>
        <div className={s.arrow + " " + s.arrow__left}>
          <BsChevronLeft />
        </div>
        <div className={s.arrow + " " + s.arrow__right}>
          <BsChevronRight />
        </div>
        <h1 className={s.banner__heading}>Montana Resort</h1>
        <p className={s.sub__heading}>Unlock to enjoy the view of Martine</p>
      </div>
      <About />
    </>
  )
};

export default Home;