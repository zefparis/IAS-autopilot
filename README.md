# IAS Autopilot

AI + Web3 Revenue Engine avec architecture Tailwind CSS.

## Démarrage rapide

1. Installer les dépendances:
```bash
npm install
```

2. Développement local:
```bash
npm run dev
```

3. Build de production:
```bash
npm run build
```

4. Lancer le serveur:
```bash
npm run start
```

## Déploiement sur Railway

1. Utilisez Nixpacks (pas de Dockerfile nécessaire)
2. Commandes de build:
   - Install: `npm install`
   - Build: `npm run build`
   - Start: `npm run start`

## Notes techniques
- Tous les assets sont auto-hébergés (aucune requête externe à l'exécution)
- CSS généré dans `/public/assets/tailwind.css`
- Mode sombre intégré
- Accessibilité conforme WCAG
