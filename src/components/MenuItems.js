import React, { useState } from 'react';

const MenuItems = () => {
  const items = [
    { name: 'Tasty Vegetable Salad Healthy', price: '$17.99', type: 'Veg', imageUrl: 'food.webp' },
    { name: 'Original Chess Meat Burger', price: '$23.99', type: 'Non Veg', imageUrl: 'food.webp', discount: '20% Off' },
    { name: 'Tacos Salsa With Chickens Grilled', price: '$14.99', type: 'Non Veg', imageUrl: 'food.webp' },
    { name: 'Meat Sushi Maki With Tuna', price: '$9.99', type: 'Non Veg', imageUrl: 'food.webp' },
    { name: 'Fresh Orange Juice', price: '$12.99', type: 'Veg', imageUrl: 'food.webp' },
    { name: 'Original Chess Burger', price: '$10.59', type: 'Veg', imageUrl: 'food.webp'},
    { name: 'Tasty Vegetable Salad Healthy', price: '$17.99', type: 'Veg', imageUrl: 'food.webp' },
    { name: 'Original Chess Meat Burger', price: '$23.99', type: 'Non Veg', imageUrl: 'food.webp'},
    { name: 'Tacos Salsa With Chickens Grilled', price: '$14.99', type: 'Non Veg', imageUrl: 'food.webp' },
    { name: 'Meat Sushi Maki With Tuna', price: '$9.99', type: 'Non Veg', imageUrl: 'food.webp' },
    { name: 'Fresh Orange Juice', price: '$12.99', type: 'Veg', imageUrl: 'food.webp' },
    { name: 'Original Chess Burger', price: '$10.59', type: 'Veg', imageUrl: 'food.webp'}
  ];

  // State to track added items
  const [addedItems, setAddedItems] = useState(new Array(items.length).fill(false));

  const handleAddToDish = (index) => {
    const newAddedItems = [...addedItems];
    newAddedItems[index] = true; // Mark the item as added
    setAddedItems(newAddedItems);
  };

  return (
    <section className="menu-items">
      {items.map((item, index) => (
        <div key={index} className={`menu-item ${item.discount ? 'highlighted' : ''}`}>
          {item.discount && <div className="discount-label">{item.discount}</div>}
          <img src={item.imageUrl} alt={item.name} className="item-image" />
          <div className="item-info">
            <h4 className="item-name">{item.name}</h4>
            <div className="item-details">
              <span className="item-price">{item.price}</span>
              <span className="item-type">{item.type}</span>
            </div>

            {/* Conditionally render quantity control after Add to Dish is clicked */}
            {addedItems[index] ? (
              <div className="quantity-control">
                <button className="quantity-btn">-</button>
                <span className="quantity">1</span>
                <button className="quantity-btn">+</button>
              </div>
            ) : (
              <button className="add-to-dish-btn" onClick={() => handleAddToDish(index)}>
                Add to Dish
              </button>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default MenuItems;
