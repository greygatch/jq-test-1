'use strict';

$(document).ready(init);

var returnData;

function init(){
  $('#start').click(randNumGen);
  $('#numdisplay').on('click', '.even', sqrt);
}

function randNumGen(){
  var url = 'https://qrng.anu.edu.au/API/jsonI.php?length=20&type=uint8'
  $.getJSON(url, function(response){
    returnData = response.data;
    returnData.forEach(function(n){
      var $div = $('<div>');
      if (n % 2 === 0){
        console.log('even')
        $div.addClass('even');
        $div.text(n)
        $('#evens').append($div);
      }
      else{

        if (n % 3 === 0){
          var $div3 = $('<div>');
          $div3.addClass('divide3');
          $div3.text(n);
          $('#odds').prepend($div3);
        }
        else{
          var $noDiv3 = $('<div>');
          $noDiv3.addClass('notdivide3');
          $noDiv3.text(n);
          $('#odds').append($noDiv3);
        }
      }
    })
  })
}

function sqrt(){
  console.log($(this).text());
  $(this).text(parseFloat(Math.sqrt($(this).text())).toFixed(2));
}
