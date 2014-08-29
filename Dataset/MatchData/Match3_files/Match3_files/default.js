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

function SetCookie (name,value,expiredays) {
	var exdate=new Date();
	exdate.setDate(exdate.getDate()+expiredays);
	document.cookie=name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
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

/* global nav feature dropdown submenu script start here  */
function subPopup1(mId) {
	$('#'+mId).css("visibility","visible");
}
function subPopup0(mId) {
	$('#'+mId).css("visibility","hidden");
}
/* global nav feature dropdown submenu script ends here  */

/* magazine menu script start here  */
var timeout         = 100;
var closetimer		= 0;
var ddmenuitem      = 0;
// open hidden layer
function mopen(id)
{
	// cancel close timer
	mcancelclosetime();
	// close old layer
	if(ddmenuitem) {
		ddmenuitem.css({"visibility":"hidden","display":"none"});
	}
	// get new layer and show it
	ddmenuitem = $('#'+id);
	ddmenuitem.css({"visibility":"visible","display":"block"});
}
// close showed layer
function mclose()
{
	if(ddmenuitem) {
		ddmenuitem.css({"visibility":"hidden","display":"none"});
	}
}
// go close timer
function mclosetime()
{
	closetimer = window.setTimeout(mclose, timeout);
}
// cancel close timer
function mcancelclosetime()
{
	if(closetimer)
	{
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}
document.onclick = mclose;
/* magazine menu script ends here  */

/*This function used for popup the desktop scoreboard*/
function openE(URL, WindowName) {
	  window.open(URL, WindowName, 'left=0,top=0,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no,titlebar=0,width=1021,height=720');
        if (openE.opener == null)
                openE.opener = window;
        openE.opener.name = "opener";
        }

function openWin(url, wname, width, height){
	window.open(url, wname, 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no,width=' + width + ',height=' + height + ',left=0,top=0');
}
/*End*/

/* story page font increase decrease script start  */
function textSize(size) {
	if(size == 13) 
	{
		$("#13").css({"cursor" : "default","color" : "#AAAAAA"});
		$("#14").css({"cursor" : "pointer","color" : "#333333"});
					$(document).ready(function() {
  	 				$("#storyTxt > p, #storyTxt > p > a").css({"font-size" : "13px"});
					$("#storyTxt > table > caption, #storyTxt > table > tbody > tr > td, #rltdTxt > span , #rltdTxt > span > a, #rltdTxt > div , #rltdTxt > div > a, #authInfo > p,#authInfo > a,#authInfo > span").css({"font-size" : "11px"});
 					});
		$("td.stryPicCptn,li.liSideBarNoBlt,li.liSideBarNoBlt > a,li.liSideBar,li.liSideBar > a").css({"font-size" : "11px"}) 
		$("#rltdBlueHd,#pullquote,h4.sbHdr").css({"font-size" : "12px"});
		$("#storyTxt,#sdbrTop,#sdbrTopimg").css({"font-size" : "13px"});
		$("td.pullquotetext,span.txtHeader").css({"font-size" : "14px"});
	}
	if(size == 14) 
	{
		$("#13").css({"cursor" : "pointer","color" : "#333333"});
		$("#14").css({"cursor" : "default","color" : "#AAAAAA"});
					$(document).ready(function() {
   					$("#storyTxt > p, #storyTxt > p > a").css({"font-size" : "14px"});
					$("#storyTxt > table > caption, #storyTxt > table > tbody > tr > td, #rltdTxt > span , #rltdTxt > span > a, #rltdTxt > div , #rltdTxt > div > a, #authInfo > p,#authInfo > a,#authInfo > span").css({"font-size" : "12px"});
	 				});
		$("td.stryPicCptn,li.liSideBarNoBlt,li.liSideBarNoBlt > a,li.liSideBar,li.liSideBar > a").css({"font-size" : "12px"})
		$("#rltdBlueHd,#pullquote,h4.sbHdr").css({"font-size" : "13px"});
		$("#storyTxt,#sdbrTop,#sdbrTopimg").css({"font-size" : "14px"});
		$("td.pullquotetext,span.txtHeader").css({"font-size" : "15px"});
	}								  
}
/* story page font increase decrease script start  */

/* JS for Image Tool Tip BEGIN   */
function showTooltip(curobj,toolTip,image_url){
	var curobj = $(curobj);
	var offset=curobj.offset();
    if(toolTip == 'divLoginpopup') {
		var offset1 = $("#ciHomeLogoholder").offset();
		var ediHeight = 0, chrPopHeight = 0;
		if($(".edition-msg").css("display") == "block"){
			editHeight = parseInt($(".edition-msg").outerHeight(),10);
		}else{
			editHeight = 0;
		}
		if($("#chromePrompt").css("display") == "block"){
			chrPopHeight = parseInt($("#chromePrompt").outerHeight(),10);
		}else{
			chrPopHeight = 0;
		}
		$("#"+toolTip).css({'left':'373px','top': '50px','display':'block'}); 
		$('#divLoginpopup').attr('style','top:221px!important;left:402px!important;display:block');
		if($('#ciHomeLeaderboard').css('height') == '250px'){
		$('#divLoginpopup').attr('style','top:320px!important;left:400px!important');
		}
    } 
	else if(toolTip == 'athrData') {
	  	$("#"+toolTip).css({left: (offset.left + (45)) + 'px',top: (offset.top +(10)) + 'px',"display":"block"});
    } 
	else if(toolTip == 'Friendmail') {
	   	$("#"+toolTip).css({left: (offset.left + (-370)) + 'px',top: (offset.top +(20)) + 'px',"display":"block"});

        var url = "/ci/content/submit/other/friendmail.html";
        if ( image_url != "undefined" ) {
            url = url + "?img_path=" + image_url;
        }
        $('#emailFriend').attr("src",url);


    } 
	else {
	  	$("#"+toolTip).css({left: (offset.left + (0)) + 'px',top: (offset.top +(0)) + 'px',"display":"block"});
    }
    return false;
  }

function hideTooltip(toolTip){
	if(toolTip == 'divLoginpopup') {
		$('#'+toolTip).css("display","none");
		$("#email").val("");
		$("#password").val("")
	} else {
		$('#'+toolTip).css("display","none");
	}
}
/* JS for Image Tool Tip END */

/* Search box text clear */
function searchClrTxt(txtObj){  
  if(txtObj=='cricinfoSearch' && $('#'+txtObj).val() == 'Search'){
	$('#'+txtObj).val("");
  }
  if(txtObj=='PlayerssearchTxtBox' && $('#'+txtObj).val() == 'Search for grounds'){
    $('#'+txtObj).val("");
  }
  if(txtObj=='PhotosearchTxtBox' && $('#'+txtObj).val() == 'Search for photos'){
    $('#'+txtObj).val("");
  }
  if(txtObj=='PhotosearchTxtBox' && $('#'+txtObj).val() == 'Search for galleries'){
    $('#'+txtObj).val("");
  }
  if(txtObj=='stryTxtBox' && $('#'+txtObj).val() == 'Search this section'){
    $('#'+txtObj).val("");
  }
  if(txtObj=='ProfilesearchTxtBox' && $('#'+txtObj).val() == 'Search for Profiles'){
    $('#'+txtObj).val("");
  }
  if(txtObj=='StatsgurusearchTxtBox' && $('#'+txtObj).val() == 'Search in Statsguru'){
    $('#'+txtObj).val("");
  }
  if(txtObj=='multimediaSearch' && $('#'+txtObj).val() == 'Search Multimedia'){
	$('#'+txtObj).val("");
  }
}
/* Search box text clear */

/*  ESPN open/close and Breaking news button script start */
var on = 0;
function customize(){
  if(on == 0) {
    $('#espnExpCol').css("background-position" , "-5238px -75px");
    on = 1;
  }else{
    $('#espnExpCol').css("background-position" , "-5142px -75px");
    on = 0;
  }
  $("#ciEspnbtn").toggle("slow");
}
/*  ESPN open/close and Breaking news button script ends */

/* Ajax Call script start */
function ajaxFunction(id, url, from) {
  /* Poll Radio button validation script starts */
  if(from == "button") {
    var radio_choice = false;
    for (counter = 0; counter < document.ciHPPoll.Choice.length; counter++) {
      if (document.ciHPPoll.Choice[counter].checked) {
        radio_choice = true;
      }
    }
    if (!radio_choice) {
      alert("Please select any option.");
      return false;
    }
  }
  /* Poll Radio button validation script ends */
  var xmlHttp;
  try {// Firefox, Opera 8.0+, Safari
    xmlHttp = new XMLHttpRequest();
  } catch (e) {// Internet Explorer
    try {
      xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {
        alert("Your browser does not support AJAX!");
        return false;
        }
      }
    }
  xmlHttp.onreadystatechange = function() {

    if (xmlHttp.readyState == 4) {
      //Get the response from the server and extract the section that comes in the body section of the second html page avoid inserting the header part of the second page in your first page's element
      var respText = xmlHttp.responseText.split('<body>');
      elem.innerHTML = respText[0];//respText[1].split('</body>')[0];
    }
  }
  var elem = $("#"+id);
  if (!elem) {
    alert('The element with the passed ID doesn\'t exists in your page');
    return;
  }
xmlHttp.open("GET", url, true);
xmlHttp.send(null);
}
/* Ajax poll script ends  */

//create cookie
function createCookie( name, value, expires, path, domain, secure ) {

    var today = new Date();

    today.setTime( today.getTime() );
    if ( expires ) {
        expires = expires * 1000 * 60 * 60 * 24;
     }

     var expires_date = new Date( today.getTime() + (expires) );

     document.cookie = name+'='+escape( value ) +
                       ( ( expires ) ? ';expires='+expires_date.toGMTString() : '' ) +
                       ( ( path ) ? ';path=' + path : '' ) +
                       ( ( domain ) ? ';domain=' + domain : '' ) +
                       ( ( secure ) ? ';secure' : '' );
}
//check if cookie defined
function readCookie(name) {

    var start = document.cookie.indexOf( name + "=" );
    var len = start + name.length + 1;

    if ( ( !start ) && ( name != document.cookie.substring( 0, name.length ) ) ) {
       return null;
    }

    if ( start == -1 ) return null;
    var end = document.cookie.indexOf( ';', len );
    if ( end == -1 ) end = document.cookie.length;
    return unescape( document.cookie.substring( len, end ) );
}
//Remove cookie
function deleteCookie(  name, path, domain) {
    if ( readCookie( name ) )
        document.cookie = name + '=' + ( ( path ) ? ';path=' + path : '') + ( ( domain ) ? ';domain=' + domain : '' ) + ';expires=Thu, 01-Jan-1970 00:00:01 GMT';
}
//Get the domain name
function getDomainName () {
    var hostname = window.location.hostname.split('.');
    if ( hostname.length >= 2 ) {
        var len = hostname.length;
        var domainname = '.' +  hostname[len - 2] + '.' + hostname[len - 1];
    } else {
        var domainname = '.' + window.location.hostname;
    }
    return domainname;
}

/* Widget Bubble launch script */
function ciWidgetspopup(curobj, widgets_hiddenobj){
    var curobj = $(curobj);
	var offset=curobj.offset();
	if($.browser.msie){
		$("#"+widgets_hiddenobj).css({left: (offset.left + (-547)) + 'px',top: (offset.top +(-369)) + 'px',"display":"block"});
	}
	else{
		$("#"+widgets_hiddenobj).css({left: (offset.left + (-547)) + 'px',top: (offset.top +(-361)) + 'px',"display":"block"});
	}
    return false;
}

function ciWidgetspopupclose(widgets_hiddenobj){
  $("#"+widgets_hiddenobj).css("display","none");
}
/* Widget Bubble launch script */

/* Homepage News/Video panel script starts  */
function ciHomePanels(panel) {
  if(panel == "news") {
	$("#ciHomeNewsTab > a").css("color","#074377");
	$("#ciHomeVideoTabs > a").css("color","#c2e1fe");
	$("#ciHomeTabsNav").css("backgroundPosition","-5674px 0px");
	$("#ciNewsPnl").css("display","block");
	$("#ciVideoPnl").css("display","none");
  }
  if(panel == "video") {
	$("#ciHomeNewsTab > a").css("color","#c2e1fe");
	$("#ciHomeVideoTabs > a").css("color","#074377");
	$("#ciHomeTabsNav").css("backgroundPosition","-5946px 0px");
	$("#ciNewsPnl").css("display","none");
	$("#ciVideoPnl").css("display","block");
	lnkTrackVals("vdo:video tab"); //Video Tab and Video headlines link tracking
  }
}
/* Homepage News/Video panel script ends  */

/* Show and hide div script */
function toggleBoxTab(prefix){
  var links = document.getElementsByTagName('li');
  for(i=0; i<links.length; i++){
    if(links[i].id.indexOf(prefix) == 0){
      if(links[i].id == prefix+c){
      }
      else{

      }
    }
  }
}

function showBoxDiv(prefix, vid){
  var divs = document.getElementsByTagName('div');

  for(i=0; i<divs.length; i++){
    if(divs[i].id.indexOf(prefix) == 0){
      if(divs[i].id == vid){
        if (1){ // DOM3 = IE5, NS6
          divs[i].style.display = 'block';
          divs[i].style.visibility = 'visible';
          divs[i].style.height = '';
        }
        else if (document.layers){  // Netscape 4
          document.layers[divs[i]].display = 'visible';
        }
        else{  // IE 4
          document.all.divs[i].visibility = 'visible';
        }
      }
      else if (1){
        divs[i].style.display = 'none';
        divs[i].style.visibility = 'hidden';
        divs[i].style.height = '0px';
      }
      else if (document.layers){
        document.divs[i].visibility = 'hidden';
      }
      else{  // IE 4
        document.all.divs[i].visibility = 'hidden';
      }
    }
  }
}
/* Show and hide div script ends */

/* ci HP Live score tabs swaping script start here  */
function swapTb(tab) {
	for(i=1; i<=3; i++){
		$('#lsTab'+i).attr("className","lsTbTxt");
		$('#tbCont'+i).css("display","none");
	}
	$("#"+tab).attr("className","lsTbTxt1");
	if(tab == 'lsTab1') {
		$('#lsTabBar').css("background-position","0px -30px");
		$('#tbCont1').css("display","block");
	}
	if(tab == 'lsTab2') {
		$('#lsTabBar').css("background-position","-314px -30px");
		$('#tbCont2').css("display","block");
	}
	if(tab == 'lsTab3') {
		$('#lsTabBar').css("background-position","-628px -30px");
		$('#tbCont3').css("display","block");
	}
}

function rsltswapTb(tab) {
	for(i=1; i<=2; i++){
		$('#rsTab'+i).attr("className","rsltTbTxt");
		$('#rstbCont'+i).css("display","none");
	}
	$("#"+tab).attr("className","rsltTbTxt1");;
	if(tab == 'rsTab1') {
		$('#rsltTabBar').css("background-position","-2320px -23px");
		$('#rstbCont1').css("display","block");
	}
	if(tab == 'rsTab2') {
		$('#rsltTabBar').css("background-position","-2635px -23px");
		$('#rstbCont2').css("display","block");
	}
}
/* ci HP Live score tabs swaping script ends here  */

/*  statistics records table data sorting script starts here  */
/* You can change these values */
var image_path = "http://i.imgci.com/espncricinfo/";
var image_up = "gryUpArw.gif";
var image_down = "menuBlckArow.gif";
var image_none = "gryUpArw.gif";
var europeandate = true;
var alternate_row_colors = true;

/* Don't change anything below this unless you know what you're doing */
addEvent(window, "load", sortables_init);

var SORT_COLUMN_INDEX;
var thead = false;

function sortables_init() {
	// Find all tables with class sortable and make them sortable
	if (!document.getElementsByTagName) return;
	tbls = document.getElementsByTagName("table");
	for (ti=0;ti<tbls.length;ti++) {
		thisTbl = tbls[ti];
		if (((' '+thisTbl.className+' ').indexOf("sortable") != -1) && (thisTbl.id)) {
			ts_makeSortable(thisTbl);
		}
	}
}

function ts_makeSortable(t) {
	if (t.rows && t.rows.length > 0) {
		if (t.tHead && t.tHead.rows.length > 0) {
			var firstRow = t.tHead.rows[t.tHead.rows.length-1];
			thead = true;
		} else {
			var firstRow = t.rows[0];
		}
	}
	if (!firstRow) return;

	// We have a first row: assume it's the header, and make its contents clickable links
	for (var i=0;i<firstRow.cells.length;i++) {
		var cell = firstRow.cells[i];
		var txt = ts_getInnerText(cell);
		if (cell.className != "unsortable" && cell.className.indexOf("unsortable") == -1) {
			cell.innerHTML = '<a href="#" class="head" onclick="ts_resortTable(this, '+i+');return false;">'+txt+'<span class="sortarrow">&nbsp;&nbsp;<img border="0" src="'+ image_path + image_none + '" alt="&darr;" align="absmiddle" hspace="5"/></span></a>';
		}
	}
	if (alternate_row_colors) {
		alternate(t);
	}
}

function ts_getInnerText(el) {
	if (typeof el == "string") return el;
	if (typeof el == "undefined") { return el };
	if (el.innerText) return el.innerText;	//Not needed but it is faster
	var str = "";

	var cs = el.childNodes;
	var l = cs.length;
	for (var i = 0; i < l; i++) {
		switch (cs[i].nodeType) {
			case 1: //ELEMENT_NODE
				str += ts_getInnerText(cs[i]);
				break;
			case 3:	//TEXT_NODE
				str += cs[i].nodeValue;
				break;
		}
	}
	return str;
}

function ts_resortTable(lnk, clid) {
	var span;
	for (var ci=0;ci<lnk.childNodes.length;ci++) {
		if (lnk.childNodes[ci].tagName && lnk.childNodes[ci].tagName.toLowerCase() == 'span') span = lnk.childNodes[ci];
	}
	var spantext = ts_getInnerText(span);
	var td = lnk.parentNode;
	var column = clid || td.cellIndex;
	var t = getParent(td,'TABLE');
	// Work out a type for the column
	if (t.rows.length <= 1) return;
	var itm = "";
	var i = 0;
	while (itm == "" && i < t.tBodies[0].rows.length) {
		var itm = ts_getInnerText(t.tBodies[0].rows[i].cells[column]);
		itm = trim(itm);
		if (itm.substr(0,4) == "<!--" || itm.length == 0) {
			itm = "";
		}
		i++;
	}
	if (itm == "") return;
	sortfn = ts_sort_caseinsensitive;
	if (itm.match(/^\d\d[\/\.-][a-zA-z][a-zA-Z][a-zA-Z][\/\.-]\d\d\d\d$/)) sortfn = ts_sort_date;
	if (itm.match(/^\d\d[\/\.-]\d\d[\/\.-]\d\d\d{2}?$/)) sortfn = ts_sort_date;
	if (itm.match(/^-?[£$€Û¢´]\d/)) sortfn = ts_sort_numeric;
	if (itm.match(/^-?(\d+[,\.]?)+(E[-+][\d]+)?%?$/)) sortfn = ts_sort_numeric;
	SORT_COLUMN_INDEX = column;
	var firstRow = new Array();
	var newRows = new Array();
	for (k=0;k<t.tBodies.length;k++) {
		for (i=0;i<t.tBodies[k].rows[0].length;i++) {
			firstRow[i] = t.tBodies[k].rows[0][i];
		}
	}
	for (k=0;k<t.tBodies.length;k++) {
		if (!thead) {
			// Skip the first row
			for (j=1;j<t.tBodies[k].rows.length;j++) {
				newRows[j-1] = t.tBodies[k].rows[j];
			}
		} else {
			// Do NOT skip the first row
			for (j=0;j<t.tBodies[k].rows.length;j++) {
				newRows[j] = t.tBodies[k].rows[j];
			}
		}
	}
	newRows.sort(sortfn);
	if (span.getAttribute("sortdir") == 'down') {
			ARROW = '&nbsp;&nbsp;<img border="0" src="'+ image_path + image_down + '" alt="&darr;" align="absmiddle" hspace="5"/>';
			newRows.reverse();
			span.setAttribute('sortdir','up');
	} else {
			ARROW = '&nbsp;&nbsp;<img border="0" src="'+ image_path + image_up + '" alt="&uarr;" align="absmiddle" hspace="5"/>';
			span.setAttribute('sortdir','down');
	}
    // We appendChild rows that already exist to the tbody, so it moves them rather than creating new ones
    // don't do sortbottom rows
    for (i=0; i<newRows.length; i++) {
		if (!newRows[i].className || (newRows[i].className && (newRows[i].className.indexOf('sortbottom') == -1))) {
			t.tBodies[0].appendChild(newRows[i]);
		}
	}
    // do sortbottom rows only
    for (i=0; i<newRows.length; i++) {
		if (newRows[i].className && (newRows[i].className.indexOf('sortbottom') != -1))
			t.tBodies[0].appendChild(newRows[i]);
	}
	// Delete any other arrows there may be showing
	var allspans = document.getElementsByTagName("span");
	for (var ci=0;ci<allspans.length;ci++) {
		if (allspans[ci].className == 'sortarrow') {
			if (getParent(allspans[ci],"table") == getParent(lnk,"table")) { // in the same table as us?
				allspans[ci].innerHTML = '&nbsp;&nbsp;<img border="0" src="'+ image_path + image_none + '" alt="&darr;" align="absmiddle" hspace="5"/>';
			}
		}
	}
	span.innerHTML = ARROW;
	alternate(t);
}

function getParent(el, pTagName) {
	if (el == null) {
		return null;
	} else if (el.nodeType == 1 && el.tagName.toLowerCase() == pTagName.toLowerCase()) {
		return el;
	} else {
		return getParent(el.parentNode, pTagName);
	}
}

function sort_date(date) {
	// y2k notes: two digit years less than 50 are treated as 20XX, greater than 50 are treated as 19XX
	dt = "00000000";
	if (date.length == 11) {
		mtstr = date.substr(3,3);
		mtstr = mtstr.toLowerCase();
		switch(mtstr) {
			case "jan": var mt = "01"; break;
			case "feb": var mt = "02"; break;
			case "mar": var mt = "03"; break;
			case "apr": var mt = "04"; break;
			case "may": var mt = "05"; break;
			case "jun": var mt = "06"; break;
			case "jul": var mt = "07"; break;
			case "aug": var mt = "08"; break;
			case "sep": var mt = "09"; break;
			case "oct": var mt = "10"; break;
			case "nov": var mt = "11"; break;
			case "dec": var mt = "12"; break;
			// default: var mt = "00";
		}
		dt = date.substr(7,4)+mt+date.substr(0,2);
		return dt;
	} else if (date.length == 10) {
		if (europeandate == false) {
			dt = date.substr(6,4)+date.substr(0,2)+date.substr(3,2);
			return dt;
		} else {
			dt = date.substr(6,4)+date.substr(3,2)+date.substr(0,2);
			return dt;
		}
	} else if (date.length == 8) {
		yr = date.substr(6,2);
		if (parseInt(yr) < 50) {
			yr = '20'+yr;
		} else {
			yr = '19'+yr;
		}
		if (europeandate == true) {
			dt = yr+date.substr(3,2)+date.substr(0,2);
			return dt;
		} else {
			dt = yr+date.substr(0,2)+date.substr(3,2);
			return dt;
		}
	}
	return dt;
}
function ts_sort_date(a,b) {
	dt1 = sort_date(ts_getInnerText(a.cells[SORT_COLUMN_INDEX]));
	dt2 = sort_date(ts_getInnerText(b.cells[SORT_COLUMN_INDEX]));
	if (dt1==dt2) {
		return 0;
	}
	if (dt1<dt2) {
		return -1;
	}
	return 1;
}
function ts_sort_numeric(a,b) {
	var aa = ts_getInnerText(a.cells[SORT_COLUMN_INDEX]);
	aa = clean_num(aa);
	var bb = ts_getInnerText(b.cells[SORT_COLUMN_INDEX]);
	bb = clean_num(bb);
	return compare_numeric(aa,bb);
}
function compare_numeric(a,b) {
	var a = parseFloat(a);
	a = (isNaN(a) ? 0 : a);
	var b = parseFloat(b);
	b = (isNaN(b) ? 0 : b);
	return a - b;
}
function ts_sort_caseinsensitive(a,b) {
	aa = ts_getInnerText(a.cells[SORT_COLUMN_INDEX]).toLowerCase();
	bb = ts_getInnerText(b.cells[SORT_COLUMN_INDEX]).toLowerCase();
	if (aa==bb) {
		return 0;
	}
	if (aa<bb) {
		return -1;
	}
	return 1;
}
function ts_sort_default(a,b) {
	aa = ts_getInnerText(a.cells[SORT_COLUMN_INDEX]);
	bb = ts_getInnerText(b.cells[SORT_COLUMN_INDEX]);
	if (aa==bb) {
		return 0;
	}
	if (aa<bb) {
		return -1;
	}
	return 1;
}
function addEvent(elm, evType, fn, useCapture)
// addEvent and removeEvent, cross-browser event handling for IE5+,	NS6 and Mozilla By Scott Andrew
{
	if (elm.addEventListener){
		elm.addEventListener(evType, fn, useCapture);
		return true;
	} else if (elm.attachEvent){
		var r = elm.attachEvent("on"+evType, fn);
		return r;
	} else {
		alert("Handler could not be removed");
	}
}
function clean_num(str) {
	str = str.replace(new RegExp(/[^-?0-9.]/g),"");
	return str;
}
function trim(s) {
	return s.replace(/^\s+|\s+$/g, "");
}
function alternate(table) {
	// Take object table and get all it's tbodies.
	var tableBodies = table.getElementsByTagName("tbody");
	// Loop through these tbodies
	for (var i = 0; i < tableBodies.length; i++) {
		// Take the tbody, and get all it's rows
		var tableRows = tableBodies[i].getElementsByTagName("tr");
		// Loop through these rows
		// Start at 1 because we want to leave the heading row untouched
		for (var j = 0; j < tableRows.length; j++) {
			// Check if j is even, and apply classes for both possible results
			if ( (j % 2) == 0  ) {
				if ( !(tableRows[j].className.indexOf('odd') == -1) ) {
					tableRows[j].className = tableRows[j].className.replace('odd', 'even');
				} else {
					if ( tableRows[j].className.indexOf('even') == -1 ) {
						tableRows[j].className += " even";
					}
				}
			} else {
				if ( !(tableRows[j].className.indexOf('even') == -1) ) {
					tableRows[j].className = tableRows[j].className.replace('even', 'odd');
				} else {
					if ( tableRows[j].className.indexOf('odd') == -1 ) {
						tableRows[j].className += " odd";
					}
				}
			}
		}
	}
}
/*  statistics records table data sorting script ends here  */

function ciFixtutetooltip(curobj, widgets_hiddenobj){
    $('.fixTooltip').hide();
	 var curobj = $(curobj);
	 var offset=curobj.offset();
		$("#"+widgets_hiddenobj).css({left: (offset.left + (25)) + 'px',top: (offset.top +(8)) + 'px',"display":"block"});
}

function ciFixtutetooltipclose(widgets_hiddenobj){
  $("#"+widgets_hiddenobj).css("display","none")
}

viewport = {
  getWinWidth: function () {
    this.width = 0;
    if (window.innerWidth) this.width = window.innerWidth - 18;
    else if (document.documentElement && document.documentElement.clientWidth)
  		this.width = document.documentElement.clientWidth;
    else if (document.body && document.body.clientWidth)
  		this.width = document.body.clientWidth;
  },

  getWinHeight: function () {
    this.height = 0;
    if (window.innerHeight) this.height = window.innerHeight - 18;
  	else if (document.documentElement && document.documentElement.clientHeight)
  		this.height = document.documentElement.clientHeight;
  	else if (document.body && document.body.clientHeight)
  		this.height = document.body.clientHeight;
  },

  getScrollX: function () {
    this.scrollX = 0;
  	if (typeof window.pageXOffset == "number") this.scrollX = window.pageXOffset;
  	else if (document.documentElement && document.documentElement.scrollLeft)
  		this.scrollX = document.documentElement.scrollLeft;
  	else if (document.body && document.body.scrollLeft)
  		this.scrollX = document.body.scrollLeft;
  	else if (window.scrollX) this.scrollX = window.scrollX;
  },

  getScrollY: function () {
    this.scrollY = 0;
    if (typeof window.pageYOffset == "number") this.scrollY = window.pageYOffset;
    else if (document.documentElement && document.documentElement.scrollTop)
  		this.scrollY = document.documentElement.scrollTop;
  	else if (document.body && document.body.scrollTop)
  		this.scrollY = document.body.scrollTop;
  	else if (window.scrollY) this.scrollY = window.scrollY;
  },

  getAll: function () {
    this.getWinWidth(); this.getWinHeight();
    this.getScrollX();  this.getScrollY();
  }

}

var menuLayers = {
  timer: null,
  activeMenuID: null,
  offX: 4,   // horizontal offset
  offY: 0,   // vertical offset
  show: function(id, e) {
    var mnu = document.getElementById? document.getElementById(id): null;
    if (!mnu) return;
    this.activeMenuID = id;
    if ( mnu.onmouseout == null ) mnu.onmouseout = this.mouseoutCheck;
    if ( mnu.onmouseover == null ) mnu.onmouseover = this.clearTimer;
    viewport.getAll();
    this.position(mnu,e);
  },

  hide: function() {
    this.clearTimer();
    if (this.activeMenuID && document.getElementById)
      this.timer = setTimeout("$('#'+'"+menuLayers.activeMenuID+"').css('visibility','hidden')", 200);
  },

  position: function(mnu, e) {
    var x = e.pageX? e.pageX: e.clientX + viewport.scrollX;
    var y = e.pageY? e.pageY: e.clientY + viewport.scrollY;

    if ( x + mnu.offsetWidth + this.offX > viewport.width + viewport.scrollX )
      x = x - mnu.offsetWidth - this.offX;
    else x = x + this.offX;

    if ( y + mnu.offsetHeight + this.offY > viewport.height + viewport.scrollY )
      y = ( y - mnu.offsetHeight - this.offY > viewport.scrollY )? y - mnu.offsetHeight - this.offY : viewport.height + viewport.scrollY - mnu.offsetHeight;
    else y = y + this.offY;

	var ciH = $("#ciMainContainer").offset();
	x = x - ciH.left;
	y = y - ciH.top;
	
    mnu.style.left = x + "px"; mnu.style.top = y + "px";
    this.timer = setTimeout("$('#'+'" + menuLayers.activeMenuID + "').css('visibility','visible')", 200);
  },

  mouseoutCheck: function(e) {
    e = e? e: window.event;
    // is element moused into contained by menu? or is it menu (ul or li or a to menu div)?
    var mnu = $("#"+menuLayers.activeMenuID);
    var toEl = e.relatedTarget? e.relatedTarget: e.toElement;
    if ( mnu != toEl && !menuLayers.contained(toEl, mnu) ) menuLayers.hide();
  },

  // returns true of oNode is contained by oCont (container)
  contained: function(oNode, oCont) {
    if (!oNode) return; // in case alt-tab away while hovering (prevent error)
    while ( oNode = oNode.parentNode )
      if ( oNode == oCont ) return true;
    return false;
  },

  clearTimer: function() {
    if (menuLayers.timer) clearTimeout(menuLayers.timer);
  }

}

//Stats Guru JS Start

this.meetstsguru = function(){
	var expandTo = 1;
	var listClass = "meetstsguru"
	this.start = function(){
		var ul = document.getElementsByTagName("ul");
		for (var i=0;i<ul.length;i++){
			if(ul[i].className == listClass){
				create(ul[i]);
				buttons(ul[i])
			};
		};
	};
	this.create = function(list) {
		var items = list.getElementsByTagName("li");
		for(var i=0;i<items.length;i++){
			listItem(items[i]);
		};
	};

	this.listItem = function(li){
		if(li.getElementsByTagName("ul").length > 0){
			var ul = li.getElementsByTagName("ul")[0];
			ul.style.display = (depth(ul) <= expandTo) ? "block" : "none";
			li.className = (depth(ul) <= expandTo) ? "expanded" : "collapsed";
			li.over = true;
			ul.onmouseover = function(){li.over = false;}
			ul.onmouseout = function(){li.over = true;}
			li.onclick = function(){
				if(this.over){
					ul.style.display = (ul.style.display == "none") ? "block" : "none";
					this.className = (ul.style.display == "none") ? "collapsed" : "expanded";
				};
			};
		};
	};

	this.buttons = function(list){
		var parent = list.parentNode;
		//var p = document.createElement("p");
		//p.className = listClass;
		var span = document.createElement("span");
		span.innerHTML = expandText;
		span.onclick = function(){expand(list)};
		p.appendChild(span);
		var span = document.createElement("span");
		span.innerHTML = collapseText;
		span.onclick = function(){collapse(list)};
		p.appendChild(span);
		parent.insertBefore(p,list);
	};

	this.expand = function(list){
				var li = li[i].getElementsByTagName("li")[0];
				li.style.display = "block";
	};

	this.collapse = function(list){
				var li = li[i].getElementsByTagName("li")[0];
				li.style.display = "none";
	};
	this.depth = function(obj){
		var level = 1;
		while(obj.parentNode.className != listClass){
			if (obj.tagName == "UL") level++;
			obj = obj.parentNode;
		};
		return level;
	};
	//start();
};
window.onload = meetstsguru;

// StatsGuru View format Radio btns Js Start

function disableSelect(prefix, vid)
	{
	// vid gets enabled, anything beginning with prefix gets disabled
	var selects = document.getElementsByTagName('select');
	for(i=0; i<selects.length; i++)
		{
		if(selects[i].id.indexOf(prefix) == 0)
			{
			if(selects[i].id == vid)
				{
				selects[i].disabled = false;
				}
			else
				{
				selects[i].disabled = true;
				}
			}
		}
	}

function disableDivInputs(prefix, vid)
	{
	// all inputs within div=vid get enabled, anything within div beginning with prefix gets disabled
	var divs = document.getElementsByTagName('div');
	for(i=0; i<divs.length; i++)
		{
		if(divs[i].id.indexOf(prefix) == 0)
			{
			var inputs = divs[i].getElementsByTagName('input');

			for(j=0; j<inputs.length; j++)
				{
				if(divs[i].id == vid)
					{
					inputs[j].disabled = false;
					}
				else
					{
					inputs[j].disabled = true;
					}
				}
			}
		}
	}

function guruStart()
	{
	if (document.analysis)
		{
		if (typeof(analysisfocus) != 'undefined')
			{
			if (analysisfocus) // for putting the cursor in the analysis search form
				{
				document.analysis.search.focus();
				}
			}
		}

	guruViewChange();
	}
function guruViewChange()
	{
	if (document.gurumenu)
		{
		var divs = document.getElementsByTagName('div');

		typeval = document.gurumenu.type.value;
		if (typeof(typeval) == 'undefined')
			{
			for (i=0;i<document.gurumenu.type.length;i++)
				{
				if (document.gurumenu.type[i].checked)
					{
					typeval = document.gurumenu.type[i].value;
					}
				}
			}
		showBoxDiv('viewdiv_', 'viewdiv_'+typeval);
		disableDivInputs('viewdiv_', 'viewdiv_'+typeval);

		var viewval;
		// first find the value of view
		for (i=0;i<document.gurumenu.view.length;i++)
			{
			if (document.gurumenu.view[i].checked && !document.gurumenu.view.disabled)
				{
				viewval = document.gurumenu.view[i].value;
				}
			}
		// if not found (or disabled) then set it to default
		if (typeof(viewval) == 'undefined')
			{
			for (i=0;i<document.gurumenu.view.length;i++)
				{
				if (document.gurumenu.view[i].value == '')
					{
					document.gurumenu.view[i].checked = true;
					viewval = '';
					}
				}
			}
		// set it to 'default' if empty for the having/orderby divs
		if (viewval == '' || viewval == 'extras')
			{
			if (document.gurumenu.groupby)
				{
				document.gurumenu.groupby.disabled = false;
				}
			}
		else
			{
			if (document.gurumenu.groupby)
				{
				document.gurumenu.groupby.selectedIndex = 0;
				document.gurumenu.groupby.disabled = true;
				}
			}

		if (viewval == '')
			{
			viewval = 'default';
			}
		//alert('orderbydiv_'+typeval+'_'+viewval);
		showBoxDiv('havingdiv_', 'havingdiv_'+typeval+'_'+viewval);
		disableSelect('havingselect_', 'havingselect_'+typeval+'_'+viewval);

		showBoxDiv('orderbydiv_', 'orderbydiv_'+typeval+'_'+viewval);
		disableSelect('orderbyselect_', 'orderbyselect_'+typeval+'_'+viewval);
		}
	}

function page_validate(thisform, limit)
	{
	with (thisform)
		{
		with (page)
			{
			if (value == null || !value.match(/^\d+$/))
				{
				alert('illegal "Go to page" value');
				focus();
				return false;
				}
			else if (value < 1 || value > limit)
				{
				alert('"Go to page" value must be between 1 and ' + limit);
				focus();
				return false;
				}
			else
				{
				return true;
				}
			}
		}
	}

/* Stats JS end */

/*** Js Desktop Score card *****/
function openS(URL, WindowName) {
        window.open(URL, WindowName, 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no,titlebar=0,width=550,height=505');
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
		default:
			window.open(URL, 'desktop', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no,width=340,height=320,left=0,top=0');
	}

	if (openDesktop.opener == null)
		openDesktop.opener = window;

	openDesktop.opener.name = "opener";
}
/*** Js Desktop Score end *****/

/* Global photo module */
first = 1;
galfirst = 1;
walfirst = 1;
scrsvrfirst = 1;

last = 10;
gallast = 10;
wallast = 10;
scrsvrlast = 10;

current = 1;
galcurrent = 1;
walcurrent = 1;
scrsvrcurrent = 1;
function nextPicture(){
   object = $('#ptsGalslide' + current);
   object.css("display","none");
   if (current == last){
	   current = 1;
	   }
   else {
	   current++;
	   }
   object = $('#ptsGalslide' + current);
   object.css("display","block");
}
function previousPicture() {
   object = $('#ptsGalslide' + current);
   object.css("display","none");
   if (current == first) {
   current = last;
   }
   else {
   current--;
   }
   object = $('#ptsGalslide' + current);
   object.css("display","block");
}
// Wall Paper Galslide
function nextGalslide(){
   object = $('#Galslide' + galcurrent);
   object.css("display","none");
   if (galcurrent == gallast){
	   galcurrent = 1;
	   }
   else {
	   galcurrent++;
	   }
   object = $('#Galslide' + galcurrent);
   object.css("display","block");
}
function previousGalslide() {
   object = $('#Galslide' + galcurrent);
   object.css("display","none");
   if (galcurrent == galfirst) {
   galcurrent = gallast;
   }
   else {
   galcurrent--;
   }
   object = $('#Galslide' + galcurrent);
   object.css("display","block");
}
function nextWalpaper(){
   object = $('#walPaperslide' + walcurrent);
   object.css("display","none");
   if (walcurrent == wallast){
	   walcurrent = 1;
	   }
   else {
	   walcurrent++;
	   }
   object = $('#walPaperslide' + walcurrent);
   object.css("display","block");
}
function previousWalpaper() {
   object = $('#walPaperslide' + walcurrent);
   object.css("display","none");
   if (walcurrent == walfirst) {
   walcurrent = wallast;
   }
   else {
  walcurrent--;
   }
   object = $('#walPaperslide' + walcurrent);
   object.css("display","block");
}
function nextScreensvr(){
   scrobject = $('#screenSvrslide' + scrsvrcurrent);
   scrobject.css("display","none");
   if (scrsvrcurrent == scrsvrlast){
	   scrsvrcurrent = 1;
	   }
   else {
	   scrsvrcurrent++;
	   }
   scrobject = $('#screenSvrslide' + scrsvrcurrent);
   scrobject.css("display","block");
}
function previousScreensvr() {
   scrobject = $('#screenSvrslide' + scrsvrcurrent);
   scrobject.css("display","none");
   if (scrsvrcurrent == scrsvrfirst) {
   scrsvrcurrent = scrsvrlast;
   }
   else {
   scrsvrcurrent--;
   }
   scrobject = $('#screenSvrslide' + scrsvrcurrent);
   scrobject.css("display","block");
}
/* Global photo module ends */

/* Load Images on request */
function loadImages(div){
	var images = [];
	$.each($(div+' img'), function(i,img){
		if(!$(img).attr('src') || $(img).attr('src')==''){
			images.push(img);
		}
	});
	$(images).each( function(i,image) {
		$(this).attr('src',$(this).attr('longdesc'));
	});
}
/* Load Images on request Ends */

/* More news tabs on HP */
function morenewsTab(tab) {
	for(i=1; i<=2; i++){
		$('#mn'+i).attr("className","disable");
		$('#morenews'+i).hide();
	}
	$("#"+tab).attr("className","current");
	if(tab == 'mn1') {
		$('#morenews1').show();
	}
	if(tab == 'mn2') {
		$('#morenews2').show();
	}
}
/* More news tabs on HP */




/* big JS for the photo page and Lightbox */
//photo page functions mostly
//most of these functions are abstracted out for reuse / low coupling
var _preLoader = 2;					//limits the number of images to preload in the lightbox
var _maxWidth = 900;				//limits the width of the image to be showed in the lightbox
var _imageNo = 5;						//the max number if images shown at a time in the photo page carousel
var _imgWidth = 620;				//max image width to be showed ... scale down to this number if image is greater in width..else keep it to it's original
var _keyNavOn = 1;					//identifier to check if keyboard navigation should be on. 1 by default means ON
var _isLightBox = 0;					//identifies whether the lightbox is open or not..by default it is NOT

var _relatedCache = [];


function _toggleEnlarge(opt){
	var obj = $("span.viewLB");
	if( parseInt(opt, 10) == -1 ){
		obj.css("visibility","hidden");
		$("#pView > img#imgMain").css("cursor", "default");
	}
	else if( parseInt(opt, 10) == 1){
		obj.css("visibility","visible");
		$("#pView > img#imgMain").css("cursor", "pointer");
	}
}
function _loadMetadata(){
	var objId = $("div.currentP").find("img").attr("_objid");
	
	if ( typeof(_isGallery)!= 'undefined' && _isGallery == 1){
		var keywords = 'Cricket Photo Gallery,'+_json[objId].desc_short;
		var desc = 'Cricket Photo Gallery for'+_json[objId].desc;
	}
	else{
		document.title = _json[objId].desc_short+" | Cricket Photo | Cricinfo.com";	
		
		var keywords = 'Cricket Photo, '+_json[objId].desc_short;	
		var desc = 'Cricket Photo: '+_json[objId].desc;
		
		//update OG tags for facebook like to work properly
		var imgPath = _json[objId].icon;
		imgPath = imgPath.replace('.icon.', '.');
		$("meta[property=og:url]").attr("content",_json[objId].url);
		$("meta[property=og:image]").attr("content",imgPath);
		$("meta[property=og:title]").attr("content",'(Photo) '+_json[objId].desc_short);
	}
	
	$("meta[name=keywords]").attr("content",keywords);
	$("meta[name=description]").attr("content",desc);
	return true;
}
function _loadImgInfo(){
	var objId = $("div.currentP").find("img").attr("_objid");	
	var d = '';
	if (_json[objId] &&  _json[objId].desc.length > 1){	
		if( !(typeof(_isGallery) != "undefined" && _isGallery == 1) && $("#pDetails").length == 0){
			//this is only for image page...assumed that the gallery page will always have this div since the gallery details (date, place) will always be there
			//the DOM element doesn't exist, create that first
			var s = '<div id="giWrap"><div class="pnl320T"></div><div id="pDetails" class="pnl300M" style="padding: 0px 10px 5px 10px;"><p class="desc"></p></div><div class="pnl320B"></div></div>';
			if(typeof(_wcFlag) != 'undefined' && _wcFlag == 1){
				$(".rhs > div:first").after(s);
			}
			else{
				$("#ciHomeContentrhs > div:first").before(s);
			}
		}
		$("#pDetails > p.desc").html(_json[objId].desc);
		d += _json[objId].desc;
	}
	else if( !(typeof(_isGallery) != "undefined" && _isGallery == 1)){
		$("#giWrap").remove();
	}
	
	if(_json[objId] &&  _json[objId].copyright.length > 1){
		$("#photoSlides div.copy").html(_json[objId].photographer+" / &copy; "+_json[objId].copyright);
		d += " <span> "+_json[objId].photographer+" / </span>";
		d += " <span>&copy; "+_json[objId].copyright+"</span>";

	}
	else{
		$("#lboxArea > p.text").html("");
		$("#photoSlides div.copy").html("");
	}
	
	$("#lboxArea > p.text").html(d);
	return true;
}
function _respFunc(resp){
	var photoid = $("span.items div.currentP a img").attr("_cid");

	if( !_relatedCache[photoid] ){
		_relatedCache[photoid] = {"contents": resp};	
	}
	
	if(resp.length > 0){
		$("#divRel").remove();
		//parsing and making things work after the response recieved from the AJAX request
		var str = '<div id="divRel">';
		var len = 2;
		for (i =0 ; i < resp.length ; i++){
			str += '<div><span class="ciRelatedLnksBlkTxt">'+resp[i].name+': </span>';
			for(j=0; j<resp[i].contents.length; j++){
				str += '<span><a class="wallpaperbrowsultext" href="'+resp[i].contents[j].href+'">'+resp[i].contents[j].href_name+'</a></span>';
				if ( j < resp[i].contents.length - 1){
					if (j%len == 0) {
						str += ' - ';
					}
					else {
						str += ' | ';
					}
				}
			}
			str += '</div>';
			if( i < resp.length -1){
				str += '<div class="ciSpLksSeperator"></div>';
			}
		}
		str += '</div>';
	
		if($("#rlWrap").length ==0){
			//if the related links div doesn't exist. then create that div first
			var s = '<div id="rlWrap"><div class="pnl320T"></div><div class="pnl300M"  id="relatedLinks" style="padding: 0px 10px 10px 10px;"><div class="ciRelatedLinksHeader">Related Links</div></div><div class="pnl320B"></div></div>';
			if( $("#giWrap").length > 0 ){
				$("#giWrap").after(s);
			}
			else{
				$(".rhs > div:first").after(s);
			}
		}
		$("#relatedLinks .ciRelatedLinksHeader").after(str);
	}
	else{
		//if no related links, then remove the sidebar
		$("#rlWrap").remove()
	}
}
function _loadRelatedLinks(){
	var photoid = $("span.items div.currentP a img").attr("_cid");
	var url = "/ci/content/image/rel.json?";
  	
  	if (_relatedCache[photoid]){
  		_respFunc(_relatedCache[photoid].contents);
  	}
  	else{
  		if (typeof(p_alt) != "undefined"){
  			var param = "brand="+_pBrand+";id="+photoid+";alt="+p_alt;
  			url += param;
  			$.get(url, _respFunc);
  		}
  		else{
  			var param = "brand="+_pBrand+";id="+photoid;
  			url += param;
  			$.get(url, _respFunc);	
  		}
  	}

	return true;
}
function updateOmniCarousel(){
	if(typeof s_omni !== 'undefined'){	
		var s_caro = s_omni;
		var img_object_id = $("#hp_carousl_cont .hpCurrent").attr("data");
		var img_caption = $("#hp_carousl_cont .hpCurrent .ciHomePhotoCaption").text();
		s_caro.pev2 = "zoom_photoid="+img_object_id+" homepage";
		var hpCaroPageViewMod = "cricinfo:photos section:photos:"+img_caption;
		s_caro.pageName = hpCaroPageViewMod;
		s_caro.channel = "cricinfo:photos section";
		s_caro.prop4 = "image";
		s_caro.prop5 = "cricinfo:photos section:photos";
		s_caro.tl();
	}
}
function _omniCall(){
	//not sure if this is the correct way to do an omniture call
	//this is more like a hack for this photo page
	var attach = $("span.items div.currentP a img:first").attr("_objid");
	omniMVO = "photoid="+attach;
	
	//s_omni is the amniture object
	//we need to set the prop32 variable as the photoid
	s_omni.prop32 = omniMVO;
	s_omni.t();
	return true;
}
function _syncControls(){
	var pObj = $("span.prevP");
	var nObj = $("span.nextP");
	var curSel = $("span.items  div.currentP");
	if (pObj.attr("navigate") == 0 && curSel.prevAll().length == 0 && curSel.parent("li").prevAll().length == 0){
		pObj.addClass("disabled");
		$("#pChoose > span.btn_prev > a").addClass("disabled");
		$("#pNav > div.prevBtn").addClass("prevBtnOff");
		$("#lbNav > div.prevBtn").addClass("prevBtnOff");
	}
	else{
		pObj.removeClass("disabled");
		$("#pChoose > span.btn_prev > a").removeClass("disabled");
		$("#pNav > div.prevBtn").removeClass("prevBtnOff");
		$("#lbNav > div.prevBtn").removeClass("prevBtnOff");
	}
	
	if(nObj.attr("navigate") == 0 && curSel.nextAll().length == 0 && curSel.parent("li").nextAll().length == 0 ){
		nObj.addClass("disabled");
		$("#pChoose > span.btn_nxt > a").addClass("disabled");
		$("#pNav > div.nextBtn").addClass("nextBtnOff");
		$("#lbNav > div.nextBtn").addClass("nextBtnOff");
	}
	else{
		nObj.removeClass("disabled");
		$("#pChoose > span.btn_nxt > a").removeClass("disabled");
		$("#pNav > div.nextBtn").removeClass("nextBtnOff");
		$("#lbNav > div.nextBtn").removeClass("nextBtnOff");
	}
	return true;
}
function _syncPosition(){
	_syncControls();
	if (typeof(_isGallery) != "undefined" && _isGallery == 1){
		//sync the position of the image shown wrt to the total number of images available
		var currP = $("div.currentP");
		var currV = $("li.currentView");
		var liPos = parseInt(currV.prevAll("li").length, 10) * _imageNo;
		var divPos = parseInt(currP.prevAll("div").length, 10) + 1;
		var position = liPos + divPos;
		var cArea = $("#pChoose > span.content > b");
		$("#pChoose > span.content > b").html(position+" / "+cArea.html().split("/")[1]);	
	}
	return true;
}
function _getLbSrc(obj){
	var src = obj.attr("src").replace(".icon.", ".");
	return src;
}
function _mpuCall(){
	if( window.frames["image-ad-iframe"] ){
		window.frames['image-ad-iframe'].location.reload();	
	}
}
function _fbLike(obj_id, title){
	var src = 'http://www.facebook.com/widgets/like.php?href=http://espncricinfo.com/'+_pBrand+'/content/image/'+obj_id+'.html?page=1';
	document.getElementById("fbPhotoLike").setAttribute('src', src);
	return true;
}
function _tweetImage(obj_id, title){
	var twitter_code = '<a href="http://twitter.com/share" class="twitter-share-button" data-count="horizontal" data-via="espncricinfo" data-related="cricinfowickets:Wicket alerts from ESPNcricinfo" data-text="'+title+'" data-url="http://espncricinfo.com/'+_pBrand+'/content/image/'+obj_id+'.html?page=1">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script>';
	$("#tweetImage").html(twitter_code);
}
function _showImage(tsrc, title, obj_id){
	$("#pView >  img").css({"visibility": "hidden"});
	$("#imgWait").css("display", "block");
	//handle what to do with the image..follow any naming convention...anything here
	var medSrc = tsrc.replace(".icon.", ".");
	
	var objImagePreloader = new Image();
	objImagePreloader.onload = function(){	
		var w = objImagePreloader.width;
		var h = objImagePreloader.height;
		if (w > _imgWidth){
			var r = h / w;
			w = _imgWidth;
			h = w * r;
			
			_toggleEnlarge(1);
		}
		else{
			_toggleEnlarge(-1);
		}
		
		$("#pView > img").attr("src", objImagePreloader.src).attr("height", h).attr("width", w).css("visibility", "visible");
		$("#imgWait").css("display", "none");
		$("#pView > img").css("visibility", "visible");
	};
	objImagePreloader.src = medSrc;
	$("#pView > img").attr("src", objImagePreloader.src);
	$("#pView > img").attr("title", title);
	$("#pView > img").attr("alt", title);
	
	if( typeof(_isGallery) != "undefined" && _isGallery == 1){
		_loadImgInfo();
		_loadMetadata();
		_syncPosition();
	}
	else{
		//meant for the photo page
		//call all
		_loadImgInfo();
		_loadMetadata();
		_omniCall();
		_loadRelatedLinks();
		_syncPosition();
		_fbLike(obj_id, title);
		_tweetImage(obj_id, title);
	}
	
	if( _isLightBox == 0){
		_mpuCall();
	}
}
function _thumbClick(obj){
	if( ! obj.hasClass("currentP")){
		obj.parents("ul").find("div.currentP").removeClass("currentP");
		obj.addClass("currentP");
		if( ! obj.parent("li").hasClass("currentView")){
			obj.parents("ul").find("li.currentView").removeClass("currentView");
			obj.parent("li").addClass("currentView");
		}
		$("div.nextBtn").removeClass("nextBtnOff");
		$("div.prevBtn").removeClass("prevBtnOff");
		if (obj.next().length == 0 && obj.parent("li").next().length == 0){
			$("div.nextBtn").addClass("nextBtnOff");
		}
		else if(obj.prev().length == 0 && obj.parent("li").prev().length == 0){
			$("div.prevBtn").addClass("prevBtnOff");
		}
		
		if(obj.nextAll().length == 0 && obj.parent("li").nextAll().length == 0 && $("#pList > span.nextP").attr("navigate") != 0){
			var uri = obj.find("img").attr("url");
			window.location = uri;	
		}
		else if( obj.prevAll().length == 0 && obj.parent("li").prevAll().length == 0 && $("#pList span.prevP").attr("navigate") != 0 ){
			var loc = obj.find("img").attr("url");
			window.location = loc;	
		}
		else{
			_showImage(obj.find("img").attr("src"), obj.find("img").attr("title"), obj.find("img").attr("_objid"));
		}
	}
}
function _goCarousel(par){
	var currentLi = par.siblings("span.items").find("li.currentView");
	var liWidth =  parseInt(currentLi.width(), 10);
	var posUl = parseInt(currentLi.parent("ul").position().left, 10);
	if( par.hasClass("prevP") && currentLi.prevAll().length > 0){
		currentLi.removeClass("currentView");
		currentLi.prev().addClass("currentView");
		currentLi.parent("ul").animate({"left":posUl + liWidth}, 400);
		_thumbClick($("span.items li.currentView div:last"));
	}
	else if( par.hasClass("nextP") && currentLi.nextAll().length > 0){
		currentLi.removeClass("currentView");
		currentLi.next().addClass("currentView");
		currentLi.parent("ul").animate({"left":posUl - liWidth}, 400);
		_thumbClick($("span.items li.currentView div:first"));
	}
	else if(par.hasClass("prevP")){
		_thumbClick($("span.items li.currentView div:first"));
	}
	else if(par.hasClass("nextP")){
		_thumbClick($("span.items li.currentView div:last"));
	}
}
function _resizeLB(width, height, lbSrc){
	//do some calculations to resize and center the LB

	$("#lbBg").css("height", $(window).height()+$(window).scrollTop());
	if (width > _maxWidth){
		var r = height / width;
		width = _maxWidth;
		height = width * r;
	}
	
	$("#lbImg").css("width", width);
	$("#lboxArea").css("height", "auto");
	
	$("#lboxArea").animate({"width":width}, 300, function(){
		$("#lbImg").animate({"height":height}, 300, function(){
			
			//small hack to prevent some IE issues
			$("#photoLightBox").css({'height': $("#lboxArea").height()});
		
			$("#lbImg > img").attr({"width":width, "height":height});
			$("#lbBg").css({'height':$(document).height()});	
		});
	});
}
function _viewLbImage(lbSrc){
	$("#lbImg > img").attr("src", "").css("visibility", "hidden");
	$("#imgLoading").css("display", "block");
	var objImagePreloader = new Image();
	objImagePreloader.onload = function(){	
		_resizeLB(objImagePreloader.width,objImagePreloader.height, lbSrc);
		
		//once the resizing and placement of the lightbox is done, 
		//then hide the imgloading image and set the attribute of the lightbox image
		setTimeout( function(){ $("#imgLoading").css("display", "none"); $("#lbImg  img").attr("src", objImagePreloader.src); $("#lbImg  img").css({"visibility": "visible"}) }, 800);
	};
	objImagePreloader.src = lbSrc;
}
function _imageNavigate(opt){
	//opt is the option to navigate previous(-1) or next(1) image
	var n = parseInt(opt, 10);
	var par = $("span.items li.currentView");
	var currSelect = par.children("div.currentP");
	
	switch (n){
		case -1:
			if( currSelect.prev().length > 0){
				_thumbClick(currSelect.prev());
			}
			else if(par.prev().length > 0){
				var obj = $("#pList > span.prevP");
				_goCarousel(obj);
			}
		break;
		case 1:
			if( currSelect.next().length > 0 ){
				_thumbClick(currSelect.next());
			}
			else if( par.next().length > 0 ){
				var obj = $("#pList > span.nextP");
				_goCarousel(obj);
			}
		break;
	}
}
function _lbImageNavigate(opt){
	//opt is the option to navigate previous(-1) or next(1) image
	var check = _imageNavigate(opt);
	
	if ( check != false){
		var obj = $("div.currentP img");
		_viewLbImage(_getLbSrc(obj));
	}
}

//lightbox functioning
function _closeLB(){
	_isLightBox = 0;
	$("#photoLightBox").css("display", "none");
	$("#lbBg").css("display", "none");
	
	//remove all event handlers for the lighbox here
	//make sure to remove all the event handlers, else more than one handler will be binded to the same event
	$("#lboxArea > p.close, #photoLightBox, #lboxArea, #lbNav > div").unbind("click");
	$("#lboxArea, #lbNav").unbind("hover");
	$("li.pInd a").unbind("click");
}
function _getLargeSrc(src){
	var re = /alt=/;
	if( src.match(re) ){
		var s = src.split("?");
		return s[0];
	}
	else{
		var s = src.split('/');
		var l = s.length;
		var ur = "";
		for(i=0;i<l-1;i++){
			ur += s[i]+'/';
		}
		var p = s[l-1].split(".");
		var pl = p.length;
		var comp = p[0]+'.'+p[pl-1];
		
		var uri = ur+comp;
		return uri;	
	}
}
function _stryImgView(obj){
	if ( obj.hasClass("stryPhotoEn") ){
		_viewLbImage(_getLargeSrc(obj.attr("src")));
		var cap = obj.siblings("table:first").find("td#stryPicCptn").html()
		$("#lboxArea  p.text").html(cap);	
	}
	else if( obj.hasClass("stryEnlarge") ){
		_viewLbImage( _getLargeSrc(obj.parents("table:first").siblings("img.stryPhotoEn").attr("src")));
		var cap = obj.parent("tr").siblings("tr:first").find("td#stryPicCptn").html()
		$("#lboxArea  p.text").html(cap);	
	}
	return false;
}
function _sectionImgView(obj){
	if( obj.hasClass("sectionImgEn")){
			_viewLbImage(_getLargeSrc(obj.siblings("img.sectionImg").attr("src")));
			var cap = obj.prev("div").html();
			$("#lboxArea  p.text").html(cap);	
	}
	else if( obj.hasClass("sectionImg")){
		_viewLbImage(_getLargeSrc(obj.attr("src")));
		var cap = obj.next("div").html();
		$("#lboxArea  p.text").html(cap);	
	}
}
function _openLB(){
	//set the height of the LB background
	$("#lbBg").css({'height':$(document).height(), 'display': 'block'});
	//$("#lboxArea").css({ 'height' : parseInt($(window).height(), 10) - 20})
	$("#photoLightBox").css({'height': parseInt($(window).height(), 10) - 20, 'display': 'block', 'top':parseInt($(window).scrollTop(), 10)+5});
		
	//skip a lot of things for the story page and section homepages lightbox enlarge
	if( (typeof(_isStory) != "undefined" && _isStory == 1)){
		//story page handling..very specific..hand here only
		$("#lboxArea > p.close, #photoLightBox").bind('click', function(){ _closeLB(); return false;});
		$("#lboxArea").bind("click", function(){return false;});
		_isLightBox = 1;
	}
	else{
		if ($("span.items div.currentP").length > 0){
			var objId = $("span.items div.currentP img").attr("_objid");
			var d = '';
			if(_json[objId] && _json[objId].desc.length > 1){
				d += _json[objId].desc;
			}
			if(_json[objId] && _json[objId].photographer.length > 1){
				d += '<span> '+_json[objId].photographer+' / </span>';
			}
			if(_json[objId] && _json[objId].copyright.length > 1){
				d += '<span>&copy; '+_json[objId].copyright+'</span>';
			}
		}
		else{
			var d = $("#pDetails p.desc").html();
			d+= " <span>"+$("#photoSlides div.copy").html()+"</span>";
		}
		$("#lboxArea  p.text").html(d);
		_isLightBox = 1;
		_viewLbImage($("img#imgMain").attr("src"));
		
		//create all required event handlers for Lightbox here
		//these event handlers will be unbinded once the lightbox is closed..better JS perf
		$("#lboxArea > p.close, #photoLightBox").bind('click', function(){ _closeLB(); return false;});
		$("#lboxArea").bind("click", function(){return false;});
		$("li.pInd a").bind("click", function(e){
			e.stopPropagation();
		})
		$("#lbNav > div").bind("click", function(){
			if($(this).hasClass("prevBtn") &&  !($("li.currentView").prev().length == 0 && $("div.currentP").prev().length == 0)){
				_lbImageNavigate("-1");
			}
			else if( $(this).hasClass("nextBtn") && !( $("li.currentView").next().length == 0 && $("div.currentP").next().length == 0 )){
				_lbImageNavigate("1");
			}
			return false;
		});
		$("#lboxArea").hover(function(){
			$("#lbNav").css("visibility", "visible");
		}, function(){
			$("#lbNav").css("visibility", "hidden");
		});
		$("#lbNav").hover(function(){
			$("#lbNav").css("visibility", "visible");
		});
	}
}
function _imagePreloader(){
	//preloads a certain set of images
	//global variable _preLoader holds the amount of images to preload on each side
	//will do this for performace later on
}

//special onload to check if the currentP class is applied to the selected photo or not
//if not then do so
$(function(){
	if ( $("span.items div.currentP img").attr("selected") != "0" ){
		if( $("span.items").find("img[selected=0]").parents("li").prevAll().length == 0 ){
			$("span.items div.currentP").removeClass("currentP");
			$("span.items").find("img[selected=0]").parents("div:first").addClass("currentP");
		}
		else{
			var sibs = $("span.items").find("img[selected=0]").parents("li").prevAll().length;
			
			var currentLi = $("span.items").find("li.currentView");
			var liWidth =  parseInt(currentLi.width(), 10);
			var posUl = parseInt(currentLi.parent("ul").position().left, 10);
			
			var move = posUl - (sibs * liWidth);
			currentLi.parent("ul").animate({"left":move}, 400);
			
			currentLi.removeClass("currentView");
			$("span.items").find("div.currentP").removeClass("currentP");
			
			$("span.items").find("img[selected=0]").parents("div:first").addClass("currentP");
			$("span.items").find("img[selected=0]").parents("li:first").addClass("currentView");
		}
	}
	_syncPosition();
});


/***********************************************************/
//on load function invoking...mostly event handler bindings
$(function(){
	//************************************//
	//new function added to set a parameter if search is active, so that keyboard navigation for photos is stopped
	$("#cricinfoSearch, #ciloginfm input").bind("focus", function(){
		_keyNavOn = 0;
	});
	$("#cricinfoSearch, #ciloginfm input").bind("blur", function(){
		_keyNavOn = 1;
	});
	
	
	//photo page functionality starts here
	//navigation arrows that come up on hovering of the image
	$("#pView").hover(function(){
		$("#pNav > div").css("visibility", "visible");
		return false;
	}, function(){
		$("#pNav > div").css("visibility", "hidden");
		return false;
	});
	$("#pNav").hover(function(){
		$("#pNav > div").css("visibility", "visible");
		return false;
	});
	//make the image list go carouseled !
	$("#pList > span").not("span.items").bind("click", function(){
		_goCarousel($(this));
		return false;
	});
	//click on photo to load up image
	$("span.items > ul > li > div").live("click", function(){
		_thumbClick($(this));
		return false;
	});
	//navigating single image at a time using the buttons that show up on image hover
	$("#pNav > div").bind("click", function(){
		if($(this).hasClass("prevBtn") && !$(this).hasClass("prevBtnOff")){
			_imageNavigate("-1");
		}
		else if($(this).hasClass("nextBtn") && !$(this).hasClass("nextBtnOff")){
			_imageNavigate("1");
		}
		return false;
	});
	//navigating single image at a time using the top navigation (which shows up the current image position as well)
	$("#pChoose > span").not("span.content").bind("click", function(){
		if($(this).hasClass("btn_prev") &&  !($("li.currentView").prev().length == 0 && $("div.currentP").prev().length == 0)){
			_imageNavigate("-1");
		}
		else if( $(this).hasClass("btn_nxt") && !( $("li.currentView").next().length == 0 && $("div.currentP").next().length == 0 )){
		_imageNavigate("1");
		}
		return false;
	});
	
	//enlarge image - view it in lightbox
	$("span.viewLB, #pView > img#imgMain").bind("click", function(){
		if( $("#pView > img#imgMain").attr("width") >= _imgWidth){
			_openLB();
		}
		return false;
	});
	
	//enlarge on story pages only
	if( typeof(_isStory) != "undefined" && _isStory == 1){
		$(".stryEnlarge, .stryPhotoEn").bind("click", function(){
			_openLB();
			_stryImgView($(this));
			return false;
		});
	}
	
	//enlarge on site homepage and section homepages
	if( typeof(_isSectionHome) != "undefined" && _isSectionHome == 1){
		$(".sectionImgEn, .sectionImg").bind("click", function(){
			_openLB();
			if($(this).parent().attr("id") == "imagedata_1"){
				$("#lbNav > div.prevBtn").addClass("prevBtnOff");
			}
			_sectionImgView($(this));
			return false;
		});
	}
	
});



//photo page keyboard event handling
//more accessibility - keyboard
//will check if the "js-hotkeys" plugin for jquery is needed, or can everything be done in our own code
$(document).keyup(function(e) {
	var opt = e.keyCode;
	switch(opt){
		case 27:
			//escape key on LB open
			if($("#photoLightBox").css("display") == "block"){ 
				_closeLB();
				return false;
			}
		break;
		case 37:
			//Omniture Zoom Tracking
			if(typeof(_isSectionHome) == "undefined"){
				if($('#lboxArea').is(":visible")){
					pickPrevImgId(_json[$('div.currentP').find('img').attr('_objid')].object_id);
				}
				//left arrow for photo nav
				if($("#photoLightBox").css("display") == "block" && ! $("#lbNav > div.prevBtn").hasClass("prevBtnOff")){
					//if LB is open, navigate that
					_lbImageNavigate("-1");
				}
				else{
					//navigate the photos in the photo page
					//check if the focus is not on the search box and then only navigate
					if(_keyNavOn == 1){
						_imageNavigate("-1");	
					}
				}
			}
		break;
		case 39:
			if(typeof(_isSectionHome) == "undefined"){
				//Omniture Zoom Tracking
				if($('#lboxArea').is(":visible")){
					pickNextImgId(_json[$('div.currentP').find('img').attr('_objid')].object_id);
				}
				//right arrow for photo nav
				if($("#photoLightBox").css("display") == "block" && ! $("#lbNav > div.nextBtn").hasClass("nextBtnOff") ){
					//if LB is open, navigate that
					_lbImageNavigate("1");
				}
				else{
					//navigate the photos in the photo page
					if(_keyNavOn == 1){
						_imageNavigate("1");	
					}
				}
			}
		break;
	}
	return false;
});

function clickMap(id,home,browse,ths,c4,c){
	var track = 'zoom_photoid=' + id;
	var param;
	if(home){
		param = home;
		if(c.indexOf('team') != -1){
			param = 'team homepage';
		}
		if(c.indexOf('series') != -1){
			param = 'series homepage';
		}		
	}else{
		param = c4;
	}
		if(browse){
			param += browse; 
		}
	var ac;	
		if(s_account){
			ac = s_account;
		}
		else{
			ac = 'wdgespcricinfo';
		}
	var s_zoom=s_gi(ac);
	s_zoom.linkTrackVars = 'prop1,prop2,prop9,prop12';
	s_zoom.linkTrackEvents = track;
	s_zoom.events = track;
	s_zoom.tl(ths,'o','zoom_photoid=' + id + ' ' + param);
}

	var _EMtimer;
	$(document).ready(function(){
		_EMtimer = setTimeout(function(){
			if (!(document.cookie.indexOf("Q_cricinfo_edition_msg") >= 0)) {
				$(".edition-msg").css({"height":"0px","display":"block","clear":"both"}).animate({"height":"+23px"},300, function() {
					clearInterval(_EMtimer);
				});
			}
		},7000);
		$('.dropdownedition').click(function(){
			$('.sublinks').toggle("fast");		 	
		});
		$('.edition-msg-close').click(function(){
			$(".edition-msg").animate({"height":"0px"},300, function() {
				$(this).hide();
				clearInterval(_EMtimer);
			});
			var today_msg = new Date();
			var expire_msg = new Date();
			expire_msg.setTime(today_msg.getTime() + 365*24*60*60*1000);
			document.cookie = 'Q_cricinfo_edition_msg=false;expires='+expire_msg.toGMTString();
		});
		$(".dropdownedition li").focus(function(){
            $(this).blur();
		});	
		/*
		$('.sublinks a').click(function(){
			$('.sublinks').css("display", "none");
			$('#ciHomeLogoholder .editioncontainer').attr('style','');
			$('.dropdownedition').css("background","none");
			SetEdition()
			});*/
		$('#takeover-ad-wrap').click(function(){
			$('.editioncontainer .sublinks').css("display", "none");
			$('#ciHomeLogoholder .editioncontainer').attr('style','');
			$('.editioncontainer .dropdownedition').css("background","none");
			});
			$('body').click(function(){
			$('.editioncontainer .sublinks').css("display", "none");
			});
		});

	function SetEdition(editionValue)
		{
		$(".edition-msg-close").trigger('click');
		if (editionValue == '') // delete the cookie instead
			{
			document.cookie = "Q_cricinfo_edition=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
			}
		else
			{
			var today = new Date();
			var expire = new Date();
			expire.setTime(today.getTime() + 365*24*60*60*1000);
			document.cookie = "Q_cricinfo_edition="+escape(editionValue)+";expires="+expire.toGMTString()+";";
			}
		location.reload();
		}

//code for sitephoto carousel and lightbox navigation		
$( document ).ready(function() {
	if ($("#hpHomePage_Carousel").length ===1){
		var hp_img_count = 11;
		var item_width = $('#hp_carousl_cont li').outerWidth();
		var totalcount = hp_img_count;
		var currentImg = 0;
		//code to change the height of the module according to the photo in the viewport and to set the hpCurrent class to the photo
		var x = currentImg + 1;
		x = "imagedata_" + x;
		$(".ciHomePhoto").css('height',$("#" + x).height());
		$("#" + x).addClass("hpCurrent");
		$('#hp_carousl_cont').css({'marginLeft' : 0});

		function hpSitePhoto_MoveLeft(){
			var left_indent_prev;
			$('#hpNext').removeClass('nextInactive'); 
			$("#lbNav > div.nextBtn").removeClass("nextBtnOff");

			if(currentImg == 0){
				$('#hpPrev').addClass('prevInactive'); // for first photo, inactivating the prev button on page
				$("#lbNav > div.prevBtn").addClass("prevBtnOff"); // for first photo, inactivating the prev button on Lightbox
				return false;
			} else {
				$('#hpPrev').removeClass('prevInactive');
				$("#lbNav > div.prevBtn").removeClass("prevBtnOff");
				currentImg -=1;
				if(currentImg == 0){
					$('#hpPrev').addClass('prevInactive');
					$("#lbNav > div.prevBtn").addClass("prevBtnOff");
				}
			}
			$('.hpCurrent').removeClass('hpCurrent');

			left_indent_prev = -1.0*currentImg*item_width;
			var x = currentImg + 1;
			x = "imagedata_" + x;
			$("#" + x).addClass("hpCurrent");
			$('#hp_carousl_cont').animate({'margin-left': left_indent_prev}, "fast", function () {
				$(".ciHomePhoto").css('height',$("#" + x).height());
			});
			updateOmniCarousel();
		}

		function hpSitePhoto_MoveRight(){
			var left_indent_next;
			$('#hpNext').removeClass('nextInactive');
			$('#hpPrev').removeClass('prevInactive');
			$("#lbNav > div.prevBtn").removeClass("prevBtnOff");
			$("#lbNav > div.nextBtn").removeClass("nextBtnOff");

			if(currentImg == (totalcount-1)) {
				 //currentImg=0;
				$('#hpNext').addClass('nextInactive');
				$("#lbNav > div.nextBtn").addClass("nextBtnOff");
				return false;
			} else if(currentImg < totalcount) {
				currentImg +=1;
				if(currentImg == (totalcount-1)){
					$('#hpNext').addClass('nextInactive');
					$("#lbNav > div.nextBtn").addClass("nextBtnOff");
				}
			}
			$('.hpCurrent').removeClass('hpCurrent');

			left_indent_next = -1.0*currentImg*item_width;
			var x = currentImg + 1;
			x = "imagedata_" + x;
			$("#" + x).addClass("hpCurrent");
			$('#hp_carousl_cont').animate({'margin-left': left_indent_next}, "fast", function () {
				$(".ciHomePhoto").css('height',$("#" + x).height());
			});
			updateOmniCarousel();
		}

		$('#hpPrev').click(function(c) {
			c.preventDefault();
			hpSitePhoto_MoveLeft();
			return false;
		});

		$('#hpNext').click(function(c) {
			c.preventDefault();
			hpSitePhoto_MoveRight();
			return false;
		});

		$(document).keydown( function(event) {
			if ( event.which == 37 ){
				if($("#photoLightBox").css("display") == "block" && ! $("#lbNav > div.prevBtn").hasClass("prevBtnOff")){
					moveLeftLightBox($('li.hpCurrent').attr('data'));
				}
				else{
					hpSitePhoto_MoveLeft(event);
				}
			}
			if ( event.which == 39 ) {
				if($("#photoLightBox").css("display") == "block" && ! $("#lbNav > div.nextBtn").hasClass("nextBtnOff") ){
					moveRightLightBox($('li.hpCurrent').attr('data'))
				}
				else{
					hpSitePhoto_MoveRight(event);
				}
			}
		});
		
		function findById(source, id) {
			for (var j = 0; j < source.length; j++) {
				if (source[j].id == id) {
					return source[j];
				}
			}
		}
		
		function moveLeftLightBox(id){
			if(! $("#lbNav > div.prevBtn").hasClass("prevBtnOff")){
				for (var i=0; i<totalcount; i++){
					if(objIdArr[i] == id){
						var prevId = objIdArr[i-1];
					}
				}
				var prev = findById(jsonImg, prevId);
				var copy = "<span>&copy; " + prev.copy + "</span>";
				var caption = prev.caption;
				var txt = caption + copy;

				_viewLbImage(_getLargeSrc(prev.path));
				$("#lboxArea  p.text").html(txt);

				hpSitePhoto_MoveLeft();
			}
		}
		
		function moveRightLightBox(id){
			if(! $("#lbNav > div.nextBtn").hasClass("nextBtnOff")){
				for (var i=0; i<totalcount; i++){
					if(objIdArr[i] == id){
						var nextId = objIdArr[i+1];
					}
				}
				var next = findById(jsonImg, nextId);
				var copy = "<span>&copy; " + next.copy + "</span>";
				var caption = next.caption;
				var txt = caption + copy;
				
				_viewLbImage(_getLargeSrc(next.path));
				$("#lboxArea  p.text").html(txt);

				hpSitePhoto_MoveRight();
			}
		}
		
		$('#prevLB').click(function() {
			moveLeftLightBox($('li.hpCurrent').attr('data'));
			return false;
		});
		
		$('#nextLB').click(function() {
			moveRightLightBox($('li.hpCurrent').attr('data'));
			return false;
		});
	}
});