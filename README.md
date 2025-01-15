# Majority Element

## Description
This algorithm identifies the majority element in an array of integers. A majority element is an element that appears more than `n/2` times in the array, where `n` is the size of the array. The solution leverages **Boyer-Moore Voting Algorithm**, achieving an efficient time complexity of **O(n)** and a space complexity of **O(1)**.

---

## Function Signature
```javascript
function majorityElement(array)
```

---

## Parameters
- `array` *(Array of Integers)*: An array of integers in which the majority element needs to be identified.

---

## Returns
- **Integer**: The majority element from the array.

---

## Time and Space Complexity
- **Time Complexity**: O(n) - The algorithm iterates through the array once.
- **Space Complexity**: O(1) - Only a few variables are used, with no extra data structures.

---

## Algorithm Explanation
1. **Initialization**: The algorithm starts by setting the first element of the array as the majority element and initializing the count to 1.
2. **Iteration**: The algorithm traverses the array, comparing each element to the current majority element.
   - If the element matches the current majority element, increment the count.
   - If the element does not match, decrement the count.
   - If the count reaches zero, update the majority element to the current element and reset the count to 1.
3. **Return**: At the end of the iteration, the majority element is returned.

---

## Examples
### Example 1
```javascript
majorityElement([3, 3, 4, 2, 3, 3, 3]);
```
**Output**: `3`

Explanation: The element `3` appears more than half of the time in the array.

### Example 2
```javascript
majorityElement([1, 1, 2, 1, 3, 1, 1]);
```
**Output**: `1`

Explanation: The element `1` is the majority element, appearing more than `n/2` times.

---

## Edge Cases
- The array contains only one element.
- The array has no majority element (note: the function assumes that a majority element always exists).
- The majority element appears at the start or end of the array.

---

## Usage
### Example Code
```javascript
const array = [3, 3, 4, 2, 3, 3, 3];
console.log(majorityElement(array)); // Output: 3
```

---

## License
This code is licensed under the MIT License. You are free to use, modify, and distribute this code with proper attribution.

