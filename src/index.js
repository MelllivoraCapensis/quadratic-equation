module.exports=function solveEquation(str) {
	var pos=str.search(/x\^2/gi);
	if(pos===0)
	var a=1;
	else
	var a=Number(str.substring(0,pos-3));
   	str=str.substring(pos+4);
  	var pos=str.search(/x/gi);
	if(pos===0)
	var b=1;
	else
	var b=str.substring(0,pos-3);
    b=b.substring(0,1)+b.substring(2);
    b=Number(b);
	var c=str.substring(pos+2);
	c=c.substring(0,1)+c.substring(2);
	c=Number(c);
	var D=Math.sqrt(b*b-4*a*c);
	var x1=Math.round((-b-D)/2/a);
	var x2=Math.round((-b+D)/2/a);
    var compare=(a,b)=>a-b;
    return [x1,x2].sort(compare);
}
    
