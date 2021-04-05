// Controls lighting for the two cameras using two named actuators. The lights for the up camera
// and down camera are turned on and off based on which camera needs to capture.

var bottomLight  = machine.getActuatorByName("BottomLightActuator");
var topLight     = machine.getHead("H1").getActuatorByName("TopLightActuator");

if (camera.looking == Packages.org.openpnp.spi.Camera.Looking.Up) {
    bottomLight.actuate(true);
    topLight.actuate(false);
}
else if (camera.looking == Packages.org.openpnp.spi.Camera.Looking.Down) {
    bottomLight.actuate(false);
    topLight.actuate(true);
}