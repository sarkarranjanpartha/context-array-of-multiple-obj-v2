import React from "react";
import { usePlaceOrder } from "./PlaceOrderContext";

const ComponentC: React.FC = () => {
  const { discountPercent, shipping, handling, upsell, accessoryCharges } =
    usePlaceOrder();

  return (
    <div>
      <h2>Order Summary</h2>
      <p>Discount: {discountPercent}%</p>
      <p>Shipping: ${shipping}</p>
      <p>Handling: ${handling}</p>
      <h3>Upsells:</h3>
      <ul>
        {upsell.map((item, index) => (
          <li key={index}>
            {item.name}: ${item.price}
          </li>
        ))}
      </ul>
      <h3>Accessory Charges:</h3>
      <ul>
        {accessoryCharges.map((item, index) => (
          <li key={index}>
            {item.name}: ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComponentC;
