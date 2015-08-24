(function() {
  angular
    .module('MultiSelect', [])
    .directive('multiSelect', multiSelect);

  function multiSelect($timeout) {

    var directive = {
      link: linkFunc,
      templateUrl: 'multiSelect.view.html',
      restrict: 'EA',
      scope: {
        data: '=inputData',
        selectedList: '=outputData'
      },
      controller: MultiSelectCtrl,
      controllerAs: 'multi'
    };
    return directive;

    function linkFunc(scope, element, attrs) {
      var dropDownHover;
      scope.showDropdown = false;

      scope.select = function(selected) {
        if (scope.selectedList.indexOf(selected) === -1) {
          scope.selectedList.push(selected);
        } else {
          scope.selectedList.splice(scope.selectedList.indexOf(selected), 1);
        }
      };

      scope.dropDownMouseLeave = function() {
        dropDownHover = $timeout(function() {
          scope.showDropdown = false;
        }, 1000);
      };

      scope.dropDownMouseEnter = function() {
        $timeout.cancel(dropDownHover);
      };
    }

    function MultiSelectCtrl() {}
  }
})();