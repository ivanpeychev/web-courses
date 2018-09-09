$(document).ready(function() {
  $('#textToSearch').on('keyup', search);

  function search() {
    let textToSearch = $('#textToSearch').val().toLowerCase();
    let items = $('#items li').toArray();
    let count = 0;
    let resultArr = [];

    if(textToSearch != '') {
      $.each(items, function(i, val) {
        if ($(val).text().toLowerCase().search(textToSearch) >= 0) {
          $(items[i]).css('font-weight', 'bold');
          count+=1;
          resultArr.push($(items[i]).text());
        } else {
          $(items[i]).css('font-weight', 'normal');
        }
      })
  } else {
      items.forEach(i => $(i).css('font-weight', 'normal'));
  }

    if(count > 0) {
      let resultText = $(resultArr).toArray().join(', ');
      $('#resultText').text(`You have ${count} results that match your criteria: ${resultText}.`);
      } else {
          $('#resultText').text(`No results :(`);
      }
  }
});
