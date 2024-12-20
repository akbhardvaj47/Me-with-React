import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("yellow");

  return (
    <div className='h-screen flex min-w-96  duration-300 justify-center' style={{ backgroundColor: color }}>
      <div className='fixed bottom-12 flex gap-3 bg-white p-5 rounded-xl'>
        <button className='bg-red-700 rounded-md px-4 py-2' onClick={() => setColor("red")}>Red</button>
        <button className='bg-green-800 rounded-md px-4 py-2' onClick={() => setColor("green")}>Green</button>
        <button className='bg-blue-800 rounded-md px-4 py-2' onClick={() => setColor("blue")}>Blue</button>
        <button className='bg-yellow-800 rounded-md px-4 py-2' onClick={() => setColor("yellow")}>Yellow</button>
        <button className='bg-orange-800 rounded-md px-4 py-2' onClick={() => setColor("orange")}>Orange</button>
        <button className='bg-pink-900 rounded-md px-4 py-2' onClick={() => setColor("pink")}>Pink</button>
        <button className='bg-teal-800 rounded-md px-4 py-2' onClick={() => setColor("teal")}>Teal</button>
        <button className='bg-teal-800 rounded-md px-4 py-2' onClick={() => setColor("black")}>Black</button>
      </div>
    </div>
  );
}

export default App;
