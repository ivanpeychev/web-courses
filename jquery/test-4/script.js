$(document).ready(function() {
  
   appendCountryToTable('Bulgaria', 'Sofia');
   appendCountryToTable('Sweden', 'Stockholm');
   appendCountryToTable('USA', 'Washington');
  
  $("#add-btn").click(add);

  function add() {
    let country = $("#country-inp").val();
    let city = $("#city-inp").val();

    appendCountryToTable(country, city);
    $("#country-inp").val('');
    $("#city-inp").val('');
  }

  function appendCountryToTable(country, city) {
    let tbl = $("#countries-tbl");
    let tr = $('<tr>');
    let tdCountry = $('<td>').text(country).addClass('h4');
    let tdCity = $('<td>').text(city).addClass('h4');
    let upBtn = $('<button>').text('Up').click(moveUp).addClass('btn btn-primary');
    let deleteBtn = $('<button>').text('Delete').click(deleteItem).addClass('btn btn-danger');
    let downBtn = $('<button>').text('Down').click(moveDown).addClass('btn btn-primary');
    let tdActions = $('<td>');
    tdActions
      .append(upBtn)
      .append(deleteBtn)
      .append(downBtn);

    tbl
      .append(tr  
        .append(tdCountry)
        .append(tdCity)
        .append(tdActions)
      );
    fixRows();
  }

  function moveUp() {
    let row = $(this).parent().parent();
    row.fadeOut(function() {
        row.prev().insertAfter(row);
        row.fadeIn();
        fixRows();
      }
    )
  }

  function deleteItem() {
    let row = $(this).parent().parent();
    row.fadeOut(function() {
      row.remove();
      fixRows();
    }
    );
  }

  function moveDown() {
    let row = $(this).parent().parent();
    row.fadeOut(function() {
        row.next().insertBefore(row);
        row.fadeIn();
        fixRows();
      }
    )
  }

  function fixRows() {
    let rows = $('#countries-tbl tr');
    $(rows).find('td button').css('position', 'static');
    $(rows[2]).find('td button:contains("Up")').css('position', 'relative').css('bottom', '500px');
    $(rows[rows.length-1]).find('td button:contains("Down")').css('position', 'relative').css('bottom', '500px');
  }
});
