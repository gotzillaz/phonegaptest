var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    Collapsible: function(){
      var collapsibles = document.querySelectorAll('.collapsible');

      console.log(collapsibles);
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        //app.receivedEvent('deviceready');
        this.Collapsible();
        console.log(this);
    }
};
