// Global Variables
const footerMsg = document.getElementsByTagName("tfoot")[0];
const addBtn = document.getElementById("addBtn");
const currencyTypes = {
    cash:" <img src= images/coins.svg width= 35> ",
    card: " <img src= images/credit-card.svg width= 35> ",
    crypto:" <img src= images/bitcoin-sign.svg width= 35> ",
    other:" <img src= images/other.svg width= 35> "
};
// end global variables

/*remove table footer on click*/
function deleteFooter(){
    footerMsg.remove();
}


function addRow() {
    const deleteBtn = document.createElement("button");
    const btnText = document.createTextNode("Delete");
    deleteBtn.appendChild(btnText);
    const table = document.getElementById("tableBody");
    const newRow = table.insertRow(-1);
    const createCellText = document.createElement("p"); 
       
    for (let i = 0; i < 4; i++) {
        const addCells = newRow.insertCell(i);
      
    }
   
    console.log(newRow);
   
    newRow.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function(){
        newRow.remove(this);
    });
}

function content(){
    const type= document.getElementById("currency").value;
    const item = document.getElementById("itemPurchased").value;
    const datePurchased = document.getElementById("purchaseDate").value;
    const cost = document.getElementById("amount").value;
}

addBtn.addEventListener("click", deleteFooter);
addBtn.addEventListener("click", addRow);