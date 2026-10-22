import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCocktailById } from "../../Controllers/CoctailController";
import { AddToCartButton } from "../../components/AddToCartButton";

export default async function CocktailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await getCocktailById(id);

  if (!item) {
    notFound();
  }

  return (
    <section className="space-y-3">
      <h1 className="text-2xl font-semibold">{item.name}</h1>
      <Image
        src={item.image}
        alt={item.name}
        width={300}
        height={300}
        unoptimized
      />
      <p>Category: {item.category}</p>
      <p>Glass: {item.glass}</p>
      <p>{item.instructions}</p>
      <AddToCartButton item={item} />
      <p>
        <Link href="/shop">Back to shop</Link>
      </p>
    </section>
  );
}
