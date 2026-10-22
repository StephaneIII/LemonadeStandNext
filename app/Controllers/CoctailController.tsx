import type { CartItem } from "../Models/Cartitem";

interface CocktailDrink {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
    strCategory: string | null;
    strGlass: string | null;
    strInstructions: string | null;
}

interface CocktailApiResponse {
    drinks: CocktailDrink[] | null;
}

function toCartItem(drink: CocktailDrink): CartItem {
    return {
        id: drink.idDrink,
        name: drink.strDrink,
        image: drink.strDrinkThumb,
        category: drink.strCategory ?? "",
        glass: drink.strGlass ?? "",
        instructions: drink.strInstructions ?? "",
        quantity: 1,
    };
}

export const getAllCocktails = async (): Promise<CartItem[]> => {
    const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon"
    );

    if (!response.ok) {
        throw new Error(`Failed to fetch cocktails: ${response.status}`);
    }

    const data: CocktailApiResponse = await response.json();
    return data.drinks?.map(toCartItem) ?? [];
};

export const getCocktailById = async (
    id: string
): Promise<CartItem | null> => {
    const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    if (!response.ok) {
        throw new Error(`Failed to fetch cocktail: ${response.status}`);
    }

    const data: CocktailApiResponse = await response.json();
    const drink = data.drinks?.[0];
    return drink ? toCartItem(drink) : null;
};
