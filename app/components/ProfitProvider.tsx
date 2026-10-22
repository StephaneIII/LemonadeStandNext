"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface ProfitContextValue {
  amount: number;
  sellLemonade: () => void;
  buyLemons: () => void;
}

const ProfitContext = createContext<ProfitContextValue | null>(null);

export function ProfitProvider({ children }: { children: ReactNode }) {
  const [amount, setAmount] = useState(0);

  function sellLemonade() {
    setAmount((currentAmount) => currentAmount + 5);
  }

  function buyLemons() {
    setAmount((currentAmount) => currentAmount - 2);
  }

  return (
    <ProfitContext.Provider value={{ amount, sellLemonade, buyLemons }}>
      {children}
    </ProfitContext.Provider>
  );
}

export function useProfit() {
  const profit = useContext(ProfitContext);

  if (!profit) {
    throw new Error("useProfit must be used within a ProfitProvider");
  }

  return profit;
}
