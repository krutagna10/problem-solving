function isAlphanumeric(char: string): boolean {
  const letters = [];
  for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
    letters.push(String.fromCharCode(i));
  }

  const numbers = [];
  for (let i = 0; i < 10; i++) {
    numbers.push(String(i));
  }

  return letters.includes(char) || numbers.includes(char);
}

function isPalindrome(s: string): boolean {
  const lowercaseStr = s.toLowerCase();
  
   let alphanumericStr = "";

  for (const char of lowercaseStr) {
    if (isAlphanumeric(char)) {
      alphanumericStr += char;
    }
  }

  let start = 0;
  let end = alphanumericStr.length - 1;
  
  while (start <= end) {
    if (alphanumericStr[start] !== alphanumericStr[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
};