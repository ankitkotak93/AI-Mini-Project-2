// JavaScript Document
/*Start of Cricinfo Cookie detection code*/
function getCookieVal (offset) {
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1)
	endstr = document.cookie.length;
	return unescape(document.cookie.substring(offset, endstr));
}

function GetCookie (name) {
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen)
		{
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg)
		return getCookieVal (j);
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) break;
		}
	return null;
}

//CI_CQ_country and Q_cricinfo_country cookies are getting the two digit Quova country value
//This setup is changed for Redesign website from 1st June 2009
var cqanswer = GetCookie("CI_CQ_country");
if (cqanswer == null){
	cqanswer = GetCookie("Q_cricinfo_country");
	if (cqanswer == null){
		cqanswer = '';
	}
	else if (cqanswer == 'unknown'){
		cqanswer = '99';
	}
	else if (cqanswer == 'gb'){
		cqanswer = 'uk';
	}
} 
/*End of Cricinfo Cookie detection code*/

/*  statistics page script starts here */
function expandme(me, max){
	for(var e = 1; e<=max; e++) {
		if (e == me) {
			$('#statPlyr'+e).slideDown("slow");
			document.getElementById(me).style.backgroundImage = "url(http://i.imgci.com/espncricinfo/blueOpenTop.gif)"; 
			document.getElementById(me).className = "statsOpn";
		}
		else {
			$('#statPlyr'+e).slideUp("slow");
			document.getElementById(e).style.backgroundImage = "url(http://i.imgci.com/espncricinfo/blueClose.gif)"; 
			document.getElementById(e).className = "statsClose";
		}
	}
}

function expandall(max) {
	for(var e = 1; e<=max; e++) {
		$('#statPlyr'+e).slideDown("slow");
		document.getElementById(e).style.backgroundImage = "url(http://i.imgci.com/espncricinfo/blueOpenTop.gif)"; 
		document.getElementById(e).className = "statsOpn";	
	}
}

function collapseall(max) {
	for(var e = 1; e<=max; e++) {
		$('#statPlyr'+e).slideUp("slow");
		document.getElementById(e).style.backgroundImage = "url(http://i.imgci.com/espncricinfo/blueClose.gif)"; 
		document.getElementById(e).className = "statsClose";	
	}
}

function swapTb1(me) {
	if(document.getElementById(me).className == 'statsOpn') { 
		document.getElementById(me).style.backgroundImage = "url(http://i.imgci.com/espncricinfo/blueClose.gif)"; 
		document.getElementById(me).className = "statsClose";
	} else if(document.getElementById(me).className == 'statsClose') { 
		document.getElementById(me).style.backgroundImage = "url(http://i.imgci.com/espncricinfo/blueOpenTop.gif)"; 
		document.getElementById(me).className = "statsOpn";
	}
	return;
}
/*  statistics page script ends here */

function dayMatchtabs(object) {
	var ullistab=document.getElementById('noteSectiontabs').getElementsByTagName("li")
	for (var i=0; i<ullistab.length; i++){
		ullistab[i].className="nonactive"
		object.className="active"
	}
}

//Comemtary  Tabs Js
function cmntryTab(object) {
	var ullistab=document.getElementById('LCommLstcntry').getElementsByTagName("li")
	for (var i=0; i<ullistab.length; i++){
		ullistab[i].className="ctryruler"
		object.className="TabSelc"
	}
}

// notes tabs height
function inHeight()
	{
	if(navigator.appName == "Microsoft Internet Explorer")
		{
		var t=setTimeout("parent.document.getElementById('live_iframe').style.height = parent.document.getElementById('live_iframe').contentWindow.document.body.scrollHeight + 40+'px'",1000)
		}
	else
		{
		var t=setTimeout("parent.document.getElementById('live_iframe').style.height = parent.document.getElementById('live_iframe').contentWindow.document.body.offsetHeight + 40+'px'",1000)
		}
	}

// Bating Bowling 
function initPanels()
{
	// Pre-collapse some panels, as an example (assumes all panels initially visible)
	
	// Batting Table
	ToggleRowVisibility("btngltable",1);
	ToggleRowVisibility("btngltable",3);
	ToggleRowVisibility("btngltable",5);
	ToggleRowVisibility("btngltable",7);
	ToggleRowVisibility("btngltable",9);
	
	// Bowling Table
	
	ToggleRowVisibilityBwling("bwngltable",1);
	ToggleRowVisibilityBwling("bwngltable",3);
	ToggleRowVisibilityBwling("bwngltable",5);
	ToggleRowVisibilityBwling("bwtngltable",7);
	ToggleRowVisibilityBwling("bwngltable",9);

}

function ToggleRowVisibility(tableName, intRowIndex)
{
 // need to put it in the function or else the images get preloaded every time scorecard.js is loaded
 var imgExpand   = new Image();
 var imgCollapse = new Image();
 imgExpand.src 	= "http://i.imgci.com/espncricinfo/col_ps.gif";
 imgCollapse.src = "http://i.imgci.com/espncricinfo/col_ms.gif";

 var table=document.getElementById(tableName);
 var row=table.rows[intRowIndex];
 if (!table.ary) table.ary=[];
 if (!row.img){
  row.img=table.rows[intRowIndex-1].getElementsByTagName('IMG')[0];
  table.ary.push(row);
 }
	var currentSetting = row.style.display;
	if (currentSetting=="none")
	{
		row.style.display = "";
		row.img.src=imgCollapse.src;
	}
	else
	{
		row.style.display = "none";
		row.img.src=imgExpand.src;
	}
}

// Dyas Match Tabs js

function toggleBoxTab(prefix)
	{
	var links = document.getElementsByTagName('a');

	for(i=0; i<links.length; i++)
		{
		if(links[i].id.indexOf(prefix) == 0)
			{
			if(links[i].id == prefix+c)
				{
				
				}
			else
				{
				
				}
			}
		}
	}

function showBoxDiv(prefix, vid)
	{
	var divs = document.getElementsByTagName('div');

	for(i=0; i<divs.length; i++)
		{
		if(divs[i].id.indexOf(prefix) == 0)
			{
			if(divs[i].id == vid)
				{
				if (document.getElementById) // DOM3 = IE5, NS6
					{
					divs[i].style.display = 'block';
					divs[i].style.visibility = 'visible';
					divs[i].style.height = '';
					}
				else if (document.layers) // Netscape 4
					{
					document.layers[divs[i]].display = 'visible';
					}
				else // IE 4
					{
					document.all.divs[i].visibility = 'visible';
					}
				}
			else if (document.getElementById)
				{
				divs[i].style.display = 'none';
				divs[i].style.visibility = 'hidden';
				divs[i].style.height = '0px';
				}
			else if (document.layers)
				{
				document.divs[i].visibility = 'hidden';
				}
			else // IE 4
				{
				document.all.divs[i].visibility = 'hidden';
				}
			}
		}
	}

/*  live score page retaining selected tabs script start here  */
function createCookie(name,value,days) {
	for(var i = 0; i<4; i++){
		var values = "";
		var dayss = "";
		var date = new Date();
		date.setTime(date.getTime()+(dayss*24*60*60*1000));
		var expiress = "; expires="+date.toGMTString();
		document.cookie = ('mTab'+i)+"="+values+expiress+"; path=/";
	}
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) != 0) {
			//return c.substring(nameEQ.length,c.length);
		}
	}
	return c.substring(nameEQ.length,c.length);
	//return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}
/*  live score page retaining selected tabs script ends here  */


/*  iframe tabs script starts here  */
function synchTab(frameName, tab) {
	if((tab == 's0') || (tab == 's1') || (tab == 's2') || (tab == 's3') || (tab == 's4') || (tab == 's5')) {
		for(var t=0; t<6; t++){
			if(document.getElementById('sub_' + t)) {
				document.getElementById('sub_' + t).className = 'tab';
			}
		}
		document.getElementById('sub_' + tab.charAt(1)).className = 'activeTab';
	} else if((tab == 'st0') || (tab == 'st1') || (tab == 'st2') || (tab == 'st3') || (tab == 'st4') || (tab == 'st5')) {
		for(var t=0; t<6; t++){
			if(document.getElementById('sts_' + t)) {
				document.getElementById('sts_' + t).className = 'tab';
			}
		}
		document.getElementById('sts_' + tab.charAt(2)).className = 'activeTab';
	} else {
		for(var t=0; t<4; t++){
			document.getElementById('st_' + t).className = 'tab';
		}
		document.getElementById('st_' + tab).className = 'activeTab';
	}
}
/*  iframe tabs script ends here   */

/*  main scores comentry feedback script start here  */
function Check(){
	if(document.cmFbk.name.value == "") {
		alert ("Please enter your name");
		document.cmFbk.name.focus();
		return false;
	}
	if(document.cmFbk.email.value == "") {
		alert ("Please enter your email address");
		document.cmFbk.email.focus();
		return false;
	}
  var emailexp = /^([a-zA-Z0-9])([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|([a-zA-Z0-9\-\.]+))\.([a-zA-Z]{2,6}|[0-9]{1,6})(\]?)$/;
  if (emailexp.test(document.cmFbk.email.value.replace(/\s/g,""))== false) {
    alert("Please enter valid email id.");
    document.cmFbk.email.focus();
    return false;
  }
	if (document.cmFbk.country.selectedIndex==0) {
		alert("Please select your country of Residence");
		document.cmFbk.country.focus();
		return false;
	}
	if (document.cmFbk.match.selectedIndex==0) {
		alert("Please select Which Match");
		document.cmFbk.match.focus();
		return false;
	}	
	if (document.cmFbk.comments.value == "") {
		alert("Please write your message");
		document.cmFbk.comments.focus();
		return false;
	}	
	if (document.cmFbk.code.value == "") {
		alert("Please enter the characters in above picture");
		document.cmFbk.code.focus();
		return false;
	}
	alert('Thank you for writing to Cricinfo');
}
/*  main scores comentry feedback script ends here  */

/*** Js Desktop Score card *****/

function openS(URL, WindowName) {
        window.open(URL, WindowName, 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no,titlebar=0,width=540,height=490');

        if (openS.opener == null)
		openS.opener = window;

        openS.opener.name = "opener";
        }

function openDesktop(URL){
	switch(location_cluster){
		case 'ind':
			window.open(URL, 'desktop', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no,width=340,height=320,left=0,top=0');
			break;
		case 'sl':
			window.open(URL, 'desktop', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no,width=600,height=400,left=0,top=0');
			break;
		case 'usa':
			window.open(URL, 'desktop', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no,width=340,height=380,left=0,top=0');
			break;
		case 'uk':
			window.open(URL, 'desktop', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no,width=340,height=310,left=0,top=0');
			break;
		case 'gulf':
			window.open(URL, 'desktop', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no,width=340,height=350,left=0,top=0');
			break;
		case 'pak':
			window.open(URL, 'desktop', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no,width=340,height=420,left=0,top=0');
			break;
		default:
			window.open(URL, 'desktop', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no,width=340,height=320,left=0,top=0');
	}

	if (openDesktop.opener == null)
		openDesktop.opener = window;

	openDesktop.opener.name = "opener";
}
/*** Js Desktop Score end *****/

/*  statistics tab selection from stats&analysis RHS box script starts  */
function statTab() {
	for(var s=0; s<4; s++){
		parent.document.getElementById('st_' + s).className = 'tab';
	}
	parent.document.getElementById('st_3').className = 'activeTab';
}
/*  statistics tab selection from stats&analysis RHS box script ends  */


/*  live score RHS accordion script starts here  */
var accordion=function(){
	var tm=sp=10;
	function slider(n){this.nm=n; this.arr=[]}
	slider.prototype.init=function(t,c,k){
		var a,h,s,l,i; a=document.getElementById(t); this.sl=k?k:'';
		h=a.getElementsByTagName('dt'); s=a.getElementsByTagName('dd'); this.l=h.length;
		for(i=0;i<this.l;i++){var d=h[i]; this.arr[i]=d; d.onclick=new Function(this.nm+'.pro(this)'); if(c==i){d.className=this.sl}}
		l=s.length;
		for(i=0;i<l;i++){var d=s[i]; d.mh=d.offsetHeight; if(c!=i){d.style.height=0; d.style.display='none'}}
	}
	slider.prototype.pro=function(d){
		for(var i=0;i<this.l;i++){
			var h=this.arr[i], s=h.nextSibling; s=s.nodeType!=1?s.nextSibling:s; clearInterval(s.tm);
			if(h==d&&s.style.display=='none'){s.style.display=''; su(s,1); h.className=this.sl}
			else if(s.style.display==''){su(s,-1); h.className=''}
		}
	}
	function su(c,f){c.tm=setInterval(function(){sl(c,f)},tm)}
	function sl(c,f){
		var h=c.offsetHeight, m=c.mh, d=f==1?m-h:h; c.style.height=h+(Math.ceil(d/sp)*f)+'px';
		c.style.opacity=h/m; c.style.filter='alpha(opacity='+h*100/m+')';
		if(f==1&&h>=m){clearInterval(c.tm)}else if(f!=1&&h==1){c.style.display='none'; clearInterval(c.tm)}
	}
	return{slider:slider}
}();
/*  live score RHS accordion script ends here  */

/*  Hawkeye pop-up script */
function getposOffset(overlay, offsettype){
  var totaloffset=(offsettype=="left")? overlay.offsetLeft : overlay.offsetTop;
  var parentEl=overlay.offsetParent;
  while (parentEl!=null){
    totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop;
    parentEl=parentEl.offsetParent;
  }
  return totaloffset;
}
function showHwkTooltip(curobj, toolTip){
	for (var p=0; p<=44; p++) {
	if(toolTip == 'lvpyrbat' + p || toolTip == 'lvpyrbwl' + p) {
		var toolTip = document.getElementById(toolTip);
		toolTip.style.left = curobj.clientWidth + getposOffset(curobj, "left")+ 0 +"px";
		 toolTip.style.top = getposOffset(curobj, "top")+(-28)+"px";
         toolTip.style.display="block";
	}
	}
	return false;
	}
function hideHwkTooltip(toolTip){
	//var close = toolTip;
	document.getElementById(toolTip).style.display="none"
}


/*  Hawkeye pop-up script ends */

function showTooltip(curobj, toolTip){
	if ( toolTip == 'divLoginpopup') {
		var toolTip = document.getElementById(toolTip);
		toolTip.style.left = curobj.clientWidth + getposOffset(curobj, "left")+ (-3) +"px";
		 toolTip.style.top = getposOffset(curobj, "top")+(-1)+"px";
         toolTip.style.display="block";
	}
	return false;
	}
function hideTooltip(toolTip){
	//var close = toolTip;
	document.getElementById(toolTip).style.display="none"
}

function lvscr(a) {
    if (a == "topstptext" && $("#" + a).val() == "Search") {
        $("#" + a).val("")
    }
}

function validateData() {
	if ( txt_data == "") {
		window.location.href = "/ci/content/site/search.html";
		return false;
	}
	if ( txt_data == "Search") {
		window.location.href = "/ci/content/site/search.html";
		return false;
	}
	return true;
}

/* Omni tracking for tabs */
function trackTabs(ths,trackString,c4,c){

	var ac;	
		if(s_account){
			ac = s_account;
		}
		else{
			ac = 'wdgespcricinfo';
		}
	var s=s_gi(ac);
	s.tl(ths,'o',trackString); 
}