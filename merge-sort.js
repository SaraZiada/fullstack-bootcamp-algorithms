let mergeSort = function(arr){
    let mid = arr.length / 2
    
    if(arr.length <= 1){
        return arr
    }else{
        let leftArray = arr.slice(0,mid)
        let rightArray = arr.slice(mid,arr.length)
        return merge(mergeSort(leftArray), mergeSort(rightArray))
    }
}

let merge = function(leftArray, rightArray){
    let sortedArr = []
    
    while(leftArray.length || rightArray.length){
        if(leftArray.length && rightArray.length){
            if(leftArray[0] < rightArray[0]){
                sortedArr.push(leftArray.shift())
            }else{
                sortedArr.push(rightArray.shift())
            }
        }else if(rightArray.length){
            sortedArr.push(rightArray.shift())
        }else if(leftArray.length){
            sortedArr.push(leftArray.shift())
        }
    }
    return sortedArr;
}

let array = [ 3,1,2,5,6,9,8,4,5,6,4];

console.log(mergeSort(array))