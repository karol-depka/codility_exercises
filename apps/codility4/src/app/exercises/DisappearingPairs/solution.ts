
/**
 * Detected time complexity:
 * O(N) or O(N ** 2)
 * 83%
 * Perf 66%
 *
 * */
export function solution(S: string): string {
  if (S.length === 0) {
    return ''
  }
  const arr = S.split('')

  let changesCount = 0
  do {
    let firstIdx = -1
    let firstLetter = 'Z'
    changesCount = 0
    for (let i = 0; i < arr.length; ++i) {
      const cur = arr[i]
      if (cur === 'Z') {
        continue // sparse marker; could use linked list instead though some sources say linked list is bad for CPU cache coherence :)
      }
      if (firstLetter === cur) {
        // found pair - remove
        arr[firstIdx] = 'Z'
        arr[i] = 'Z'
        firstIdx = -1
        firstLetter = 'Z'
        changesCount++
      } else {
        // not found pair
        firstLetter = cur
        firstIdx = i
      }
    }

  } while (changesCount)

  return arr.filter(char => {
    return char !== 'Z'
  }).join('')

}
