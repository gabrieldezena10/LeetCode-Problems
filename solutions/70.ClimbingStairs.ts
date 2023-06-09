/*
You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

**Example 1:**

```
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

```

**Example 2:**

```
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

```
*/

function climbStairs(n: number): number {
  if (n < 2) {
      return 1;
  }
  let firstStep = 1;
  let secondStep = 1;
  let thirdStep = 0;

  for (let i=2; i<=n; i++) {
      thirdStep = firstStep + secondStep;
      firstStep = secondStep;
      secondStep = thirdStep;
  }
  return thirdStep;
};
console.log(climbStairs(3)); //3
console.log(climbStairs(4)); //5
console.log(climbStairs(5)); //8
console.log(climbStairs(6)); //13
console.log(climbStairs(7)); //21
console.log(climbStairs(8)); //34
console.log(climbStairs(9)); //55
console.log(climbStairs(10)); //89
