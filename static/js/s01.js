/***
*
* Most of the logic for task lists are done here
*
*/

if(typeof exports == 'undefined'){
  var exports = this['mymodule'] = {};
}

exports.add_buttons = {
  /***
*
* Add button to the editbar and bind a listener
*
***/

  init: function(){ // Write the button to the dom
    var spacer = '<li class="acl-write separator"></li>';
    var buttonHTML = '<li class="acl-write" id="flattr_button">'+
	'<a target="_blank" data-l10n-id="pad.toolbar.add_buttons.title" title="Flattr pad.s01.de!">'+
		'<span class="buttonicon" style="background:url(https://raw.githubusercontent.com/balupton/flattr-buttons/master/logo-16x16.png)"></span></a></li>';
    $('.menu_right').append(spacer);
    $('.menu_right').append(buttonHTML);
    $('#flattr_button').click(function() {
        window.open('https://flattr.com/submit/auto?user_id=Gottox&url=http://pad.s01.de/&title=pad.s01.de&language=&category=software', 'flattr', 'height=500,width=1024')
        return false;
    })
  }
}

exports.postAceInit = function(hook, context){exports.add_buttons.init()};
