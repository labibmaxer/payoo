const validPin = 1234

document.getElementById('add-money-btn').addEventListener('click', function(e){
        e.preventDefault()
        const bankNO = document.getElementById('add-bank-num').value 
        const AddamountNO =parseInt(document.getElementById('add-amount').value)
        const pin = parseInt(document.getElementById('add-pin').value)
        console.log(bankNO , AddamountNO , pin);
        const availableBalance = parseInt(document.getElementById('available-balance').innerText)
        if(bankNO.length < 11){
             alert("enter 11 digit bank no")
             return;
        }
        if (pin !== validPin){
                alert("please provide correct pin")
                return;
        }
        const totalBalance = availableBalance + AddamountNO 
         document.getElementById('available-balance').innerText = totalBalance
})