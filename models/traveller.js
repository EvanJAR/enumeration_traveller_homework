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
  const journeysByTransport = this.journeys.filter(journey => journey.transport === transport);
  return journeysByTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  // GOAL: return an array of journeys that have or are over a certain distance
  // much like the above example, the best method for this task will be the filter task as I need to get back more than one element in the array that meets a specific criteria
  // create a variable journeysMinDistance, value applies filter to journeys and returns journey.distance if over minDinstance
  const journeysMinDistance = this.journeys.filter(journey => journey.distance >= minDistance);
  // return journeysMinDistance outside of loop
  return journeysMinDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
