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
  gameInstance.SendMessage('TextureLoader', 'callingStepMaterial', 'Cognac');
  gameInstance.SendMessage('TextureLoader', 'callingCheekMaterial', 'Buche');
  gameInstance.SendMessage('TextureLoader', 'callingFloorMaterial', 'Cognac');
  gameInstance.SendMessage('TextureLoader', 'callingsettingStageMaterial', 'Weiss');
}

function changeStepMaterial(str) {
		
  document.getElementById('staircase-model').contentWindow.gameInstance.SendMessage('TextureLoader', 'callingStepMaterial', str);
}

function changeRiserMaterial(str) {
	
  document.getElementById('staircase-model').contentWindow.gameInstance.SendMessage('TextureLoader', 'callingsettingStageMaterial', str);
}

function changeStringerMaterial(str) {
	
  document.getElementById('staircase-model').contentWindow.gameInstance.SendMessage('TextureLoader', 'callingCheekMaterial', str);
}

function changeFloorMaterial(str) {
	
  document.getElementById('staircase-model').contentWindow.gameInstance.SendMessage('TextureLoader', 'callingFloorMaterial', str);
}

function RemoveRiserMaterial() {
	
  document.getElementById('staircase-model').contentWindow.gameInstance.SendMessage('TextureLoader', 'selectingStageMatNone' );
}

window.onload = (event) => {

		

};

