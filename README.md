# Règlement Sunset RP

Ce dépôt contient le règlement du serveur Sunset RP qui est affiché sur le site web.

## Comment modifier le règlement

1. Modifiez le fichier `rules.ts` dans ce dépôt
2. Committez vos changements
3. Les modifications seront automatiquement reflétées sur le site web

## Comment utiliser les icônes

Vous pouvez utiliser n'importe quelle icône de Font Awesome. Voici comment les spécifier :

```js
// Icône Font Awesome Solid
icon: { type: 'fa', name: 'shield-alt', prefix: 'fas' }

// Icône Font Awesome Regular
icon: { type: 'fa', name: 'calendar', prefix: 'far' }

// Icône Font Awesome Brands
icon: { type: 'fa', name: 'discord', prefix: 'fab' }

// Icône Lucide (pour compatibilité)
icon: { type: 'lucide', name: 'Shield' }
```

Trouvez les icônes disponibles sur :
- [Font Awesome](https://fontawesome.com/icons)
- [Lucide](https://lucide.dev/icons)

## Structure du fichier rules.ts

Chaque règle a la structure suivante :

```js
{
  id: "preambule", // Identifiant unique (utilisé pour les ancres)
  title: "Préambule : L'Esprit du Roleplay", // Titre affiché
  icon: { type: 'fa', name: 'book-open', prefix: 'fas' }, // Icône
  gradient: "from-blue-500/20 to-cyan-500/20", // Dégradé de couleur (Tailwind CSS)
  borderColor: "border-blue-500/30", // Couleur de bordure (Tailwind CSS)
  content: `...` // Contenu HTML de la règle
}
```