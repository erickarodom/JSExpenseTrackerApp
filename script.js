// Global Variables




const footerMsg = document.getElementsByTagName("tfoot")[0];
const addBtn = document.getElementById("add-btn");
// end global variables
// Create Elments (Global)


// Start of logic
addBtn.addEventListener("click", function(){
    footerMsg.remove();
});
addBtn.addEventListener("click", function(){
    const type= document.getElementById("currency").value;
    const item = document.getElementById("item-purchased").value;
    const datePurchased = document.getElementById("purchase-date").value;
    const cost = document.getElementById("amount").value;

    console.log("Hello Baby");
    console.log(cost);
    
});