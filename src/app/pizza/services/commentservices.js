import { App } from '../../module';
import {} from '../../resolveurl';
import {} from './baseservices';

pizzaService.$inject = ['http'];
class commentService extends baseService{
    constructor($http,resolveUrl){
        super($http,resolveUrl,'comentarios');
    }
    create(comentario){
        return this.http.post(
            this.resolveUrl.resolve('this.path'),
            comentario
        );
    }
}

App.service('commentService', commentService);