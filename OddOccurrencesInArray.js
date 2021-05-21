/* 
  Odd Occurrences In Array challenge
  Based on Codility this solution gives a fair to good time complexity (O(N) or O(N*log(N)))
*/
function solution(A) {
  const test = A.reduce((acc, curr) => {
       /* 
          Bitwise XOR works in a way that if it sees the same digit value, it will turn into 0, otherwise it's 1
          Example:
            1010         1111
          + 1010       + 0101
           ---------    --------
            0000         1010
          Hence, with that idea, to return the number that occurs only once in the given array,
          We sum up all the items in the given array. All items that occur in even amount of time, will eventually become 0
          And the final result would then reveal the number that we want to find
       */
      return acc ^= curr
  }, 0)
  
  return test
}
