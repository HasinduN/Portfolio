import React from 'react'

import styles from "./Hero.module.css"
import { getimageUrl } from '../../utils'

const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>I'M HASINDU NANAYAKKARA</h1>
        <p className={styles.description}>
            I'm a QA Engineer. dfgfbglsfjghljfn ljfm gkjbnm vrgkjnv.lkgn ljgnvm rkgjn,fm rkgjbnvmfd gkrjgn dkmvbngikg 
        </p>
        <a href="mailto:hasinduit23@gmail.com" className={styles.contactBtn}>CONTACT ME</a>
    </div>
    <img src={getimageUrl("hero/Pro.png")} alt="my image" className={styles.HeroImg} />
    <div className={StyleSheet.topBlur}/>
    <div className={StyleSheet.bottomBlur}/>
  </section>
  );
};

export default Hero
