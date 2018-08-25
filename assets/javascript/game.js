//move to defender
//move to character
//attack
//counter attack
//resolve damage, check for win or loss
//remove character
//new game


$(document).ready(function () {

    function Character(name, ap, ba, cp, hp, bhp){
        this.name = name;
        this.attackPower = ap;
        this.baseAttack = ba;
        this.counterAttackPower = cp;
        this.hp = hp;
        this.baseHp = bhp;
    }

    function attack(character, opponent){
        opponent.hp -= character.attackPower;
        $("#" + opponent.name + "-hp").text(opponent.hp);
    }

    function counterAttack(character, opponent){
        character.hp -= opponent.counterAttackPower;
        $("#" + character.name + "-hp").text(character.hp);
    }

    function attackUp(character){
        character.attackPower += character.baseAttack;
        $("#" + character.name +"-ap").text(character.attackPower);
    }

    function removeOpponent(){
        isPickedOpponent = false;
        opponent = null;
        $(".opponent").children().hide();
    }

    function resetCharacter(character){
        character.hp = character.baseHp;
        character.attackPower = character.baseAttack;
        $("#" + character.name + "-hp").text(character.hp);
        $("#" + character.name + "-ap").text(character.attackPower);
    }

    console.log("running");
    var kirk = new Character("kirk", 5, 5, 15, 150, 150);
    var spock = new Character("spock",20, 20, 20, 70, 70);
    var luke = new Character("luke",2, 2, 10, 200, 200);
    var darth = new Character("darth",10, 10, 10, 100, 100);
    var wins = 0;

    var isPickedCharacter = false;
    var isPickedOpponent = false;
    var yourCharacter;
    var opponent;

    function chooseCharacter(character) {
        $("#" + character.name).appendTo(".your-character");
        yourCharacter = character;
    }

    function chooseOpponent(character) {
        $("#" + character.name).appendTo(".opponent");
        opponent = character;
    }

    function resetGame(){
        wins = 0;
        $(".card").appendTo(".dugout");
        $(".dugout").children().show();
        isPickedCharacter = false;
        isPickedOpponent = false;
        resetCharacter(kirk);
        resetCharacter(spock);
        resetCharacter(luke);
        resetCharacter(darth);
    }

    $("#kirk").click(function () {
        if (!isPickedCharacter) {
            isPickedCharacter = true;
            chooseCharacter(kirk);
        }
        else if (!isPickedOpponent) {
            isPickedOpponent = true;
            chooseOpponent(kirk);
        }
    });

    $("#luke").click(function () {
        if (!isPickedCharacter) {
            isPickedCharacter = true;
            chooseCharacter(luke);
        }
        else if (!isPickedOpponent) {
            isPickedOpponent = true;
            chooseOpponent(luke);
        }
    });

    $("#spock").click(function () {
        if (!isPickedCharacter) {
            isPickedCharacter = true;
            chooseCharacter(spock);
        }
        else if (!isPickedOpponent) {
            isPickedOpponent = true;
            chooseOpponent(spock);
        }
    });

    $("#darth").click(function () {
        if (!isPickedCharacter) {
            isPickedCharacter = true;
            chooseCharacter(darth);
        }
        else if (!isPickedOpponent) {
            isPickedOpponent = true;
            chooseOpponent(darth);
        }
    });

    $("#attack").click(function () {
        attack(yourCharacter,opponent);
        counterAttack(yourCharacter,opponent);
        attackUp(yourCharacter);

        if(yourCharacter.hp <= 0){
            alert('you lose');
            resetGame();
            return;
        }

        if(opponent.hp <= 0){
            alert('opponent defeated! Choose another opponent.');
            removeOpponent();
            wins++;
        }

        if(wins === 3){
            alert('Winner!!!');
            resetGame();
        }
    });


});