class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset=createButton('reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("Rock,Paper,Scissor");
        this.title.position(400, 100);
        this.title.style('font-size', '50px');
        this.title.style('color', 'darkblue');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(110,120)
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Welcom to the game:" + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'black');
            this.greeting.style('font-size', '30px');
        });
        this.reset.mousePressed(()=>{
            game.update(0);
            player.updateCount(0);
            })
              }
            }