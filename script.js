chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    var reg = new RegExp('bilibili.tv/video/av[0-9]*');

    if (!reg.test(url)) {
    	alert('這不是 Bilibili 網站.. 真心不是... '); 
    } else {
    	var pop_url = "http://b.ljh.me/?d=m&a=" + url;
    	document.getElementById('fra').src = pop_url; 
    	// alert(pop_url); 
    }
});