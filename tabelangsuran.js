function table_angsuran(unit, down_payment, tnr){
	function dp(otr, persen){return otr*persen/100;}
	
	function nilai_asuransi(otr, tenor){return (otr*asuransi(otr,tenor)/100);}
	
	function angsuran(otr, persen_dp, tenor){
		var hutang = otr - dp(otr, persen_dp);
		var ass = nilai_asuransi(otr, tenor);
		var bunga = (hutang + ass)*rate_acc(persen_dp, tenor)*tenor/100;
		return parseInt((hutang+ass+bunga)/(tenor*12));
	}
	
	var txt = "<h3>manual</h3>"
	txt += "<table border='1'><tr><td>type</td><td>harga</td><td>dp 20%</td><td>angsuran</td></tr>";
	for(var x in unit.varian){
		txt += "<tr>" +
					"<td>" + unit.nama + " " + unit.varian[x].nama + "</td>" +
					"<td>" + bilangan(unit.varian[x].manual) + "</td>" +
					"<td>" + bilangan(dp(unit.varian[x].manual, down_payment)-unit.diskon) + "</td>" +
					"<td>" + bilangan(angsuran(unit.varian[x].manual, down_payment, tnr))+ "</td>" +
				"</tr>";
	}
	
	txt += "</table>"
	
	txt += "<h3>matik</h3>"
	txt += "<table border='1'><tr><td>type</td><td>harga</td><td>dp 20%</td><td>angsuran</td></tr>";
	for(var x in unit.varian){
		txt += "<tr>" +
					"<td>" + unit.nama + " " + unit.varian[x].nama + "</td>" +
					"<td>" + bilangan(unit.varian[x].matik) + "</td>" +
					"<td>" + bilangan(dp(unit.varian[x].matik, down_payment)-unit.diskon) + "</td>" +
					"<td>" + bilangan(angsuran(unit.varian[x].matik, down_payment, tnr))+ "</td>" +
				"</tr>";
	}
	
	txt += "</table>"
	return txt;
}
