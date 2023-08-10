function getDigit(num: number, position: number): number {
  return Math.floor(Math.abs(num) / Math.pow(10, position)) % 10;
}

function digitCount(num: number): number {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums: number[]): number {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

/** WARNING: does NOT handle negative numbers */
export function radixSort(nums: number[]): number[] {
  const maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    const digitBuckets: number[][] = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      const digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = ([] as number[]).concat(...digitBuckets);
  }
  return nums;
}

/** Handles negative numbers */
export function radixSort2(nums: number[]): number[] {
  // Split the numbers into two groups: negatives and non-negatives
  let negatives: number[] = [];
  let nonNegatives: number[] = [];
  for (const num of nums) {
    if (num < 0) {
      negatives.push(num);
    } else {
      nonNegatives.push(num);
    }
  }

  // Apply radix sort to the negative numbers (using their absolute values)
  const negativesAbs = negatives.map(Math.abs);
  let maxDigitCount = mostDigits(negativesAbs);
  for (let k = 0; k < maxDigitCount; k++) {
    const digitBuckets: number[][] = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < negatives.length; i++) {
      const digit = getDigit(Math.abs(negatives[i]), k);
      digitBuckets[digit].push(negatives[i]);
    }
    negatives = ([] as number[]).concat(...digitBuckets);
  }
  // Reverse the sorted negative numbers so that they are in ascending order
  negatives.reverse();

  // Apply radix sort to the non-negative numbers
  maxDigitCount = mostDigits(nonNegatives);
  for (let k = 0; k < maxDigitCount; k++) {
    const digitBuckets: number[][] = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nonNegatives.length; i++) {
      const digit = getDigit(nonNegatives[i], k);
      digitBuckets[digit].push(nonNegatives[i]);
    }
    nonNegatives = ([] as number[]).concat(...digitBuckets);
  }

  // Concatenate the sorted negative and non-negative numbers
  return negatives.concat(nonNegatives);
}


// // Example Usage
// const unsortedArray = [23, 345, 5467, 12, 2345, 9852];
// const sortedArray = radixSort(unsortedArray);
// console.log(sortedArray); // Output: [12, 23, 345, 2345, 5467, 9852]
