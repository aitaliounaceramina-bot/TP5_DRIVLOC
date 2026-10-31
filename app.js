
document.addEventListener("DOMContentLoaded", function () {

    let boutons = document.querySelectorAll(".contact-button");

    boutons.forEach(function (bouton) {

        bouton.addEventListener("click", function () {

            let carte = bouton.closest(".car-card");
            let nom = carte.querySelector(".car-name").textContent;
            let prix = carte.querySelector(".section-title").textContent;
            alert("Vous avez choisi : " + nom +
                  "\nPrix : " + prix +
                  "\nContactez-nous pour réserver votre voiture.");

        });

    });

});

document.querySelectorAll(".car-card").forEach(function (carte) {

    let bouton = document.createElement("button");

    bouton.textContent = "♡ Ajouter aux favoris";
    bouton.className = "btn btn-outline-danger btn-sm mt-2";

    carte.querySelector(".card-body").appendChild(bouton);

    bouton.addEventListener("click", function () {

        if (bouton.classList.contains("active")) {
            bouton.classList.remove("active");
            bouton.textContent = "♡ Ajouter aux favoris";
        } else {
            bouton.classList.add("active");
            bouton.textContent = "♥ Ajoutée aux favoris";
        }

    });

});

document.querySelectorAll(".car-card").forEach(function (carte) {

    let calculateur = document.createElement("div");
    calculateur.className = "mt-3";

    calculateur.innerHTML = `
        <label class="form-label">Nombre de jours :</label>

        <input type="number"
               class="form-control nombre-jours"
               min="1"
               value="1">

        <p class="mt-2 fw-bold prix-total">
            Prix total : -- DH
        </p>

        <button class="btn btn-primary btn-sm calculer-prix">
            Calculer le prix
        </button>
    `;

    carte.querySelector(".card-body").appendChild(calculateur);

   let textePrix = carte.querySelector(".prix-voiture").textContent;
    let prixJournalier = parseInt(textePrix);

    let jours = calculateur.querySelector(".nombre-jours");
    let resultat = calculateur.querySelector(".prix-total");
    let bouton = calculateur.querySelector(".calculer-prix");

    bouton.addEventListener("click", function () {

        let nombreJours = parseInt(jours.value);

        if (isNaN(nombreJours) || nombreJours < 1) {
            resultat.textContent = "Veuillez entrer un nombre de jours valide.";
        } else {
            let total = prixJournalier * nombreJours;

            resultat.textContent = "Prix total : " + total + " DH";
        }

    });

});
