// Client
if (Meteor.isClient) {
  Meteor.startup(function() {
    Meteor.subscribe('providers');
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

  Template.separate.events({
      "click .borrarEventos" : function(){
        Calendar.remove(this._id);
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

  Template.separate.events({
      "click .borrarEventos ": function(){
          Providers.remove(this._id);
      }
    });

  Template.client.events({
      "click .delete": function(){
          Clients.remove(this._id);
      }
    });

  Template.providers.events({
      'click .mainMenu': function(){
          Router.go('main');
      }
    });

  Template.separate.events({
      'click .mainMenu': function(){
          Router.go('main');
      }
    });

  Template.calendary.events({
      'click .left': function(){
          Router.go('main');
      }
    });

  Template.main.events({
      'click .salir': function(){
          Router.go('home');
      }
  });

  Template.home.events({
      'click .loginbutton': function(){
          var email = document.getElementById('email').value;
          var password = document.getElementById('password').value;
          if (email == 'admin@admin.com' && password == 'admin'){
            Router.go('main');
          } else {
            alert('Usuario o contraseña incorrecta');
          }
      }
    });

  Template.main.events({
      'click .calendar': function(){
          Router.go('calendary');
      }
    });

  Template.main.events({
      'click .providers': function(){
          Router.go('providers');
      }
    });

  Template.main.events({
        'click .separate': function(){
            Router.go('separate');
        }
      });

  Template.main.events({
        'click .client': function(){
            Router.go('client');
        }
      });

  Template.client.events({
        'click .mainMenu': function(){
            Router.go('main');
        }
      });

  Template.calendary.events({
        'click button': function(){
            // bootbox.alert("Hello world!");
            $( "modal-backdrop" ).removeClass();
            //
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
  Meteor.subscribe('theClients');

}
