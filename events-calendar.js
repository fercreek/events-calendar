//Collections
if(Meteor.isClient) {
  Meteor.startup(function() {
    // Providers = new Mongo.Collection("providers");
    Tasks = new Mongo.Collection('tasks');
    // Meteor.subscribe('providers');
  });
}
