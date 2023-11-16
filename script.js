// Global Variables
const footerMsg = document.getElementsByTagName("tfoot")[0];
const addBtn = document.getElementById("add-btn");
// end global variables



/*remove table footer on click*/
 function deleteFooter(){
    footerMsg.remove();
}



function addRow() {
    const deleteBtn = document.createElement("button");
    
    const table = document.getElementById("table-body");
    const newRow = table.insertRow(-1);
    for (let i = 0; i < 4; i++) {
        const cell = newRow.insertCell(i);
        cell.innerHTML = "New Cell";
    }
}

function content(){
    const type= document.getElementById("currency").value;
    const item = document.getElementById("item-purchased").value;
    const datePurchased = document.getElementById("purchase-date").value;
    const cost = document.getElementById("amount").value;
  
}








addBtn.addEventListener("click", deleteFooter);
addBtn.addEventListener("click", addRow);