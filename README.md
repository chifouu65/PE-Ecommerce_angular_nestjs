
## angular folder structure 

    |-- app/
    |    |-- modules/
    |    |    |-- home/
    |    |    |    |-- components/
    |    |    |    |-- home.module.ts
    |    |    |-- products/
    |    |    |    |-- product-list/
    |    |    |    |-- product-details/
    |    |    |    |-- products.module.ts
    |    |    |-- cart/
    |    |    |    |-- components/
    |    |    |    |-- cart.module.ts
    |    |-- core/
    |    |    |-- services/
    |    |    |    |-- product.service.ts
    |    |    |    |-- cart.services.ts
    |    |    |-- authentification
    |    |    |-- components/
    |    |    |-- layout/
    |    |    |-- core.module.ts
    |    |-- shared/ 
    |    |    |-- pipes/
    |    |    |-- directives/
    |    |    |-- models/
    |    |    |    |-- product.model.ts
    |    |    |    |-- cart-item.model.ts
    |    |    |-- shared.module.ts
    |    |-- environments/
    |    |    |-- environment.ts
    |    |-- app-routing.module.ts
    |-- assets

### core: 
Ce module contient les services et les éléments centraux 
de l'application, tels que les services d'interception HTTP
et d'authentification. Isoler ces fonctionnalités dans 
un module central rend l'application plus modulaire et 
permet de gérer plus facilement les dépendances.

### shared: 
Ce module contient les éléments partagés entre 
différentes parties de l'application, tels que les composants 
"header" et "footer". Utiliser un module partagé central évite 
la duplication de code et permet de maintenir une cohérence visuelle.

### modules: 
Ce répertoire contient les modules spécifiques à certaines 
fonctionnalités de l'application. Chaque sous-répertoire représente 
un module différent.

### home: 
Ce module contiendrait les composants et les fonctionnalités 
liées à la page d'accueil de votre site.

### products: 
Ce module pourrait contenir les composants et les fonctionnalités 
liés à la liste des produits et aux détails des produits.

### cart: 
Ce module pourrait contenir les composants et les fonctionnalités 
liés au panier d'achat.

### app-routing.module.ts: 
Ce module de routage gère la navigation entre les différentes parties 
de l'application en utilisant le RouterModule d'Angular.

### app.component.ts, app.component.html, app.component.scss, app.module.ts: 
Ces fichier sont toujours présents à la racine de l'application 
et constituent le composant racine et le module principal de 
l'application.


