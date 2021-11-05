// JavaScript Document
	var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.lineCap = "round";

    //Create Greaph
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#bbb";
	  
	var i;  
	// Create verticle Line
	for(i=1;i<=5;i++){
	  ctx.moveTo(0,80*i);
	  ctx.lineTo(800,80*i);
	}
	ctx.stroke();

	// Create Horizental Line
	for(i=1;i<=3;i++){
	  ctx.moveTo(200*i,0);
	  ctx.lineTo(200*i,800);
	}
	ctx.stroke();




function DrawGraph(){
	var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
	//clear the canvas so we can draw a fresh clock
	ctx.clearRect(0, 0, 800, 400);
    ctx.lineCap = "round";

    //Create Greaph
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#bbb";
	  
	var i;  
	// Create verticle Line
	for(i=1;i<=5;i++){
	  ctx.moveTo(0,80*i);
	  ctx.lineTo(800,80*i);
	}
	ctx.stroke();

	// Create Horizental Line
	for(i=1;i<=3;i++){
	  ctx.moveTo(200*i,0);
	  ctx.lineTo(200*i,800);
	}
	ctx.stroke();
}

function DrawLineAll(){	
	DrawLine(0);
	DrawLine(1);
	DrawLine(2);
}

function DrawLine(line){
	var v11 = parseFloat(document.getElementById("value11").value);
	var v21 = parseFloat(document.getElementById("value21").value);
	var v31 = parseFloat(document.getElementById("value31").value);
	
	var v12 = parseFloat(document.getElementById("value12").value);
	var v22 = parseFloat(document.getElementById("value22").value);
	var v32 = parseFloat(document.getElementById("value32").value);	
	
	var v13 = parseFloat(document.getElementById("value13").value);
	var v23 = parseFloat(document.getElementById("value23").value);
	var v33 = parseFloat(document.getElementById("value33").value);	
	
	var v14 = parseFloat(document.getElementById("value14").value);
	var v24 = parseFloat(document.getElementById("value24").value);
	var v34 = parseFloat(document.getElementById("value34").value);		

	var v15 = parseFloat(document.getElementById("value15").value);
	var v25 = parseFloat(document.getElementById("value25").value);
	var v35 = parseFloat(document.getElementById("value35").value);
	
	var line = parseFloat(line);

	var y_axis =[ 
				[v11,v12,v13,v14,v15],
				[v21,v22,v23,v24,v25],
				[v31,v32,v33,v34,v35]
			];
				
	var min = 9999;
	var max = -9999;
	var i,j;

	for(i=0;i<=2;i++){
		for(j=0;j<=4;j++){
			//Determine the max value
			if(max<y_axis[i][j]){
				max=y_axis[i][j];
			}else{
				max=max;
			}
			//Determine the min value
			if(min>y_axis[i][j]){
				min=y_axis[i][j];
			}else{
				min=min;
			}
		}//End of j
	}//End of i

	var diff = max-min;

	for(i=0;i<=2;i++){
		for(j=0;j<=4;j++){
			y_axis[i][j] = (y_axis[i][j]/max)*100;
		}
	}	

	DrawGraph();

	//Create Points
	ctx.strokeStyle = "red";
	for(i=0;i<=4;i++){
		ctx.beginPath();
		ctx.arc(200*i,400-(y_axis[line][i]*4),5,0,2*Math.PI);
		ctx.fillStyle = "red";	
		ctx.fill();
		ctx.stroke();
	}

    // set some style
    ctx.lineWidth = 5;
	if(line==0){
    	ctx.strokeStyle = "blue";		
	}else if(line==1){
		ctx.strokeStyle = "green";
	}else if(line==2){
		ctx.strokeStyle = "yellow";		
	}

	//Draw the line
	ctx.beginPath();
	ctx.moveTo(0,400-(y_axis[line][0])*4);	
	for(i=1;i<=4;i++){
		ctx.lineTo(200*i, 400-(y_axis[line][i]*4));
		ctx.stroke();		
	}
}

    
function validNum(event){
	var key = window.event ? event.keyCode : event.which;
	if (key==46) {
		return true;
	}
	else if ( key < 48 || key > 57) {
		return false;
	}
	else return true;
};
	
function LiveName(InID, ValID){
	document.getElementById(InID).innerHTML = document.getElementById(ValID).value;
}	