angular.module('app').controller('StylistController', function ($state, $anchorScroll, $modal) {
    var ctrl = this;


    $anchorScroll();


    ctrl.book = function () {

    	console.log('b');

    var modalInstance = $modal.open({
	      templateUrl: 'app/views/question.html',
	      controller: 'HomeController',
	      size: 'lg',
	      resolve: {
	      	items: []
	      }
	    });

    // modalInstance.result.then(function () {
    // }, function () {
    // });
  };

   console.log('StylistController');
});


// angular.module('app').controller('ModalBookCtrl', function ($scope, $modalInstance, items) {

//   $scope.items = items;
//   $scope.selected = {
//     item: $scope.items[0]
//   };

//   $scope.ok = function () {
//     $modalInstance.close($scope.selected.item);
//   };

//   $scope.cancel = function () {
//     $modalInstance.dismiss('cancel');
//   };
// });