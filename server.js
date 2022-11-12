var Cayenne = require('cayennejs');

// Initiate MQTT API
const cayenneClient = new Cayenne.MQTT({
  username: "f8245190-496f-11ec-9f5b-45181495093e",
  password: "35fcd0b041ad0522333bf971d61c991f4c010721",
  clientId: "8e146840-51a1-11ed-bf0a-bb4ba43bd3f6"
});

cayenneClient.connect((err, mqttClient) => {
  // dashboard widget automatically detects datatype & unit
  cayenneClient.kelvinWrite(3, 65);

  // sending raw values without datatypes
  cayenneClient.rawWrite(4, 123);

  //Temperatura
  cayenneClient.rawWrite(3, 80);

  // subscribe to data channel for actions (actuators)
  cayenneClient.on("cmd9", function(data) {
    console.log(data);
  });

});
