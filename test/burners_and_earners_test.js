
// Who uses the most apps?
// Who uses Faceblock?
// Who doesn’t use Faceblock?
// For each person, estimate how much data each app uses. Use the data ratios from our friend at the network.

var assert = require('assert');
var burners_and_earners = require('../burners_and_earners.js');

describe("burners_and_earners", function() {

  it("should return data map", function() {
    result = burners_and_earners.getData(["Walter sent: “It was 67MB. Is that everything? I’m busy, you know.”",
                 "Jesse sent: “Damn, it was like 300MB. Dat Snaptalk is a data hog, yo.”",
                 "Saul sent: “I think 283MB. That’s what the guy at the store said. I think it means MegaBites.”",
                 "Gus sent: “Around 150MB. I have the receipts if you need more precise figures."]);
    assert.deepEqual(result, [ { name: 'Walter', data: 67 },
                               { name: 'Gus', data: 150 },
                               { name: 'Saul', data: 283 },
                               { name: 'Jesse', data: 300 } ] );
  });

  it("should return who uses the most data", function() {
    result = burners_and_earners.getMostData([ { name: 'Walter', data: 67 },
                                               { name: 'Gus', data: 150 },
                                               { name: 'Saul', data: 283 },
                                               { name: 'Jesse', data: 300 } ] );
    assert.deepEqual(result, { name: 'Jesse', data: 300 });
  });

  it("should return who uses the least data", function() {
    result = burners_and_earners.getLeastData([ { name: 'Walter', data: 67 },
                                                { name: 'Gus', data: 150 },
                                                { name: 'Saul', data: 283 },
                                                { name: 'Jesse', data: 300 } ]);
    assert.deepEqual(result, { name: 'Walter', data: 67 });
  });



});