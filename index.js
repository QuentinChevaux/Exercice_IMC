function valider() {
    let poid = document.getElementById("poid").value;
    let taille = document.getElementById("taille").value;

    let resultat;

    resultat = poid / (taille * taille);

    document.getElementById("output").innerHTML = resultat;

    if (resultat < 18.5) {
        document.getElementById("type_imc").innerHTML = "Vous êtes dans la catégorie SousPoid";

        document.getElementById("imc").style.backgroundColor ="lightblue";
    }    
    
    if (resultat > 18.5 && resultat < 24.9) {
        document.getElementById("type_imc").innerHTML = "Vous êtes dans la catégorie Normale";

        document.getElementById("imc").style.backgroundColor ="blue";
    }
    
    if (resultat > 25 && resultat < 29.9) {
        document.getElementById("type_imc").innerHTML = "Vous êtes dans la catégorie Surpoids";

        document.getElementById("imc").style.backgroundColor ="yellow";
    }

    if (resultat > 30 && resultat < 34.9) {
        document.getElementById("type_imc").innerHTML = "Vous êtes dans la catégorie Obésité";

        document.getElementById("imc").style.backgroundColor ="orange";
    }

    if (resultat > 35 && resultat < 39.9) {
        document.getElementById("type_imc").innerHTML = "Vous êtes dans la catégorie Obésité Sévère";

        document.getElementById("imc").style.backgroundColor ="red";
    }

    if (resultat > 40 ) {
        document.getElementById("type_imc").innerHTML = "Vous êtes dans la catégorie Obésité Morbide";

        document.getElementById("imc").style.backgroundColor ="darkred";
    }
    
}