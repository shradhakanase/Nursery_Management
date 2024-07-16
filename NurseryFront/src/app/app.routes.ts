import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { RegisterComponent } from './register/register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { ViewordersComponent } from './vieworders/vieworders.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"contact",component:ContactComponent},
    {path:"feedback",component:FeedbackComponent},
    {path:"login",component:LoginComponent},
    {path:"order",component:OrderComponent},
    {path:"product",component:OrderComponent},
    {path:"register",component:RegisterComponent},
    {path:"adminlogin",component:AdminLoginComponent},
    {path:"addproducts",component:AddproductsComponent},
    {path:"viewproducts",component:ViewproductsComponent},
    {path:"viewusers",component:ViewusersComponent},
    {path:"vieworders",component:ViewordersComponent},
];
