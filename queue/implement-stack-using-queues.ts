import Queue from "../data-structures/queue/queue";

class MyStack {
  queue1: Queue<number>;
  queue2: Queue<number>;

  constructor() {
    this.queue1 = new Queue();
    this.queue2 = new Queue();
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