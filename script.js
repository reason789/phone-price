
// function handleProductChange(isIncrease){
//     var fromInput = document.getElementById('blackpick');
//     let numberInput = parseInt(fromInput.value);
//     let newValue = numberInput;
//     if(isIncrease == true)  newValue = numberInput + 1;
//     else if(isIncrease == false && numberInput > 1) newValue = numberInput - 1;
    
//     fromInput.value = newValue;
    
//     var final = newValue * 1200;
//     document.getElementById('blackprice').innerText =final;
// }

// function handleProductChange2(isIncrease){
//     var fromInput2 = document.getElementById('casepick');
//     let numberInput2 = parseInt(fromInput2.value);
//     let newValue2 = numberInput2;
//     if(isIncrease == true)  newValue2 = numberInput2 + 1;
//     else if(isIncrease == false && numberInput2 > 1) newValue2 = numberInput2 - 1;
    
//     fromInput2.value = newValue2;
    
//     var final2 = newValue2 * 60;
//     document.getElementById('sixty').innerText =final2;
// }



function handleProductChange(product,isIncrease){
    
    let numberInput = getInputValue(product);
    let newValue = numberInput;
    if(isIncrease == true)  newValue = numberInput + 1;
    if(isIncrease == false && numberInput > 1) newValue = numberInput - 1;
    
    var fromInput = document.getElementById(product + 'pick').value = newValue;
    
    
    let final = 0;
    if(product == 'black') final = newValue * 1200;
    if(product == 'case') final = newValue * 60;

    document.getElementById(product + 'price').innerText =final;
    calculateTotal();
}

function calculateTotal()
{
    var totalPrice = getInputValue('black')*1200 + getInputValue('case')*60;
    document.getElementById('subtotal').innerText = totalPrice;

    const tax = totalPrice * 0.1;
    document.getElementById('tax').innerText = tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grandtotal').innerText = grandTotal;
}

function getInputValue(product)
{
    var productInput = document.getElementById(product + 'pick');
    var productCount = parseInt(productInput.value);
    return productCount;
}

