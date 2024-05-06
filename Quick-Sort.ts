function swap(arr: number[], idx1: number, idx2: number) {
    const temp: number = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function partition(part: number[], lo: number, hi: number) {
    const pivot: number = part[hi];
    let idx: number = lo - 1;

    for (let i: number = lo; i < hi; i++) {
        if (part[i] <= pivot) {
            idx++;
            swap(part, i, idx);
        }
    }
    idx++;
    swap(part, hi, idx);
    return idx;
}

function quickSort(array: number[], low: number, high: number) {
    const pivotIndex: number = partition(array, low, high);
    quickSort(array, low, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, high);
}

let arrayInput: number[] = [2, 9, 1, 5, 8];
let arrayLength: number = 5;
quickSort(arrayInput, 0, arrayLength - 1);
