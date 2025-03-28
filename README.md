HTML:
<!-- Password field -->
Password: <input type="password" value="FakePSW" id="myInput">

<!-- An element to toggle between password visibility -->
<input type="checkbox" onclick="Ocultar()">👁


JavaScript:
Example
function Ocultar() {
  var x = document.getElementById("Contra");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
