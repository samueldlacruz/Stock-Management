import { observable, action, runInAction } from 'mobx';
import { CategoryModel } from './CategoryModel';
import { getCategories, postCategory, deleteCategory } from '../../api/categories';

export class CategoriesStore {
  @observable categories: CategoryModel[] = []

  @observable isLoading = true;

  @action
  fetchCategories = async () => {
   const categories = await getCategories();

   runInAction(() => {
     this.categories = categories
     this.isLoading = false
   })
  }

  @action
  addCategory = async (category: CategoryModel) => {
   postCategory(category);
   this.categories.push(category);
  }

  @action
  removeCategory = async (id: number | undefined) => {
    deleteCategory(id);
    this.categories = this.categories.filter(c => c.id !== id);
  }

}