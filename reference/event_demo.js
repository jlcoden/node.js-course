const EventEmitter = require("events");

//Create class
class MyEmitter extends EventEmitter {}

//Init Object
const myEmitter = new MyEmitter();

//Event Listener
myEmitter.on("event", () => console.log("Event Fired!"));

//Init event
myEmitter.emit("event");
