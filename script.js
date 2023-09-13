function threeSum(arr, target) {
let minimumdiff=Infinity;	
let sum=Infinity;	
for(let i=0;i<arr.length;i++)
	{
		for(let j=0;j<arr.length;j++)
			{
				for(let k=0;k<arr.length;k++)
					{
					  if(i!=j && j!=k && i!=k)
					  {
						  let x= arr[i]+arr[j]+arr[k]	;
						if(Math.abs(x-target)<minimumdiff)
						{
							minimumdiff=Math.abs(x-target);
							sum=x;
						}
					  }
					}
			}
	}return sum;
  
}

module.exports = threeSum;
