function checkForWin() {
    if ($('#square1').text() === 'x' && $('#square2').text() === 'x' && $('#square3').text() === 'x') {
        alert('x wins')
    }

    if ($('#square1').text() === 'o' && $('#square2').text() === 'o'  &&  $('#square3').text() === 'o') {
        alert('o wins')
    }

    if ($('#square1').text() === 'x' && $('#square5').text() === 'x'  &&  $('#square9').text() === 'x') {
        alert('x wins')
    }

    if ($('#square1').text() === 'o' && $('#square5').text() === 'o'  &&  $('#square9').text() === 'o') {
        alert('o wins')
    }

    if ($('#square1').text() === 'x' && $('#square4').text() === 'x'  &&  $('#square7').text() === 'x') {
        alert('x wins')
    }

    if ($('#square1').text() === 'o' && $('#square4').text() === 'o'  &&  $('#square7').text() === 'o') {
        alert('o wins')
    }

    if ($('#square2').text() === 'x' && $('#square5').text() === 'x'  &&  $('#square8').text() === 'x') {
        alert('x wins')
    }

    if ($('#square2').text() === 'o' && $('#square5').text() === 'o'  &&  $('#square8').text() === 'o') {
        alert('o wins')
    }

    if ($('#square3').text() === 'x' && $('#square5').text() === 'x'  &&  $('#square7').text() === 'x') {
        alert('x wins')
    }

    if ($('#square3').text() === 'o' && $('#square5').text() === 'o'  &&  $('#square7').text() === 'o') {
        alert('o wins')
    }

    if ($('#square3').text() === 'x' && $('#square6').text() === 'x'  &&  $('#square9').text() === 'x') {
        alert('x wins')
    }

    if ($('#square3').text() === 'o' && $('#square6').text() === 'o'  &&  $('#square9').text() === 'o') {
        alert('o wins')
    }

    if ($('#square4').text() === 'x' && $('#square5').text() === 'x'  &&  $('#square6').text() === 'x') {
        alert('x wins')
    }

    if ($('#square4').text() === 'o' && $('#square5').text() === 'o'  &&  $('#square6').text() === 'o') {
        alert('o wins')
    }

    if ($('#square7').text() === 'x' && $('#square8').text() === 'x'  &&  $('#square9').text() === 'x') {
        alert('x wins')
    }

    if ($('#square7').text() === 'o' && $('#square8').text() === 'o'  &&  $('#square9').text() === 'o') {
        alert('o wins')
    }
}

// wait for the DOM to finish loading
$(document).ready(function() {
  let turn = 1;
  // all code to manipulate the DOM
  // goes inside this function
  $('.box').click(function() {

    console.log('clicked');

    if (turn % 2 && $( this ).text() === '') {
        console.log('this is odd');
        $( this ).text('o');
        turn++;
    }
    else if(turn % 2 === 0 && $( this ).text() === '') {
        console.log('this is even');
        $( this ).text('x');
        turn++;
    }
    checkForWin();

  });

  $('button').click(function() {
    $('.box').text('');
  });


});
