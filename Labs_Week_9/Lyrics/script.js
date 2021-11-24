
    var text="bottles";
    var beers=99;
    
    for(beers=99; beers>=0; beers--){   
        
        if(beers==2){
            document.getElementById("lyrics").innerHTML+=beers+" " +text+" of beer on the wall, " +beers+ " " +text+" of beer";
            document.getElementById("lyrics").innerHTML+="<br />Take one down and pass it around, ";
            text="bottle";
            document.getElementById("lyrics").innerHTML+=(beers-1)+" " +text+" of beer on the wall";
            document.getElementById("lyrics").innerHTML+="<br /><br />"; 
          }
          
        else if(beers==1){
            document.getElementById("lyrics").innerHTML+=beers+" " +text+" of beer on the wall, " +beers+ " " +text+" of beer";
            document.getElementById("lyrics").innerHTML+="<br />Take one down and pass it around, ";
            text="bottles";
            document.getElementById("lyrics").innerHTML+="No more " +text+" of of beer on the wall";
            document.getElementById("lyrics").innerHTML+="<br /><br />"; 
          }
          
        else if (beers==0){
            text="bottles";
            document.getElementById("lyrics").innerHTML+="<br /> No more "+text+" of beer on the wall, no more " +text+" of beer ";
            document.getElementById("lyrics").innerHTML+="<br /> Go to the store and buy some more, 99 "+text+" of beer on the wall";
        }
        else{
            document.getElementById("lyrics").innerHTML+=beers+" " +text+" of beer on the wall, " +beers+ " " +text+" of beer";
            document.getElementById("lyrics").innerHTML+="<br />Take one down and pass it around, ";
            document.getElementById("lyrics").innerHTML+=(beers-1) + " "+text+" of beer on the wall";
            document.getElementById("lyrics").innerHTML+="<br /><br />"; 
        }
	}


