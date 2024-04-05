class Milk {
  constructor(name, dessert) {
    this.name = name;
    this.dessert = dessert;
  }

  describe() {
    //console.log(`${this.name} tastes ${this.flavor}`);
    return `${this.name} tastes ${this.dessert}`;
  }
}

class Flavor {
  constructor(name) {
    this.name = name;
    this.flavors = [];
  }

  addMilk(milk) {
    if (milk instanceof Milk) {
      this.flavors.push(milk);
    } else {
      throw new Error(`Sorry, you can't have dairy: ${milk}`);
    }
  }

  describe() {
    return `${this.name} has a variety of ${this.flavors.length} selection.`;
  }
}

class Menu {
  constructor() {
    this.flavors = [];
    this.selectedFlavor = null;
  }

  start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
      switch (selection) {
        case "1":
          this.createFlavor();
          break;
        case "2":
          this.viewFlavor();
          break;
        case "3":
          this.deleteFlavor();
          break;
        case "4":
          this.displayFlavors();
          break;
        default:
          selection = 0;
      }
      selection = this.showMainMenuOptions(flavorInfo);
    }
    alert("Goodbye!");
  }
  showMainMenuOptions() {
    return prompt(`
    0) exit
    1) create new flavor
    2) view flavor
    3) delete flavor
    4) display all flavors
    `);
  }
  showMainMenuOptions(flavorInfo) {
    return prompt(`
    0) back
    1) add new flavor
    2) delete a flavor
    -------------------
    ${flavorInfo}
    `);
  }

  displayFlavors() {
    let flavorString = "";
    for (let i = 0; i < this.flavors.length; i++) {
      flavorString += i + ")" + this.flavors[i].name + "\n";
    }
    alert(flavorString);
  }
  createFlavor() {
    let name = prompt("Enter new flavor name");
    this.flavors.push(new Flavor(name));
  }

  viewFlavor() {
    let index = prompt("Enter index of flavor you want to view");
    if (index > -1 && index < this.flavors.length) {
      this.selectedFlavor = this.flavors[index];
      let description = "Flavor Name: " + this.selectedFlavor.name + "\n";
      description += "" + this.selectedFlavor.describe() + "\n";
      for (let i = 0; i < this.selectedFlavor.food.length; i++) {
        description +=
          i + ")" + this.selectedFlavor.flavors[i].describe() + "\n";
      }

      let selection1 = this.showMainMenuOptions(description);
      switch (selection1) {
        case "1":
          this.createFlavor();
          break;
        case "2":
          this.deleteFlavor();
      }
    }
  }

  deleteFlavor() {
    let index = prompt("Enter the index of the flavor you wish to delete:");
    if (index > -1 && index < this.flavors.length) {
      this.flavors.splice(index, 1);
    }
  }

  createFlavor() {
    let name = prompt("Enter name for new flavor:");
    let position = prompt("Enter new flavor:");
    this.selectedFlavor.addFlavor(new Flavor(name, desert));
  }

  deleteFlavor() {
    let index = prompt("Enter idex of the flavor you wish to delete ");
    if (index > -1 && index < this.flavors.length) {
      this.flavors.splice(index, 1);
    }
  }

  createFood() {
    let name = promp("Enter name for new flavor:");
    let position = prompt("Enter dessert for new flavor:");
    this.selectedFlavor.addDessert(new Dessert(name, dessert));
  }

  deleteFood() {
    let index = prompt("Enter the index of the flavor you wish to delete:");
    if (index > -1 && index < this.selectedFlavor.Dessert.length) {
      this.selectedFlavor.Dessert.splice(index, 1);
    }
  }
}
let menu = new Menu();
menu.start();
