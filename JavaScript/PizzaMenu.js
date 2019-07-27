function getReceipt() {

    //gets Pizza Size and Base Price and adds them to the receipt
    
    var pizzaSize = document.getElementsByName("size");
    var selectedSize;
    var basePrice;
    var displayBasePrice;
    for (var i = 0; i <pizzaSize.length; i++) {
       if (pizzaSize[i].checked)
       selectedSize = pizzaSize[i].value
    }					
    
    document.getElementById("selectedSize").innerHTML=selectedSize;
    
    if (selectedSize == "Personal"){
        basePrice = 6;
    } else if (selectedSize == "Medium"){
        basePrice = 10
    } else if (selectedSize == "Large"){
        basePrice = 14
    } else {
        basePrice = 16
    }
    
    displayBasePrice = "$" + basePrice + ".00";
    document.getElementById("basePrice").innerHTML=displayBasePrice;

//gets meat selections, determines price for meats and adds them to the receipt
    
    var pizzaMeats = document.getElementsByName("meat");
    var selectedMeats = [];
    var meatPrice;
    var displayMeatPrice;
    for (var i = 0; i <pizzaMeats.length; i++) {
    if (pizzaMeats[i].checked)
    selectedMeats.push(" " + pizzaMeats[i].value)
    }			

    document.getElementById("selectedMeats").innerHTML=selectedMeats;

    if (selectedMeats.length == 0){
        meatPrice = 0
    }else
        meatPrice = selectedMeats.length - 1;
        displayMeatPrice = "+$" + meatPrice + ".00";

    document.getElementById("meatPrice").innerHTML=displayMeatPrice;


    //gets Cheese selection, determines extra cost if necessary, and adds to the receipt
    var pizzaCheese = document.getElementsByName("cheese");
    var selectedCheese;
    var cheesePrice;
    var displayCheesePrice;
    for (var i = 0; i < pizzaCheese.length; i++) {
    if (pizzaCheese[i].checked)
    selectedCheese = pizzaCheese[i].value;
    }					
    
    document.getElementById("selectedCheese").innerHTML=selectedCheese;

    if (selectedCheese == "Extra Cheese"){
        cheesePrice = 3;
        } else {
        cheesePrice = 0
    }
    displayCheesePrice = "+$" + cheesePrice + ".00";
    document.getElementById("cheesePrice").innerHTML=displayCheesePrice;

    //gets Crust selection, determines extra cost if necessary, and adds to the receipt
    var pizzaCrust = document.getElementsByName("crust");
    var selectedCrust;
    var crustPrice;
    var displayCrustPrice;
    for (var i = 0; i < pizzaCrust.length; i++) {
    if (pizzaCrust[i].checked)
    selectedCrust = pizzaCrust[i].value;
    }					

    document.getElementById("selectedCrust").innerHTML=selectedCrust;

    if (selectedCrust == "Cheese Stuffed Crust"){
        crustPrice = 3;
        } else {
        crustPrice = 0
    }
    displayCrustPrice = "+$" + crustPrice + ".00";
    document.getElementById("crustPrice").innerHTML=displayCrustPrice;

     //gets Sauce selection, determines extra cost if necessary, and adds to the receipt
     var pizzaSauce = document.getElementsByName("sauce");
     var selectedSauce;
     var saucePrice = "+$0.00";
     for (var i = 0; i < pizzaSauce.length; i++) {
     if (pizzaSauce[i].checked)
     selectedSauce = pizzaSauce[i].value;
     }					
 
     document.getElementById("selectedSauce").innerHTML=selectedSauce;
     document.getElementById("saucePrice").innerHTML=saucePrice;

//gets meat selections, determines price for meats and adds them to the receipt
    
    var pizzaVeggies = document.getElementsByName("veggies");
    var selectedVeggies = [];
    var veggiePrice;
    var displayVeggiePrice;
    for (var i = 0; i <pizzaVeggies.length; i++) {
    if (pizzaVeggies[i].checked)
    selectedVeggies.push(" " + pizzaVeggies[i].value)
    }			

    document.getElementById("selectedVeggies").innerHTML=selectedVeggies;

    if(selectedVeggies.length == 0){
        veggiePrice = 0
    }else
        veggiePrice = selectedVeggies.length - 1;
        displayVeggiePrice = "+$" + veggiePrice + ".00";

    document.getElementById("veggiePrice").innerHTML=displayVeggiePrice;


//totals all items

var totalPrice = basePrice + + meatPrice + cheesePrice + crustPrice + veggiePrice;
var displayTotalPrice = "$" + totalPrice + ".00";

document.getElementById("totalPrice").innerHTML=displayTotalPrice;

document.getElementById("receipt").style.display = "block";
}

function closeWindow(){
    document.getElementById("receipt").style.display = "none";
}
