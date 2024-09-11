import { setDistance, setFreq } from "../arduino/arduino.js";

const sockets = (socket) => {

    socket.on('distance', (data) => {
        setDistance(data);
    });
    socket.on('freq', (data) => {
        setFreq(data);
    });
}

export default sockets;