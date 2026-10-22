"use client";

import { useProfit } from "./components/ProfitProvider";

export default function HomePage() {
  const { amount, buyLemons, sellLemonade } = useProfit();

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-semibold">Lemonade Stand</h1>
      <p className="text-lg" aria-live="polite">
        Current profit: ${amount}
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className="rounded border px-3 py-2 hover:bg-black/5"
          onClick={sellLemonade}
        >
          Sell Lemonade (+$5)
        </button>
        <button
          type="button"
          className="rounded border px-3 py-2 hover:bg-black/5"
          onClick={buyLemons}
        >
          Buy Lemons (-$2)
        </button>
      </div>
    </section>
  );
}
