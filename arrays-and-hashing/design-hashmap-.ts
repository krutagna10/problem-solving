import SinglyLinkedList from "../data-structures/linked-list/singly-linked-list";

class ModifiedSinglyLinkedList extends SinglyLinkedList<[number, number]> {
  modifiedIndexOf(key: number): number {
    if (super.isEmpty()) {
      return -1;
    }
    let currNode = this.head;
    let index = 0;
    while (currNode) {
      if (currNode.value[0] === key) {
        return index;
      }
      currNode = currNode.next;
      index++;
    }
    return -1;
  }
}


class MyHashMap {
  items: ModifiedSinglyLinkedList[];
  constructor() {
    this.items = Array.from(
      { length: 10000 },
      () => new ModifiedSinglyLinkedList()
    );
  }

  hash(key: number): number {
    return key % this.items.length;
  }

  put(key: number, value: number): void {
    const linkedList = this.items[this.hash(key)];
    const index = linkedList.modifiedIndexOf(key);
    if (index === -1) {
      linkedList.addLast([key, value]);
    } else {
      linkedList.set(index, [key, value]);
    }
  }

  get(key: number): number {
    const linkedList = this.items[this.hash(key)];
    const index = linkedList.modifiedIndexOf(key);
    if (index === -1) {
      return -1;
    }
    const currNode = linkedList.get(index);
    return currNode.value[1];
  }

  remove(key: number): void {
    const linkedList = this.items[this.hash(key)];
    const index = linkedList.modifiedIndexOf(key);
    if (index !== -1) {
      linkedList.remove(index);
    }
  }
}

