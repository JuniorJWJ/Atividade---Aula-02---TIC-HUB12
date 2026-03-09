import { ProductProps } from "../interfaces/ProductProps";
import { Category } from "./Category";

export class Product implements ProductProps {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public category: Category
  ) {}
}
