// decleare funtion to get element from id and get total value
function total(){
    // best price
    const bestPrice = document.getElementById("best-price");
    const bestPriceText = bestPrice.innerText;
    const bestPriceValue = parseInt(bestPriceText);
    // memory section value
    const memory = document.getElementById("extra-memory");
    const memoryText = memory.innerText;
    const memoryValue = parseInt(memoryText);
    // storage section value
    const storage = document.getElementById("extra-storage");
    const storageText = storage.innerText;
    const storageValue = parseInt(storageText);
    // delivery section value
    const delivery = document.getElementById("delivery-cost");
    const deliveryText = delivery.innerText;
    const deliveryValue = parseInt(deliveryText);
    // total value
    const totalValue = bestPriceValue + memoryValue + storageValue + deliveryValue;
    // total section value
   return totalValue;

}
// totalprice for mac funtion
function totalPrice(){
    const totalValue = total();
     const totalText = document.getElementById("total");
    totalText.innerText= totalValue;
    // get total-price
    const totalPrice = document.getElementById("total-price");
    totalPrice.innerText=totalValue;
}
// add memory funtion
document.getElementById("frist-memory").addEventListener('click',function(){
    const memory = document.getElementById("extra-memory");
    memory.innerText=0;
    totalPrice();
    
});
document.getElementById("second-memory").addEventListener('click',function(){
    const memory = document.getElementById("extra-memory");
    memory.innerText=180;
    totalPrice();
});
// end memory funtion
// start storage funtion
document.getElementById("frist-storage").addEventListener('click',function(){
    const memory = document.getElementById("extra-storage");
    memory.innerText=0;
    totalPrice();
});
document.getElementById("second-storage").addEventListener('click',function(){
    const memory = document.getElementById("extra-storage");
    memory.innerText=100;
      totalPrice();
});
document.getElementById("third-storage").addEventListener('click',function(){
    const memory = document.getElementById("extra-storage");
    memory.innerText=180;
     totalPrice();
});
// end storage funtion
// start delivery funtion
document.getElementById("free-delivery").addEventListener('click',function(){
    const memory = document.getElementById("delivery-cost");
    memory.innerText=0;
     totalPrice();
});
document.getElementById("cost-delivery").addEventListener('click',function(){
    const memory = document.getElementById("delivery-cost");
    memory.innerText=20;
     totalPrice();
});
// end delivery funtion
// pomo code funtion
document.getElementById("pomocode-btn").addEventListener("click",function(){
    const totalValue = total();
    const totalDiscount = 0.20 * totalValue;
    const totalValueDiscount = totalValue - totalDiscount;

    // get total-price
    const totalPrice = document.getElementById("total-price");
    // get input 
    const input = document.getElementById("pomocode");
    const inputValue = input.value;
    const inputText = inputValue.toLowerCase();
    input.value = " ";
    if(inputText == 'stevekaku'){
        totalPrice.innerText= totalValueDiscount;
    }else{
        alert('sorry kaku was angray');
    }
});
