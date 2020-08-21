import React from 'react';
import './App.css';
import ProductTable from './component/ProductTable';
function App() {

  const products = [
    {
      model: "huwei y7",
      price: '$999',
      category: "Electronics"
    },
    {
      model: "huawei y8p",
      price: '$770',
      category: "Electronics"
    },
    {
      model: "jacket",
      price: '$80',
      category: "Clothes"
    },
    {
      model: "huwei y6",
      price: '$399',
      category: "Electronics"
    },
    {
      model: "lenovo mb10",
      price: '$1770',
      category: "Electronics"
    },
    {
      model: "boots",
      price: '$40',
      category: "Clothes"
    },
  ]
  return (
    <div >
      <ProductTable items={products} />
    </div>
  );
}

export default App;
