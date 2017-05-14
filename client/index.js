Meteor.startup(function(){
  Meteor.subscribe('despesas');
  Meteor.subscribe('usuarios');
});
