document.getElementById('countId').onclick = function(){
    var blackteaPrice = 30;
    var greenteaPrice = 25;
    var roseteaPrice =35;
    
    var oolongPrice = 35;
    var jasminePrice = 30;
    var mintPrice =25;

	var blackTea = (document.getElementById('blacktea').value)*blackteaPrice;
	var greenTea = (document.getElementById('greentea').value)*greenteaPrice;
	var roseTea =  (document.getElementById('rosetea').value)*roseteaPrice;
    var oolongTea = (document.getElementById('oolongtea').value)*oolongPrice;
    var jasmineTea = (document.getElementById('jasminetea').value)*jasminePrice;
    var mintTea = (document.getElementById('minttea').value)*mintPrice;



	document.getElementById('total').textContent = blackTea+greenTea+roseTea+oolongTea+jasmineTea+mintTea+'NTD';
}

