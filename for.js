var text = 0;
for (var i = 0; i < 10; i++) {
	text = text + i;
}

postMessage("Zpráva z workeru: " + text);