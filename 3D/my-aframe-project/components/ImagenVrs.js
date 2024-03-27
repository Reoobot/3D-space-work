// components/VRScene.js

import React from 'react';
import 'aframe-react'

const ImagenVrs = () => {
  return (
    <a-scene>
      
      <a-sky src='/sky.jpeg'>
        
        </a-sky>
        <a-image src="/1.jpg" position="1 2 -2" scale="2 2 2"></a-image>
      <a-entity position="0 3 0" rotation="0 0 0 " class="orbit" 
            animation="property: rotation; to:0 360 0; loop: true;  dur: 20000; ">
      
            </a-entity>

            
    </a-scene>
  );
};

export default ImagenVrs;

