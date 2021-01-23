class Ground{

//properties

constructor(x,y,width,height){

    var ground_options ={
        isStatic: true
    }

    this.body = Bodies.rectangle(x,y,width,height,ground_options);
    World.add(world,this.body);

    this.width=width;
    this.height=height;
}

display(){

    var pos= this.body.position;  //namespacing

    rectMode(CENTER);
    fill(255);
    rect(pos.x,pos.y,this.width,this.height);

}



}