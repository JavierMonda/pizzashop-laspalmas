import { App } from '../module';
import html from './iltoolbar.html';

export const ilToolbar = {
  template: html,
  controller: 'appCtrl' //Quitar el controlador y usar Bindings
}
App.component('ilToolbar', ilToolbar);
