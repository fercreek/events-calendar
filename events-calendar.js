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
  // console.log(Calendar.find().collection);

  var dynamicId = "";
  Template.calendary.name = "";
  // console.log(calendar);

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


  var dynamicId = "";

  SuperCalendar.events.onEventClick = function (event, template, data) {
    console.log(data.date);
    // console.log(Meteor.Collection("calendar")):
    var eventDay = data.date;
    var name = document.getElementById('name').value;
    $('#name').val(eventDay.title);

    Template.calendary.name = function(){
      return dynamicId;
    };

  };
}



// Server
if (Meteor.isServer) {
  Meteor.publish('calendar', function () {
    return Calendar.find();
  });

}
