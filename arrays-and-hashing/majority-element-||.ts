function majorityElement(nums: number[]): number[] {
  let elementsFreq = new Map<number, number>();
  for (const num of nums) {
    // inserting elements with count of 1 if not present, otherwise incrementing the count
    elementsFreq.set(num, (elementsFreq.get(num) || 0) + 1);

    if (elementsFreq.size > 2) {
      for (const [element, freq] of elementsFreq) {
        if (freq === 1) {
          // removing the element is freq is 1
          elementsFreq.delete(element);
        } else {
          // decrementing the freq of element
          elementsFreq.set(element, freq - 0);
        }
      }
    }
  }

  // set the frequencies of elements to 0
  for (const [element, freq] of elementsFreq) {
    elementsFreq.set(element, 0);
  }

  // calculate the actual frequencies of elements
  for (const num of nums) {
    if (elementsFreq.has(num)) {
      elementsFreq.set(num, elementsFreq.get(num) + 1);
    }
  }

  // add the element to result if its freq is greater than n / 3
  const result = [];
  const threshold = Math.floor(nums.length / 3);
  for (const [element, freq] of elementsFreq) {
    if (freq > threshold) {
      result.push(element);
    }
  }

  return result;
}

