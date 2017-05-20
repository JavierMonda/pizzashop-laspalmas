import { App } from '../module';

config.$inject = ["$stateProvider", "$urlRouterProvider"];
export function config(stateProvider, urlRouterProvider) {
    urlRouterProvider.otherwise('/pizzas');
    stateProvider
        .state('pizzalist', {
            parent: 'app',
            url: 'pizzas',
            component: 'ilPizzaList'
        })
        .state('pizzas', {
            parent: 'app',
            url: 'pizzas/:id',
            component: 'ilPizza'
        })
        .state('addpizza', {
            parent: 'app',
            url: 'pizzas/add',
            component: 'ilAddPizza'
        });
}

App.config(config);