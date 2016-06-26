const {ipcMain} = require('electron')
const Leap  = require('leapjs')
let controller = new Leap.Controller();

/* ipc messages begin */
ipcMain.on('connect-to-leap',function(event, args){
  controller.connect();
  console.log("\nWaiting for device to connect...");
  if(controller.connect) event.returnValue = true;
  else event.returnValue = false;
})

ipcMain.on('disconnect-from-leap', function(event, args){
  controller.disconnect();
  if(controller.disconnect) event.returnValue = true;
  else event.returnValue = false;
})

/*ipc messages end*/

// Leap Motion state loggers
controller.on('ready', function() {
    console.log("ready");
});
controller.on('connect', function() {
    console.log("connected");
});
controller.on('disconnect', function() {
    console.log("disconnect");
});
controller.on('focus', function() {
    console.log("focus");
});
controller.on('blur', function() {
    console.log("blur");
});
controller.on('streamingStarted', function() {
    console.log("deviceConnected");
});
controller.on('streamingStopped', function() {
    console.log("deviceDisconnected");
});
