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

function onCancelClicked()
{	
	document.getElementById('viewItemButton').style.display = 'none';
}

function callOnStart()
{
	gameInstance.SendMessage('GameObject', 'callingStepMaterial', 'Bluesteel.jpg');
	gameInstance.SendMessage('GameObject', 'callingCheekMaterial', 'Bluesteel.jpg');
	gameInstance.SendMessage('GameObject', 'callingFloorMaterial', 'Iceberg.jpg');
	//gameInstance.SendMessage('GameObject', 'callingsettingStageMaterial', 'Bluesteel.jpg');
}