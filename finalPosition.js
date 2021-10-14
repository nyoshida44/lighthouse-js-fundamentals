const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function (moves) {
  let position = [];
  let ymovement = 0;
  let xmovement = 0;
  for (let move of moves) {
    if (move === 'north') {
      ymovement += 1;
    } else if (move === 'south') {
      ymovement -= 1;
    } else if (move === 'east') {
      xmovement += 1;
    } else if (move === 'west') {
      xmovement -= 1;
    } }
  position.push(xmovement);
  position.push(ymovement);
  return position;
};

finalPosition(moves);