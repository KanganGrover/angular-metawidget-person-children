// app.controller.js
// -----------------------------
// Controller for handling form logic and saving data
// -----------------------------
angular.module('myApp')
.controller('myController', ['$scope', 'PersonService', function($scope, PersonService) {

  // Load models and Metawidget configs from service
  $scope.person = PersonService.getPerson();
  $scope.personMetawidgetConfig = PersonService.getPersonConfig();
  $scope.addressMetawidgetConfig = PersonService.getAddressConfig();
  $scope.childrenMetawidgetConfig = PersonService.getChildrenConfig();

  // -----------------------------
  // Save function
  // -----------------------------
  $scope.save = function() {
    // Log  to console
    console.log('Saved person object:', $scope.person);
    alert('Saved successfully! Check console for nested address & children objects.');
  };

}]);
