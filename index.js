function countEvens(x){
    s=0;
    for(var i=0;i<=x.length;i++){
        if(x[i]%2==0){
            s=s+1;
        }
    }
    return s;
}

function countHi(x){
    y=0;
    for(var i=0;i<=x.length;i++){
        if(x[i]=="h" &&  x[i+1]=="i"){
            y=y+1;
        }
    }
    return y;
}

function no14(x){
    r=0;
    s=0;
    for(var i=0;i<=x.length;i++){
        if(x[i]==1){
            r=r+1;
            }
        if(x[i]==4){
            s=s+1;
        }
    }
    if(r==0 || s==0){
        return true;
    }else{
        return false;
    }
}

function either24(x){
    y=0;
    z=0;
    for(var i=0;i<=x.length;i++){
        if(x[i]==2 && x[i+1]==2){
            y=1;
        }
        if(x[i]==4 && x[i+1]==4){
            z=1;
        }
    }
    if((y==1 && z==1) || (y==0 && z==0)){
        return false;
    }else{
        return true;
    }
}

function makeChocolate(x, y, z){
    var a=5*y;
    if(z-a<=x){
        if(z-a>=0){
            return z-a;
        }else{
            if(z%5<=x){
                return z%5;
            }else{
                return -1;
            }
        }
    }else{
        return -1;
    }
}

function luckySum(x,y,z){
    if(x==13){
        x=0;
        y=0;
        z=0;
    }
    if(y==13){
        y=0;
        z=0;
    }
    if(z==13){
        z=0;
    }
    return x+y+z;
}

function maxBlock(y){
    var a = "";
    var b = 1;
    var c = 0;
    for(var i=0; i<y.length; i++){
        a = y.substring(i,i+1);
        for(var j=i+1; i<y.length; j++){
            if(y.substring(j,j+1) == a){
                b=b+1;
            }else{
                break;
            }
        }
        if(b>c){
            c=b;
        }
        b = 1;
    }
    return c;
}

function linearIn(x,y){
    var rs = 0;
    for(var i=0;i<=x.length;i++){
        if(x[i]==y[rs]){
            rs=rs+1
        }
        if(rs==y.length+1){
            return true;
        }
    }
    return false;
}

function countTriple(x){
    var y = -1;
    for(var i=0;i<=x.length;i++){
        if(x.substring(i,i+1)==x.substring(i+1,i+2)  && x.substring(i+1,i+2)==x.substring(i+2,i+3)){
            y=y+1;
        }
    }
    return y;
}

function sameEnds(z) {

    var start = "";

    for(var i = 0; i <= z.length-1; i++){
        if(z.substring(0, i) == z.substring(z.length-i,z.length) && i<=z.length-i){
            start = z.substring(0,i);
        }
    }

    return start;
}