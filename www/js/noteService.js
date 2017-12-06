angular.module('noteApp')

  .factory('noteService', function() {
    var notes =  angular.fromJson(window.localStorage['notes'] || '[]');
function persist() {
	window.localStorage['notes'] = angular.toJson(notes);
}
    return { 
      list: function() {
        return notes;
      },
      addNote: function(data){
        notes.push(data);
        persist();
      },
      update: function(data) {
        notes.forEach(function(res) {
          if (res.id == data.id) {
            res = data;
            console.log("final", res)
          }
        });
        persist();
      },
      deleteNote: function(data) {
      	notes.forEach(function(res){
      		if(res.id == data){
      			notes.splice(res,1);
      			persist();
      		}
      	})
      },
      move: function(move,fromIndex,toIndex) {
      	notes.splice(fromIndex,1);
      	notes.splice(toIndex,0,move);
      	persist();
      }
    }
});
 