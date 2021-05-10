let fruits = new Map([
    ["apple", "green"],
    ["strawberry", "red"],
    ["blueberry", "blue"]
  ]);
  
  for (let name of fruits.keys()) {
      console.log(name + '-x');
    }
  
  for (let color of fruits.values()) {
    console.log(color + '-y');
  }