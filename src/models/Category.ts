import { CategoryProps } from "../interfaces/CategoryProps";

export class Category implements CategoryProps {
  constructor(
    public id: number,
    public name: string
  ) {}
}