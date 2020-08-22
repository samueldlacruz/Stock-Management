import { observable, action, runInAction } from 'mobx';
import { ProductModel, NewProductModel } from './Product.types';
import { getProducts, postProduct, deleteProduct, updateProduct, getProductByFilter } from '../../api/products';

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
  addProduct = async (product: NewProductModel) => {
  const newProduct = await postProduct(product);
  this.products.push(newProduct);
  }

  @action
  editProduct = async (product: ProductModel) => {
   const updatedProduct = await updateProduct(product);
   
   runInAction(() => {
     this.products = this.products.map(item => item.sku === updatedProduct.sku ? updatedProduct : item);
     this.fetchProducts();
   })
  }

  @action
  filterProducts = async (categoryId?: number, search?: string) => {
    const productFilter = await getProductByFilter(categoryId, search);
   
    runInAction(() => {
      this.products = productFilter;
      this.fetchProducts();
    })
  }

  @action
  removeProduct = async (sku: string, imageUrl: string) => {
    await deleteProduct(sku, imageUrl);
    this.products = this.products.filter(p => p.sku !== sku);
  }

}