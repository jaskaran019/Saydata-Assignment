import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import styles from "../styles/navbar.module.css"
const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.searchBar}><AiOutlineSearch style={{fontSize:"20px", color:"gray"}}/> <input type="text" placeholder='Search here...'/></div>
        <ul className={styles.navList}>
          <li className={styles.navItem}><img src="assets/bellicon.png" alt="" /></li>
          <li className={styles.navItem}><img src="assets/user.png" alt="" /></li>
        </ul>      
      </div>
    </>
  )
}

export default Navbar