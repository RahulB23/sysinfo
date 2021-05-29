function scan(resultElem,hostport,serviceName,uriPath) {
	var image = new Image();
	var temp = resultElem.textContext;

	image.onerror = function() {
		if (!image) {
			return;
		}
		image = undefined;
		

			resultElem.textContent = serviceName + "open";


	};

	image.onload = image.onerror;

	if (hostport.split(":")[1] == 443){ 
		image.src = 'https://' + hostport + uriPath;
	}
	else{
		image.src = 'http://' + hostport + uriPath;
	}


	setTimeout(function(){
		if (!image) {
			return;
		}
		image = undefined;
		resultElem.textContent = serviceName + "closed";

	},2000);
}

function portscan() {

	document.getElementById("os").textContent = navigator.oscpu;

	var i = 1;
	hostport = document.getElementById("host" + i + "name").textContent;
	while (hostport) {
		resultElem = document.getElementById("host" + i + "result");
		scan(resultElem,hostport,"","");
		i++;
		hostport = document.getElementById("host" + i + "name").textContent;
	}
}