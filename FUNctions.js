let boss = ("Almighty Grant");
    //see if they want to play
function oldGame(){
let play = prompt("Do you want to play a game?");
if (play === 'Yes'){
    let name = prompt("Enter your characters name.");
    //got there character name

    console.log(name +" has " + lives + " lives.");
    console.log(boss + " has " + bossHP + " lives.");
    //they know they have 40 lives

    //initiate fight sequence
    let fight = false;
    while (fight === false){
        if(lives > 0){
            lives -= Math.floor(Math.random() * 2) +1;
                console.log(name + " has " + lives + " lives.");
            }else if (lives <= 0){
                console.log("You lose.");
            }
        if(bossHP > 0){
            bossHP -= Math.floor(Math.random() * 2) +1;
                console.log(boss + " has " + bossHP +" lives.");
            }else if (bossHP <= 0){
                wins += 1;
                console.log("You've taken one of the Almighty Grant's lives.");
                bossHP = 10;
            }
        if(lives <= 0){
            fight = true;
            console.log("You have fallen to the Almighty Grant...")
        }
        if(wins >= 3){
            fight = true;
            console.log(name + " has defeated the Almighty Grant!");
        }
    }
}
}

function setup(){
    let userHp = 40;
    let bossHP = 10;
    let wins = 0;
    startCombat(userHp, bossHP, wins);
}
function startCombat(userHp, bossHP, wins){
    let play = prompt("Do you want to play?");
    if (play === "yes"){
    let goOn = true;
    console.log(`Combat is starting!`);
    while(goOn === true){
        let choice = prompt(`Do you wish to attack (a) or quit (q)?`);
    if (choice === "a"){
        let userDamage = getDamage(1, 5);
        let bossDamage = getDamage(1, 5);
        if(bossHP > 0){
            bossHP -= userDamage;
            console.log(`The Almighty Grant take ${userDamage} damage.`);}
        else if(bossHP <= 0){
            console.log("You have destroyed a piece of The Almighty Grant.");
            wins++;
            bossHP = 10;
        }
        if(userHp > 0){
            userHp -= bossDamage;
        console.log(`The player takes ${bossDamage} damage.`);
    }
        
        goOn = isGameContinued(userHp, bossHP, wins);
    }
    else if(choice === "q"){
        console.log("Ok, thanks for playing.");
        goOn = false; 
    }else{
        console.log("Hey I don't understand, let's try this again.");
    }
    }
}
}
function isGameContinued(userHp, bossHP, wins){
    console.log(`The player has ${userHp}hp left.`);
    console.log(`The Almighty Grant has ${bossHP}hp left.`);
    if(wins >= 3){
        console.log("Congratulations! You have defeated the Almighty Grant!");
    }else if(userHp <= 0){
        console.log(`You have been slain by The Almighty Grant...`);
        return false; 
    }else{
    return true;}
}

function getDamage(min, max){
    let damage = Math.floor(Math.random() * 5) +1;
    return damage;
}


setup();