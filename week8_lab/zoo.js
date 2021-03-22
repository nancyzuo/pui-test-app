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

  function getRandomIndex(maxIndex) {
      return Math.floor(Math.random() * maxIndex)
  }

  function generateRandomName() {
      let randomIndex = getRandomIndex(names.length);
      return names[randomIndex];
  }

  function generateRandomAge() {
      return getRandomIndex(5);
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

  function onLoad() {
    let animal = generateRandomAnimal();
    console.log(animal)
    document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + "years old";
    let imageTag = document.getElementById("animal-img");
    imageTag.setAttribute("src", animal.image);
    imageTag.setAttribute("alt", animal.image_alt);
    localStorage.setItem("savedAnimal", JSON.stringify(animal));
  }
  