const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
    const journeyStartLocations = this.journeys.map((journey) => {  
      return journey.startLocation; 
    });
    return journeyStartLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  // GOAL: return an array of endLocations
  // use a method that will create an array of the same length and return only the endLocations of each 'journey' object in the array
  // the map method, as in the first example, will serve this purpose
  // create a variable called journeyEndLocations
  // use map method on journeys and return journey.endLocation
  const journeyEndLocations = this.journeys.map((journey) => {
    return journey.endLocation;
  });
  // return journeyEndLocations outside the loop to return new array
  return journeyEndLocations;
};

Traveller.prototype.getJourneysByTransport = function (transport) {

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
