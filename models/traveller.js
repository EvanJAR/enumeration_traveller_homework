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
  const journeysMinDistance = this.journeys.filter(journey => journey.distance >= minDistance);
  return journeysMinDistance;
};

  

Traveller.prototype.calculateTotalDistanceTravelled = function () {
    let total = 0
    this.journeys.forEach((journey) => {
      total += journey.distance;
    });
    return total;
    };

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
