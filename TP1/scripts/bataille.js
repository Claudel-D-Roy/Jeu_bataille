import { Coeur } from './coeur.js';
import { Carreau } from './carreau.js';
import { Trefle } from './trefle.js';
import { Pique } from './pique.js';
import { Joueur } from './joueur.js';
//====================================================================================
//  Auteurs: Claudel D. Roy, William Jubinville & Mathieu Duval
//  Description: Classe permettant la gestion du déroulement d'une partie de Bataille
//  Date: 22-09-2022
//====================================================================================
export class Bataille {

    // Variables locales
    #_Joueur = undefined;
    #_Ordi = undefined;
    #_Cartes = undefined;

    // Propriétés
    //=====================================================================================
    //  Auteurs:  Claudel D. Roy, William Jubinville & Mathieu Duval
    //  Description: Propriété retournant l'objet du joueur.
    //  Date: 2022-9
    //=====================================================================================
    get Joueur() {
        return this.#_Joueur;
    };

    //=====================================================================================
    //  Auteurs:  Claudel D. Roy, William Jubinville & Mathieu Duval
    //  Description: Propriété retournant l'objet de l'ordi.
    //  Date: 2022-9
    //=====================================================================================
    get Ordi() {
        return this.#_Ordi;
    };

    //=====================================================================================
    //  Auteurs:  Claudel D. Roy, William Jubinville & Mathieu Duval
    //  Description: Propriété retournant l'objet des cartes.
    //  Date: 2022-9
    //=====================================================================================
    get Cartes() {
        return this.#_Cartes;
    };

    //Constructeur
    //=====================================================================================
    //  Auteurs:  Claudel D. Roy, William Jubinville & Mathieu Duval
    //  Description: Constructeur de bataille.
    //  Date: 2022-9
    //=====================================================================================
    constructor() {
        this.#_Cartes = [];
        this.#_Joueur = new Joueur();
        this.#_Ordi = new Joueur();
    }

    // Méthodes
    //====================================================================
    //  Auteurs: Claudel D. Roy, William Jubinville & Mathieu Duval
    //  Description: Initialisation et brassage initial des cartes de jeu 
    //  Date: 22-09-2022
    //====================================================================
    InitierCartes() {
        // Instanciation des 52 cartes de jeu
        for (var i = 2; i < 15; i++) {
            this.#_Cartes.push(new Coeur(i));
            this.#_Cartes.push(new Carreau(i));
            this.#_Cartes.push(new Trefle(i));
            this.#_Cartes.push(new Pique(i));
        }

        // Brassage initial du paquet avant la distribution
        for (let i = 0; i < 500; i++) {
            let r1 = Math.floor(Math.random() * 52);
            let r2 = Math.floor(Math.random() * 52);
            let temp = this.#_Cartes[r1];
            this.#_Cartes[r1] = this.#_Cartes[r2];
            this.#_Cartes[r2] = temp;
        }

        console.log('Les cartes ont été créées!');
    }

    //======================================================================
    //  Auteurs: Claudel D. Roy, William Jubinville & Mathieu Duval
    //  Description: Distribution initiale des cartes en deux paquets égaux
    //  Date: 22-09-2022
    //======================================================================
    DistribuerCartes() {
        //Variables locales
        let taillePaquet = this.#_Cartes.length;

        // Distribution des cartes, une à une, en deux paquets différents
        for (var i = 0; i < taillePaquet; i++) {
            if (i % 2 == 0)
                this.#_Joueur.Source.push(this.#_Cartes.pop());
            else
                this.#_Ordi.Source.push(this.#_Cartes.pop());
        }
    }


    //======================================================================
    //  Auteurs: Claudel D. Roy, William Jubinville & Mathieu Duval
    //  Description: Brasser les cartes des joueurs au besoin
    //  Date: 22-09-2022
    //======================================================================
    BrasserCartes(joueur) {
        let r1 = undefined;
        let r2 = undefined;
        let temp = undefined;
        if (joueur == 'joueur') {
            while (this.#_Joueur.Destination.length > 0)
                this.#_Joueur.Source.push(this.#_Joueur.Destination.pop());
            for (let i = 0; i < 100; i++) {
                r1 = Math.floor(Math.random() * this.#_Joueur.Source.length);
                r2 = Math.floor(Math.random() * this.#_Joueur.Source.length);
                temp = this.#_Joueur.Source[r1];
                this.#_Joueur.Source[r1] = this.#_Joueur.Source[r2];
                this.#_Joueur.Source[r2] = temp;
            }
            this.#_Joueur.Destination = [];
        }
        else {
            while (this.#_Ordi.Destination.length > 0)
                this.#_Ordi.Source.push(this.#_Ordi.Destination.pop());
            for (let i = 0; i < 100; i++) {
                r1 = Math.floor(Math.random() * this.#_Ordi.Source.length);
                r2 = Math.floor(Math.random() * this.#_Ordi.Source.length);
                temp = this.#_Ordi.Source[r1];
                this.#_Ordi.Source[r1] = this.#_Ordi.Source[r2];
                this.#_Ordi.Source[r2] = temp;
            }
            this.#_Ordi.Destination = [];
        }
    }


    //======================================================================
    //  Auteurs: Claudel D. Roy, William Jubinville & Mathieu Duval
    //  Description: Récupérer les cartes du joueur perdant et les ajouteurs au joueur gagnant
    //  Date: 22-09-2022
    //======================================================================
    RécupérerCartes(gagnant, perdant) {
        while (perdant.NbCartesTournees > 0) {
            gagnant.Source.push(perdant.Destination.pop());
        }
    }

    //======================================================================
    //  Auteurs: Claudel D. Roy, William Jubinville & Mathieu Duval
    //  Description: Déterminer qui a gagnée la bataille
    //  Date: 02-10-2022
    //======================================================================
    DéterminerGagnantBataille() {
        if (this.#_Joueur.Destination[this.#_Joueur.Destination.length - 1].Numero > this.#_Ordi.Destination[this.#_Ordi.Destination.length - 1].Numero) {
            this.RécupérerCartes(this.#_Joueur, this.#_Ordi);
            return 'joueur';
        }
        if (this.#_Joueur.Destination[this.#_Joueur.Destination.length - 1].Numero < this.#_Ordi.Destination[this.#_Ordi.Destination.length - 1].Numero) {
            this.RécupérerCartes(this.#_Ordi, this.#_Joueur);
            return 'ordi';
        }
    }

    //======================================================================
    //  Auteurs: Claudel D. Roy, William Jubinville & Mathieu Duval
    //  Description: Déterminer qui a gagnée la partie
    //  Date: 02-10-2022
    //======================================================================
    DéterminerPartieGagnée() {
        if (this.#_Joueur.NbCartesPile == 0 && this.#_Joueur.NbCartesTournees == 0)
            return this.#_Ordi;
        if (this.#_Ordi.NbCartesPile == 0 && this.#_Ordi.NbCartesTournees == 0)
            return this.#_Joueur;
        if (this.#_Ordi.NbCartesPile != 0 && this.#_Ordi.NbCartesTournees != 0 && this.#_Joueur.NbCartesPile != 0 && this.#_Joueur.NbCartesTournees != 0)
            return false;
    }

}