const {ipcRenderer} = require('electron')
let leapStatus = false;

console.log('renderer connected');

var leapConnButt = document.getElementById('leap-button');
var leapIndicator = document.getElementById('leap-indicator');

leapConnButt.addEventListener('click', function () {
  if(leapStatus){
      console.log("Disconnect request")
      if(ipcRenderer.sendSync('disconnect-from-leap')) leapDisconnected();
  }
  else{
      console.log("Connect Request");
      if(ipcRenderer.sendSync('connect-to-leap')) leapConnected();
  }
});

function leapConnected(){
  leapIndicator.className = "on";
  leapConnButt.firstChild.data = "Disconnect";
  leapStatus = true;
}

function leapDisconnected(){
  leapIndicator.className = "off";
  leapConnButt.firstChild.data = "Connect";
  leapStatus = false;
}