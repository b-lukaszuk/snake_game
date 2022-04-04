import React, { useState } from 'react';
import Canvas from './canvas/Canvas';
import './App.css';

interface Block {
    x: number,
    y: number,
}

function App() {

    const [snake, setSnake]: [Block[], Function] = useState([{ x: 1, y: 2 }]);
    const [food, setFood]: [Block, Function] = useState({ x: 4, y: 4 });


    return (
        <div className="App">
            <Canvas snake={snake} food={food} />
        </div>
    );
}

export default App;
