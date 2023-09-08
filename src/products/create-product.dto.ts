export class CreateProductDTO {
  name: string;
  price: number;
  quantity: number | undefined;
  categoryId: number;
}