document.getElementById("fclass-increase").addEventListener("click", function(){
	handleTicketCount(true,"fclass");

});

document.getElementById("fclass-decrease").addEventListener("click", function(){
	handleTicketCount(false,"fclass");
	
});

document.getElementById("eclass-increase").addEventListener("click", function(){
	handleTicketCount(true,"eclass");

});

document.getElementById("eclass-decrease").addEventListener("click", function(){
	handleTicketCount(false,"eclass");
	

});

document.getElementById("book-now").addEventListener("click",function(){

alert("I tried hard but could not solve it,Admin,please give me the solution how i can display total results,thank you");

});



function handleTicketCount(isIncrease,ticketClass){

	const ticketClassInputCount = getInputValue(ticketClass);
	let ticketClassInputNewCount = ticketClassInputCount;
	if(isIncrease==true && ticketClassInputCount >=0){
		ticketClassInputNewCount = ticketClassInputCount+1;
	}
	if(isIncrease==false && ticketClassInputCount >0){
		ticketClassInputNewCount = ticketClassInputCount-1;
	}

	let fClassTotal = 0;
	let eClassTotal = 0;


	if(ticketClass == "fclass"){
		ticketClassTotal = ticketClassInputNewCount * 150;
	}
	if(ticketClass == "eclass"){
		ticketClassTotal = ticketClassInputNewCount * 100;
	}
	document.getElementById(ticketClass + "-input").value = ticketClassInputNewCount;
	totalCalculation();

}



function getInputValue(ticketClass){
	const ticketClassInput = document.getElementById(ticketClass + "-input");
	const ticketClassInputCount = parseInt(ticketClassInput.value);
	return ticketClassInputCount;
}


function totalCalculation(ticketClass){
	const fClassCount = getInputValue("fclass");
	const eClassCount = getInputValue("eclass");
	const totalPrice = fClassCount*150 + eClassCount*100;
	document.getElementById("subtotal-count").innerText = '$'+ totalPrice;

	const tax = Math.round(totalPrice * 0.1);
	document.getElementById("tax-amount").innerText = '$' + tax;

	const grandTotal = totalPrice + tax;
	document.getElementById("grand-total").innerText = '$' + grandTotal;



}

/*document.getElementById("fclass-increase").addEventListener("click", function(){
	const fClassInput = document.getElementById("fclass-input");
	const fClassInputCount = parseInt(fClassInput.value);
	const fClassInputNewCount = fClassInputCount+1;
	fClassInput.value = fClassInputNewCount;
	const fClassTotal = fClassInputNewCount * 150;
	document.getElementById("subtotal-count").innerText = '$' + fClassTotal;

});

document.getElementById("fclass-decrease").addEventListener("click", function(){
	const fClassInput = document.getElementById("fclass-input");
	const fClassInputCount = parseInt(fClassInput.value);
	const fClassInputNewCount = fClassInputCount-1;
	fClassInput.value = fClassInputNewCount;
	const fClassTotal = fClassInputNewCount * 150;
	document.getElementById("subtotal-count").innerText = '$' + fClassTotal;

});

document.getElementById("eclass-increase").addEventListener("click", function(){
	const eClassInput = document.getElementById("eclass-input");
	const eClassInputCount = parseInt(eClassInput.value);
	const eClassInputNewCount = eClassInputCount+1;
	eClassInput.value = eClassInputNewCount;
	const eClassTotal = eClassInputNewCount * 100;
	document.getElementById("subtotal-count").innerText = '$' + eClassTotal;

});

document.getElementById("eclass-decrease").addEventListener("click", function(){
	const eClassInput = document.getElementById("eclass-input");
	const eClassInputCount = parseInt(eClassInput.value);
	const eClassInputNewCount = eClassInputCount-1;
	eClassInput.value = eClassInputNewCount;
	const eClassTotal = eClassInputNewCount * 100;
	document.getElementById("subtotal-count").innerText = '$' + eClassTotal;

});*/

/*function handleTicketCount(isIncrease){

	const fClassInput = document.getElementById("fclass-input");
	const fClassInputCount = parseInt(fClassInput.value);
	//const fClassInputNewCount = fClassInputCount+1;
	let fClassInputNewCount = fClassInputCount;
	if(isIncrease==true && fClassInputCount >=0){
		fClassInputNewCount = fClassInputCount+1;
	}
	if(isIncrease==false && fClassInputCount >0){
		fClassInputNewCount = fClassInputCount-1;
	}
	fClassInput.value = fClassInputNewCount;
	const fClassTotal = fClassInputNewCount * 150;
	document.getElementById("subtotal-count").innerText = '$' + fClassTotal;

}*/



/*function handleTicketCount(isIncrease,ticketClass){

	const fClassInput = document.getElementById(ticketClass + "-input");
	const fClassInputCount = parseInt(fClassInput.value);
	//const fClassInputNewCount = fClassInputCount+1;
	let fClassInputNewCount = fClassInputCount;
	if(isIncrease==true && fClassInputCount >=0){
		fClassInputNewCount = fClassInputCount+1;
	}
	if(isIncrease==false && fClassInputCount >0){
		fClassInputNewCount = fClassInputCount-1;
	}

	let fClassTotal = 0;
	if(ticketClass == "fclass"){
		fClassTotal = fClassInputNewCount * 150;
	}
	if(ticketClass == "eclass"){
		fClassTotal = fClassInputNewCount * 100;
	}
	fClassInput.value = fClassInputNewCount;
	document.getElementById("subtotal-count").innerText = '$' + fClassTotal;

}



function handleTicketCount(isIncrease,ticketClass){

	const eClassInput = document.getElementById(ticketClass + "-input");
	const eClassInputCount = parseInt(eClassInput.value);
	//const fClassInputNewCount = fClassInputCount+1;
	let eClassInputNewCount = eClassInputCount;
	if(isIncrease==true && eClassInputCount >=0){
		eClassInputNewCount = eClassInputCount+1;
	}
	if(isIncrease==false && eClassInputCount >0){
		eClassInputNewCount = eClassInputCount-1;
	}

	let eClassTotal = 0;
	if(ticketClass == "fclass"){
		eClassTotal = eClassInputNewCount * 150;
	}
	if(ticketClass == "eclass"){
		eClassTotal = eClassInputNewCount * 100;
	}
	eClassInput.value = eClassInputNewCount;
	document.getElementById("subtotal-count").innerText = '$' + eClassTotal;

}*/

/*function totalCalculation(ticketClass){
	const fClassCount = getInputValue("fclass");
	const eClassCount = getInputValue("eclass");
	const totalPrice = fClassCount*150 + eClassCount*100;
	document.getElementById("subtotal-count").innerText = '$'+ totalPrice;

	const tax = Math.round(totalPrice * 0.1);
	document.getElementById("tax-amount").innerText = '$' + tax;

	const grandTotal = totalPrice + tax;
	document.getElementById("grand-total").innerText = '$' + grandTotal;



}*/


/*function totalCalculation(ticketClass){
	const fClassCount = getInputValue("fclass");
	const eClassCount = getInputValue("eclass");

	if(ticketClass=="fClassCount"){
	const totalPrice = fClassCount*150;
	document.getElementById("subtotal-count").innerText = '$'+ totalPrice;

	const tax = Math.round(totalPrice * 0.1);
	document.getElementById("tax-amount").innerText = '$' + tax;

	const grandTotal = totalPrice + tax;
	document.getElementById("grand-total").innerText = '$' + grandTotal;
	}
	else if(ticketClass=="eClassCount"){
	const totalPrice = eClassCount*100;
	document.getElementById("subtotal-count").innerText = '$'+ totalPrice;

	const tax = Math.round(totalPrice * 0.1);
	document.getElementById("tax-amount").innerText = '$' + tax;

	const grandTotal = totalPrice + tax;
	document.getElementById("grand-total").innerText = '$' + grandTotal;
	}



	else if(ticketClass=="fClassCount" && ticketClass=="eClassCount"){
	const totalPrice = fClassCount*150 + eClassCount*100;
	document.getElementById("subtotal-count").innerText = '$'+ totalPrice;

	const tax = Math.round(totalPrice * 0.1);
	document.getElementById("tax-amount").innerText = '$' + tax;

	const grandTotal = totalPrice + tax;
	document.getElementById("grand-total").innerText = '$' + grandTotal;
	}

	else{
		alert("invalid input");
	}



}*/