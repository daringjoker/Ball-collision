function Ball(index){
    this.index=index;

    this.velocity=new Vector(2,2);
    this.velocity.setDirn(random(0,2*Math.PI));
    this.velocity.unitify();
    this.velocity=this.velocity.times(random(1,4));
    
    this.radius=random(4,9);

    let r=randomInt(0,255);
    let g=randomInt(0,255);
    let b=randomInt(0,255);
    this.color=`rgb(${r},${g},${b})`;
    
    this.position=new Vector(random(this.radius,window.GAME_WIDTH-this.radius)
                            ,random(this.radius,window.GAME_HEIGHT-this.radius));

    this.update=function(){
        this.position=this.position.add(this.velocity);
    }

    this.collision=function(balls)
    {
        if(this.position.x>window.GAME_WIDTH-this.radius || this.position.x<this.radius)
        {
            this.velocity.x*=-1;
            this.position.x=this.position.x<this.radius?this.radius+1:window.GAME_WIDTH-this.radius;
        }
        if(this.position.y>window.GAME_HEIGHT-this.radius || this.position.y<this.radius)
        {
            this.velocity.y*=-1;
            this.position.y=this.position.y<this.radius?this.radius+1:window.GAME_HEIGHT-this.radius;
        }
        for(let i=this.index+1;i<balls.length;i++){
            let ball=balls[i];
            let dist=distance(this.position,ball.position);
            let minimumDistance=(this.radius+ball.radius)
            if(dist<=minimumDistance){
                let massSum=this.radius+ball.radius;

                let term1=this.velocity.times((this.radius-ball.radius)/massSum);
                let term2=ball.velocity.times((2*ball.radius)/massSum);
                
                let term3=ball.velocity.times((ball.radius-this.radius)/massSum);
                let term4=this.velocity.times((2*this.radius)/massSum);

                this.velocity=term1.add(term2);
                ball.velocity=term3.add(term4);

                //pushing the ball back so that it is completely outside the current balls area
                let deltaVec=ball.position.subtract(this.position);
                deltaVec.unitify();
                deltaVec=deltaVec.times(minimumDistance+1);
                ball.position=this.position.add(deltaVec);
                // console.log(ballprevpos,ball.position,distance(ball.position,ballprevpos),this.radius+ball.radius);
            }
        }
        this.position=this.position.add(this.velocity);
    }
    
}