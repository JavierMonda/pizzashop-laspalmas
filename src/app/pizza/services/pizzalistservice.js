import { App } from '../../module';
import {} from '../../resolveurl';
import {} from './baseservices';

pizzaListService.$inject = ['http']
class pizzaListService extends baseService{
    constructor($http,resolveUrl){
        super($http,resolveUrl,'pizzas');
    }

    getPizzas() {
        return this.http.get(
            super.getRouteById()
        );
    }
}
App.service('pizzaListService', pizzaListService);
