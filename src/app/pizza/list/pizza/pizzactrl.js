import { App } from '../../module';

export class PizzaCtrl {
    constructor(state, pizzaService) {
        this.id = state.params && state.params.id;
        this.pizzaService = pizzaService;
        this.name = null;
        this.img = null;
        this.ingridients = null;
        this.comments = null;
        this.comment = {};
        this.config(state);
    }
    config() {
        let _this = this;
        this.pizzaService.getPizza(this.id)
            .then(function (response) {
                let data = response.data;
                _this.name = data.name;
                _this.img = data.img;
                _this.ingridients = data.ingridients;
                _this.comments = data.comments;
            });
    }
    hasIngridients() {
        return this.ingridients && this.ingridients.length > 0;
    }
    submitComment() {
        this.comment.date = new Date();
        this.comment.text = this.comment.text || "";
        this.comment.pizza = parseInt(this.id);
        this.comment.user = "TODO";
        this.pizzaService.submitComment(this.comment);
    }
}
PizzaCtrl.$inject = ['$state', 'pizzaService'];
App.controller('pizzaCtrl', PizzaCtrl);