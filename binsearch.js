//testing the debugger in vscode
binSearch = (arr, start, end, key) =>
{
    // Base Condition 
    if (start > end) return -1; 
   
    // Find the middle index 
    let mid=Math.floor((start + end)/2); 
   
    // Compare mid with given key x 
    if (arr[mid]===key) return mid; 
          
    // If element at mid is greater than x, 
    // search in the left half of mid 
    if(arr[mid] > key)  
        return binSearch(arr, start, mid-1, key); 
    
    // If element at mid is smaller than x, 
    // search in the right half of mid 
    if (arr[mid] < key)
        return binSearch(arr, mid+1, end, key); 

}

binarySearch = (arr, key) => {return binSearch(arr, 0, arr.length-1, key)}

main = () =>
{
    const arr = ["flask", "research", "shell", "spring"]
    const nums = [1,2,3,4,5,6,7]
    let result = binarySearch(arr, "shell")
    let index = binarySearch(nums, 5)
    console.log(result)
    console.log(index)
    console.log("6627 56837 "+arr)
}
main()