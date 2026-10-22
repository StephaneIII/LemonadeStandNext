"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../components/CartProvider";

export default function CartPage() {
  const { items, decrementQuantity, incrementQuantity, removeItem } = useCart();

  return (
    <section>
      <h1 className="mb-6 text-2xl font-semibold">Your cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.id} className="flex items-center gap-3">
              <Image
                src={item.image}
                alt={item.name}
                width={64}
                height={64}
                unoptimized
              />
              <span>{item.name}</span>
              <button
                type="button"
                aria-label={`Decrease ${item.name} quantity`}
                disabled={item.quantity <= 1}
                onClick={() => decrementQuantity(item.id)}
              >
                -
              </button>
              <span aria-live="polite">{item.quantity}</span>
              <button
                type="button"
                aria-label={`Increase ${item.name} quantity`}
                onClick={() => incrementQuantity(item.id)}
              >
                +
              </button>
              <button type="button" onClick={() => removeItem(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-6">
        <Link href="/shop">Continue shopping</Link>
        {items.length > 0 && (
          <>
            {" | "}
            <Link href="/checkout">Checkout</Link>
          </>
        )}
      </p>
    </section>
  );
}
