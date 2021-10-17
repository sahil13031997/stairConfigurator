var link;

function iframeCall(a) {
  link = a;

  document.getElementById('viewItemButton').style.display = 'flex';
}

function hideBox() {
  document.getElementById('instruction').style.display = 'none';
}

function openInNewWindow() {
  window.open(link);
}

function onCancelClicked() {
  document.getElementById('viewItemButton').style.display = 'none';
}

function callOnStart() {
  gameInstance.SendMessage('GameObject', 'callingStepMaterial', 'Bluesteel.jpg');
  gameInstance.SendMessage('GameObject', 'callingCheekMaterial', 'Bluesteel.jpg');
  gameInstance.SendMessage('GameObject', 'callingFloorMaterial', 'Bluesteel.jpg');
  //gameInstance.SendMessage('GameObject', 'callingsettingStageMaterial', 'Bluesteel.jpg');
}

function changeStepMaterial(str) {
  document.getElementById('staircase-model').contentWindow.gameInstance.SendMessage('GameObject', 'callingStepMaterial', `${str}.jpg`);
}
