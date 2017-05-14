import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  Meteor.publish('despesas', function(){
    return Despesas.find({});
  });
  Meteor.publish('usuarios', function(){
    return Meteor.users.find({});
  });
});
