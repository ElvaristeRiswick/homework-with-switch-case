total = 0;

function addittioner() {
  let fruit = document.getElementById("fruit").value;

  switch (fruit) {
    case "orange":
      total += 5;
      alert("vous avez choisir une orange le prix total est " + total + "us");
      break;

    case "mango":
      total += 10;
      alert("vous avez choisir un  mango le prix total est " + total + "us");
      break;

    case "pomme":
      total += 20;
      alert("vous avez choisir un  pomme le prix total est " + total + "us");
      break;

    default:
      alert(" tu dois faire un  choix");
      break;
  }
}

function finaliser() {
  alert("le prix total des achats " + total + "us");
}
