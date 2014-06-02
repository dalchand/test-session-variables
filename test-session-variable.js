if (Meteor.isClient) {

  var Items = new Meteor.Collection(null);
  
  Template.hello.created = function() {
    
    Session.set("zoomLevel", 1);

    this.deps = Deps.autorun(function() {
      var ids = Session.get("ids");
      var i = 0;
      if(ids && ids.length > 0) {
        for(i = 0; i < ids.length; i++) {
          Items.insert({_id: ids[i]});
        }
        Session.set("ids", []);
      }
    });
  }

  Template.hello.destroyed = function() {
    if(this.deps) {
      this.deps.stop();
    }
  }
  
  Template.hello.helpers({
    zoomLevel: function () {
      return Session.get("zoomLevel");
    },
    items: function() {
      return Items.find();
    } 
  });
  
  setZoomLevel = function(zoom) {
    Session.set("zoomLevel", zoom);
  }

  setData = function(array) {
    Session.set("ids", array);
  }

  test = function() {
    setData(["errfdt54"]);
    setZoomLevel(0.2); /* this is not working */
  }

}

