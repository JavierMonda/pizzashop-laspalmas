import { App } from '../../module';
import html from './app.html';
export {} from './appctrl';
//Childs
import {} from '../ilmenu/ilmenu.js';
import {} from '../iltoolbar/iltoolbar.js';
import {} from '../ilcontent/ilcontent.js';


export const ilApp = {
  template: html,
  controller: 'appCtrl'
}
App.component('ilApp', ilApp);
