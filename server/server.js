// Server
if (Meteor.isServer) {
  Meteor.publish('calendar', function () {
    return Calendar.find();
  });

  Meteor.publish('theProviders', function () {
    return Providers.find();
  });

}
