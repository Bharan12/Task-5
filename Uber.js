class UberPriceCalculator {
    constructor() {
      this.baseFare = 60;
      this.costPerKilometer = 15;
      this.costPerMinute = 2.5;
      this.bookingFee = 30;
    }
  
    calculatePrice(distanceInKilometers, timeInMinutes) {
      // Calculate the fare based on distance and time
      let distanceCost = this.costPerKilometer * distanceInKilometers;
      let timeCost = this.costPerMinute * timeInMinutes;
  
      // Calculate the total price
      let totalPrice = this.baseFare + distanceCost + timeCost + this.bookingFee;
  
      return totalPrice;
    }
  }
  
  let calculator = new UberPriceCalculator();
  let distanceInKilometers = 6.0; // Distance in kilometers
  let timeInMinutes = 10; // Time in minutes
  
  let estimatedPriceINR = calculator.calculatePrice(distanceInKilometers, timeInMinutes);

  console.log(`Estimated Uber price in INR: ₹${estimatedPriceINR}`);