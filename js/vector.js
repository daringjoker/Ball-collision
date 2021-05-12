function Vector(x=1,y=0){
    this.x=x;
    this.y=y;
    this.set=function(x,y){
        this.x=x;
        this.y=y;
    }

    this.unitify=function(){
        let magnitude=this.getMag();
        this.x/=magnitude;
        this.y/=magnitude;
    }

    this.setDirn=function(angle){
        let magnitude=this.getMag();
        this.x=magnitude*Math.cos(angle);
        this.y=magnitude*Math.sin(angle);
    }
    this.setMag=function(magnitude)
    {
        let angle=this.getDirn();
        this.x=magnitude*Math.cos(angle);
        this.y=magnitude*Math.sin(angle);
    }

    this.getDirn=function(){
        let angle= Math.atan(this.y/this.x);
        if(angle<0)angle+=2*Math.PI;
        return angle;
    }

    this.getMag=function(){
        return Math.sqrt(this.x*this.x+this.y*this.y);
    }

    this.add=function(vector)
    {
        let n=new Vector();
        n.x=this.x+vector.x;
        n.y=this.y+vector.y;
        return n;
    }

    this.subtract=function(vector)
    {
        let n=new Vector();
        n.x=this.x-vector.x;
        n.y=this.y-vector.y;
        return n;
    }
    

    this.times=function(scaler){
        let n=new Vector();
        n.x=this.x*scaler;
        n.y=this.y*scaler;
        return n;
    }

    this.dot=function(vector){
        return this.x*vector.x+this.y*vector.y;
    }
}