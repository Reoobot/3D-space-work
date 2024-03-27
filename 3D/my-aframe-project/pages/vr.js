// pages/vr.js
import Head from 'next/head';

import React from 'react';
import VRScene from '../components/VRScene';

const VRPage = () => {
  return (
    <div>
      <h1>Experiencia de Realidad Virtual</h1>
      <VRScene />
    </div>
  );
};

export default VRPage;
