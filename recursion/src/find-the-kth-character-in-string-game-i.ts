/**
 * Generates a new string by changing each character in word to its next character, and appending it to original word
 * @param {number} k - A positive integer
 * @returns {string} - The `kth` character in the word
 * @time O()
 * @space O()
 */
function kthCharacter(k: number): string {
  function kthCharacterRecursive(word: string) {
    if (word.length >= k) {
      return word[k - 1];
    }

    let nextWord = "";
    for (const character of word) {
      nextWord += calculateNextCharacter(character);
    }
    return kthCharacterRecursive(word + nextWord);
  }
  return kthCharacterRecursive("a");
};


/**
 * Finds next character in the english alphabet
 * @param {string} character - The input character
 * @returns {string} - The next character
 * @time O(1)
 * @space O(1)
 */
 function calculateNextCharacter(character: string): string {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  const index = characters.indexOf(character);
  return characters[(index + 1) % characters.length];
 }

export default kthCharacter;
