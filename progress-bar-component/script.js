var len = document.querySelectorAll('.flex-item');
var result = len.length;
var counter = 0;
var next = document.getElementById('next');
var prev = document.getElementById('prev');
var width = document.getElementById('progress-bar2');
var test;
if (counter < result - 1) {
  function countincre() {
    counter++;
    if (counter > 0) {
      document.getElementById('prev').disabled = false;
    }
    if (counter == result - 1) {
      document.getElementById('next').disabled = true;
    }
    document.getElementById('progress-bar2').style.width =
      (counter / (result - 1)) * 100 + '%';
    len.forEach((element) => {
      len[counter].classList.add('active');
    });
  }
}

function decre() {
  test = counter - 1;
  len.forEach((element) => {
    if (counter > 0) {
      len[counter].classList.remove('active');
      document.getElementById('progress-bar2').style.width =
        (test / (result - 1)) * 100 + '%';
    }
  });
  if (counter > 0) {
    counter--;
    if (counter == 0) {
      document.getElementById('prev').disabled = true;
    }
    if (counter < result - 1) {
      document.getElementById('next').disabled = false;
    }
  }
}
if (counter == 0) {
  document.getElementById('prev').disabled = true;
}
