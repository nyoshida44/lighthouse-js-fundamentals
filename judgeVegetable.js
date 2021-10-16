const judgeVegetable = function (vegetables, metric) {
  let redness = 0;
  let plumpness = 0;
  let leader;
  for (let i = 0; i < vegetables.length; i++) {
    if (metric === 'redness') {
      if (vegetables[i].redness > redness) {
        redness = vegetables[i].redness;
        leader = vegetables[i].submitter;
      }
    } if (metric === 'plumpness') {
      if (vegetables[i].plumpness > plumpness) {
        plumpness = vegetables[i].plumpness;
        leader = vegetables[i].submitter;
      } 
    }
  }
  // console.log(leader);
  return leader;
}
  

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'redness';

judgeVegetable(vegetables, metric);