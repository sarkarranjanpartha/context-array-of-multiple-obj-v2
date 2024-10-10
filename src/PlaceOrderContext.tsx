import React, { createContext, useState, useContext } from "react";
import {
  MainLine,
  Upsell,
  AccessoryCharge,
  ExtraCharge,
  PerUnitExtraCharge,
} from "../src/types/price-details";
import { PlaceOrderContextType } from "../src/types/place-order-context";

const PlaceOrderContext = createContext<PlaceOrderContextType | undefined>(
  undefined
);

export const PlaceOrderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [discountPercent, setDiscountPercent] = useState<number | undefined>(
    undefined
  );
  const [freeQtyPercent, setFreeQtyPercent] = useState<number | undefined>(
    undefined
  );
  const [shipping, setShipping] = useState<number>(0);
  const [handling, setHandling] = useState<number>(0);
  const [taxPercent, setTaxPercent] = useState<number>(0);
  const [currency, setCurrency] = useState<string | undefined>(undefined);
  const [environmentalTax, setEnvironmentalTax] = useState<number>(0);
  const [mainLine, setMainLine] = useState<MainLine[] | undefined>(undefined);
  const [upsell, setUpsell] = useState<Upsell[]>([]);
  const [accessoryCharges, setAccessoryCharges] = useState<AccessoryCharge[]>(
    []
  );
  const [extraCharges, setExtraCharges] = useState<ExtraCharge[]>([]);
  const [perUnitExtraCharges, setPerUnitExtraCharges] = useState<
    PerUnitExtraCharge[]
  >([]);

  const updateDiscountPercent = (updatedDiscountPercent: number) =>
    setDiscountPercent(updatedDiscountPercent);
  const updateFreeQtyPercent = (updatedFreeQtyPercent: number) =>
    setFreeQtyPercent(updatedFreeQtyPercent);
  const updateShipping = (updatedShipping: number) =>
    setShipping(updatedShipping);
  const updateHandling = (updatedHandling: number) =>
    setHandling(updatedHandling);
  const updateTaxPercent = (updatedTaxPercent: number) =>
    setTaxPercent(updatedTaxPercent);
  const updateCurrency = (updatedCurrency: string) =>
    setCurrency(updatedCurrency);
  const updateEnvironmentalTax = (updatedEnvironmentalTax: number) =>
    setEnvironmentalTax(updatedEnvironmentalTax);
  const updateMainLine = (updatedMainLine: MainLine[]) =>
    setMainLine(updatedMainLine);
  const updateUpsell = (updatedUpsell: Upsell[]) => setUpsell(updatedUpsell);
  const updateAccessoryCharges = (updatedAccessoryCharges: AccessoryCharge[]) =>
    setAccessoryCharges(updatedAccessoryCharges);
  const updateExtraCharges = (updatedExtraCharges: ExtraCharge[]) =>
    setExtraCharges(updatedExtraCharges);
  const updatePerUnitExtraCharges = (
    updatedPerUnitExtraCharges: PerUnitExtraCharge[]
  ) => setPerUnitExtraCharges(updatedPerUnitExtraCharges);

  const contextValue: PlaceOrderContextType = {
    discountPercent,
    freeQtyPercent,
    shipping,
    handling,
    taxPercent,
    currency,
    environmentalTax,
    mainLine,
    upsell,
    accessoryCharges,
    extraCharges,
    perUnitExtraCharges,
    updateDiscountPercent,
    updateFreeQtyPercent,
    updateShipping,
    updateHandling,
    updateTaxPercent,
    updateCurrency,
    updateEnvironmentalTax,
    updateMainLine,
    updateUpsell,
    updateAccessoryCharges,
    updateExtraCharges,
    updatePerUnitExtraCharges,
  };

  return (
    <PlaceOrderContext.Provider value={contextValue}>
      {children}
    </PlaceOrderContext.Provider>
  );
};

export const usePlaceOrder = () => {
  const context = useContext(PlaceOrderContext);
  if (context === undefined) {
    throw new Error("usePlaceOrder must be used within a PlaceOrderProvider");
  }
  return context;
};
