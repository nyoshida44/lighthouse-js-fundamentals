const judgeVegetable = function (vegetables, metric) {
  let value = 0;
  let leader;
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > value) {
      value = vegetables[i][metric];
      leader = vegetables[i].submitter;
    }
  }
  // console.log(value);
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

const metric = 'plumpness';

judgeVegetable(vegetables, metric);