/* import arduino from "../arduino/arduino.js";

const devices = arduino.devices;

export const turnOn = async () => {
  console.log(devices[0])
  
  if(devices) {
    let count = 0;  // Variabel til at tælle op
    let previousMillis = 0;  // Variabel til at gemme sidste tællingstid
    const interval = 100;  // 100 ms interval for dobbeltoptællingsbeskyttelse
    

    devices[0].on("data", function() {
      const currentMillis = Date.now();  // Få den nuværende tid i millisekunder
      // Hvis afstanden er under 7 cm og der er gået mindst 100 ms
      if (this.cm < 7 && (currentMillis - previousMillis >= interval)) {
        count++;  // Tæl 1 op
        previousMillis = currentMillis;  // Opdater sidste tællingstid
        console.log("Tælling:", count);
      }
    });
    
  }

  return true;

};
 */