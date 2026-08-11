# CIT Club — Club Informatique & Telecoms

Site du CIT (premier club IT du Maroc), en React 19 + Vite 7 + Tailwind CSS 4.
Style terminal / cybersécurité, thème **sombre renforcé** (fonds quasi noirs,
vert phosphore atténué, glow utilisé comme accent et non comme couleur de base).

## Démarrer

```bash
npm install
```

```bash
npm run dev
```

Le site tourne sur http://localhost:5180 (routing par hash : `#/cells`, `#/events`, `#/team`).

```bash
npm run build
```

Le build sort dans `dist/` avec `base: './'` — déployable à la racine d'un domaine,
sur un sous-chemin GitHub Pages, ou même en ouvrant le fichier localement.

## Changer les photos du board

1. Déposer la nouvelle image dans `public/images/team/`.
2. Ouvrir `src/data/team.js` et pointer le champ `photo` du membre sur le fichier :

```js
{
  id: 'aamoum-ilyass',
  lastName: 'AAMOUM',
  firstName: 'Ilyass',
  role: "Club's Chairman",
  photo: 'images/team/Ilyass.png',   // ← ici
}
```

Le plus simple : garder le même nom de fichier et écraser l'ancien — aucune
modification de code n'est alors nécessaire.

Si le fichier est introuvable, la carte affiche automatiquement les initiales du
membre à la place du portrait.

## Ajouter des photos d'événement

Déposer les images dans `public/images/gallery/<CODE>/` en les numérotant
`1.jpg`, `2.jpg`, … puis ajuster le compteur dans `src/data/events.js` :

```js
gallery: galleryOf('IDEH', 7),   // ← nombre de fichiers dans le dossier
```

La bande horizontale en bas de la page événements est construite automatiquement
à partir des galeries de tous les événements — rien d'autre à modifier.

## Structure

```
public/images/team/      portraits du board (25)
public/images/events/    visuels de couverture des événements
public/images/gallery/   photos par événement : IDEH/ (7), JNJD/ (9), T2D/ (5)
src/data/team.js         organigramme — source unique des membres et de leurs photos
src/data/cells.js        les 6 cellules + contenu des modales
src/data/events.js       JNJD, IDEH, T2D + galerie
src/components/          Navbar, Footer, Layout, MemberCard, MemberPhoto, Modal, MatrixRain…
src/pages/               Home, Cells, Events, Team, NotFound
src/index.css            tokens du thème sombre + utilitaires terminal
src/utils/accents.js     palettes d'accent par cellule
```

## Thème

Les couleurs sont définies une seule fois dans le bloc `@theme` de `src/index.css` :

| Token | Rôle |
| --- | --- |
| `--color-void` `#020304` | fond de page |
| `--color-abyss` / `--color-panel` / `--color-panel-2` | sections et cartes |
| `--color-line` / `--color-line-2` | bordures |
| `--color-term` `#1fbf5c` | vert terminal (atténué) |
| `--color-term-bright` `#35f37e` | vert de mise en avant / glow |
| `--color-cyan` `--color-violet` `--color-amber` `--color-danger` | accents par cellule |
| `--color-ink` / `--color-ink-dim` / `--color-ink-faint` | texte principal / secondaire / discret |

Changer une valeur ici la propage à tout le site.
