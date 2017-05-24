import { App } from './module';
import { URL } from './constant';

resolveUrl.$inject['URL'];
export const resolveUrl = function resolveUrl(URL) {
    return {
        resolve: function (path) {
            return `${URL}/${path}`;
        }
    };
}

App.factory('resolveUrl', resolveUrl);