function calculate(){
    let tipValue =0;
    if(customBool){
        tipValue = customP*billValue;
    }
    else{
        tipValue = percentage * billValue;
    }
    let perTip = (tipValue/nPeople).toFixed(2);
    let perTotal = ((billValue + tipValue)/nPeople).toFixed(2);

    const tipamount = document.querySelector('.tipres');
    tipamount.innerHTML = perTip;

    const totalamount = document.querySelector('.totalres');
    totalamount.innerHTML = perTotal;
}


//change cell color when selected:
let percentage = 0;
let customBool = false;
const tipCell = document.querySelectorAll(".tip-cell");

tipCell.forEach((cell) => {
    cell.addEventListener('click', () => {
        cell.classList.toggle('tip-cell-active'); //Add active cell class
        tipCell.forEach((otherCell) => { //for everyother cell remove active class 
            if (cell !== otherCell) {
                otherCell.classList.remove("tip-cell-active");
            }
        });
        //getting tip %:
        const value = cell.innerHTML;
        switch(value){
            case "5%":
                percentage = 0.05;
                break;
            case "10%":
                percentage = 0.1;
                break;
            case "15%":
                percentage = 0.15;
                break;
            case "25%":
                percentage = 0.25;
                break;
            case "50%":
                percentage= 0.5;
                break;
        }
        customBool = false;
    })
});

//getting custom tip value:
let customP = 0;
const custom = document.getElementById('customTip');
custom.addEventListener('blur', ()=>{
    customP = (custom.value)/100;
    customBool = true;
});
//remove active cell whn custom input is clicked.
custom.addEventListener('click',()=>{
    tipCell.forEach((cell) =>{
        cell.classList.remove('tip-cell-active');
    })
})

//Getting values in var:
let billValue = 0;
const bill = document.getElementById("billValue");
bill.addEventListener("blur", ()=>{
    billValue = parseFloat(bill.value);
});

//getting number of people:
let nPeople = 0;
const npeople = document.getElementById("npeople");
npeople.addEventListener("input", ()=>{
    nPeople = npeople.value;
    if(nPeople == '' || nPeople == 0){
        document.querySelector('.warning').style.display = 'block';
        npeople.style.border = '1px solid red';
    }else{
        document.querySelector('.warning').style.display = 'none';
        npeople.style.border = 'none';
        calculate();
    }
   
});

const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener('click', () =>{
    const tipamount = document.querySelector('.tipres');
    tipamount.innerHTML = 0.0;
    const totalamount = document.querySelector('.totalres');
    totalamount.innerHTML = 0.0;
    bill.value = ''; // reset value to placeholder;
    tipCell.forEach(cell => {
        cell.classList.remove("tip-cell-active");
    })
    custom.value = '';
    npeople.value = '';
    
});







