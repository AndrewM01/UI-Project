export interface Product {
  id: string;
  name: string;
  price: number;
  dueDate: Date;
  type: string;
  isCheckedOut: boolean;
}
