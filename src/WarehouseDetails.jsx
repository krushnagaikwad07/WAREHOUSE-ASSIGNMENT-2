import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWarehouses } from './actions/warehouseActions';

const WarehouseDetails = () => {
  const warehouses = useSelector((state) => state.warehouse.warehouses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWarehouses());
  }, []);

  return (
    <div>
      {warehouses.map((warehouse) => (
        <div key={warehouse.id}>
          <h2>{warehouse.name}</h2>
          <p>Location: {warehouse.location}</p>
          {/* Add any other fields you want to display */}
        </div>
      ))}
    </div>
  );
};

export default WarehouseDetails