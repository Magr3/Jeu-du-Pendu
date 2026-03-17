# Jeu du Pendu - Angular

Une version moderne du classique jeu du Pendu, développée avec **Angular 21** et les **Signals** réactifs pour la gestion d'état.

![Angular](https://img.shields.io/badge/Angular-21-dd0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06b6d4?logo=tailwindcss&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5.5-5a0fc8)

## Apercu

Devinez le mot caché lettre par lettre — mais attention, vous n'avez que **6 erreurs** avant que le pendu ne soit complet !

## Fonctionnalites

- **Mots aleatoires** recuperes depuis une API externe
- **Saisie clavier** — tapez simplement les lettres sur votre clavier pour jouer
- **Suivi des erreurs en temps reel** avec un dessin du pendu anime
- **Compteur de victoires consecutives** pour suivre votre meilleur record
- **Page d'historique** avec les statistiques detaillees de chaque partie
- **Interface responsive** propulsee par Tailwind CSS et les composants DaisyUI

## Stack Technique

| Couche | Technologie |
|--------|------------|
| Framework | Angular 21 (Composants Standalone) |
| Langage | TypeScript 5.9 |
| Etat | Angular Signals |
| Style | Tailwind CSS 4 + DaisyUI 5 |
| Tests | Vitest + JSDOM |
| Build | Angular CLI |

## Structure du Projet

```
src/app/
├── services/
│   ├── game.ts            # Logique du jeu & gestion d'etat
│   └── word-api.ts        # Integration API externe
├── models/
│   └── game.models.ts     # Interfaces TypeScript
├── pages/
│   ├── game/              # Page principale du jeu
│   └── history/           # Historique & statistiques
└── components/
    ├── hangman-draw/       # Dessin SVG du pendu
    ├── word-display/       # Affichage du mot
    ├── letters-used/       # Badges des lettres jouees
    ├── game-over-modal/    # Modale victoire/defaite
    └── not-found/          # Page 404
```

## Demarrage

```bash
# Installer les dependances
npm install

# Lancer le serveur de developpement
ng serve

# Lancer les tests
npm test
```

L'application sera disponible sur `http://localhost:4200`.

## Comment Jouer

1. Un mot aleatoire est charge — chaque lettre est cachee sous un `_`
2. Appuyez sur une touche lettre (A–Z) de votre clavier
3. Les lettres correctes sont revelees dans le mot
4. Les lettres incorrectes ajoutent une partie au dessin du pendu
5. Trouvez le mot avant de commettre 6 erreurs pour gagner !

## Licence

MIT
