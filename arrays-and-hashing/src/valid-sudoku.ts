function isValidSudoku(board: string[][]): boolean {
  for (let row = 0; row < board.length; row++) {
    let set = new Set<string>();
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === ".") {
        continue;
      }

      if (set.has(board[row][col])) {
        return false;
      }
      set.add(board[row][col]);
    }
  }

  for (let col = 0; col < board[0].length; col++) {
    let set = new Set<string>();
    for (let row = 0; row < board.length; row++) {
      if (board[row][col] === ".") {
        continue;
      }

      if (set.has(board[row][col])) {
        return false;
      }
      set.add(board[row][col]);
    }
  }

  for (let box = 0; box < board.length; box++) {
    let set = new Set<string>();
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const row = i + Math.floor(box / 3) * 3;
        const col = j + (box % 3) * 3;
        if (board[row][col] === ".") {
          continue;
        }

        if (set.has(board[row][col])) {
          return false;
        }
        set.add(board[row][col]);
      }
    }
  }

  return true;
}
