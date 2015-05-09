Router.map(function(){
    this.route('test', {
      path: '/test',
      data: {
          someValue: "Hello, I'm a value.",
          anotherValue: "Hello, I'm another value."
      }
    });

    this.route('home', {
      path: '/home',
      data: {
          homes: "This is my home"
      }
    });
});
