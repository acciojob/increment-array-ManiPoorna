let arr = [1, 2, 3, 4, 5];
function incrementArray(arr) {
  //your code here
	let ans = [];
	for (let value of arr) {
		ans.push(value+1);
	}
	return ans
}

alert(incrementArray(arr));
