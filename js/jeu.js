/*
 * Aleatoire : un entier entre min et max inclus
 */
aleatoire = function(min, max) {
	console.info("aleatoire")
	return Math.floor((max - min + 1) * Math.random() + min)
}



/*
 * Jeu : trouver un nombre entre 1 et 100
 */

partie = 0

jeu = function() {
	console.info("jeu")

	// On lance une partie
	partie++

	/* 1. Sélection du nombre aléatoire */
	var rand = aleatoire(1,100)
	console.log(rand)

	/* 2. Faire jouer l'utilisateur */

	// Tant qu'on a pas gagné, on joue
	var input
	var tentatives = 0
	do {
		// On fait une tentative
		tentatives++
		console.log("tentative n°" + tentatives)

		input = prompt("Choisissez un nombre entre 1 et 100")

		/* 3. Tests */
		if(input == null) {
			finDujeu("Abandon :(")
			return
		}
		if(isNaN(parseInt(input))) {
			alert("Veuillez rentrer un nombre !!!")
		}
		if(input < rand) { // C'est trop petit ?
			alert("Trop petit !")
		}
		if(input > rand) { // C'est trop grand ?
			alert("Trop grand !")
		}

	} while(input != rand && tentatives < 10)

	// On a gagné ?
	if(input == rand) {
		finDujeu("Gagné")
	} else {
		finDujeu("Perdu")
	}

	/*
		// On remet ça ?
		if(partie == null)
			partie = 0

		if(partie < 3 && confirm("Voulez-vous rejouer ?")) {
			partie++
			jeu(partie)
		} else {
			alert("A bientôt")
		}
	*/

}


/*
 * finDuJeu : affiche dans le html le résultat
 */
finDujeu = function(msg) {
	// Je récupère mon tableau de résultats
	var resultats = document.getElementById("resultats")

	// Puis je crée un <tr>
	var tr = document.createElement("tr")

	// Je crée mes <td>
	var td_partie = document.createElement("td")
	var td_resultat = document.createElement("td")

	// Rajouter le numéro de partie
	td_partie.innerHTML = partie

	// Rajouter le contenu msg dans mon <td>
	td_resultat.innerHTML = msg

	// Je rajoute mes <td> dans mon <tr>
	tr.appendChild(td_partie)
	tr.appendChild(td_resultat)

	// On rajoute de la couleur
	if(msg == "Gagné") {
		var couleur = "victoire"
	} else {
		var couleur = "defaite"
	}
	tr.className = couleur

	// Je rajoute mon <tr> dans le tableau
	resultats.appendChild(tr)
}


var boutonJouer = document.getElementById("jouer")
boutonJouer.addEventListener("click", jeu)