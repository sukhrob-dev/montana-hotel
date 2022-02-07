import React from 'react';
import { Link } from 'react-router-dom';
import s from "../styles/Navbar.module.css";
import { RiFacebookBoxFill, RiTwitterFill, RiInstagramLine } from "react-icons/ri";

const Navbar = () => {
  return (
      <>
        <div className={s.container}>
            <nav id={s.navbar}>
                <ul className={s.left}>
                    <li>
                        <Link to="/" className={s.list__links + " " + s.active}>Home</Link>
                    </li>
                    <li>
                        <Link to="/" className={s.list__links}>Rooms</Link>
                    </li>
                    <li>
                        <Link to="/" className={s.list__links}>About</Link>
                    </li>
                    <li>
                        <Link to="/" className={s.list__links}>Contact</Link>
                    </li>
                </ul>
                <Link to="/" className={s.center}>
                    <img src="images/logo.webp" alt="Montana logo" />
                </Link>
                <div className={s.right}>
                    <div className={s.social__icons}>
                        <a href="https://www.facebook.com" target='_blank' rel="noopener noreferrer">
                            <RiFacebookBoxFill />
                        </a>
                        <a href="https://www.twitter.com" target='_blank' rel="noopener noreferrer">
                            <RiTwitterFill />
                        </a>
                        <a href="https://www.instagram.com" target='_blank' rel="noopener noreferrer">
                            <RiInstagramLine />
                        </a>
                    </div>
                    <button type='button' className={s.btn}>book a room</button>
                </div>
            </nav>
        </div>
      </>
  );
};

export default Navbar;
