import React, { useContext } from 'react';
import { OrderContext } from './OrderContext';
import { Typography, Box } from '@mui/material';
import './Orders.css';

function Orders() {
  const { orders } = useContext(OrderContext);

  const calculateTotal = () => {
    return orders.reduce((total, order) => total + parseFloat(order.price.replace('₹', '')), 0);
  };

  return (
    <Box className="orders-container">
      <Typography variant="h4" gutterBottom>
        Your Orders
      </Typography>
      {orders.length === 0 ? (
        <Typography variant="h6">No orders yet!</Typography>
      ) : (
        <Box>
          {orders.map((order, index) => (
            <Box key={index} className="order-item">
              <img
                src={order.image}
                alt={order.name}
              />
              <Box className="order-details">
                <Typography variant="h6">{order.name}</Typography>
                <Typography>Price: {order.price}</Typography>
                <Typography>Restaurant: {order.restaurant}</Typography>
              </Box>
            </Box>
          ))}
          <Typography variant="h6" className="total-amount">
            Total Amount: ₹{calculateTotal()}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default Orders;
