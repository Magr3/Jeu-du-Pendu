import { Routes } from '@angular/router';
import { Game } from './pages/game/game';
import { History } from './pages/history/history';

export const routes: Routes = [
    {
        path: "",
        component: Game,
    },

    {
        path: "history",
        component: History, 
    },
];
