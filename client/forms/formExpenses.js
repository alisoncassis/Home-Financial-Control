Template.formExpenses.events({

	"submit form": (e, template) => {
		e.preventDefault();

		let inputName = $("#name");
		let inputValue = $("#value");
		let inputObservation = $("#observation");

		let name = inputName.val();
		let value = inputValue.maskMoney('unmasked')[0];
		let observation = inputObservation.val();

		let expense = {
			name: name,
			value: value,
			observation: observation
		};

		//Tarefas.insert({nome: nome, data: new Date()});
		Meteor.call("adiciona", {expense});
		inputName.val("");
		inputValue.val("");
		inputObservation.val("");

		$('.new-expense').fadeIn();
		$('.form-area').fadeOut();
	},

	"click .new-expense": (e) => {
		e.preventDefault();
		$('.new-expense').fadeOut();
		$('.form-area').fadeIn();
	}
});

Template.formExpenses.onRendered( () => {

	$('#expenses_form').validate({
		rules: {
			name: {
				required: true
			},
			value: {
				required: true,
			},
			observation: {
				maxlength: 100
			}
		},
		messages: {
			name: {
				required: 'Qual o nome da despesa?'
			},
			value: {
				required: 'Qual o valor da despesa?',
			},
			observation: {
				required: 'No máximo 100 caracteres'
			}
		}
	});

	$('#value').maskMoney();

});
