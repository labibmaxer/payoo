document.getElementById("login").addEventListener('click', function () {
    console.log('button clicked')
    const mobileNumber = 12345678910 
    const pinNUmber = 1234
    const mobileNumberValue = document.getElementById('mobile-num').value 
    const mobileNumberValueConverted = parseInt ( mobileNumberValue)
    const pinNumberValue = document.getElementById('pin-num').value
    const pinNumberValueConverted = parseInt(pinNumberValue)
    console.log(mobileNumberValueConverted , pinNumberValueConverted);
    
    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNUmber){
        console.log('all value are ok');
        
    }
    else {
        console.log('invalid info ');
        
    }
});