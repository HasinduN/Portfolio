import React from 'react';

import styles from "./About.module.css";
import { getimageUrl } from '../../utils';

const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>ABOUT</h2>
        <div className={styles.content}>
            <img src='' alt=''/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src="" alt="" className={styles.aboutImage}/>
                    <div className={styles.aboutItemText}>
                        <h3>QA Engineer</h3>
                        <p>Engineer dfjdfd fkf ekgne kegj ekfr k erke fkerf ekf efk</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src="" alt="" />
                    <div className={styles.aboutItemText}>
                        <h3>QA Engineer</h3>
                        <p>Engineer dfjdfd fkf ekgne kegj ekfr k erke fkerf ekf efk</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About
