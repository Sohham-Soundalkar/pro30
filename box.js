class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visibility=255;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("blue");
      rect(pos.x, pos.y, this.width, this.height);
      console.log(this.body.speed);
      if(this.body.speed>3){
          World.remove(world,this.body);
          push();
          this.visibility=this.visibility - 2;
          tint(255,this.visibility);
          rect(this.body.position.x, this.body.position.y, 30, 40);
          pop();
        }
    }
  }