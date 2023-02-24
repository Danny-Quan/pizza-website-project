var allPanels= document.querySelectorAll('.adj');
const allBtns= document.querySelectorAll('.expand');
var firstText= document.getElementsByClassName('figure-01-text');
let arrBtns= [...allBtns];
let arrAdj= [...allPanels];

var counter1=0;
var counter2=0;
var counter3=0;

arrBtns[0].addEventListener('click', ()=>{
    counter1++;
    if(arrAdj[0].className.includes('figure-01-text') && counter1==1){
        arrAdj[0].style='display:block;';
        arrBtns[0].textContent='-'
    }else{
        arrAdj[0].style='display:none';
        arrBtns[0].textContent='+'
        if(counter1==2){
            counter1=0;
        }
    }
})
arrBtns[1].addEventListener('click', ()=>{
    counter2++;
    if(arrAdj[1].className.includes('figure-02-text') && counter2==1){
        arrAdj[1].style='display:block;';
        arrBtns[1].textContent='-'
    }else{
        arrAdj[1].style='display:none';
        arrBtns[1].textContent='+'
        if(counter2==2){
            counter2=0;
        }
    }
})
arrBtns[2].addEventListener('click', ()=>{
    counter3++;
    if(arrAdj[2].className.includes('figure-03-text') && counter3==1){
        arrAdj[2].style='display:block;';
        arrBtns[2].textContent='-'
    }else{
        arrAdj[2].style='display:none';
        arrBtns[2].textContent='+'
        if(counter3==2){
            counter3=0;
        }
    }
})