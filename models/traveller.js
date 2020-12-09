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
  const journeyEndLocations = this.journeys.map((journey) => {
    return journey.endLocation;
  });
  return journeyEndLocations;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  // GOAL: return an array of journeys that have a particular transport
  // I think that a filter method might be the best option here, find method will only return the FIRST value which meets the desired criteria, where filter will return a new array with multiple elements
  // create a new variable journeysByTransport 
  // value of this variable will be applying the filter method on journeys and will return an array of journeys if journey.transport === transport (that is being searched for)
  const journeysByTransport = this.journeys.filter(journey => journey.transport === transport);
  // return journeysByTransport outside of loop
  return journeysByTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
