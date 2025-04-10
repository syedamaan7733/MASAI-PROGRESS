// 1. Valid Parentheses

const s = "()[]{}";

function validParenthesis(s) {
  const match = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const stk = [];

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stk.push(char);
    } else if (stk && match[char] === stk[stk.length - 1]) {
      stk.pop();
    } else {
      return false;
    }
  }

  return stk.length === 0;
}

// console.log(validParenthesis(s));
// Output: true;

//  2. Reverse the linked list
function reverseLinkedLisr(head) {
  if (!head) return;
  let cur = head;
  let prev = null;

  while (cur) {
    let temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }

  return prev;
}

// 3. Product of Array Except Self

function productExceptSelf(arr) {
  let n = arr.length;
  let res = new Array(n);
  let p = new Array(n);
  let s = new Array(n);

  p[0] = arr[0];
  // For getting the left side product of the all element
  for (let i = 1; i < n; i++) {
    p[i] = p[i - 1] * arr[i];
  }

  // for getting the right side product of thr all element
  s[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    s[i] = s[i + 1] * arr[i];
  }

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      res[i] = s[i + 1];
    } else if (i === n - 1) {
      res[i] = p[i - 1];
    } else {
      res[i] = p[i - 1] * s[i + 1];
    }
  }

  return res;
}

const nums = [1, 2, 3, 4];
// const result = productExceptSelf(nums);
// console.log("productExceptSelf : ", result);
// Output: [24, 12, 8, 6];

// 11. Container With Most Water
function maxArea(arr) {
  let i = 0;
  let j = arr.length - 1;
  let maxCap = -1;

  while (i < j) {
    const area = Math.min(arr[i], arr[j]) * (j - i);
    maxCap = Math.max(maxCap, area);

    if (i < j) {
      i++;
    } else {
      j--;
    }
  }
  return maxCap;
}

const eight = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log("maxArea :", maxArea(eight));
// Output: 49;
