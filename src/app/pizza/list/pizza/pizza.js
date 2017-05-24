import { App } from '../../../module';
import html from './pizza.html';

export {} from './pizzactrl';

import {} from '../ilcard';
import {} from '../ilcontent';
import {} from '../illistcomment';
import {} from '../ilingredient';


export const ilPizza = {
  template: html,
  controller: 'PizzaCtrl'
}
App.component('ilPizza', ilPizza);