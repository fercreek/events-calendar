// Client
if (Meteor.isClient) {
  Meteor.startup(function() {

    Meteor.subscribe('providers');
    Meteor.subscribe('tasks');

  });


  var dynamicId = "";
  Template.calendary.name = "";

  Template.providers.events({
    "click .submit": function () {
      var fullNameId = document.getElementById('fullNameId').value;
      var workId = document.getElementById('workId').value;
      var giroId = document.getElementById('giroId').value;

      Providers.insert({
        name: fullNameId,
        work: workId,
        giro: giroId,
        createdAt: new Date() // current time
      });
      //
      // // Clear form
      // event.target.text.value = "";
      //
      // // Prevent default form submit
      // return false;
    }
  });

  Template.providers.events({
    "click .delete": function(){
      Providers.remove(this._id);
    }
  });

  Template.providers.helpers({
    providers: function(){
      return Providers.find({});
    }
  });

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
