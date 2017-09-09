(function(){

  var app = angular.module('notesApp',['angular-markdown-editable']);
  
  app.controller('notesController', function($scope){
    
    // Initial Data
  	$scope.notes = [{
      createdOn:1499347500771,
      edit:false,
      text:"#Prvni poznamka!\n\nlorem ibsum \n\n"
    }];
    
    // Add New Note
    $scope.addNote = function(){
      $scope.newNote = {};
      $scope.newNote.createdOn = Date.now();
      $scope.newNote.text = ' ';
      $scope.newNote.edit = true;
      $scope.notes.push($scope.newNote);
      $scope.newNote = {};
    };
    
    // Delete Note
    $scope.delete = function (i) {
      var r = confirm("Are you sure you want to delete this note?");
      if (r == true) 
        $scope.notes.splice(i, 1);
		};
    
    // Update Note
    $scope.update = function(i, note) {
      $scope.notes[i].text = note;
      $scope.notes[i].edit = false;
    };
  
  // End Controller
  });
  
// End Function  
})();