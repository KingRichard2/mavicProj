const textButton = document.getElementById('searchBtn');
const textField = document.getElementById('searchTextBox')
const plus1btn = document.getElementById('plus1')
const plus2btn = document.getElementById('minus1')
let quantityVal = parseInt(document.getElementById('quantity').textContent)
const quantity = document.getElementById('quantity');
let priceVal = parseInt(document.getElementById('priceId').textContent)
const price = document.getElementById('priceId');
const fixedPrice = 1499;
const parts = document.getElementsByClassName('part');
textButton.addEventListener("click", e=>{
    textField.classList.toggle('hidden');
    if(textField.value!=='' ?? textField.value!==null){
        //redirect
    }
})

plus1btn.addEventListener("click",e=>{
    quantityVal+=1;
    quantity.innerText = quantityVal;
    priceVal = quantityVal*fixedPrice;
    price.innerText = priceVal;
})
plus2btn.addEventListener("click",e=>{
    quantityVal -=1;
    if(quantityVal<1){
        price.innerText = fixedPrice;
        quantityVal=1;
    }else{
    quantity.innerText = quantityVal;
    priceVal -= fixedPrice;
    price.innerText = priceVal;
    }
})

parts.addEventListener('click',e=>{
    
})