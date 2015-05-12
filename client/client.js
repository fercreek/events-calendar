// Client
if (Meteor.isClient) {
  Meteor.startup(function() {

    Meteor.subscribe('providers');
    Meteor.subscribe('tasks');

  });

  // Myvars = new Mongo.Collection("myvars");


  var dynamicId = "";
  Template.calendary.name = "";
//
  // Providers = new Mongo.Collection("providers");
  // console.log(Providers.find({}));
  // console.log(Providers2.find({}));

  Template.home.helpers({

    home: function () {
      return "hola";

      // return Tasks.find({});
    }
  });

  // Template.providers.helpers({
  //   providers: function(){
  //     return Providers.find();
  //   }
  // });


  Template.home.events({
    'click .login': function(event){
      Router.go('main');
    }
  });

  Template.main.events({
      'click .calendar': function(event){
          Router.go('calendary');
      }
    }
  );

  Template.main.events({
      'click .providers': function(event){
          Router.go('providers');
      }
    }
  );

  Meteor.subscribe('calendar', function () {
    Session.set('superCalendarReady', true);
  });

  Meteor.subscribe('theProviders');
  Meteor.subscribe('theTasks');



  // var dynamicId = "";

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
