import Image from "next/image";
import Link from "next/link";
import { getAllCocktails } from "../Controllers/CoctailController";
import { AddToCartButton } from "../components/AddToCartButton";

export default async function ShopPage() {
  const items = await getAllCocktails();

  return (
    <section>
      <h1 className="mb-6 text-2xl font-semibold">Welcome to the shop</h1>
      {items.length === 0 ? (
        <p>No cocktails found.</p>
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.id} className="space-y-2">
              <h2 className="text-lg font-medium">{item.name}</h2>
              <Image
                src={item.image}
                alt={item.name}
                width={150}
                height={150}
                unoptimized
              />
              <p>
                <Link href={`/shop/${item.id}`}>View details</Link>
              </p>
              <AddToCartButton item={item} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
