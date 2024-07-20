interface Rectangle {
    height: number,
    width: number
  }
  
  const rectangle: Rectangle = {
    height: 20,
    width: 10
  };

  console.log(rectangle.height);
  console.log(rectangle.width); 

  interface Rectangle1 {
    height: number,
    width: number
  }
  
  interface ColoredRectangle extends Rectangle1 {
    color: string
  }
  
  const coloredRectangle: ColoredRectangle = {
    height: 55,
    width: 99,
    color: "blue"
  };  

  console.log(coloredRectangle.color);
  console.log(coloredRectangle.width);
  
  
  