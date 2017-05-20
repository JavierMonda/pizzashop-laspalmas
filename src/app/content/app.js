import { App } from '../module';
import html from './app.html';
export {} from './appctrl';
//Childs
import {} from './ilmenu.js';
import {} from './iltoolbar.js';
import {} from './ilcontent.js';


export const ilApp = {
  template: html,
  controller: 'appCtrl'
}
App.component('ilApp', ilApp);
