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
      },
      'click .mainMenu': function(){
          Router.go('main');
      }
    });

  Template.separate.events({
      "click .borrarEventos ": function(){
          Providers.remove(this._id);
      },
      'click .mainMenu': function(){
          Router.go('main');
      },

      'click .edit': function(){
            Calendar.update({"_id": this._id},{
                _id : this._id,
              	title :  this.title,
              	start :  this.start,
              	allDay :  this.allDay,
              	description : this.description,
                client: clientName  || this.client,
                provider: this.provider
            });
            alert("Cambios guardados");
      },
    });

  work = function(value){
      clientName = value;
  };

  Template.client.events({
      "click .delete": function(){
          Clients.remove(this._id);
      },
      'click .mainMenu': function(){
          Router.go('main');
      }
    });

  Template.calendary.events({
      'click .left': function(){
          Router.go('main');
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
      },
      'click .providers': function(){
          Router.go('providers');
      },
      'click .separate': function(){
          Router.go('separate');
      },
      'click .client': function(){
          Router.go('client');
      },
      'click .salir': function(){
          Router.go('home');
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
      },
      clientName: function(){
          return Clients.find({});
      },
      providersName: function(){
          return Providers.find({});
      }
    });

  Template.client.helpers({
      clients: function(){
          return Clients.find({});
      }
    });

  // Template.separate.checkClient({
  //
  // });

  // Global helper
  Template.registerHelper('formatDate', function(date){
      return moment(date).format('DD-MM-YYYY HH:mm');
  });

  Meteor.subscribe('calendar', function () {
      Session.set('superCalendarReady', true);
  });

  Meteor.subscribe('theProviders');
  Meteor.subscribe('theClients');

}
