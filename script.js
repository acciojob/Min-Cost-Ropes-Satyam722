function mincost(arr)
{ 
	let totalcost =0;
while(arr.length>1){
	arr.sort((a,b)=>a-b);
	let first =arr.shift()
	let second = arr.shift()
	let cost =first+second;
	totalcost+=cost;
	arr.push(cost);
	
}
	return totalcost;
  
}

module.exports=mincost;
