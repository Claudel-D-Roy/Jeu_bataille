//=====================================================================================
//  Auteurs:  Claudel D. Roy, William Jubinville & Mathieu Duval
//  Description: Classe permettant la gestion des joueurs (ordinateur et utilisateur).
//  Date: 22-09-2022
//=====================================================================================

export class Joueur {
    // Champs
    #_Source = [];
    #_Destination = [];

    // Propriétés
    //=====================================================================================
    //  Auteurs:  Claudel D. Roy, William Jubinville & Mathieu Duval
    //  Description: Propriété retournant l'objet de la source.
    //  Date: 2022-9
    //=====================================================================================
    get Source() {
        return this.#_Source;
    }

    //=====================================================================================
    //  Auteurs:  Claudel D. Roy, William Jubinville & Mathieu Duval
    //  Description: Propriété affectant l'objet de la source.
    //  Date: 2022-9
    //=====================================================================================
    set Source(source) {
        if (source.length <= 52) {
            this.#_Source = source;
        }
        else {
            throw Error("Nombre de cartes trop élevé dans la source!");
        }
    }

    //=====================================================================================
    //  Auteurs:  Claudel D. Roy, William Jubinville & Mathieu Duval
    //  Description: Propriété retournant l'objet de la destination.
    //  Date: 2022-9
    //=====================================================================================
    get Destination() {
        return this.#_Destination;
    }

    //=====================================================================================
    //  Auteurs:  Claudel D. Roy, William Jubinville & Mathieu Duval
    //  Description: Propriété affectant l'objet de la destination.
    //  Date: 2022-9
    //=====================================================================================
    set Destination(destination) {
        if (destination.length <= 52) {
            this.#_Destination = destination;
        }
        else {
            throw Error("Nombre de cartes trop élevé dans la destination!");
        }
    }

    //=====================================================================================
    //  Auteurs:  Claudel D. Roy, William Jubinville & Mathieu Duval
    //  Description: Propriété retournant la longueur de l'objet de la source.
    //  Date: 2022-9
    //=====================================================================================
    get NbCartesPile() {
        return this.#_Source.length;
    };

    //=====================================================================================
    //  Auteurs:  Claudel D. Roy, William Jubinville & Mathieu Duval
    //  Description: Propriété retournant la longeur de l'objet de la destination.
    //  Date: 2022-9
    //=====================================================================================
    get NbCartesTournees() {
        return this.#_Destination.length;
    };

    //=====================================================================================
    //  Auteurs:  Claudel D. Roy, William Jubinville & Mathieu Duval
    //  Description: Propriété retournant la somme de la longueur de l'objet de la source 
    //               et de la longeur de l'objet de la destination.
    //  Date: 2022-9
    //=====================================================================================
    get NbCartesTotal() {
        return this.NbCartesPile + this.NbCartesTournees;
    };
}