class MyCircularDeque {
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

  insertFront(value: number): boolean {
    if (this.isFull()) {
      return false;
    }

    if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
    } else if (this.front === 0) {
      this.front = this.size - 1;
    } else {
      this.front--;
    }
    this.items[this.front] = value;
    return true;
  }

  insertLast(value: number): boolean {
    if (this.isFull()) {
      return false;
    }

    if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
    } else {
      this.rear = (this.rear + 1) % this.size;
    }
    this.items[this.rear] = value;
    return true;
  }

  deleteFront(): boolean {
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

  deleteLast(): boolean {
    if (this.isEmpty()) {
      return false;
    }

    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else if (this.rear === 0) {
      this.rear = this.size - 1;
    } else {
      this.rear--;
    }
    return true;
  }

  getFront(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.items[this.front];
  }

  getRear(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.items[this.rear];
  }

  isEmpty(): boolean {
    return this.front === -1 && this.rear === -1;
  }

  isFull(): boolean {
    return (
      (this.front === 0 && this.rear === this.size - 1) ||
      this.front === this.rear + 1
    )
  }
}
