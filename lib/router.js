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

    this.route('providers', {
      path: '/providers',
    });

    this.route('separate', {
      path: '/separate',
    });

    this.route('client', {
      path: '/client',
    });
});
