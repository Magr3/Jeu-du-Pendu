import { Routes } from '@angular/router';
import { Game } from './pages/game/game';
import { History } from './pages/history/history';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
    {
        path: "",
        component: Game,
    },

    {
        path: "history",
        component: History, 
    },

    { 
        path: '**', 
        component: NotFound 
    },
];
