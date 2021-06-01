// Time complexity: O(N)

function solution(A) {
  //helper functions
  const getSum = (arr) => arr.reduce((a, b) => a + b)
  const getDiff = (a, b) => Math.abs(a - b)

  const totalSum = getSum(A)
  let leftSum = 0, smallestDiff

  // short circuit
  if (A.length === 2) return getDiff(A[0], A[1])

  for (let i = 0; i < A.length - 1; i++) {
      leftSum += A[i]
      const rightSum = totalSum - leftSum

      const diff = getDiff(leftSum, rightSum)

      if (smallestDiff === undefined || diff < smallestDiff) {
          smallestDiff = diff
      } else {
          smallestDiff
      }
  }

  return smallestDiff
}