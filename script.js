var negbtn = document.getElementById('negbtn');
negbtn.addEventListener('click',function(){
    var fromInput = document.getElementById('blackpick');
    var numberInput = parseInt(fromInput.value);
    var newValue = numberInput - 1;
    fromInput.value = newValue;


    var div = document.getElementById('blackprice');
    var divNumber = parseInt(div.innerText);
    var division = divNumber - 1200;
    div.innerText = division;
})

var posbtn = document.getElementById('posbtn');
posbtn.addEventListener('click',function(){
    var caseInput = document.getElementById('blackpick');
    var caseCount = parseInt(caseInput.value);
    var caseNew = caseCount +1;
    caseInput.value = caseNew;
   

    const caseTotal = caseNew * 1200;
    document.getElementById('blackprice').innerText = caseTotal;


})

var negbtn2 = document.getElementById('negbtn2');
negbtn2.addEventListener('click',function(){
    console.log("working-ee-");
})

var posbtn2 = document.getElementById('posbtn2');
posbtn2.addEventListener('click',function(){
    console.log("working+ee+");
})

var checkbtn = document.getElementById('checkbtn');
checkbtn.addEventListener('click',function(){
    console.log("dfgdggsfg+ee+");
})

// convert string to value

