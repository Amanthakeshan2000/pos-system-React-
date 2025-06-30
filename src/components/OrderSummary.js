import React from 'react';

const OrderSummary = () => {
  const orderItems = [
    { name: 'Meat Sushi Maki With Tuna, Shrimp And Other', price: '$9.99', quantity: 1, imageUrl: 'food.webp', type: 'Non Veg' },
    { name: 'Tacos Salsa With Chickens Grilled', price: '$14.99', quantity: 1, imageUrl: 'food.webp', type: 'Non Veg' },
    { name: 'Tacos Salsa With Chickens Grilled', price: '$14.99', quantity: 1, imageUrl: 'food.webp', type: 'Non Veg' },
    
  ];

  return (
    <aside className="order-summary">
      <div className="table-header">
        <h2>Table 4</h2>
        <p>Floyd Miles</p>
        <div className="edit-icon">
          <i className="fas fa-edit"></i>
        </div>
      </div>
      <div className="service-buttons">
        <button className="service-btn active">Dine in</button>
        <button className="service-btn">Take Away</button>
        <button className="service-btn">Delivery</button>
      </div>

      <div className="order-items">
        {orderItems.map((item, index) => (
          <div key={index} className="order-item">
            <img src={item.imageUrl} alt={item.name} />
            <div className="order-details">
              <h4>{item.name} ({item.type})</h4>
              <div className="order-price">
                <span>{item.price}</span>
                <span>{item.quantity}x</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="totals">
        <p>Sub Total: <span>$61.96</span></p>
        <p>Tax 5%: <span>$1.75</span></p>
        <h3>Total Amount: <span>$63.71</span></h3>
      </div>

      <div className="payment-options">
        <button className="payment-btn"><i className="fas fa-money-bill-wave"></i> Cash</button>
        <button className="payment-btn"><i className="fas fa-credit-card"></i> Credit/Debit Card</button>
        <button className="payment-btn"><i className="fas fa-qrcode"></i> QR Code</button>
      </div>

      <button className="place-order-btn">Place Order</button>
    </aside>
  );
};

export default OrderSummary;
