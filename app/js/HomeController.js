angular.module('app').controller('HomeController', function ($state) {
    var ctrl = this;


    ctrl.istFeed = [];

    for(var i=0; i<50; i++){
    	var x = i%7 + 1;
    	ctrl.istFeed.push('img/style'+x+'.jpg');
    }

    //console.log('HomeController');
});