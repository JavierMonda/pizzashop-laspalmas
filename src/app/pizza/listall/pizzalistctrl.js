import { App } from '../../module';

pizzaListCtrl.$inject = ['pizzaListService']
function pizzaListCtrl(pizzaListService) {
    let _this = this;
    _this.pizzas = [];
    getPizzas();

    function getPizzas() {
        pizzaListService.getPizzas()
            .then(c => _this.pizzas = c.data);
    }
}
App.controller('pizzaListCtrl', pizzaListCtrl);