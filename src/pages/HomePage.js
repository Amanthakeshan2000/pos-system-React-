import React from 'react';
import Sidebar from '../components/Sidebar';
import MenuCategories from '../components/MenuCategories';
import MenuItems from '../components/MenuItems';
import OrderSummary from '../components/OrderSummary';
import BottomBar from '../components/BottomBar';

const HomePage = () => {
  return (
    <div className="container">
      <Sidebar />
      <main className="main-content">
        <header className="header">
          <input type="text" className="search-bar" placeholder="Search Product here..." />
        </header>
        <MenuCategories />
        <MenuItems />
      </main>
      <OrderSummary />
      <BottomBar />
    </div>
  );
};

export default HomePage;
