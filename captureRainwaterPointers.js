// Denne løsningen er raskere enn den naive, med tidskompleksitet O(n) i stedet for O(n^2) 
// fordi den unngår nested loops. Vi oppdaterer total vannmengde fortløpende 
// ved å flytte den laveste pekeren og sammenligne høyder.

const captureRainwater = (heights) => {
    let totalWater = 0;
    let leftPointer = 0;
    let rightPointer = heights.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    
    while (leftPointer < rightPointer) {
    
    if (heights[leftPointer] <= heights[rightPointer]) {
        if (heights[leftPointer] >= leftMax) {
          leftMax = heights[leftPointer];
          } else {
            let waterSpace = leftMax - heights[leftPointer]; 
            if (waterSpace > 0) {
                    totalWater += waterSpace;    
            }
        }
        
      leftPointer++;
    } else {
        if (heights[rightPointer] >= rightMax) {
            rightMax = heights[rightPointer];
        } else {
            let waterSpace = rightMax - heights[rightPointer];
            if (waterSpace > 0) {
            totalWater += waterSpace;
            }
            rightPointer--;
            }
        }
    }
  
  return totalWater;
}
  
  const array = [1,2,0,3,4];
  
  console.log(captureRainwater(array));