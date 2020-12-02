import $ from './jquery-2.1.0.min';

const names = ['Tiger', 'Samuel', 'Leeloo',
    'Bella', 'Mo', 'Sly',
    'Beezy', 'Maple', 'Rodney',
    'Yonce', 'Reginald', 'Winifred'];

const ages  = ['9 Weeks', '12 Weeks', '3 Months',
    '8 Weeks', '1 Year', '15 Weeks',
    '4 Months', '2 Months', '14 Weeks',
    '6 Months', '10 Weeks', '8 Months'];

$('.mdc-card').find('.kittens').each( function(i, el) {
    let img = $(el).find('img');
    let name = $(el).find('.name');
    let age = $(el).find('.age');

    let w = 350;
    let h = 350;

    img.attr('src', 'http://placekitten.com/'+w+'/'+h+'?image='+i);
    name.text(names[i]);
    age.text(ages[i]);
});