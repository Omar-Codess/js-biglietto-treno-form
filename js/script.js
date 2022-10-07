const userNameInput = document.getElementById("user-name");
// Chiedere all'utente quanti kilometri deve percorrere
const userKmInput = document.getElementById("kilometers")
console.log(userKmInput, typeof userKmInput);

// Chiedere all'utente la sua età
const userAgeInput = document.getElementById("user-age");
console.log(userAgeInput, typeof userAgeInput);

const submitBtn = document.getElementById("submit");

const nome = document.querySelector("h2");
console.log(nome);
const result = document.querySelector("p")
console.log(result);

// Al click sul bottone submit
submitBtn.addEventListener("click", function () {
    // Prendo i valori degli input
    const userName = userNameInput.value;
    console.log(userName);
    const userKm = userKmInput.value;
    console.log(userKm);
    const userAge = userAgeInput.value;
    console.log(userAge);
    
    const price = userKm * 0.21;
    console.log(price);
    
    let discountPercentage = 0;
    if (userAge < 18) {
    discountPercentage = 20;
    } else if (userAge > 65) {
    discountPercentage = 40;
    }

    console.log(discountPercentage);

    let finalPrice = price - (price * discountPercentage / 100);
    finalPrice = finalPrice.toFixed(2)
    console.log(finalPrice);

    nome.innerHTML = `Ciao ${userName}`;
    result.innerHTML = `Il prezzo del  tuo biglietto è ${finalPrice}`;
    
    // Ripulisco l'input
    userNameInput.value = "";
    userKmInput.value = "";
    userAgeInput.value = "";
  });