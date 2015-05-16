// Client
if (Meteor.isClient) {
  Meteor.startup(function() {
    Meteor.subscribe('providers');
    Meteor.subscribe('tasks');
    Meteor.subscribe('clients');
  });

  var dynamicId = "";
  Template.calendary.name = "";

  //Events
  Template.providers.events({
    "click .submit": function () {
      var fullNameId = document.getElementById('fullNameId').value;
      var workId = document.getElementById('workId').value;
      var giroId = document.getElementById('giroId').value;

      Providers.insert({
        name: fullNameId,
        work: workId,
        giro: giroId,
        createdAt: new Date()
      });

    }
  });

  Template.client.events({
    "click .loginbutton": function () {
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var address = document.getElementById('address').value;
      var phone = document.getElementById('phone').value;

      Clients.insert({
        name: name,
        email: email,
        address: address,
        phone: phone
      });

    }
  });

  //Events
  Template.providers.events({
      "click .delete": function(){
          Providers.remove(this._id);
      }
    });

  Template.providers.events({
      'click .mainMenu': function(event){
          Router.go('main');
      }
    });

  Template.separate.events({
      "click .delete": function(){
          Providers.remove(this._id);
      }
    });


  Template.separate.events({
      'click .mainMenu': function(event){
          Router.go('main');
      }
    });

  Template.calendary.events({
      'click .left': function(event){
          Router.go('main');
      }
    });

  Template.home.events({
      'click .loginbutton': function(event){
          Router.go('main');
      }
    });

  Template.main.events({
      'click .calendar': function(event){
          Router.go('calendary');
      }
    });

  Template.main.events({
      'click .providers': function(event){
          Router.go('providers');
      }
    });

  Template.main.events({
        'click .separate': function(event){
            Router.go('separate');
      }
    });

  Template.main.events({
        'click .client': function(event){
            Router.go('client');
      }
    });

  Template.client.events({
        'click .mainMenu': function(event){
            Router.go('main');
      }
    });

  Template.client.events({
        'click .delete': function(event){
            Clients.remove(this._id);
      }
    });


  //Helpers1
  Template.providers.helpers({
      providers: function(){
          return Providers.find({});
      }
    });

  Template.separate.helpers({
      calendar: function(){
          return Calendar.find({});
      }
    });

  Template.client.helpers({
      clients: function(){
          return Clients.find({});
      }
    });

  Meteor.subscribe('calendar', function () {
      Session.set('superCalendarReady', true);
  });

  Meteor.subscribe('theProviders');
  Meteor.subscribe('theTasks');
  Meteor.subscribe('theClients');



  // SuperCalendar.events.onEventClick = function (event, template, data) {
  //   console.log(data.date);
  //   // console.log(Meteor.Collection("calendar")):
  //   var eventDay = data.date;
  //   var name = document.getElementById('name').value;
  //   $('#name').val(eventDay.title);
  //
  //   Template.calendary.name = function(){
  //     return dynamicId;
  //   };
  // };

}
