$(document).ready(() => {
  
  function attachEventsToButtons() {
    $('button').on('click', selectItem);
  }

  function unselectElements() {
    $('button').removeClass('active');
  }

  function selectItem() {
    let btn = $(this);
    if (btn.hasClass('active')) {
      unselectElements();
    } else {
      unselectElements();
      btn.addClass('active');
    }
  }

  attachEventsToButtons();

});