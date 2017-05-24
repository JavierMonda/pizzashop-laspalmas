import { App } from '../../module';
import {} from '../../resolveurl';
import {} from './baseservices';

ingredientService.$inject = ['http'];
class ingredientService extends baseService{
    constructor($http,resolveUrl){
        super($http,resolveUrl,'ingredientes');
    }

    getIngredient(id) {
        //let url = resolveUrl.resolve(`{this.path}/${id}`);
        return this.http.get(
            super.getRouteById(id)
        );
    }
}

App.service('ingredientService', ingredientService);