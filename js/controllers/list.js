(function() {

  angular
    .module("quizlet")
    .controller("listCtrl", ListController);

    ListController.$inject = ['quizMetrics','DataService'];
    function ListController(quizMetrics, DataService) {
      var vm = this;
      vm.quizMetrics = quizMetrics;
      //instead of scope , this costrutor has been used.
      //So in view, variable can be accessed with alias name of controller.
      vm.data = DataService.turtlesData;
      vm.activeTurtle = {};
      vm.changeActiveTurtle = changeActiveTurtle;
      vm.activateQuiz = activateQuiz;
      vm.search = '';

      function changeActiveTurtle(index) {
        vm.activeTurtle = index;
      }
      function activateQuiz() {
        quizMetrics.changeState(true);
      }
    }
})();
