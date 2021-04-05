// Turn on Down Camera Lights

var topLight = machine.getHead("H1").getActuatorByName("TopLightActuator");
topLight.actuate(true);