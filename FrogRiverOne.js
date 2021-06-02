/*
The general idea of this problem is to find the first index I
of the given X number in array A
where all numbers from 1 to X should be present in the array before I

For example (4, [1, 5, 4, 3, 2, 4, 1, 3]) should return I = 5
If the condition is not satisfied, function should return -1
(3, [1, 2, 1, 2, 5]) should return I = -1 


In this solution I'm using Set to solve the problem
because Set only stores unique values, 
be it primitive values or object references
Time complexity: O(N)
*/

function solution(X, A) {
  const set = new Set()

  for (let i = 0; i < A.length; i++) {
      if (A[i] <= X) set.add(A[i])
      if (set.size === X) return i
  }

  return -1
}