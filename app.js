const bill = document.querySelector("#bill-input");
const people = document.querySelector("#no-people");
let custom  = document.querySelector("#custom");
const options = document.querySelector("#select-btns");
const percentBtn = document.querySelectorAll(".percentbtn")
const totalValue = document.querySelector(".out-2");
const Tip = document.querySelector(".out-1");
 reset = document.querySelector(".reset-btn");
 let off = document.querySelector(".reset-btn").disabled = true;




let billValue = "";
let billBoolean = false;
let parcentage = 0;
let numberOfPeople = 0;
let numberOfPeopleBoolean = true;




// for bills
bill.addEventListener("input" , (e) =>{
    const val = e.target.value.trim();
  const indexOfDot = val.indexOf(".");
  

  if (indexOfDot == -1) {
    e.target.value = val.slice(0, 7);
  } else {
    e.target.value = val.slice(0, indexOfDot + 4);
  }


    if (bill.value == "0") {
        setError(bill, "Can't be zero")
        billBoolean = false;
    }

    else if (bill.value == ""){
        setError(bill, "Can't be blank")
        billBoolean = false;
    }

    else if  (bill.value.includes("-")){
        setError (bill , "Can't be negative")
   } 

    
    else {
        removeErrors(bill);
        billValue = parseFloat(bill.value)
        billBoolean = true;
    }

    calculateValue();
});



// for number of people input
people.addEventListener("input" , (e) =>{
    
      
     if ((people.value) == "0") {
          
        setError( people, "Cant't be zero")
         numberOfPeopleBoolean = false;
     }
    
     else if (people.value == ""){
        setError ( people, "Can't be blank")
        numberOfPeopleBoolean = false;
     } 

     else if  (people.value.includes("-")){
          setError (people , "Can't be negative")
          numberOfPeopleBoolean = false;
     } 

    
     
     else{
         removeErrors(people);
        numberOfPeople = parseFloat(people.value)
        numberOfPeopleBoolean = true;
       }

    calculateValue();
});
  

// For buttons

options.addEventListener( "click" , (e)=>{
    event.preventDefault()
    

    if ((e.target.id != "custom") && e.target.tagName != "DIV"){
        percentage = parseFloat(e.target.value);
        highlight()
        console.log(e.target.style.backgroundColor)
    }
    else percentage = 0;
    calculateValue();
});


//Custom input
custom.addEventListener ("input" , (e)=>{
    if (custom.value == 0) {
        percentage = 0;
        setError(custom , "")
        
    }

    else if ((custom.value) <= -1) {
        percentage = 0;
    }

    else if ((custom.value) == 0) {
        percentage = 0;
    }

    else {
        percentage = parseFloat(custom.value)
        removeErrors(custom)

    }
    calculateValue();
});

console.log(off)

//the actual calculations

const calculateValue = () => {
   
    if(
        billBoolean === true &&
        percentage != 0 && numberOfPeopleBoolean === true 
        && numberOfPeople != 0
    ) {  
            totalTip =  (billValue * (percentage/100));
        
          Tip.textContent = "$"+((totalTip/numberOfPeople)).toFixed(2);
           totalValue.textContent = "$"+((totalTip + billValue) / numberOfPeople).toFixed(2) ;
           let off = document.querySelector(".reset-btn").disabled = false;
           ;
    }
};

// reset button
reset.addEventListener("click" , ()=>{
    Tip.textContent = "$0.00";
    totalValue.textContent = "$0.00";
    bill.value = "";
    people.value = "";
    percentage = 0;
    billBoolean = false;
    reset.disabled = true;
    custom.value = ""
    
    removeHighlight()
     removeErrors(bill);
     removeErrors(custom);
    removeErrors(people);

});

// fuction to highlight the current percentage button

function highlight (){
    percentBtn.forEach(btn => {
 
   if (btn.style.backgroundColor === ""){
    event.target.style.backgroundColor= "hsl(172, 83%, 81%)" }
    else btn.style.backgroundColor = ""
   
    });
}

function removeHighlight (){
    percentBtn.forEach(btn => {
        btn.style.backgroundColor = ""
    })
}


function setError(input, message){
  input = event.target;
  input.style.border = "1px solid red"
const small = input.previousElementSibling.lastChild;
small.innerText = message
    console.log(small.classList)
}

function removeErrors(input){
    controller = input;
    input.style.border = "";
    const small = input.previousElementSibling.lastChild;
    small.textContent = ""
}

 







