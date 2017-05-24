import { App } from '../../module';
import {} from '../../resolveurl';
import {} from './baseservices';

pizzaService.$inject = ['http'];
class pizzaService extends baseService{
    constructor($http,resolveUrl){
        super($http,resolveUrl,'pizzas');
    }

    getPizza(id) {
        return this.http.get(
            super.getRouteById(id)
        );
    }
    create(pizza){
        return this.http.post(
           super.getRoute(),
            pizza
        );
    }
    getPizzas(){
        return this.http.get(
            this.resolveUrl.resolve('this.path')
        );
    }
}

App.service('pizzaService', pizzaService);