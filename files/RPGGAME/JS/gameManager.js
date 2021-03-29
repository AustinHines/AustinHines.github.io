let GameManager = {
    setGameStart: function (classType) {
        this.resetPlayer(classType);
        this.setPreFight();
        
    },
    resetPlayer: function (classType) {
        switch (classType) {
            case "Warrior":
                player = new Player(classType, 300, 0, 300, 100, 100);
                break;
            case "Rouge":
                player = new Player(classType, 100, 0, 200, 200, 300);
                break;
            case "Hunter":
                player = new Player(classType, 100, 0, 100, 300, 300);
                break;
            case "Mage":
                player = new Player(classType, 200, 300, 100, 100, 100);
                break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="img/avatar-player/'+ classType +'.png" class="img-avatar"><div><h3>' + classType + '</h3><p class = "health-player">Health:' + player.health + '</p><p>mana:' + player.mana + '</p><p>strength:' + player.strength + '</p><p>agility:' + player.agility + '</p><p>speed:' + player.speed + '</p></div>';

    },
    setPreFight: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Task: Find a enemy</p>';
        getActions.innerHTML = '<a href="#" class="button-prefight" onclick="GameManager.setFight()">Search for enemy</a>';
        getArena.style.visibility = "visible";
    },
    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        //CREATE ENEMY!
        let enemy00 = new Enemy("goblin", 600, 0, 50, 100, 100);
        let enemy01 = new Enemy("troll", 700, 90, 150, 80, 150);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
            default:
                break;
        }
        getHeader.innerHTML = '<p>Task: Choose your move</p>';
        getActions.innerHTML = '<a href="#" class="button-prefight" onclick="PlayerMoves.calcAttack()">Attack</a>';
        getEnemy.innerHTML = '<img src= "img/avatar-enemies/'+ enemy.classType +'.png" alt = "'+ enemy.Type +'" class ="img-avatar"><div><h3>'+ enemy.classType +' </h3><p class = "health-enemy">Health:'+ enemy.health +'</p><p>Mana:'+ enemy.mana +'</p><p>Strength:'+ enemy.strength +'</p><p>Agility:'+ enemy.agility +'</p><p>speed:'+ enemy.speed +'</p></div> ';
    }
};