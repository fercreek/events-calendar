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

    this.route('main', {
      path: '/main',
    });
});

// Client
if (Meteor.isClient) {

  Template.home.events({
    'click .login': function(event){
      Router.go('main');
    }
  });

  Template.main.events({
    'click .calendar': function(event){
      Router.go('calendary');
    }
  });

  Meteor.subscribe('calendar', function () {
    Session.set('superCalendarReady', true);
  });

  // SuperCalendar.events.onDayClick = function (event, template, data) {
    // Calendar = new Meteor.Collection('calendar');
  // };
  SuperCalendar.events.onEventClick = function (event, template, data) {
    // Calendar = new Meteor.Collection('calendar');
    console.log(12);
  };
}

// Server
if (Meteor.isServer) {
  Meteor.publish('calendar', function () {
    return Calendar.find();
  });

}
