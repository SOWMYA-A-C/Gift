class Form {
  constructor() {
    this.title = createElement('h2');
    this.input = createInput("  Name (1st Letter Capital)");
    this.button = createButton("Touch This For Your Gift");
    this.greeting = createElement('h3');
    this.greeting2=createElement('h5');
    player.name = this.input.value();
  }

  hide(){
    // this.greeting.hide();
    this.title.hide();
    this.button.hide();
    this.input.hide();
  }

  // func(){
   
  // }

  display(){
    this.title.html("Welcome To Your Gift !");
    this.title.position(displayWidth/2 - 120, 0);
    this.input.position(displayWidth/2 - 85, 300);
    this.button.position(displayWidth/2 - 80, 350);
    
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.title.hide();
      //var text=this.input.value()
      if(this.input.value() === 'Harsh' && this.button.mousePressed){
        //background(bg);
        bg = loadImage('images/gb.png');
       //bg="white"
       flag=1
       positionFlag=1
        this.greeting.html("Happy Anniversary");

        this.greeting.position(displayWidth/2 - 85, 300);
        this.greeting2.html("Drag the mouse for surprise");

        this.greeting2.position(displayWidth/2 -60, 350);
        
        console.log("IN")
      } else {
        this.greeting.html("Sorry " + player.name + ", but for the time you are not supposed to access this");
        
      }
    });
  }
}
