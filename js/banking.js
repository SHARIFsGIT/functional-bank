const depositBtn = document.getElementById('deposit-button');
const withdrawBtn = document.getElementById('withdraw-button');

depositBtn.addEventListener('click', function(){
    changeBalance('deposit');
})

withdrawBtn.addEventListener('click', function(){
    changeBalance('withdraw');
})

function changeBalance(type){
    const previousTotal = document.getElementById(`${type}-total`);
    const previousAmountText = previousTotal.innerText; 
    const previousAmount = parseFloat(previousAmountText);

    const newInput = document.getElementById(`${type}-input`);
    const newAmountText = newInput.value;

    if(newAmountText.length !=0) {
        const newAmount = parseFloat(newAmountText);

        const newBalanceTotal = previousAmount + newAmount;
        previousTotal.innerText = newBalanceTotal;
        newInput.value = '';

        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const balanceAmount = parseFloat(balanceTotalText);

            if(type == 'withdraw'){
                const newBalanceTotal = balanceAmount - newAmount;
                balanceTotal.innerText = newBalanceTotal;
            }
            else{
                const newBalanceTotal = balanceAmount + newAmount;
                balanceTotal.innerText = newBalanceTotal;
            }
    }
    else{
        alert("Please enter a valid number");
    }
}