class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",p1_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", p2_img);
    players=[player1,player2];
rock=createSprite(500,100);
rock.addImage("rock",rock_img);
rock.scale=0.4;
scissor=createSprite(400,200);
scissor.addImage("scissor",scissor_img);
scissor.scale=0.4;
paper=createSprite(600,200);
paper.addImage("paper",paper_img);
paper.scale=0.5;
        }
    
    play(){
        
        form.hide();

        Player.getPlayerInfo();
        image(back_img, 0, 0, 1000, 800);
        var x =250;
        var y=150;
        var index =0;
        drawSprites();

        for(var plr in allPlayers){
        
            index = index+1;
            x = 500-allPlayers[plr].distance;
            y=500;
            
            players[index -1].x = x;
            players[index - 1].y = y;
        }
        
    }

    end(){
       console.log("Game Ended");
    }
}