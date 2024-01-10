function BinarySearch(array: number[], target: number): number | null {
  let low: number = 0;
  let high: number = array.length - 1;
  let mid: number = Math.round((low + high) / 2)
  let guess: number = array[mid];
  while (low <= high) {
    if (guess < target) {
      low = mid + 1;    
    } else if (guess > target) {
      high = mid - 1; 
    } else {
      return mid;
    }
    mid = Math.round((low + high) / 2);
    guess = array[mid];
  }
  
  return null;
}


let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(BinarySearch(arr, 4))