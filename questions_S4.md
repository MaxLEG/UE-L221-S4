# Réponses aux questions - Semaine 4 (Bootstrap)

## 1. Sur quels langages web Bootstrap repose-t-il ? Quel changement important caractérise le passage de la version 4 à la version 5 ?

Bootstrap repose principalement sur **HTML**, **CSS** (préprocesseur Sass) et **JavaScript**.
Le changement majeur du passage de la version 4 à la version 5 est l'**abandon de la dépendance à jQuery**. Bootstrap 5 utilise désormais du JavaScript "vanilla" (natif), ce qui le rend plus léger et plus performant.

## 2. Quel est l'apport majeur de Bootstrap en termes de mise en page / disposition d'éléments HTML ?

L'apport majeur est son **système de grille (Grid System)** responsive basé sur Flexbox. Il permet de diviser la page en 12 colonnes et de gérer facilement la disposition des éléments selon la taille de l'écran (breakpoints : sm, md, lg, xl, xxl) grâce à des classes prédéfinies (ex: `.col-md-6`).

## 3. Quels sont les principaux outils proposés par Bootstrap pour la création de formulaires ?

Bootstrap propose de nombreuses classes utilitaires pour standardiser et styliser les formulaires :
*   `.form-control` et `.form-select` pour le style des champs et listes déroulantes.
*   `.form-check` et `.form-switch` pour les cases à cocher et boutons radio.
*   `.input-group` pour ajouter du texte ou des boutons accolés aux champs.
*   Des classes de validation (`.is-valid`, `.is-invalid`) pour le retour visuel utilisateur.
*   Le système de grille pour la mise en page complexe des formulaires (`.row`, `.col`).

## 4. Donnez 5 exemples de composants Bootstrap.

1.  **Navbar** (Barre de navigation responsive)
2.  **Card** (Conteneur flexible pour contenu)
3.  **Modal** (Fenêtre de dialogue superposée)
4.  **Carousel** (Diaporama d'images ou de texte)
5.  **Accordion** (Liste d'éléments repliables)

## 5. Votre avis personnel : avantages et inconvénients de Bootstrap ?

**Avantages :**
*   **Rapidité de développement :** Permet de créer des interfaces propres et responsives très vite.
*   **Responsive design :** La gestion du mobile est native et robuste.
*   **Documentation :** Excellente documentation et grande communauté.

**Inconvénients :**
*   **Uniformité visuelle :** Les sites Bootstrap ont tendance à tous se ressembler ("Bootstrap look") sans personnalisation poussée.
*   **Poids :** Le framework peut être lourd si on charge tout le CSS/JS sans en utiliser la moitié.
*   **Surcharge :** Il peut être parfois difficile de surcharger certains styles par défaut à cause de la spécificité des sélecteurs CSS.
