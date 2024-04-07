// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [color, setColor] = useState("grey")
  
  return (
    <div className='bg-slate-700 w-full h-screen'>
      <div className="flex flex-wrap gap-1 bg-slate-200 rounded-lg p-3 border-2 border-black-100 py-4">
        <button className='bg-red-500 px-3 rounded-lg'
        onClick={()=> setColor('red')}
        >Red</button>
      </div>
    </div>
  );
}

export default App;
