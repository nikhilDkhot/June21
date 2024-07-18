enum CardinalDirections {
    North,
    East,
    South,
    West
  }
  //let currentDirection = CardinalDirections.North;  // logs 0
  let currentDirection = CardinalDirections.West; //log 3
 
  console.log(currentDirection);
  // throws error as 'North' is not a valid enum
  //currentDirection = 'North';

  enum CardinalDirections1 {
    North = 1,
    East,
    South,
    West
  }
  // logs 1
  console.log(CardinalDirections1.North);
  // logs 4
  console.log(CardinalDirections1.West);

/*************************/
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);

/*************************/
enum CardinalDirections2 {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};
// logs "North"
console.log(CardinalDirections2.North);
// logs "West"
console.log(CardinalDirections2.West);