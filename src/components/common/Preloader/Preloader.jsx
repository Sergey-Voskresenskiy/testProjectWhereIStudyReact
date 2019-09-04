/* eslint-disable */
import React from 'react'
import s from "./Preloader.module.css"
import Gear from './../../../assets/images/Gear.svg'


const Preloader = (props) => {
  return (
    <div className={s.loader}>
      <img src={Gear}/>
    </div>
  )
}

export default Preloader