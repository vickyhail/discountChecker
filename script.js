

const shoe=document.querySelector("#shoe");
const bag= document.querySelector("#bag");
const necklace=document.querySelector("#necklace");
const belt=document.querySelector("#belt");
const dress= document.querySelector("#dress");
const remark= document.querySelector(".remark");
const result= document.querySelector(".result");


//function to calculate total after deducting discount from total

function percentage(value,percent){
   let discount = (parseInt(value/100))*parseInt(percent);
   let finaltotal=value-discount;
   return finaltotal;
}
 
function discount(value,percent){
    return (parseInt(value/100))*parseInt(percent);
}





function total(){
    let total = parseFloat(shoe.value)+parseFloat(bag.value) + parseFloat(necklace.value) + parseFloat(belt.value) + parseFloat(dress.value);
    document.querySelector(".result").innerHTML=`Total is: N${total}`;
  
   
    let tenpercent=10;
    let fivepercent=5;
    let threepercent=3;
    let twopercent=2;
    

    if (total >100000){
        document.querySelector(".remark").innerHTML = `Congrats 😍😍😍 you have a discount of 10% (N${discount(total,tenpercent)}), your total is now: N${percentage(total,tenpercent)}`;
    }
    else if (total >=80000){
        document.querySelector(".remark").innerHTML = `Congrats 😍😍😍 you have a discount of 5% (N${discount(total,tenpercent)}), your total is now: N${percentage(total,fivepercent)}`;
    }
    else if (total >=70000){
        document.querySelector(".remark").innerHTML = `Congrats 😍😍😍 you have a discount of  3% (N${discount(total,tenpercent)}), your total is now: N${percentage(total,threepercent)}`;
    }   
    else if (total >=60000){
        document.querySelector(".remark").innerHTML = `Congrats 😍😍😍 you have a discount of 2% (N${discount(total,tenpercent)}), your total is now: N${percentage(total,twopercent)}`;
    }
    else{
        document.querySelector(".remark").innerHTML = " Sorry you dont qualify for a discount ☹️";
    }
        
      
    }
   
    

// function to clear input boxes
document.querySelector("button.clr").onclick = function (){
 
        shoe.value = 0;
        bag.value = 0;
        necklace.value = 0;
        belt.value = 0;
        dress.value = 0;
        remark.innerHTML="REMARK";
        result.innerHTML="TOTAL";
      
}
