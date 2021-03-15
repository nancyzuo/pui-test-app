function Chicken(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "a modern two-legged t-rex";
    this.image = "images/chicken.png";
  }
  
  function Cow(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "fresh milk";
    this.image = "images/cow.png";
  }

  function Sheep(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "expensive wool";
    this.image = "images/sheep.png";
  }

  var animals = [new Chicken(), new Cow(), new Sheep()]
  var names = ["Betty", "Joe", "Chickle", "Chik-fil-a", "Moo"]

  function generateRandomIndex(maxIndex) {
      return Math.floor(Math.random() * maxIndex)
  }

  function generateRandomName() {
      let randomIndex = getRandomIndex(names.length);
      return names[randomIndex];
  }

  function generateRandomAge() {
      return getRanxomIndex(5);
  }
  
  function generateRandomAnimal() {
    let randomIdx = getRandomIndex(animals.length);
    let randomAnimal = animals[randomIdx];
    if (randomAnimal instanceof Chicken) 
    {
      return new Chicken(generateRandomName(), generateRandomAge());
    } 
    else if (randomAnimal instanceof Cow) 
    {
      return new Cow(generateRandomName(), generateRandomAge());
    } 
    else if (randomAnimal instanceof Sheep) 
    {
      return new Sheep(generateRandomName(), generateRandomAge());
    }
  }
  