var value=[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];
var sum=0;
var average=0;

function meanSum (){
    for(i=0; i<value.length; i++){
    sum+=value[i];
    }
    alert("The sum is "+sum);
        
    if(value.length>0){
        average= Math.floor(sum/value.length);
    }
    alert("The average is " +average);

}