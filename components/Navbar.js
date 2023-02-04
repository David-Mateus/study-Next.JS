import Link from "next/link";
import styles from "../styles/Navbar.module.css"
export default function Navbar() {
  return (
    <div>
      
      <ul className={styles.navbar}>
      <h1 className={styles.textAll}>StudyNext</h1>
        <li className={styles.li}>
          <Link href="/about">Sobre nós</Link>
        </li>
        <li>
          <Link href="/products/">Produtos</Link>
        </li>
        <li>
          <Link href="/newPage/">NewPage</Link>
        </li>
      </ul>
    </div>
  );
}
