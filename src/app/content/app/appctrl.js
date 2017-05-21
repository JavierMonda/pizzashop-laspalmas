import { App } from '../../module';

appCtrl.$inject = ['$mdSidenav']
function appCtrl(mdSidenav) {
    this.mdSidenav = mdSidenav;
    this.isSideNavClosed = function () {
        return !(this.mdSidenav("sidenav").isOpen() || this.mdSidenav("sidenav").isLockedOpen());
    }
    this.openSideNav = function () {
        this.mdSidenav("sidenav").toggle();
    }
    this.closeSideNav = function () {
        this.mdSidenav("sidenav").close();
    }
}
App.controller('appCtrl', appCtrl);