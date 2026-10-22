"use client";

import type { CartItem } from "../Models/Cartitem";
import { useCart } from "./CartProvider";

export function AddToCartButton({ item }: { item: CartItem }) {
  const { addItem } = useCart();

  return (
    <button type="button" onClick={() => addItem(item)}>
      Add to cart
    </button>
  );
}
