function grades (){
	
	var numSubject=0;
	var total=0;
	var input=0;
  	var average=0;
	  
	numSubject=prompt("Enter the amount of subjects you are taking");
		for(var i=1; i<=numSubject; i++){
			input= parseInt(prompt("Enter grade you received for subject " +i));
			if( input>=0 && input <=100){
				total=total+input;
			}
			else {
				alert("Enter a score between 0 and 100");
				i--;
			}
			//console.log(input);
		}
		
		//console.log("Total is "+total);
		average = total/numSubject;
		//console.log("Average is "+average);
		
		if (average >=90 && average <=100){
			document.getElementById("results").innerHTML+="Your average is "+average+" <br>You got A";
			//console.log(average);
			//console.log("A");
		}
		else if (average >=80 && average <=89){
			document.getElementById("results").innerHTML = "Your average is "+average+" <br>You got B";
        	// console.log(average);
        	// console.log("B");
		}
		else if (average >=70 && average <=79){
			document.getElementById("results").innerHTML = "Your average is "+average+" <br>You got C";
        	// console.log(average);
        	// console.log("c");
		}
		else if (average >=60 && average <=69){
			document.getElementById("results").innerHTML = "Your average is "+average+" <br>You got D";
        	// console.log(average);
        	// console.log("d");
		}
		else if (average <60){
			document.getElementById("results").innerHTML = "Your average is "+average+" <br>You got F";
        	// console.log(average);
        	// console.log("F");
		}
}

