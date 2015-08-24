(function(){
  angular
    .module('exampleApp', ['MultiSelect'])
    .controller('MainCtrl', MainCtrl);
    
    MainCtrl.$injector = ['$scope'];
    function MainCtrl($scope){
      var vm = this;
      vm.selected = [];
      vm.data = [{
        id: 1,
        option: 'option 1'
      }, {
        id: 2,
        option: 'option 2'
      }, {
        id: 3,
        option: 'option 3'
      }, {
        id: 4,
        option: 'option 4'
      }, {
        id: 5,
        option: 'option 5'
      }, {
        id: 6,
        option: 'option 6'
      }, {
        id: 7,
        option: 'option 7'
      }, {
        id: 8,
        option: 'option 8'
      }, {
        id: 9,
        option: 'option 9'
      }];      
    }
})();