// Global Variables
const footerMsg = document.getElementsByTagName("tfoot")[0];
const addBtn = document.getElementById("add-btn");
// end global variables



/*remove table footer on click*/
 function deleteFooter(){
    footerMsg.remove();
}

function content(){
    const type= document.getElementById("currency").value;
    const item = document.getElementById("item-purchased").value;
    const datePurchased = document.getElementById("purchase-date").value;
    const cost = document.getElementById("amount").value;
    let element = document.getElementById("table-body");
    let newRow = document.createElement("tr");
    let newCell = document.createElement("td");
    newRow.appendChild(newCell);
    element.appendChild(newRow);
   
   
 
    
}






addBtn.addEventListener("click", deleteFooter);
addBtn.addEventListener("click", content);