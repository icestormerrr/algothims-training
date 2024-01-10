export function quickSort(array) {
    if (array.length < 2)
        return array;
    var pivot = array[0];
    var left = [];
    var right = [];
    for (var i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        }
        else {
            right.push(array[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}
// const arr = [4, 1, 7, 3, 8, 3, 1, 9];
// const arr2 = [4, 1, 3, 4, 5, 5, 5, 2, 0, -1];
// console.log(quickSort(arr));
