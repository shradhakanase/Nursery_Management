import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { RegisterComponent } from './register/register.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { VieworderComponent } from './vieworder/vieworder.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { ProductComponent } from './product/product.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { MyorderComponent } from './myorder/myorder.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"contact",component:ContactComponent},
    {path:"feedback",component:FeedbackComponent},
    {path:"login",component:LoginComponent},
    {path:"order",component:OrderComponent},
    {path:"product",component:ProductComponent},
    {path:"register",component:RegisterComponent},
    {path:"adminlogin",component:AdminLoginComponent},
    {path:"addproduct",component:AddproductComponent},
    {path:"viewproduct",component:ViewproductComponent},
    {path:"viewuser",component:ViewuserComponent},
    {path:"vieworder",component:VieworderComponent},
    {path:"viewDetails",component:ViewDetailsComponent},
    {path:"myorder",component:MyorderComponent}

];
