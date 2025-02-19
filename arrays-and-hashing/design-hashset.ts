import SinglyLinkedList from "../data-structures/linked-list/singly-linked-list";

class MyHashSet {
  items: SinglyLinkedList<number>[];
  constructor() {
    this.items = Array.from({ length: 1000 }, () => new SinglyLinkedList() )
  }

  hash(key: number): number {
    return key % this.items.length;
  }

  add(key: number): void {
    if (!this.contains(key)) {
      const linkedList = this.items[this.hash(key)];
      linkedList.addLast(key);
    }
  }

  remove(key: number): void {
    const linkedList = this.items[this.hash(key)];
    const index = linkedList.indexOf(key);
    linkedList.remove(index);
  }

  contains(key: number): boolean {
    const linkedList = this.items[this.hash(key)];
    return linkedList.contains(key);
  }
}
