class Box{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
    this.body = Bodies.rectangle(x,y,width,height);
    this.width = width;
    this.height = height;
    World.add(world,this.body);

}
display(){
    var pos = this.body.position;
    fill(255,0,0);
    rect(pos.x, pos.y, this.width, this.height);
}
}