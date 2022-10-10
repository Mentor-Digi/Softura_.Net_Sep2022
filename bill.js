const bill = (tip)=>{
    let bill=parseFloat(document.getElementById("billamount").value);
    
    let totalAmount= bill+parseFloat(tip);
    // let tipAmount = parseFloat(bill*(tip/100));
    // let tipamount = parseFloat((tip*100)/bill);
    let tipPercentage= parseFloat((tip *100)/bill);
    // console.log(tipPercentage);
    
document.getElementById("total").innerHTML=totalAmount.toFixed(2);
document.getElementById("tippercentage").innerHTML=tipPercentage.toFixed(2);
};