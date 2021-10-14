const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations) {
  let goodStations = [];
  for (let station of stations) {
    const name = station[0];
    const capacity = station[1];
    const type = station[2];
    if (capacity >= 20) {
      if (type === 'school' || type === 'community centre') {
        goodStations.push(name);
      }
    }
  }
  return goodStations;
}

chooseStations(stations);
//console.log(chooseStations(stations));