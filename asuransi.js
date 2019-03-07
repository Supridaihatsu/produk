function asuransi(harga, y){
	if(125000000 > harga){
		var as =	[0, 3.89, 4.63, 5.27, 5.91]; //kombi
		return as[y-1];
	}
	if(125000000<= harga && harga<156250000){
		var as =	[0, 3.52, 4.25, 4.89, 5.54]; //kombi
		return as[y-1];
	}
	if(156250000<=harga && harga<178571000){
		var as =	[0, 3.47, 4.16, 4.8, 5.44]; //kombi
		return as[y-1];
	}
	if(178571000<=harga && harga<200000000){
		var as = [0, 3.47, 4.16, 4.76, 5.36]; //kombi
		return as[y-1];
	}
	if(harga>=200000000){
		var as = [0, 3.03, 3.71, 4.31, 4.92]; //kombi
		return as[y-1];
	}
	
}
