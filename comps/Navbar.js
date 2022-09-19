import { useState } from 'react';
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
  };

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>game changer</h1>

      <div className={styles.navbar_links}>
        <Link href="/"><a className={styles.link}
          style={{
            backgroundColor: isActive ? '#f34738' : '',
            color: isActive ? 'white' : '',
          }}
          onClick={handleClick}>Dashboard</a></Link>
        <Link href="/game"><a className={styles.link}>Build a game</a></Link>
        <a className={styles.link}>Log out</a>
      </div>

      <div className={styles.help}>
        <a href="#" className={styles.help_link}>Need help?</a>
        <div className={styles.agent}>
          <img className={styles.agent_img} src="https://firebasestorage.googleapis.com/v0/b/tactus-caelesti.appspot.com/o/agents%2FP7JIqIE.png?alt=media&token=bfa90cd0-07e5-4b99-b15e-f678570049bd"
            alt="Photo of contact agent." />
          <p>Steve Bloom</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;