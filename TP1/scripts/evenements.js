import { Bataille } from './bataille.js';


$(document).ready(function () {
    // Variables locales
    let jeu = new Bataille();
    let batailleEnCours = false;

    //Fonctions locales
    //=====================================================================================
    //  Auteurs:  Claudel D. Roy, William Jubinville & Mathieu Duval
    //  Description: Fonction permettant de cacher les messages.
    //  Date: 2022-10-03
    //=====================================================================================
    function CacherMessage() {
        if (batailleEnCours == false) {
            $('#bataille_joueur').css('visibility', 'hidden');
            $('#bataille_ordi').css('visibility', 'hidden');
        }
    }

    //=====================================================================================
    //  Auteurs:  Claudel D. Roy, William Jubinville & Mathieu Duval
    //  Description: Fonction permettant de le messages du gagnant du jeu.
    //  Date: 2022-10-03
    //=====================================================================================
    function AfficherGagnant(gagnant) {
        $('button').css('visibility', 'hidden');
        $('#bataille_' + gagnant).html('Partie gagnée!!!');
        $('#bataille_' + gagnant).css('visibility', 'visible');
    }

    //=====================================================================================
    //  Auteurs:  Claudel D. Roy, William Jubinville & Mathieu Duval
    //  Description: Fonction permettant d'afficher le message de bataille.
    //  Date: 2022-10-03
    //=====================================================================================
    function AfficherBataille() {
        $('#bataille_joueur').html('Bataille!!!');
        $('#bataille_ordi').html('Bataille!!!');
        $('#bataille_ordi').css('visibility', 'visible');
        $('#bataille_joueur').css('visibility', 'visible');
    }

    //=====================================================================================
    //  Auteurs:  Claudel D. Roy, William Jubinville & Mathieu Duval
    //  Description: Fonction permettant d'afficher les cartes.
    //  Date: 2022-10-03
    //=====================================================================================
    function AfficherCartes(NomCarteOrdi, NuméroCarteOrdi, NomCarteJoueur, NuméroCarteJoueur) {
        if (jeu.Ordi.NbCartesPile >= 0)
            $('.destination_ordi').attr('class', 'carte ' + 'destination_ordi ' + NomCarteOrdi + "-" + NuméroCarteOrdi);
        if (jeu.Ordi.NbCartesPile == 0)
            GererAffichageSourceVide('ordi');
        if (jeu.Joueur.NbCartesPile >= 0)
            $('.destination_joueur').attr('class', 'carte ' + 'destination_joueur ' + NomCarteJoueur + "-" + NuméroCarteJoueur);
        if (jeu.Joueur.NbCartesPile == 0)
            GererAffichageSourceVide('joueur');
    }

    //=====================================================================================
    //  Auteurs:  Claudel D. Roy, William Jubinville & Mathieu Duval
    //  Description: Fonction permettant de mettre à jour les statistiques de l'interface graphique avec la logique.
    //  Date: 2022-10-03
    //=====================================================================================
    function RafraichirStats() {
        $('#ordi_pile_stats').html(jeu.Ordi.NbCartesPile);
        $('#ordi_tourne_stats').html(jeu.Ordi.NbCartesTournees);
        $('#ordi_total_stats').html(jeu.Ordi.NbCartesTotal);
        $('#joueur_pile_stats').html(jeu.Joueur.NbCartesPile);
        $('#joueur_tourne_stats').html(jeu.Joueur.NbCartesTournees);
        $('#joueur_total_stats').html(jeu.Joueur.NbCartesTotal);
    }

    //=====================================================================================
    //  Auteurs:  Claudel D. Roy, William Jubinville & Mathieu Duval
    //  Description: Fonction permettant de mettre à jour l'affichage d'une pile vide et du bouton brasser.
    //  Date: 2022-10-03
    //=====================================================================================
    function GererAffichageSourceVide(joueur) {
        $('.source_' + joueur).attr('class', 'source_' + joueur + ' ' + 'carte ' + 'carteVide');
        $('#brasser_' + joueur).css('visibility', 'visible');
    }

    // Initialisation des 52 cartes de jeu
    jeu.InitierCartes();

    // Distribution de chaque paquet aux joueurs
    jeu.DistribuerCartes();
    $('.source_joueur').click(function () {
        if (jeu.DéterminerPartieGagnée() == jeu.Joueur) {
            return;
        }
        else if (jeu.DéterminerPartieGagnée() == jeu.Ordi) {
            return;
        }
        if (jeu.Joueur.Source.length < 1 || jeu.Ordi.Source.length < 1) return;
        console.log(jeu.Joueur.Source.length + jeu.Joueur.Destination.length + jeu.Ordi.Source.length + jeu.Ordi.Destination.length);
        //Variables pour les numéros de carte et les noms de cartes
        let NuméroCarteJoueur = jeu.Joueur.Source[jeu.Joueur.Source.length - 1].Numero;
        let NomCarteJoueur = jeu.Joueur.Source[jeu.Joueur.Source.length - 1].constructor.name;
        let NuméroCarteOrdi = jeu.Ordi.Source[jeu.Ordi.Source.length - 1].Numero;
        let NomCarteOrdi = jeu.Ordi.Source[jeu.Ordi.Source.length - 1].constructor.name;

        //Ajoute la carte au paquet Destination et l'enlève du paquet Source
        jeu.Joueur.Destination.push(jeu.Joueur.Source.pop());
        jeu.Ordi.Destination.push(jeu.Ordi.Source.pop());

        //Rafraichir l'affichage des cartes
        AfficherCartes(NomCarteOrdi, NuméroCarteOrdi, NomCarteJoueur, NuméroCarteJoueur);

        if (NuméroCarteOrdi == NuméroCarteJoueur) {
            AfficherBataille();
            batailleEnCours = true;
        }
        else
            CacherMessage();

        //Étape d'une bataille
        if (batailleEnCours == true)
            if (NuméroCarteOrdi != NuméroCarteJoueur) {
                // Vérifie et affiche le visuel en fonction du gagnant de la bataille.
                let gagnant = jeu.DéterminerGagnantBataille();
                if (gagnant == 'joueur') {
                    console.log('bataille joueur');
                    $('#bataille_joueur').html('Bataille gagnée!!!');
                    $('#bataille_joueur').css('visibility', 'visible');
                    $('#bataille_ordi').css('visibility', 'hidden');
                    batailleEnCours = false;
                }
                else if (gagnant == 'ordi') {
                    console.log('bataille ordi');
                    $('#bataille_ordi').html('Bataille gagnée!!!');
                    $('#bataille_ordi').css('visibility', 'visible');
                    $('#bataille_joueur').css('visibility', 'hidden');
                    batailleEnCours = false;
                }
            }
        RafraichirStats();
        if (jeu.DéterminerPartieGagnée() == jeu.Joueur) {
            AfficherGagnant('joueur');
            $('.destination_ordi').attr('class', 'carte ' + 'destination_ordi ' + 'carteVide');
        }
        else if (jeu.DéterminerPartieGagnée() == jeu.Ordi) {
            AfficherGagnant('ordi');
            $('.destination_joueur').attr('class', 'carte ' + 'destination_joueur ' + 'carteVide');
        }
    });

    //Rebrasse le paquet de l'ordinateur
    $('#brasser_ordi').click(function () {
        if (jeu.Ordi.NbCartesTournees > 0) {
            jeu.BrasserCartes('ordi');
            $('.source_ordi').attr('class', 'source_ordi' + ' carte ' + 'carteDessous');
            $('.destination_ordi').attr('class', 'carte ' + 'destination_ordi ' + 'carteVide');
            $('#brasser_ordi').css('visibility', 'hidden');
            RafraichirStats();
        }
    });

    //Rebrasse le paquet du joueur
    $('#brasser_joueur').click(function () {
        if (jeu.Joueur.NbCartesTournees > 0) {
            jeu.BrasserCartes('joueur');
            $('.source_joueur').attr('class', 'source_joueur' + ' carte ' + 'carteDessous');
            $('.destination_joueur').attr('class', 'carte ' + 'destination_joueur ' + 'carteVide');
            $('#brasser_joueur').css('visibility', 'hidden');
            RafraichirStats();
        }
    });

});

