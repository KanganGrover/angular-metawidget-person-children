// person.service.js
// -----------------------------
// Service to provide models and Metawidget configurations
// -----------------------------
angular.module('myApp')
.factory('PersonService', [function() {

  // -----------------------------
  // Models
  // -----------------------------
  var address = {
    street: '',
    city: '',
    state: '',
    postcode: ''
  };

  // Person object with address and children
  var person = {
    firstname: '',
    surname: '',
    age: '',
    address: address,
    children: []  
  };

  // -----------------------------
  // Metawidget Configs
  // -----------------------------

  // Person config: ignores address & children fields
  var personMetawidgetConfig = {
    layout: new metawidget.layout.TableLayout({ columnCount: 1 }),
    inspectionResultProcessors: [
      function(result) {
        if (result.properties) {
          // Remove nested objects from automatic rendering
          delete result.properties.address;
          delete result.properties.children;

          // Mark first name & surname as required
          if (result.properties.firstname) {
            result.properties.firstname.required = true;
          }
          if (result.properties.surname) {
            result.properties.surname.required = true;
          }

          // Age field should accept numbers only
          if (result.properties.age) result.properties.age.type = 'number';
        }
        return result;
      }
    ]
  };

  // Address config: nested object rendering
  var addressMetawidgetConfig = {
    layout: new metawidget.layout.TableLayout({ columnCount: 1 }),
    inspectionResultProcessors: [
      function(result) {
        if (result.properties) {
          if (result.properties.city) {
            result.properties.city.required = true;
          }
          if (result.properties.postcode) {
            result.properties.postcode.required = true;
            result.properties.postcode.type = 'number';
          }
        }
        return result;
      }
    ]
  };

  // Children config: supports dynamic one-to-many relationship
  var childrenMetawidgetConfig = {
    layout: new metawidget.layout.TableLayout({ columnCount: 1 }),
    inspectionResultProcessors: [
      function(result) {
        if (result.properties && result.properties.name) {
          result.properties.name.required = true;
        }
        return result;
      }
    ]
  };

  return {
    getPerson: function() { return person; },
    getPersonConfig: function() { return personMetawidgetConfig; },
    getAddressConfig: function() { return addressMetawidgetConfig; },
    getChildrenConfig: function() { return childrenMetawidgetConfig; }
  };

}]);
