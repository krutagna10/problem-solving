class MyQueue {
  items: number[];

  constructor() {
    this.items = [];
  }

  enqueue(value: number): void {
    this.items.push(value);
  }

  dequeue(): number {
    if (this.isEmpty()) {
      throw new Error("Queue Underflow");
    }
    return this.items.shift() as number;
  }

  peek(): number {
    if (this.isEmpty()) {
      throw new Error("Queue Underflow")
    }
    return this.items[0];
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  size(): number {
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }
}

class MyStack {
  queue1: MyQueue;
  queue2: MyQueue;

  constructor() {
    this.queue1 = new MyQueue();
    this.queue2 = new MyQueue();
  }

  push(x: number): void {
    this.queue1.enqueue(x);
  }

  pop(): number {
    while (this.queue1.size() > 1) {
      this.queue2.enqueue(this.queue1.dequeue());
    }
    const removedElement = this.queue1.dequeue();

    while (this.queue2.size() > 0) {
      this.queue1.enqueue(this.queue2.dequeue());
    }
    return removedElement;
  }

  top(): number {
    while (this.queue1.size() > 1) {
      this.queue2.enqueue(this.queue1.dequeue());
    }

    const topElement = this.queue1.dequeue();
    this.queue2.enqueue(topElement);

    while (this.queue2.size() > 0) {
      this.queue1.enqueue(this.queue2.dequeue());
    }
    return topElement as number;
  }

  empty(): boolean {
    return this.queue1.isEmpty();
  }
}