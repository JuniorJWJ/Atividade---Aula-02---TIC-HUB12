import { Category } from "../models/Category";


export interface ProductProps {
  id: number;
  name: string;
  price: number;
  category: Category;
}
