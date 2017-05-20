import { App } from '../module';
import html from './iltoolbar.html';

export const ilToolbar = {
  template: html,
  controller: 'appCtrl'
  /*bindings:{
    isSideNavClosed: '@',
    isOpenSideNav: '@',
    isCloseSideNav: '@'
  }*/
}
App.component('ilToolbar', ilToolbar);