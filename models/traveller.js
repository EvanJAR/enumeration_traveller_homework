const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  //GOAL: I want to return an array of all the startLocations
  // create new variable journeyStartLocations
  // value of the variable an arrow function that applies map method on array 
    const journeyStartLocations = this.journeys.map((journey) => {
  // return "journey.startLocation"      
      return journey.startLocation; 
    });
  // return variable journeyStartLocations outside of the loop in order to return the desired array.
    return journeyStartLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {

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
