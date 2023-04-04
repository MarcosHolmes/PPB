const choices = ['cara','cruz'];

function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }

  console.log(choose(choices));
  