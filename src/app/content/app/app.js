import { App } from '../../module';
import html from './app.html';
export {} from './appctrl';
//Childs
import {} from '../ilmenu';
import {} from '../iltoolbar';
import {} from '../ilcontent';


export const ilApp = {
  template: html,
  controller: 'appCtrl'
}
App.component('ilApp', ilApp);
