 angular.module('noteApp')

 .controller('viewController',viewController);

 viewController.$inject = ['$scope','noteService','$state'];

 function viewController($scope,noteService,$state) {
 	var viewControllerScope = this; 
viewControllerScope.getData = getData; 
viewControllerScope.deleteView = deleteView;
viewControllerScope.move = move;
viewControllerScope.shuffle = shuffle;
viewControllerScope.reordering = false;

getData();
 	function getData() {  
 		console.log(noteService)
    viewControllerScope.notes =  noteService.list();
    console.log(" viewControllerScope.notes", viewControllerScope.notes)
 }


 function deleteView(data){ 
 	noteService.deleteNote(data);
 	getData();
 }

function shuffle() { 
	viewControllerScope.reordering = !viewControllerScope.reordering;
}
 function move(move,fromIndex,toIndex) {
 console.log(move,fromIndex,toIndex)
 noteService.move(move,fromIndex,toIndex)
 }
}
