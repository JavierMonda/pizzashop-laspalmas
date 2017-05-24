import { App } from '../../module';
import {} from '../../resolveurl';


class baseService{
    constructor($http,resolveUrl,path){
        this.$http = http;
        this.resolveUrl = resolveUrl;
        this.path = path;
    }
}

App.service('baseService', baseService);