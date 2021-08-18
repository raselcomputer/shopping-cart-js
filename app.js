function productQuantity(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    productNumber = parseInt(productInput.value);
    if(isIncreasing == true){
        productNumber = productNumber + 1;
    }
    else if(productNumber > 0){
        productNumber = productNumber - 1;
    }
    productInput.value = productNumber;

    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    
    calculateValue();
}

function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = productInput.value;
    return productNumber;
}
function calculateValue(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subtotal = phoneTotal + caseTotal;
    const tax = subtotal / 10;
    const total = subtotal + tax;

    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = total;
}
// handle phone event 
document.getElementById('phone-plus').addEventListener('click', function() {
    productQuantity('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function() {
    productQuantity('phone', 1219, false);
})

// handle phone event 
document.getElementById('case-plus').addEventListener('click', function() {
    productQuantity('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function() {
    productQuantity('case', 59, false);
})