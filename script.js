
// y'en a qui disent de mettre document.addEventListener("DOMContentLoaded") et mettre une function() pour lattacher a l'event et pour quil soit exucuté aprés script 
    console.log("Script chargé !");
    let maTable = document.createElement("table");
    document.body.appendChild(maTable);

    // let ou const ?????????????????????
    const lettresColonnes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    // const lignes = 8;

    //première ligne avec les lettres 
    // let premiereLigne = maTable.insertRow(); 

    // for (let i = -1; i < lettresColonnes.length; i++) {
    //     let maCellule = premiereLigne.insertCell();
    //     maCellule.textContent = lettresColonnes[i];
    //     maCellule.style.border = "none";
    // }

    // Génération des lignes de ma table
    for (let ligne = 0; ligne <= 8; ligne++) {
        // let maLigne = maTable.insertRow();// Tr 
        let uneLigne = document.createElement("tr");
        maTable.appendChild(uneLigne);
        // chaque cellule de chaque ligne avec le numéro de la ligne
        // let maCellule = maLigne.insertCell();

        // Alternance des cases dans chaque ligne
        for (let cellule = 0; cellule <= 8; cellule++) {
            // maCellule = maLigne.insertCell();
            let uneCellule = document.createElement("td");
            if (ligne == 0 || cellule == 0) {
                uneCellule.style.border = "none";
                cellule == 0 ? uneCellule.textContent = ligne : "";
                ligne == 0 && cellule > 0 ? uneCellule.textContent = lettresColonnes[cellule-1]: "";
            } else {
                if ((ligne % 2 == 1 && cellule % 2 == 1) || (ligne % 2 == 0 && cellule % 2 == 0)) {
                uneCellule.style.backgroundColor = "black";
            }
            }
            // Alterné entre noir et blanc
            // Ajouter le texte dans l'echec
            uneLigne.appendChild(uneCellule);
        }
    }
