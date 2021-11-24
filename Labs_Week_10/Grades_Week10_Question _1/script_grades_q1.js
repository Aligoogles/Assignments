
let numSubject=0;
let grade=0;
let listSubject = [] ;

function grades (){

		numSubject=parseInt(prompt( "Enter the amount of subjects you are taking"));
		listSubject=[numSubject];


		for(i=0; i<numSubject; i++){

			listSubject[i]=parseInt(prompt("Enter the grade you received for subject " +(i+1)));
			if (listSubject[i]<=100){
				grade=grade+listSubject[i];

			}
			else {
				alert("Enter a grade between 0 and 100");
				i--;
			}
		}
		for(i=0; i<numSubject; i++){
			alert("You entered "+listSubject[i]+" for subject "+(i+1));
		}
		
		grade=grade/numSubject;
		alert("Average result " +grade);
}