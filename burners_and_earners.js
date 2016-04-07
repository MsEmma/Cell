exports.getData = function(input) {

  var data = input.map(function(str) {
    return {
      name: str.match(/\w+/).join(),
      data: Number(str.match(/\d+/))
    };
  });

  data.sort(function(a, b) {
    return a.data - b.data;
  });

  return data;

}

exports.getMostData = function(data) {
  return data[data.length - 1];
}

exports.getLeastData = function(data) {
  return data[0];
}

exports.getAppMap = function(apps, inputArr) {

  var array = [];

  inputArr.forEach(function(str) {
    array.push(str.match(/\w+/g));
  })

  var personApp = {};

  array.forEach(function(arr) {
    apps.forEach(function(app) {
      arr.forEach(function(word) {
        if (word === app) {
          if (!personApp.hasOwnProperty(arr[0])) {
            personApp[arr[0]] = [word];
          } else {
            personApp[arr[0]].push(word);
          }
        }
      });
    });
  });

  return personApp;
}

exports.getMostApps = function(personApp) {

  var mostApps = 0;
  most = "";

  for (var person in personApp) {

    if (personApp[person].length > mostApps) {
      mostApps = personApp[person].length;
      most = person;
    }
  }

  return most;
}

exports.getFaceblockUsers = function(personApp) {

  var faceblockUsers = [];

  for (var person in personApp) {
    if (personApp[person].indexOf("Faceblock") > -1) {
      faceblockUsers.push(person);
    }
  }

  return faceblockUsers;
}

exports.getFaceblockNonUsers = function(personApp) {

  var faceblockNonUsers = [];

  for (var person in personApp) {
    if (personApp[person].indexOf("Faceblock") === -1) {
      faceblockNonUsers.push(person);
    }
  }

  return faceblockNonUsers;
}

var data = [ { name: 'Walter', data: 67 },
             { name: 'Gus', data: 150 },
             { name: 'Saul', data: 283 },
             { name: 'Jesse', data: 300 } ]

var personApp = {
  Walter: ['Faceblock', 'Instantgam'],
  Jesse: ['Faceblock', 'Instantgam', 'Tooter', 'Snaptalk', 'LankedOn'],
  Saul: ['Faceblock', 'Instantgam', 'LankedOn'],
  Gus: ['Instantgam', 'Tooter']
};

var ratios = [{app : "Tooter", ratio : 2},
              {app : "Faceblock", ratio : 2},
              {app : "Instantgam", ratio : 3},
              {app : "Snaptalk", ratio : 6},
              {app : "LankedOn", ratio : 1}];

ratioArr = [];

personApp.Walter.forEach(function(str){
  ratios.forEach(function(obj){
    if(obj.app === str){
      ratioArr.push(obj.ratio)
    }
  })
})

var total = ratioArr.reduce(function(a,b){
  return a + b;
})

console.log(total);

data.forEach(function(obj){
  if(obj.name === "Walter"){

  }
})
