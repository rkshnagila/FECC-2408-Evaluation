const analyzeVoterData = (voters) => {
  return voters.reduce((acc, voter) => {
    const { age, voted } = voter;

    // Count Young Voters (18-25)
    if (age >= 18 && age <= 25) {
      acc.numYoungPeople += 1;
      if (voted) {
        acc.numYoungVotes += 1;
      }
    }

    // Count Middle-Aged Voters (26-35)
    if (age >= 26 && age <= 35) {
      acc.numMidsPeople += 1;
      if (voted) {
        acc.numMidVotesPeople += 1;
      }
    }

    // Count Older Voters (36 and above)
    if (age >= 36) {
      acc.numOldsPeople += 1;
      if (voted) {
        acc.numOldVotesPeople += 1;
      }
    }

    return acc;
  }, {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0,
  });
};

const voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];

console.log(analyzeVoterData(voters));

