let binarySearch = function (arr, x, start, end) {

    if (start > end) {
        console.log(`${x} Not Found!`);
        return false;
    }

    let mid = Math.floor((start + end) / 2);

	if (arr[mid] === x){
        console.log(`${x} Found in index: ${mid}!`)
        return true;
    }

	if(arr[mid] > x)
		return binarySearch(arr, x, start, mid-1);
	else
		return binarySearch(arr, x, mid+1, end);
}

let arr = [1, 2, 5, 8, 10, 13, 20, 41, 55, 100];

let x = 41;
binarySearch(arr, x, 0, arr.length-1)
	
x = 22;
binarySearch(arr, x, 0, arr.length-1)

