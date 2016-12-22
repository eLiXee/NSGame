var Observable = require("data/observable").Observable;
var colorModule = require("color");
var view = require("ui/core/view");
var observableModule = require("data/observable");
var enums = require("ui/enums");

var observableObject = new observableModule.Observable()

function createViewModel() {
    var viewModel = new Observable();
    viewModel.color = generateColor();
    viewModel.score = 0;

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function generateNumber(min, max) {
        min = 10;
        max = 80;
        var number = Math.floor(Math.random() * (max - min + min) + min);
        return number;
    }

    function generateColor(min, max) {
        min = 1;
        max = 4;
        var number = Math.floor(Math.random() * (max - min + min) + min);

        if (number == 1) {
            return "Red"
        }
        if (number == 2) {
            return "Blue"
        }
        if (number == 3) {
            return "Yellow"
        }
        if (number == 4) {
            return "Green"
        }

    }


    viewModel.onTapRed = function (args) {
        var id = args.object;
        if (viewModel.color != "Red") {
           
            alert("You Lose");
            return viewModel();
            this.set("score", viewModel.score = 0)



        }
        else {
            id.animate({
                translate: { x: 0, y: generateNumber() }
            });
            id.backgroundColor = getRandomColor();

            this.set("color", generateColor());
            this.set("score", viewModel.score + 1)
            viewModel.css = "#color { color: red }";

        }
    }
    viewModel.onTapBlue = function (args) {
        var id = args.object;
        if (viewModel.color != "Blue") {
            id.animate({
                translate: { x: 0, y: 0 }
            });
            id.backgroundColor = getRandomColor();
            alert("You Lose");
            this.set("score", viewModel.score = 0)
            viewModel.css = "#color { color: red }";
        }
        else {
            id.animate({
                translate: { x: generateNumber(), y: generateNumber() }
            });
            id.backgroundColor = getRandomColor();
            this.set("color", generateColor());
            this.set("score", viewModel.score + 1)

        }
    }
    viewModel.onTapYellow = function (args) {
        var id = args.object;
        if (viewModel.color != "Yellow") {
            id.animate({
                translate: { x: 0, y: 0 }
            });
            id.backgroundColor = getRandomColor();

            alert("You Lose");
            this.set("score", viewModel.score = 0)

        }
        else {
            id.animate({
                translate: { x: generateNumber(), y: generateNumber() }
            });
            id.backgroundColor = getRandomColor();
            this.set("color", generateColor());
            this.set("score", viewModel.score + 1)

        }
    }
    viewModel.onTapGreen = function (args) {
        var id = args.object;
        if (viewModel.color != "Green") {
            id.animate({
                translate: { x: 0, y: 0 }
            });
            id.backgroundColor = getRandomColor();
            alert("You Lose");
            this.set("score", viewModel.score = 0)

        }
        else {
            id.animate({
                translate: { x: generateNumber(), y: generateNumber() }
            });
            id.backgroundColor = getRandomColor();
            this.set("color", generateColor());
            this.set("score", viewModel.score + 1)


        }
    }


    return viewModel;
}

exports.createViewModel = createViewModel;