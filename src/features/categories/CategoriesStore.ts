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
  const newCategory = await postCategory(category);
   this.categories.push(newCategory);
  }

  @action
  removeCategory = async (id: number | undefined) => {
    deleteCategory(id);
    this.categories = this.categories.filter(c => c.id !== id);
  }

}