import Queue from "../data-structures/queue/queue";

class TransferableQueue extends Queue<number> {
  static transfer(
    sourceQueue: Queue<number>,
    destinationQueue: Queue<number>,
    length: number
  ) {
    while (sourceQueue.size() > length) {
      destinationQueue.enqueue(sourceQueue.dequeue());
    }
  }
}

class MyStack {
  queue1: TransferableQueue
  queue2: TransferableQueue;

  constructor() {
    this.queue1 = new TransferableQueue();
    this.queue2 = new TransferableQueue();
  }

  push(x: number): void {
    this.queue1.enqueue(x);
  }

  pop(): number {
    TransferableQueue.transfer(this.queue1, this.queue2, 1);
    const removedElement = this.queue1.dequeue();
    TransferableQueue.transfer(this.queue2, this.queue1, 0);
    return removedElement;
  }

  top(): number {
    TransferableQueue.transfer(this.queue1, this.queue2, 1);
    const topElement = this.queue1.dequeue();
    this.queue2.enqueue(topElement);
    TransferableQueue.transfer(this.queue2, this.queue1, 0);
    return topElement as number;
  }

  empty(): boolean {
    return this.queue1.isEmpty();
  }
}

