function Chicken(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "a modern two-legged t-rex";
    this.image = "images/chicken.png";
    this.type = "Chicken";
  }
  
  function Cow(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "fresh milk";
    this.image = "images/cow.png";
    this.type = "Cow";
  }

  function Sheep(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "expensive wool";
    this.image = "images/sheep.png";
    this.type = "Sheep";
  }

  var animals = [new Chicken(), new Cow(), new Sheep()]
  var names = ["Betty", "Joe", "Chickle", "Chik-fil-a", "Moo"]

  function getRandomIndex(maxIndex) {
      return Math.floor(Math.random() * maxIndex)
  }

  function generateRandomName() {
    let randomIdx = getRandomIndex(names.length);
    return names[randomIdx];
  }

  function generateRandomAge() {
    let randomIdx = getRandomIndex(5);
    return randomIdx;
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

  // document load
  function onLoad() {

    // gets item in local storage if it exists
    var animal = JSON.parse(localstorage.getItem("savedAnimal"));

    // boolean to track if there is a saved animal
    var hasSavedAnimal = false;

    // checks if saved animal exists
    if (animal == null)
    {
      // will display save animal text if there is no saved animal 
      document.getElementById("button-storage").textContent = "Save Animal";

      // we will call function to generate random animal if there isn't one
      animal = generateRandomAnimal();
    }

    else 
    {
      // if there is an animal than this will display 'clear' instead
      document.getElementById("button-storage").textContent = "Clear Animal";

      // this changes to true bc there is an animal stored 
      hasSavedAnimal = true;
    }

    // update the page based on the animal properties
    document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + "years old";
    document.getElementById("animal-img").setAttribute("src", animal.image);


    document.getElementById("button-storage").addEventListener("click", function() {
    //when we are clearing the animal
    if (hasSavedAnimal) 
    {
      // clear the animal from the local storage
      localStorage.removeItem("savedAnimal");

      // if this button was clicked, hide button and show message to user
      document.getElementById("button-storage").style.display = "none";
      document.getElementById("button-action-text").textContent = "Cleared!";
      document.getElementById("button-action-text").style.display = "block";
    }
    //when we are saving the animal
    else 
    {
      // save the animal to the local storage
      localStorage.setItem("savedAnimal", JSON.stringify(animal));

      // if this button was clicked, hide button and show message to user
      document.getElementById("button-storage").style.display = "none";
      document.getElementById("button-action-text").textContent = "Saved!";
      document.getElementById("button-action-text").style.display = "block";
    }
  });
};

// I understand the code but I keep getting an error that says local storage is not defined so it doesn't show up in the browser
// confused on adding items to array using JSON

// code from previous lab
  //   let animal = generateRandomAnimal();
  //   console.log(animal)
  //   document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + "years old";
  //   let imageTag = document.getElementById("animal-img");
  //   imageTag.setAttribute("src", animal.image);
  //   imageTag.setAttribute("alt", animal.image_alt);
  //   localStorage.setItem("savedAnimal", JSON.stringify(animal));
  // }
  