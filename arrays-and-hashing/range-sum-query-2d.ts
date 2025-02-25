class NumMatrix {
  matrix: number[][];
  prefixSum: number[][];
  constructor(matrix: number[][]) {
    this.matrix = matrix;
    this.prefixSum = this.calculatePrefixSum(matrix);
  }

  calculatePrefixSum(matrix: number[][]): number[][] {
    const prefixSum = Array.from({ length: matrix.length + 1 }, () => new Array(matrix[0].length + 1).fill(0));

    for (let row = 0; row < matrix.length; row++) {
      let sum = 0;
      for (let col = 0; col < matrix[row].length; col++) {
        sum += matrix[row][col];
        prefixSum[row + 1][col + 1] = prefixSum[row][col + 1] + sum;
      }
    }
    return prefixSum;
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    const bottomRight = this.prefixSum[row2 + 1][col2 + 1];
    const above = this.prefixSum[row1][col2 + 1];
    const left = this.prefixSum[row2 + 1][col1];
    const topLeft = this.prefixSum[row1][col1];
    return bottomRight - above - left + topLeft;
  }
}
