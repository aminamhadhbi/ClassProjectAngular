import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormproductComponent } from './core/formproduct/formproduct.component';
import { ProductsComponent } from './core/products/products.component';
import { AddproduitComponent } from './core/produit/addproduit/addproduit.component';
import { DetailproductComponent } from './core/produit/detailproduct/detailproduct.component';
import { ShowProductsComponent } from './core/produit/show-products/show-products.component';
import { RemoveproductComponent } from './core/removeproduct/removeproduct.component';
import { UpdateproductComponent } from './core/updateproduct/updateproduct.component';
import { LoginComponent } from './core/user/login/login.component';
import { ListPrpductComponent } from './product/list-prpduct/list-prpduct.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'remove/:idofproducttoremoveit', component: RemoveproductComponent
  },
  {
    path: 'update/:idofproducttoupdateit', component: UpdateproductComponent
  },
  {
    path: 'formsAdd', component: FormproductComponent
  },
  {
    path: 'detail/:idt', component: DetailproductComponent
  },

  {
    path: 'addproduit', component: AddproduitComponent
  },
  {
    path: 'liste', component: ShowProductsComponent
  },
  {
    path: 'mylist', component: ListPrpductComponent
  },
  {
    path: '**', component: NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
