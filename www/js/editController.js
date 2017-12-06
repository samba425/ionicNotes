angular.module('noteApp')

  .controller('editController', editController);

editController.$inject = ['$state', 'noteService'];

function editController($state, noteService) {
  var editControllerScope = this;
  editControllerScope.findEditId = findEditId;
  editControllerScope.update = update;
  editControllerScope.addNote = addNote;
  editControllerScope.getViewId = $state.params.id;
  editControllerScope.editview = [];
  editControllerScope.notes = noteService.list();
  findEditId();

  function findEditId() {
    editControllerScope.notes.forEach(res => {
      console.log("find res", typeof(res.id), Number($state.params.id))
      if (res.id == $state.params.id) {
        editControllerScope.editview = res;
        return editControllerScope.editview;
      }
    })

  }

function addNote(data) {
	var data = {
		id: new Date().getTime().toString(),
		name:data.name,
		details: data.details
	} 
	noteService.addNote(data);
    $state.go('view');

}
  function update(data) {
  	console.log("edit form data",data)
    noteService.update(data); 
  editControllerScope.notes = noteService.list();
    $state.go('view');
  }
}
