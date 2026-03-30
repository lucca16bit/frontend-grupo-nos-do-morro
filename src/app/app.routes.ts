import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Transparency } from './pages/transparency/transparency';
import { Handout } from './pages/handout/handout';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        component: Home,
    },
    {
        path: 'comunicados',
        component: Handout,
    },
    {
        path: 'sobre',
        component: About,
    },
    {
        path: 'contato',
        component: Contact,
    },
    {
        path: 'transparencia',
        component: Transparency,
    },
];
