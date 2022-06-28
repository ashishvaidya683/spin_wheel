/*function myFunction(){
    var x =1024
    var y=9999

    var deg = Math.floor(Math.random() * (x-y)) +y ;
    document.querySelector('.container').style.transform = "rotate("+deg+"deg)";
}*/

function shuffle(array){
    var currentIndex = array.length,
    randomIndex;

    while(0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex --;
        [array[currentIndex], array[randomIndex]] = [
            array[currentIndex],
            array[currentIndex],
        ];
    }
    return array; 
}

function spin() {
    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let selectItem = "";


    let fiftyper = shuffle([1890,2250,2610,5548]);
    let twentyper = shuffle([1850, 2210, 2570]);
    let freeshipping = shuffle([1770,2130,2490,5875,2658]);
   

    let result = shuffle([
        fiftyper[0],
        twentyper[0],
        freeshipping[0],

     
    ]);

    if (fiftyper.includes(result[0])) selectItem = "50% OFF";
    if (twentyper.includes(result[0])) selectItem = "20% OFF";
    if (freeshipping.includes(result[0])) selectItem = "Free shipping";


    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate("+ result[0] + "deg)";
    element.classList.remove("animate");
    setTimeout(function() {
        element.classList.add("animated");
    },5000);

    setTimeout(function() {
        alert("you won" +selectItem)
    },5500);

    setTimeout(function() {
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(90deg)";
    }, 6000);
}