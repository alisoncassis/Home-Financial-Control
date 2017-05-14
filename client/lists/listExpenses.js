Template.listExpenses.helpers({
	despesas: function() {
		return Despesas.find({});
	},

	formataData: function() {
		return moment(this.date).format('l');
	},

	remove: function(){
		const button = `
			<div>
				<button class="btn btn-danger btn-remove">
					<span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>
				</button>
			</div>
		`;
		return this.username === Meteor.user().username ? button : '';
	}
});

Template.listExpenses.events({
	// "click .btn-edit" : function(e, template) {
	// 	e.preventDefault();
	// 	var usuario = this;
	//
	// 	//Meteor.call("remove", usuario._id);
	// },
	"click .btn-remove" : function(e, template) {
		e.preventDefault();
		console.log('removing' + this);
		var expense = this;

		Meteor.call("remove", expense._id);
	}
});
