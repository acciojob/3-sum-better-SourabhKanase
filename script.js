function threeSum(arr, target) {
let minimumdiff=Infinity;	
let sum=Infinity;	
for(let i=0;i<arr.length;i++)
	{
		for(let j=i+1;j<arr.length;j++)
			{
				for(let k=j+1;k<arr.length;k++)
					{
					  let x= arr[i]+arr[j]+arr[k]	;
						if(Math.abs(x-target)<minimumdiff)
						{
							minimumdiff=x-target;
							sum=x;
						}
					}
			}
	}return sum;
  
}

module.exports = threeSum;
