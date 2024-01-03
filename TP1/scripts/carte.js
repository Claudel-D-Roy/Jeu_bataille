//===============================================================
//  Auteurs: Claudel D. Roy, William Jubinville & Mathieu Duval
//  Description: Classe permettant la gestion des cartes de jeu.
//  Date: 22-09-2022
//===============================================================
export class Carte {

    //Variables locales
    #_Numero = 0;

    // Propriétés
    get Numero() {
        return this.#_Numero;
    }

    set Numero(numero) {
        this.#_Numero = numero;
    }

    // Constructeur
    constructor(numero) {
        this.#_Numero = numero;
    }
}