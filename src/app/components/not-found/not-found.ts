import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <div class="hero min-h-screen">
      <div class="hero-content text-center">
        <div>
          <h1 class="text-9xl font-bold opacity-20">404</h1>
          <h2 class="text-2xl font-semibold mt-4">Page non trouvée</h2>
          <p class="text-base opacity-70 mt-2">Cette page n'existe pas ou a été déplacée.</p>
          <a routerLink="/" class="btn btn-primary mt-6">Retour à l'accueil</a>
        </div>
      </div>
    </div>
  `,
})
export class NotFound {}