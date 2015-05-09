Router.map(function(){
    this.route('home', {
      path: '/',
    });

    this.route('test', {
      path: '/test',
      data: {
          someValue: "Hello, I'm a value.",
          anotherValue: "Hello, I'm another value."
      }
    });

    this.route('calendary', {
      path: '/calendary',
    });

});

if (Meteor.isClient) {

  Template.home.events({
    'click .login': function(event){
      Router.go('test');
    }
  });

  Meteor.subscribe('calendar', function () {
    Session.set('superCalendarReady', true);
  });

  SuperCalendar.events.onDayClick = function (event, template, data) {
    console.log("meeh");
  };
  // Meteor.startup(function () {
  //   if (Rooms.find().count() === 0) {
  //     Rooms.insert({name: "Initial room"});
  //   }
  // });
}

if (Meteor.isServer) {
  Meteor.publish('calendar', function () {
    return Calendar.find();
  });


}
