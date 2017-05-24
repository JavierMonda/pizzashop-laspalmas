import { App } from '../../module';

config.$inject = ["$stateProvider"];
export function config(stateProvider) {
    stateProvider
        .state('pizzas', {
            parent: 'app',
            url: 'pizzas/:id',
            component: 'ilPizza'
        })
}

App.config(config);  	