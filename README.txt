
SITE STATIQUE — Association d'Œnologie
=====================================

Modifier le contenu
-------------------
• Dégustations : éditez le fichier data/degustations.json (date, titre, région, cépages, notes, image).
• Galerie : mettez vos photos dans assets/ et listez-les dans data/galerie.json.
• Textes des pages : modifiez les fichiers .html.

Déployer gratuitement
---------------------
OPTION A — GitHub Pages (100% gratuit)
1) Créez un compte GitHub et un dépôt nommé site-oeno.
2) Importez tous les fichiers du dossier (y compris index.html).
3) Dans Settings > Pages : Source = "Deploy from a branch", branche = "main", dossier = "/root".
4) Votre site sera disponible quelques minutes plus tard à l'adresse https://votreprofil.github.io/site-oeno/

OPTION B — Netlify (gratuit + formulaire prêt)
1) Ouvrez https://app.netlify.com/ et glissez le dossier du site pour le déployer.
2) Le formulaire de la page Contact fonctionnera automatiquement (onglet Forms dans Netlify).

Nom de domaine
--------------
• Vous pouvez acheter un .fr ou .com (8-12 €/an) et le relier à GitHub Pages ou Netlify.

Astuces
-------
• Remplacez assets/placeholder.jpg par vos propres photos (gardez le même nom si vous voulez).
• Les dernières dégustations sur la page d'accueil se basent sur data/degustations.json, triées par date.
• Pour ajouter un logo, remplacez la lettre "Œ" dans la barre du haut par un fichier image.
