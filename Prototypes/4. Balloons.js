function Solution() {
    function Balloon(color, gasWeight) {
      this.color = color;
      this.gasWeight = gasWeight;
    }
  
    function PartyBalloon(color, gasWeight, ribbonColor, ribbonLength) {
      Balloon.call(this, color, gasWeight);
      this.ribbonColor = ribbonColor;
      this.ribbonLength = ribbonLength;
    }
  
    PartyBalloon.prototype = Object.create(Balloon.prototype);
    PartyBalloon.prototype.constructor = PartyBalloon;
  
    function BirthdayBalloon(color, gasWeight, ribbonColor, ribbonLength, text) {
      PartyBalloon.call(this, color, gasWeight, ribbonColor, ribbonLength);
      this.text = text;
    }
  
    BirthdayBalloon.prototype = Object.create(PartyBalloon.prototype);
    BirthdayBalloon.prototype.constructor = BirthdayBalloon;
  
    return {
      Balloon: Balloon,
      PartyBalloon: PartyBalloon,
      BirthdayBalloon: BirthdayBalloon
    };
  }
  
  let classes = Solution();
  let testBalloon = new classes.Balloon("yellow", 20.5);
  let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
  let ribbon = testPartyBalloon.ribbon;
  console.log(testBalloon);
  console.log(testPartyBalloon);
  console.log(ribbon);
  