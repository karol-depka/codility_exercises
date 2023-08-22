

function isCorrect(s: string) {
  // return true
  const start = s.length - 4 // prolly -3 is enough, but don't wanna waste time on this and risk it ;)
  return !s.includes('AAA', start) && !s.includes('BBB', start) // This could be replaced by just checking the last 2+1 chars; but task description says to not worry about performance
}

/* makes it non-reentrant code, sorry ;) AND not testable :D */
// let longest = ''

function processStr(context: {longest: string, count: number}, baseStr: string, AA: number, AB: number, BB: number) {
  context.count ++
  // console.log(baseStr)
  if ( ! isCorrect(baseStr) ) {
    return //context.longest
  }
  if ( baseStr.length > context.longest.length ) {
    context.longest = baseStr
  }
  if ( AA ) {
    processStr(context, baseStr + 'AA', AA -1, AB   , BB   )
  }
  if ( AB ) {
    processStr(context, baseStr + 'AB', AA   , AB -1, BB   )
  }
  if ( BB ) {
    processStr(context, baseStr + 'BB', AA   , AB   , BB -1)
  }
  // return longest
}

/**
 * Similar to https://app.codility.com/programmers/trainings/5/three_letters/
 *
 * Complexity:
 *
 * I think
 * worst case
 * O(3^10) ; not really, because of bail in isCorrect
 * O(3^(AA+AB+BB)) ?
 * O(3^Max(AA+AB+BB)) ?
 * count = 2989677
 * */
export function solution(AA: number, AB: number, BB: number): string {
  // `count` is only to check computational complexity
  const context = {longest: '', count: 0} /* Sorry, it could probably be more functional-programming-style;
    but leaving like this because running out of time; also probably this is better for performance, than creating a new object at each return */
  processStr(context, '', AA, AB, BB)
  console.log('count: ', context.count)
  return context.longest
}
