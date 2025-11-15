//* utility types

type Product = {
    id: number;
    name: string;
    price: number;
    stock: number;
    color?: string;
};

//* if need some specific types of data then we can use pick utility type
type ProductSummary = Pick<Product, 'id' | 'name' | 'price'>;

//* if don't need some specific types of data then we can use omit utility type
type ProductWithoutStock = Omit<Product, 'stock'>;

//* if need all types of data then we can use required utility types
type ProductWithColor = Required<Product>;

//* if need to make all type of data is optional then we can use partial utility type
type OptionalProduct = Partial<Product>;

//* if need to make data types readonly then we can use readonly utility type
type ProductReadonly = Readonly<Product>;

//* we can use record utility type instead of normal object type
// const emptyObj: object = {};
const emptyObj: Record<string, unknown> = {}; // it gives strict type safety