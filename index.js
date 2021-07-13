let count = 0;
let countEL = document.getElementById("countNumber");
let saveEL = document.getElementById("countParagraph");
function increment() {
    count = count + 1;
    countEL.textContent = count ;
}
function save() {
    saveEL.textContent = saveEL.textContent + " - " + count ;
    count = 0 ;
    countEL.textContent = 0 ;
}
