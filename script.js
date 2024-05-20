operator = '';
let display = document.querySelector("#output");
let buttons = document.querySelectorAll(".inner-content");
let arrayButtons = Array.from(buttons);
let string = '';
console.dir(arrayButtons);
arrayButtons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
    let value = e.target.innerHTML;    
    if (value=="AC"){
        string = "";
        display.innerHTML = '0';
    }else if(value=="DEL"){
        subString = string.substring(0,string.length-1)
        display.innerHTML = subString;
        string = subString;
    }else if(value=="+"){
        display.innerHTML = "+";
        stringA = string; 
        string ='';
        operator = "add"
    }
    else if(value=="-"){
        display.innerHTML = "-";
        stringA = string; 
        string ='';
        operator = "substract"
    }
    else if(value==="=" && operator === "substract"){
        let sum = Number(stringA) - Number(string)
        display.innerHTML = sum;
        string = String(sum);
        operator = '';
    }
    else if(value==="x"){
        display.innerHTML = "*";
        stringA = string; 
        string ='';
        operator = "multiply"
    }
    else if(value==="/"){
        display.innerHTML = "/";
        stringA = string; 
        string ='';
        operator = "divide"
    }
    else if(value==="%"){
        display.innerHTML = "%";
        stringA = string; 
        string ='';
        operator = "percent"
    }
    else if(value==="=" && operator === "multiply"){
        let sum = Number(stringA) * Number(string)
        display.innerHTML = sum;
        string = String(sum);
        operator = '';
    }
    else if(value==="=" && operator === "divide"){
        if (Number(string)==0){
            display.innerHTML="Undefined";
        }else{
        let sum = Number(stringA) / Number(string)
        display.innerHTML = sum;
        string = String(sum);
        operator = '';}
    }
    else if(value=="=" && operator == "add"){
        let sum = Number(stringA) + Number(string)
        display.innerHTML = sum;
        string = String(sum);
        operator = '';
    }
    else if(value=="=" && operator == "percent"){
        let sum = Number(stringA)/100;
        display.innerHTML = sum;
        string = String(sum);
        operator = '';
    }
    
    else{
        string += value;
       display.innerHTML = string; 
    }
    })
})