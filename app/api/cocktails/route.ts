import { getAllCocktails } from "../../Controllers/CoctailController";

export const dynamic = "force-static";

export async function GET() {
  try {
    const cocktails = await getAllCocktails();
    return Response.json(cocktails);
  } catch (error) {
    console.error("Failed to load cocktails for API response:", error);
    return Response.json(
      { error: "Unable to load cocktails." },
      { status: 502 }
    );
  }
}
