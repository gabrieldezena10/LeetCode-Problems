/*
1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

// Como eu preciso retornar os índices dos números, eu vou guardar a chave como sendo o valor do número do array e o valor da chave vai ser o index desse número no array
// {[value]: index }
// Case 1
// { 2: 0, 7: 1, 11: 2, 15: 3}

function twoSum(nums: number[], target: number): number[] {
  let map: {[key: number]: number} = {};
  
  for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const diff = target - num;
//Não usar map[diff] dentro do if, pois o quando o valor da chave é o índice 0, isso vai ser falsey e não vai entrar na logica no if

// Operador in vai pegar a chave do objeto e verificar se ele existe
  if(diff in map) {
          const secondIndex = map[diff];
          const arr = [i, secondIndex].sort(function(a,b) {
            return a - b
        });
        return arr;
      }
      map[num] = i;
  }
  return [];
};

const exampleA = twoSum([2,3,5,7,9], 14);
console.log(exampleA);
