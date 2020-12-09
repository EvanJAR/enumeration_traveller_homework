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
  // i want to loop through each journey, grab transport, add it to a new array, return the new array
    const journeyTransport = this.journeys.map((journey) => {  
      return journey.transport; 
    });
    const result = Array.from(new Set(journeyTransport));
    return result;
};



module.exports = Traveller;
