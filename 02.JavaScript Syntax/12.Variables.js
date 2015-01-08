function solve(arr){
	var start = arr[0];
	var end = arr[1];
	var fibArray = [];
	var isFibonacci = "yes";
	
	console.log("<table>");
	console.log("<tr><th>Num</th><th>Square</th><th>Fib</th></tr>");
	
	var a = 0;
	var b = 1;
	
	
	for(var i = start; i <= end; i++){
		var num = i;
		for(var j= 0; j < end; j++){
			var c = a + b;
			a = b;
			b = c;
			if(num != a && num != b && num != c){
				isFibonacci = "no";
			}
		}
		
		console.log("<tr><td>"+ num +"</td><td>" + num * num + "</td><td>" + isFibonacci + "</td></tr>");
		
	}	
	
	console.log("</table>");
}