// type Action =
//     | { type: "sandwich/hleb"; payload: string }
//     | { type: "sandwich/sir"; payload: string }
//     | { type: "sandwich/kolbasa"; payload: string };

// export default Action;

type Ingredient = "cheese" | "bread" | "salami";

export type ActionSandwich =
    | { type: "sandwich/addIngredient"; payload: Ingredient }
    | { type: "sandwich/clear" };

// Book

type Book = {
    title: string;
    year: number;
    author: string
}

export type ActionBook =
| { type: 'books/add', payload: Book }
| { type: 'books/delete', payload: string }
| { type: 'books/editTitle', payload: { isbn: string, title: string } }