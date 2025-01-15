// Time -> O(n) | Space -> O(1)
function majorityElement(array) {

  let majorityElement = array[0];
  let count = 1;

  for (let i = 1; i < array.length; i++) {
    
    if (array[i] === majorityElement) {
      count++;
    } else {
      count--;
      if (count === 0) {
        majorityElement = array[i];
        count = 1;
      }
    }
  }
  return majorityElement;
}
