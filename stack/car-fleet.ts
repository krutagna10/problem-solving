import Stack from "../data-structures/stack/stack";

function carFleet(target: number, position: number[], speed: number[]): number {
  const stack = new Stack<number>();
  const pairs = [];

  for (let i = 0; i < position.length; i++) {
    pairs.push([position[i], speed[i]]);
  }

  pairs.sort(([positionA], [positionB]) => positionB - positionA );

  for (const [position, speed] of pairs) {
    const time = (target - position) / speed;
    if (stack.isEmpty() || stack.peek() < time) {
      stack.push(time);
    }
  }

  return stack.size();
};