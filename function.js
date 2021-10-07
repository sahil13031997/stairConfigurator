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