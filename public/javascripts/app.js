/* jslint maxlen: 500 */

/* jshint browser: true, jquery: true, camelcase: true, indent: 2, undef: true, quotmark: single, trailing: true, curly: true, eqeqeq: true, forin: true, immed: true, latedef: true, newcap: true, nonew: true, unused: true, strict: true */
/*global console:true , io:true */
var main = function () {
    'use strict';
  
  
var socket= io.connect();  
var $userForm=$('#userForm');
var $username=$('#username');
var $mainArea=$('#mainArea');
var $userList=$('#userList');
var $pictureArea=$('#pictureArea') ;
var $indexbanner=$('#index-banner');


  socket.on('get users', function(data){
    var html='';
    for (var i = 0; i < data.length; i++) {
   // html+='<li  class='bg-info' >'+ data[i] +'</li>';
   html+='<p class="btn-info btn-sm"> <span class="glyphicon glyphicon-user"></span>' + data[i]+ '</p>';
  }
  $userList.html(html);
  });


 $userForm.submit(function(e){
      e.preventDefault();
      socket.emit('new user', $username.val(),function(data){
        if(data){
          $indexbanner.hide();
          $mainArea.show();

        }
      });
      $username.val('');
  });
};

$(document).ready(main);
