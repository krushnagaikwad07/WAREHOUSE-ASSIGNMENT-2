import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WarehousesList from './WarehousesList'; 
import WarehouseDetails from './WarehouseDetails';




const App = () => {
  return (
    
      <Routes>
          <Route path="/" element={<WarehousesList/>} />
          <Route path="/warehouse/:id" element={<WarehouseDetails/>} />  
      </Routes>
   
  );
};

export default App;
