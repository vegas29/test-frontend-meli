import React from 'react';
import Lottie from "lottie-react";
import loadingAnimation from "../../../assets/loader/loader-meli.json";
import './style.scss';

export const Loader = () =>  {
  return (
    <div className='loader__container'>
      <div className='loader__box'>
        <Lottie animationData={loadingAnimation} loop={true} />
        <p className='loader__text'>Cargando...</p>
      </div>
    </div>
  )
}
