const addExpenseButton =
 document.getElementById("addExpenseButton");
const table =
 document.getElementById("tableBody");
const footerMessage =
 document.getElementsByTagName("tfoot")[0];

/*remove table footer on click*/
function deleteFooter(){
    footerMessage.remove();
}



function addRow() {
    const currencyTypes = {
        cash:" <img src= images/coins.svg width= 25> ",
        card: " <img src= images/credit-card.svg width= 35> ",
        crypto:" <img src= images/bitcoin-sign.svg width= 35> ",
        other:" <img src= images/other.svg width= 35> "
    };
    const currencyTypeInput = 
    document.getElementById("currency").value;
    const itemInput =
    document.getElementById("itemPurchased").value;
    const dateInput =
    document.getElementById("purchaseDate").value;
    let costInput = `$${document.getElementById("amount").value}`;
    const inputData = [itemInput, dateInput, costInput];
    const newRow = table.insertRow(-1);
    const currencyCell = newRow.insertCell(0);

    for (let i = 0; i < inputData.length; i++) {
        // Start from index 1 to skip currency cell
        let cell = newRow.insertCell(i+1); 
        cell.innerHTML = inputData[i];
      }
      
  
  
    //delete item=============================
    const deleteButton = document.createElement("button");
    const buttonText = document.createTextNode("Delete");
    deleteButton.appendChild(buttonText); 
    newRow.appendChild(deleteButton);  
    deleteButton.addEventListener(
        "click", function(){
        newRow.remove(this);
    });
}

addExpenseButton.addEventListener("click", deleteFooter);
addExpenseButton.addEventListener("click", addRow);