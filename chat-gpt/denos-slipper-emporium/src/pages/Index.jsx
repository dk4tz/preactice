import * as React from 'react';
import { BuyModal } from './BuyModal';

export const Index = () => {
  // Initialize state variable to track whether the modal is open or closed
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Define a function to handle the "Buy" button click
  const handleBuyClick = () => {
    // Set the "isModalOpen" state variable to true when the button is clicked
    setIsModalOpen(true);
  }

  // Return the "Index" component and the "Buy" modal
  return (
    <>
      <h1>Welcome to Our Slipper Store!</h1>
      <ul>
        <li>Fuzzy Pink Slippers - $19.99</li>
        <li>Leather Black Slippers - $29.99</li>
        <li>Slipper Socks - $9.99</li>
      </ul>
      <button onClick={handleBuyClick}>Buy</button>
      <BuyModal isOpen={isModalOpen} />
    </>
  );
}
