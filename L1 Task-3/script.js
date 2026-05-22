
let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");
for(let i = 0; i < buttons.length; i++){

  buttons[i].addEventListener("click", function(){

    let value = buttons[i].innerText;

    
    if(value === "C"){
      display.value = "";
    }

   
    else if(value === "="){

      
      if(display.value === ""){
        display.value = "Empty";
      }

      else{

        
        let expression = display.value
        .replace("×", "*")
        .replace("÷", "/")
        .replace("−", "-");

      
        display.value = eval(expression);
      }
    }

    
    else{
      display.value += value;
    }

  });

}