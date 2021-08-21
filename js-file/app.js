
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

document.getElementById("frist-memory").addEventListener('click',function(){
    const memory = document.getElementById("extra-memory");
    memory.innerText=0;
    const totalValue = total();
     const totalText = document.getElementById("total");
    totalText.innerText= totalValue;
    
})
document.getElementById("second-memory").addEventListener('click',function(){
    const memory = document.getElementById("extra-memory");
    memory.innerText=158;
       const totalValue = total();
     const totalText = document.getElementById("total");
    totalText.innerText= totalValue;
})
document.getElementById("frist-storage").addEventListener('click',function(){
    const memory = document.getElementById("extra-storage");
    memory.innerText=0;
       const totalValue = total();
     const totalText = document.getElementById("total");
    totalText.innerText= totalValue;
})
document.getElementById("second-storage").addEventListener('click',function(){
    const memory = document.getElementById("extra-storage");
    memory.innerText=100;
       const totalValue = total();
     const totalText = document.getElementById("total");
    totalText.innerText= totalValue;
})
document.getElementById("third-storage").addEventListener('click',function(){
    const memory = document.getElementById("extra-storage");
    memory.innerText=158;
      const totalValue = total();
     const totalText = document.getElementById("total");
    totalText.innerText= totalValue;
});
document.getElementById("free-delivery").addEventListener('click',function(){
    const memory = document.getElementById("delivery-cost");
    memory.innerText=0;
      const totalValue = total();
     const totalText = document.getElementById("total");
    totalText.innerText= totalValue;
});
document.getElementById("cost-delivery").addEventListener('click',function(){
    const memory = document.getElementById("delivery-cost");
    memory.innerText=20;
      const totalValue = total();
     const totalText = document.getElementById("total");
    totalText.innerText= totalValue;
});
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
    if(inputText == 'stevkaku'){
        totalPrice.innerText= totalValueDiscount;
    }else{
        console.log('sorry kaku was angray')
    }
})
