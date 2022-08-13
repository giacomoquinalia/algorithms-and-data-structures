// binary search recursive
function binarySearchRecursive(array, number) {
    const middle = Math.floor(array.length / 2);
    if (array[middle] === number) {
        return middle;
    }
    if (array.length === 1) {
        return -1;
    }
    if (array[middle] < number) {
        return binarySearchRecursive(array.slice(middle), number);
    }
    if (array[middle] > number) {
        return binarySearchRecursive(array.slice(0, middle), number);
    }
}

// binary search algorithm
function binarySearch(array, number) {
    let left = 0
    let right = array.length - 1

    while (left <= right) {
        const middleIndex = Math.floor((left + right) / 2)
        const middle = array[middleIndex]

        if (middle < number) {
            left = middleIndex + 1
        } else if (middle > number) {
            right = middleIndex - 1
        } else {
            return number
        }
    }

    return -1
}
