let mousePos = [];
let posX = Math.floor(Math.random() * 800);
let posY = Math.floor(Math.random() * 600);
let count = 5;
const circle = document.querySelector("#circle");
console.log(posX, posY);
let found = false;
let attempts = 20;

function reloadCountDown(){
    count -= 1;
    if(count == 0){
        location.reload();
    }
    else{
        document.getElementById("countdown").innerHTML = `Гра перезапуститься через ${count} секунд`;
    }
    
}

window.addEventListener("mousedown", function(e){
    let x = e.x - 8;
    let y = e.y - 120;
    let dist;
    

    if(x < 0 || y < 0 || x > 880 || y > 660){
        return;
    }
    else{
        console.log(`On map: X:${x} | Y:${y}`);
        pos = [x, y];
        attempts -= 1;
        document.getElementById("attempts").innerHTML = `Кількість сроб: ${attempts}`;
    }
    if(attempts <= 0){
        dist = "Ти не знайшов звідки готувалось нападіння на білорусь за відведену кількість спроб. За це лукашенко тебе знайде і розстріляє";
        setInterval(reloadCountDown, 1000);
    }
    else{
        distX = Math.abs(posX - x);
        distY = Math.abs(posY - y);
        distation = Math.floor(Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2)));
        if(!found){
            circle.style.cssText = `position: absolute; top: ${e.y-20}px; left: ${e.x-20}px;`;
        }
        console.log(distation)
        if(distation > 500){
            dist = "Дуже холодно";
        }
        else if(distation > 300){
            dist = "Холодно";
        }
        else if(distation > 150){
            dist = "Прохолодно";
        }
        else if(distation > 75){
            dist = "Тепло";
        }
        else if(distation > 40){
            dist = "Дуже тепло";
        }
        else if(distation > 20){
            dist = "Гаряче";
        }
        else{
            dist = "Ти знайшов звідки готувалось нападіння на білорусь";
            setInterval(reloadCountDown, 1000);
        }
        
    }
    document.getElementById("distation").innerHTML = dist;
});

