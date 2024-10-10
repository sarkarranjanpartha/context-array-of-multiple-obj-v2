import React from "react";
import { usePlaceOrder } from "./PlaceOrderContext";

const ComponentA: React.FC = () => {
  const { updateDiscountPercent, updateShipping, updateHandling } =
    usePlaceOrder();

  const handleDiscountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateDiscountPercent(Number(e.target.value));
  };

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateShipping(Number(e.target.value));
  };

  const handleHandlingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateHandling(Number(e.target.value));
  };

  return (
    <div>
      <input
        type="number"
        onChange={handleDiscountChange}
        placeholder="Discount Percent"
      />
      <input
        type="number"
        onChange={handleShippingChange}
        placeholder="Shipping"
      />
      <input
        type="number"
        onChange={handleHandlingChange}
        placeholder="Handling"
      />
    </div>
  );
};

export default ComponentA;
