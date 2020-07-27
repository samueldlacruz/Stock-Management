import { observable, action, runInAction } from 'mobx';
import { ProductModel } from './Product.type';
import { getProducts, postProduct } from '../../api/products';

export class ProductsStore {
  @observable products: ProductModel[] = []

  @observable isLoading = true;


  @action
  fetchProducts = async () => {
   const products = await getProducts();

   runInAction(() => {
     this.products = products
     this.isLoading = false
   })
  }

  @action
  addProduct = async (product: ProductModel) => {
   postProduct(product);
   this.products.push(product);
  }

}