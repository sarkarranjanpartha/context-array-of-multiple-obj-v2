import React from "react";
import { usePlaceOrder } from "./PlaceOrderContext";

const ComponentB: React.FC = () => {
  const { updateUpsell, updateAccessoryCharges } = usePlaceOrder();

  const handleUpsellChange = (newUpsells: Upsell[]) => {
    updateUpsell(newUpsells);
  };

  const handleAccessoryChargesChange = (
    newAccessoryCharges: AccessoryCharge[]
  ) => {
    updateAccessoryCharges(newAccessoryCharges);
  };

  // Implement your UI and logic to update upsells and accessory charges

  return (
    <div>
      {/* Your UI components for updating upsells and accessory charges */}
    </div>
  );
};

export default ComponentB;
