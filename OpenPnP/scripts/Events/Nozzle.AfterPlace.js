// Controls the blow off actuators.

// For this machine, the nozzles are named "NozzleX" where "X" is the nozzle number.  The blow off actuators are
// named as "NozzleXBlowOffActuator."  Therefore, we can just append "BlowOffActuator" to the current nozzle to
// get the right actuator.
var actuatorName       = nozzle.getName().concat("BlowOffActuator");
var blowOffActuator    = machine.getHead("H1").getActuatorByName(actuatorName);
 
blowOffActuator.actuate(true);
java.lang.Thread.sleep(100);
blowOffActuator.actuate(false);

// G4 P100 ; wait 100 ms
// machine.getDriver().sendCommand("G4 P100");
// Turn on ejection compressor/pump.
// machine.getDriver().sendCommand("M815");