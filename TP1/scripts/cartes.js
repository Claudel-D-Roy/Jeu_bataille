export class Carte {
    /*Champs privés*/
    #_Numero = -1;
    /*Propriétés*/
    get Numero() {
        return this.#_Numero;
    }
    set Numero(numero) {
        //Si numero est un nombre alors
        if (!isNaN(numero)) {
            //Si numero a une valeur permise alors
            if (numero < 0 || numero > 13) {
                this.#_Numero = numero;
            }
        }
        else {
            throw Error("Numéro de carte invalide !");
        }
    }
    /*Constructeur*/
    constructor(numero) {
        this.Numero(numero)

    }
}