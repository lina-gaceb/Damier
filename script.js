

    console.log("Script chargé !");
    let maTable = document.createElement("table");
    document.body.appendChild(maTable);

    // let 
    const lettresColonnes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
 
    // Génération des lignes de ma table
    for (let ligne = 0; ligne <= 8; ligne++) {
        let uneLigne = document.createElement("tr");
        maTable.appendChild(uneLigne);
      

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
            uneLigne.appendChild(uneCellule);
        }
    }
