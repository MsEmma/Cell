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

exports.getMostData = function(data){
  return data[data.length-1];
}

exports.getLeastData = function(data){
  return data[0];
}
