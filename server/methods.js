Meteor.methods({
  adiciona : function(obj){
     Despesas.insert(
      {
        name: obj.expense.name,
        date: new Date(),
        value: obj.expense.value,
        observation: obj.expense.observation,
        username: Meteor.user().username,
        userId: this.userId
      }
    )
  },
  remove : function(id) {
		Despesas.remove({_id : id, username: Meteor.user().username});
	}

});
