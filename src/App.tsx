import React, { useState, useEffect } from "react";
import * as THREE from "three";
import Header from "./Header/Header";
import Scene from "./Scene/Scene";

type ShapeSelection = 'box' | 'sphere' | 'cone' | 'cylinder' | 'torus';

const SHAPES = {
  box: 'box',
  sphere: 'sphere',
  cone: 'cone',
  cylinder: 'cylinder',
  torus: 'torus',
}

function App() {
  const [shape, setShape] = useState('box');

  function onSelectShapeHandler(newShape: ShapeSelection) {
    setShape(SHAPES[newShape]);
  }

  return (
    <>
      <Header onSelectShape={onSelectShapeHandler}/>
      <Scene shape={shape}/>
    </>
  );
}

export default App;
