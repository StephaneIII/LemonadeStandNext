"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "../components/CartProvider";

export default function CheckoutPage() {
  const { items, clearCart } = useCart();
  const [confirmed, setConfirmed] = useState(false);
  const totalCount = items.reduce((count, item) => count + item.quantity, 0);

  function handleConfirm() {
    clearCart();
    setConfirmed(true);
  }

  if (confirmed) {
    return (
      <section>
        <h1 className="text-2xl font-semibold">Order confirmed</h1>
        <p>Thank you for your order!</p>
        <Link href="/shop">Back to shop</Link>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section>
        <h1 className="text-2xl font-semibold">Checkout</h1>
        <p>Your cart is empty.</p>
        <Link href="/shop">Back to shop</Link>
      </section>
    );
  }

  return (
    <section>
      <h1 className="mb-6 text-2xl font-semibold">Checkout</h1>
      <ul className="mb-4 space-y-2">
        {items.map((item) => (
          <li key={item.id} className="flex items-center gap-3">
            <Image
              src={item.image}
              alt={item.name}
              width={64}
              height={64}
              unoptimized
            />
            <span>
              {item.name} x {item.quantity}
            </span>
          </li>
        ))}
      </ul>
      <p>Total items: {totalCount}</p>
      <p className="mt-4 flex gap-4">
        <Link href="/cart">Back to cart</Link>
        <button type="button" onClick={handleConfirm}>
          Confirm order
        </button>
      </p>
    </section>
  );
}
