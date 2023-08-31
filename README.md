
## angular folder structure 
    
    src/
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


-----------------------------------------------------


## NEST structure folder (api)

    src/
    |-- modules/
    |   |-- auth/
    |   |   |-- auth.controller.ts
    |   |   |-- auth.service.ts
    |   |   |-- jwt.strategy.ts
    |   |   |-- auth.module.ts
    |   |
    |   |-- users/
    |   |   |-- users.controller.ts
    |   |   |-- users.service.ts
    |   |   |-- user.entity.ts
    |   |   |-- users.module.ts
    |   |
    |   |-- products/
    |   |   |-- products.controller.ts
    |   |   |-- products.service.ts
    |   |   |-- product.entity.ts
    |   |   |-- products.module.ts
    |   |
    |   |-- orders/
    |   |   |-- orders.controller.ts
    |   |   |-- orders.service.ts
    |   |   |-- order.entity.ts
    |   |   |-- orders.module.ts
    |   |
    |-- shared/
    |   |-- dtos/
    |   |   |-- create-user.dto.ts
    |   |   |-- update-user.dto.ts
    |   |   |-- create-product.dto.ts
    |   |   |-- update-product.dto.ts
    |   |   |-- create-order.dto.ts
    |   |   |-- update-order.dto.ts
    |   |
    |   |-- decorators/
    |   |   |-- roles.decorator.ts
    |   |
    |   |-- guards/
    |   |   |-- roles.guard.ts
    |   |
    |-- app.controller.ts
    |-- app.service.ts
    |-- app.module.ts
    |-- main.ts


### Modules:
Dans le répertoire modules, vous avez différentes parties de votre application, chacune regroupée dans un module dédié. Chaque module suit le modèle MVC (Modèle-Vue-Contrôleur) pour organiser les différentes couches de votre application.

### auth:
Ce module gère l'authentification des utilisateurs. Le contrôleur auth.controller.ts expose les endpoints liés à l'authentification. Le service auth.service.ts contient la logique métier de l'authentification. jwt.strategy.ts est une stratégie d'authentification basée sur JWT. Le module auth.module.ts encapsule l'ensemble du module.

### users:
Ce module gère la gestion des utilisateurs. Le contrôleur users.controller.ts expose les endpoints pour les opérations liées aux utilisateurs. Le service users.service.ts contient la logique métier liée aux utilisateurs. L'entité user.entity.ts définit la structure d'un utilisateur dans la base de données. Le module users.module.ts encapsule l'ensemble du module.

### products:
Ce module gère la gestion des produits. Il suit la même structure que le module users.

### orders:
Ce module gère la gestion des commandes. Il suit la même structure que le module users.

### Shared:
Dans le répertoire shared, vous avez des éléments réutilisables qui sont partagés entre différents modules.

### dtos:
Ce dossier contient les objets de transfert de données (DTO) pour les opérations de création et de mise à jour. Ils définissent la structure des données échangées entre le client et le serveur.

### decorators:
Ce dossier contient le décorateur @Roles que vous utiliserez pour spécifier les rôles requis pour accéder à une route particulière. Les décorateurs sont utilisés pour ajouter des métadonnées à vos classes et fonctions.

### guards:
Ce dossier contient le gardien RolesGuard qui implémente la logique de vérification des rôles. Le gardien est utilisé pour protéger certaines routes en vérifiant si l'utilisateur a les rôles nécessaires.

### App Controller, Service, Module:

### app.controller.ts:
Ce contrôleur racine expose des endpoints de base pour votre application. C'est souvent utilisé pour les routes de base comme la page d'accueil.

### app.service.ts:
Ce service est associé au contrôleur racine. Il contient la logique métier de base qui peut être utilisée à travers l'application.

### app.module.ts:
C'est le module racine de l'application. Il importe tous les modules que vous avez créés, y compris les modules des différentes fonctionnalités et le module d'authentification.

### Main.ts:
C'est le point d'entrée de l'application. Il démarre le serveur NestJS et initialise l'application.
