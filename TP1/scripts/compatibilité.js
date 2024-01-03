    //=====================================================================================
    //  Auteurs:  Claudel D. Roy, William Jubinville & Mathieu Duval
    //  Description: Fonction pour la compatibilité du navigateur internet
    //  Date: 2022-10-03
    //=====================================================================================
    //Fonctions locales
function supporter_classes() {

	try {
		Function('class test { #_champ_test; }')();
		return true;
	}
	catch (e) {
		return false;
	}
}
if (supporter_classes() == false) {
	$('#message').html("N'est pas supporté par votre navigateur!!!");
	$('#message').css('display', 'block');
}
