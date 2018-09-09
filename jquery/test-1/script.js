var people = [];
var template = $('#people-template').html();

$('#peopleModule').find('button').on('click', function () {
    people.push($('#peopleModule').find('input').val());
    $('#peopleModule').find('input').val('');

    var data = {
        people: people,
    };
    $('#peopleModule').find('ul').html()
});