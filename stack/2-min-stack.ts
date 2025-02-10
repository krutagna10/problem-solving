class MinStack {
  items: number[];
  minItems: number[]

  constructor() {
    this.items = [];
    this.minItems = [];
  }

  push(val: number): void {
    this.items.push(val);

    if (this.minItems.length === 0) {
      this.minItems.push(val);
    } else {
      const minItemsTop = this.minItems[this.minItems.length - 1];
      const currMin = Math.min(minItemsTop, val);
      this.minItems.push(currMin);
    }
  }

  pop(): void {
    this.items.pop();
    this.minItems.pop();
  }

  top(): number {
    return this.items[this.items.length - 1];
  }

  getMin(): number {
    return this.minItems[this.minItems.length - 1];
  }
}
const arr = [1,2, 3];