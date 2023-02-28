import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './Routs/Routs/Routs'
// import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  return (
    <div className='bg-[#0a1436]'>
      {/* max-w-1200px mx-auto flex justify-center */}
      <div>
        <RouterProvider router={router}></RouterProvider>
        {/* <Toaster /> */}
      </div>
    </div>
  );
}

export default App;
