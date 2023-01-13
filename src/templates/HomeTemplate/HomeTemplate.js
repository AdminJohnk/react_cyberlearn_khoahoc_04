import React from 'react'
import { Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Headers from '../../components/Home/Header/Header';

const HomeTemplate = (props) => {

  const { Component } = props;
  return (
    <>
      <Headers />
      <Component/>
    </>
  )
}

export default HomeTemplate
