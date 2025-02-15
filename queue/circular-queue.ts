class MyCircularQueue {
  items: number[];
  front: number;
  rear: number;
  size: number;

  constructor(k: number) {
    this.items = new Array(k);
    this.front = -1;
    this.rear = -1;
    this.size = k;
  }

  enQueue(value: number): boolean {
    if (this.isFull()) {
      return false;
    }
    if (this.front === -1) {
      this.front = 0;
    }
    this.rear = (this.rear + 1) % this.size;
    this.items[this.rear] = value;
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }
    return true;
  }

  Front(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.items[this.front];
  }

  Rear(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.items[this.rear];
  }

  isEmpty(): boolean {
    return this.front === -1;
  }

  isFull(): boolean {
    return (
      (this.front === 0 && this.rear === this.size - 1) ||
      this.front === this.rear + 1
    );
  }
}

