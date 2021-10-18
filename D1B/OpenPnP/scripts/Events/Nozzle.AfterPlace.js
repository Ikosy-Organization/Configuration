// Controls the blow off pump and actuators.
// This turns on an actuator that controls the blow off pump/compressor, then files the solenoid actuators
// for the nozzzle in use.  It assumes the pump/compressor is on it's own actuator.  It also assumes the
// machine only has one head.  It also relies on a naming convention between the nozzles and the actuators
// used for blow off.


// SETUP SECTION.  
// To adapt this script you should be able to do it largely by changing these values.  If you
// want to modify the behavior you will have to keep going below.
var scriptPrefix            = "Script Nozzle.AfterPlace.js | ";
var compressorActuatorName  = "CompressorPumpActuator";

// For this machine, the nozzles are named "NozzleX" where "X" is the nozzle number.  The blow off actuators are
// named as "NozzleXBlowOffActuator."  Therefore, we can just append "BlowOffActuator" to the current nozzle to
// get the right actuator.  If your machine does not work this way, you need to determine which nozzle is in use
// and get the actuator for that nozzle.
var blowOffActuatorName     = nozzle.getName().concat("BlowOffActuator");

// For debugging, print the name we are using for the actuator.
print(scriptPrefix + "Actuator Name:" + blowOffActuatorName);


// SECTION FOR GETTING AND CHECKING THE INSTANCES.
// The default head is used because most machines won't have more than one head so this work in most cases without
// modifcation.  If you have more than one head, you'd have to get the desired head.  After we get the head, we check
// to make sure it was properly returned.
var head                    = machine.getDefaultHead();
var validated               = true;
if (!head) {
    print(scriptPrefix + "The head was not found.");
    validated = false;
}

// Get and check the actuator for the pump/compressor.
var compressorActuator      = head.getActuatorByName(compressorActuatorName);
if (!compressorActuator) {
    print(scriptPrefix + "The compressor actuator was not found.");
    validated = false;
}

// Get the actuator instance.
var blowOffActuator         = head.getActuatorByName(blowOffActuatorName);
if (!blowOffActuator) {
    print(scriptPrefix + "The blow off actuator was not found.");
    validated = false;
}


// WORK SECTION.
// Finally we get to the real work.
if (validated) {
    compressorActuator.actuate(true);
    blowOffActuator.actuate(true);
    java.lang.Thread.sleep(500);
    blowOffActuator.actuate(false);
    compressorActuator.actuate(false);
}