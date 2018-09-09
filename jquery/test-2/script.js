$(document).ready(function() {
  $('#extractItems').click(extractItems);

  function extractItems() {
    $('#extractedText').val($('ul li').toArray().map(li => li.innerText).join('\n'));
  };
});
