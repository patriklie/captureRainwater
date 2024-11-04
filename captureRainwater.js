const naiveSolution = (heights) => {
	let totalWater = 0;
  
  for (let i = 1; i < heights.length -1; i++) {
  		let leftBound = 0;
      let rightBound = 0;
      
      // finner største søyle til venstre
      for (let j = 0; j <= i; j++ ) {
        leftBound = Math.max(leftBound, heights[j]);
      }
      
      // finner største søyle til høyre
      for (let j = i; j < heights.length; j++) {
      	rightBound = Math.max(rightBound, heights[j]);
      }
      
      totalWater += Math.min(leftBound, rightBound) - heights[i];
      
  	}
    return totalWater;
};

// funksjonen skal logge 6
console.log(naiveSolution([4,2,1,3,0,1,2]));