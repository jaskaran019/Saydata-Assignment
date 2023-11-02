import React from 'react'
import styles from "../styles/sidebar.module.css"
import "../index.css"
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <div className={styles.navigationContainer}>
            <h1>abc firm</h1>
            <ul className={styles.navigationList}>
                <li className={styles.navItem}><img src="assets/home.png" alt="" />Home</li>
                <li className={styles.navItem}><img src="assets/files.png" alt="" />All Files</li>
                <li className={styles.navItem}><img src="assets/bookmark.png" alt="" />Saved</li>
                <li className={styles.navItem}><img src="assets/integrations.png" alt="" />Integrations</li>
                <li className={styles.navItem}><img src="assets/trash.png" alt="" />Trash</li>
                <li className={styles.navItem}><img src="assets/settings.png" alt="" />Settings</li>
                <li className={styles.navItem}><img src="assets/support.png" alt="" />Help and Support</li>
            </ul>
        </div>
        <div className={styles.upgradeContainer}>
            <img src="assets/rocket.png" alt="" style={{width:'25px'}}/>
            <h5>Upgrade Account</h5>
            <p>Access to Unlimited Transcription</p>
            <button className='blueButton'>Upgrade</button>
        </div>
    </div>
  )
}

export default Sidebar