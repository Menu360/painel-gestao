import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProdutoComponent } from './pages/produto/produto.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: 'cardapio',
        component: ProdutoComponent
    }
];
