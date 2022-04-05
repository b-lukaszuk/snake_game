import React, { useState } from 'react';
import Canvas from './canvas/Canvas';
import Block from './interfaces/Block';
import './App.css';

function App() {

    // x - no of row, y - no of col of canvas (see Canvas element)
    const [snake, setSnake]: [Block[], Function] = useState(
        [
            { x: 0, y: 2 },
            { x: 0, y: 3 },
            { x: 0, y: 4 },
            { x: 1, y: 2 },
            { x: 1, y: 3 },
            { x: 1, y: 4 },
        ]);
    const [food, setFood]: [Block, Function] = useState({ x: 4, y: 4 });

    return (
        <div className="App">
            <Canvas snake={snake} food={food} />
        </div>
    );
}

export default App;
