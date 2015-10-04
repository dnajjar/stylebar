angular.module('app').controller('QuestionController', function ($state) {
    var ctrl = this;


    ctrl.pics = [];

    for(var i=1; i<7; i++){
    	ctrl.pics.push({img:'img/Q'+i+'.png'});
    }

    //console.log('HomeController');
});