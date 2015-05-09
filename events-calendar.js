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

});

if (Meteor.isClient) {

  Template.home.events({
    'click .login': function(event){
      Router.go('test');
    }
  });

  // Meteor.startup(function () {
  //   if (Rooms.find().count() === 0) {
  //     Rooms.insert({name: "Initial room"});
  //   }
  // });
}
