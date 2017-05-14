Template.totalExpenses.helpers({
  usuarios: function(){
    return Meteor.users.find({});
  },

  username: function(){
     return this.username;
   },

  calculaTotal: function(){
    let total = 0;
    Despesas.find()
      .forEach(doc => {
        return doc.username === this.username ? total = total + doc.value : total = total + 0;
      });
    return total.toFixed(2);
  }
});
