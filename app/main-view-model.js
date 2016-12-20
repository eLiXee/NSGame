var Observable = require("data/observable").Observable;



function createViewModel() {
    var viewModel = new Observable();    
    viewModel.color = generateColor();
    viewModel.score = 0;


 function generateColor(min,max) {  
    min = 1;
    max = 4;  
  var number = Math.floor(Math.random() * (max - min + min) + min);

  if(number == 1)
  {
      return "Red"
  }
  if(number == 2)
  {
      return  "Blue"
  }
  if(number == 3)
  {
     return "Yellow"
  }
  if(number == 4)
  {
      return "Green"
  }

}

    viewModel.onTapRed = function() {        
        if(viewModel.color != "Red")
        {
            alert("You Lose");
             this.set("score", viewModel.score = 0)
            
        }
        else{
           this.set("color", generateColor());
           this.set("score", viewModel.score + 1)
           
        }
    }
     viewModel.onTapBlue = function() {        
        if(viewModel.color != "Blue")
        {
            alert("You Lose");
             this.set("score", viewModel.score = 0)
        }
        else{
            
            this.set("color", generateColor());
             this.set("score", viewModel.score + 1)
        }
    }
     viewModel.onTapYellow = function() {        
        if(viewModel.color != "Yellow")
        {
            alert("You Lose");
             this.set("score", viewModel.score = 0)
        }
         else{
           
           this.set("color", generateColor());
            this.set("score", viewModel.score + 1)
        }
    }
     viewModel.onTapGreen = function() {        
        if(viewModel.color != "Green")
        {
            alert("You Lose");
             this.set("score", viewModel.score = 0)
        }
        else{
          this.set("color", generateColor());
           this.set("score", viewModel.score + 1)
           
        }
    }


    return viewModel;
}

exports.createViewModel = createViewModel;