import React from 'react';

const Shop = () => {
  const furnitureData = [
    { id: 1, name: 'Sofa Set', price: 1200, description: 'Luxury and comfortable', image: '/product1.jpg' },
    { id: 2, name: 'Dining Table', price: 800, description: 'Elegant wooden design', image: '/product2.jpg' },
    { id: 3, name: 'King Bed', price: 2500, description: 'Spacious and stylish', image: '/product3.jpg' },
    { id: 4, name: 'Office Chair', price: 500, description: 'Ergonomic and sleek', image: '/product4.jpg' },
    { id: 5, name: 'Bookshelf', price: 700, description: 'Modern and spacious', image: '/product5.jpg' },
    { id: 6, name: 'Coffee Table', price: 300, description: 'Minimalist design', image: '/product7.jpg' },
  ];

  return (
    <div className="furniture grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10">
      {furnitureData.map(item => (
        <div key={item.id} className="furniture-card bg-white p-5 rounded-md shadow-md text-center">
          <img src={item.image} alt={item.name} className="w-full rounded-md transition-transform duration-300 transform hover:scale-110" />
          <h3 className="mt-4 text-2xl font-bold">{item.name}</h3>
          <p className="text-gray-500">{item.description}</p>
          <div className="price text-yellow-400 text-xl font-semibold mt-2">${item.price}</div>
          <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Shop;
