function calc(victory, defeat) {
    let balance =  victory - defeat;
    return balance;
}


let playerResults = calc(80,12)
let level


switch (true) {


    case playerResults <=10:
        level = 'Ferro';
        break;


    case playerResults >= 10 && playerResults <= 20:
        level = 'Bronze';
        break; 


    case playerResults >= 20 && playerResults <= 50:
        level = 'Prata';
        break;


    case playerResults >= 50 && playerResults <= 80:    
        level = 'Ouro';
        break;


    case playerResults >= 80 && playerResults <= 90: 
        level = 'Diamante';
        break;  


    case playerResults >= 90 && playerResults <= 100:
        level = 'Lendário';
        break;  


    case playerResults >= 100: 
        level = 'Imortal';
        break;  


    default:
        level = 'Nível não catálogado!';           
}


console.log(`O jogador possui um saldo de ${playerResults} vitórias e está no nível de  ${level}`)




