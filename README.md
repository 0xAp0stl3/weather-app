# 🌤️ Météo Simple

Une application web simple pour consulter la météo d'une ville, réalisée en HTML, CSS et JavaScript.  
Les données sont fournies par l’API [OpenWeatherMap](https://openweathermap.org/).

## Fonctionnalités

- Recherche météo par nom de ville (dans le monde entier)
- Affichage de la température, description, humidité et vent
- Interface responsive et moderne
- Chargement animé lors de la recherche

## Installation & Utilisation

1. **Clone ou télécharge ce dépôt.**
2. **Obtiens une clé API gratuite sur [OpenWeatherMap](https://openweathermap.org/api).**
3. **Dans le fichier `app.js`, remplace la valeur de `apiKey` par ta clé personnelle :**
   ```js
   const apiKey = "CLE_PERSO";
   ```
4. **Ouvre `index.html` dans ton navigateur.**

> **Astuce :** Si tu rencontres des problèmes de requêtes (CORS), lance un petit serveur local :
> ```sh
> python3 -m http.server 8080
> ```
> Puis va sur [http://localhost:8080](http://localhost:8080).

## Structure du projet

```
meteo/
├── index.html
├── style.css
└── app.js
```

## Exemple d’utilisation

- Tape le nom d’une ville (ex : `Paris`) et clique sur "Voir la météo".
- Les informations météo s’affichent instantanément.

## Personnalisation

- Tu peux modifier les couleurs et le style dans `style.css`.
- L’interface est responsive et s’adapte aux mobiles.

## Crédits

- Données météo : [OpenWeatherMap](https://openweathermap.org/)
