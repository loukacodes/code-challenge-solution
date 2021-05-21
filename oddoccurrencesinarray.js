/* 
  Based on Codility this solution gives a fair to good time complexity (O(N) or O(N*log(N)))
*/
function solution(A) {
  const test = A.reduce((acc, curr) => {
      return acc ^= curr
  }, 0)
  
  return test
}
