import pkg from 'johnny-five';
import { io } from '../server.js';

let distanceClient = 2000;
let freqClient = 1000;

export const setDistance = (data) => {
    distanceClient = data;
}
export const setFreq = (data) => {
    freqClient = data;
}

const arduino = () => {

    const { Board, Proximity } = pkg;
    let board = new Board({ port: "/dev/cu.usbmodem1101" });

    board.on('ready', () => {
        const proximity = new Proximity({
            controller: 'HCSR04',
            pin: 7,
            freq: 1 // Frequency of readings in milliseconds
        });

        let count = 0;
        let lastUpdate = 0; // Timestamp of the last count update

        proximity.on('data', () => {
            const distance = proximity.cm;
            const currentTime = Date.now(); // Get the current timestamp
            
            if (distance < distanceClient && (currentTime - lastUpdate) >= freqClient) {
                count++;
                lastUpdate = currentTime; // Update the last update timestamp
                io.emit("newRound", count)
            }
        });

     
    });

};

export default arduino;
