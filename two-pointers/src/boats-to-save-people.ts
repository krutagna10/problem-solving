/**
 * Calculates the mininum number of boats to carry every given person
 * @param {number[]} people - Array of weights of people
 * @param {number} limit - The maximum weight a boat can carry
 * @returns {number} - The minimum number of boats to carry every given person
 * @time O(nlogn)
 * @space O(n)
 */
function numRescueBoats(people: number[], limit: number): number {
  people.sort((a, b) => a - b);
  let boats = 0;
  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    const weight = people[left] + people[right];
    if (weight <= limit) {
      left++;
    } 
    boats++;
    right--;
  }

  return boats;
}

export default numRescueBoats;