function assignGrade(score) {
    if (score > 90) {
      return "A";
    } else if (score > 80) {
      return "B";
    } else if (score > 70) {
      return "C";
    } else if (score > 65) {
      return "D";
    } else {
      return "E";
    }
  }

//   Write a for loop that iterates from 60 to 100.
//    This value indicates the "score" of a student.
//     During each iteration, call the assignGrade function with the current and log the following statement:
  //For scoring 80 points, you get an C

  for (let i=60; i<=80; i++) {
      console.log('For scoring ' +i + ' points, uou get an ' + assignGrade(i));
  }

  //For scoring 60 points, uou get an E...
  //For scoring 66 points, uou get an D
  //For scoring 80 points, uou get an C

