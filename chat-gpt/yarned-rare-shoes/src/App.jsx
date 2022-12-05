import * as React from 'react';

// Import Tailwind CSS styles
import './styles.css';

// Define the "App" component
const App = () => {
  // Define the list of rare shoes
  const rareShoes = [
    {
      name: 'Nike Air Mag',
      price: '$10,000',
      image: 'https://i.imgur.com/r0bFjx1.jpg',
    },
    {
      name: 'Adidas Yeezy Boost 350',
      price: '$1,500',
      image: 'https://i.imgur.com/QwfKj8f.jpg',
    },
    {
      name: 'Jordan 1 Retro High Travis Scott',
      price: '$1,500',
      image: 'https://i.imgur.com/cJ8QlQf.jpg',
    },
  ];

  // Return the "App" component
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Rare Shoes Collection</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {rareShoes.map((shoe) => (
          <div key={shoe.name} className="bg-white rounded-lg shadow-lg p-4">
            <img src={shoe.image} alt={shoe.name} className="w-full" />
            <h2 className="text-lg font-bold mt-4">{shoe.name}</h2>
            <p className="text-gray-700 mt-1">{shoe.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;