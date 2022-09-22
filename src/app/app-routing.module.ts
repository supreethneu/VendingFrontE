import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddItemComponent } from './admin-add-item/admin-add-item.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: AdminAddItemComponent , pathMatch: 'full'},  //redirectTo: 'admin', 
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
