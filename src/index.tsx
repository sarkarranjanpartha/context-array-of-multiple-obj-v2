import React from "react";
import { PlaceOrderProvider } from "./PlaceOrderContext";
import App from "./App";

const Root: React.FC = () => {
  return (
    <PlaceOrderProvider>
      <App />
    </PlaceOrderProvider>
  );
};

export default Root;
