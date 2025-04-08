// Array Rotation
// Input: (nums = [1, 2, 3, 4, 5, 6, 7]), (k = 3);
// Output: [5, 6, 7, 1, 2, 3, 4];

function rotate(arr, k) {
  n = arr.length;

  k = k % n;

  let temp = new Array(n);

  for (let i = 0; i < k; i++) {
    temp[i] = arr[n-k+i];
  }

  for (let i = 0; i < n - k; i++) {
    temp[k + i] = arr[i];
  }

  return temp;
}

let arr = [1, 2, 3, 4, 5, 6, 7];
k = 3;
console.log(rotate(arr, k));
// Output: [5, 6, 7, 1, 2, 3, 4];
