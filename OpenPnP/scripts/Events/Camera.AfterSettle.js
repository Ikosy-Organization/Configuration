/**
 * Controls lighting for the two cameras using two named actuators. All
 * of the lights are turned off.
 */
 var bottomLight    = machine.getActuatorByName("BottomLightActuator");
 var topLight       = machine.getHead("H1").getActuatorByName("TopLightActuator");
/*bottomLight.actuate(false);
topLight.actuate(false);*/