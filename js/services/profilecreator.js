'use strict';

angular.module('nmblisApp.services.profileCreator', [])
  .factory('profileCreator', ['Firebase', 'FBURL', '$rootScope', function(Firebase, FBURL, $rootScope) {
    return function(id, email, callback) {
      new Firebase(FBURL).child('users/'+id).set({email: email, created: {"-JGWQ3juxR3xcpiDMJfG": {
  "flipside" : {
    "text" : {
      "fontSize" : 19,
      "fontColor" : "#ffffff",
      "y" : 278,
      "value" : "",
      "font" : "CODE Light",
      "x" : 142
    },
    "activated" : "yes",
    "side" : "a",
    "logo" : {
      "url" : "tumblr_inline_mtaevaRe0C1s8cg79.gif",
      "y" : 1,
      "value" : "Logo",
      "x" : -20
    },
    "background" : {
      "color" : "#000000",
      "url" : "",
      "value" : "Background"
    }
  },
  "extra" : [ {
    "fontSize" : 18,
    "fontColor" : "#ffffff",
    "y" : 230,
    "value" : "me@mywebsite.com",
    "font" : "Ubuntu",
    "deleteable" : "yes",
    "x" : 28
  }, {
    "fontSize" : 18,
    "fontColor" : "#ffffff",
    "y" : 250,
    "value" : "http://mywebsite.com",
    "font" : "Ubuntu",
    "deleteable" : "yes",
    "x" : 28
  }, {
    "fontSize" : 16,
    "fontColor" : "#ffffff",
    "y" : 272,
    "value" : "(415)555-1983",
    "font" : "Ubuntu",
    "deleteable" : "yes",
    "x" : 28
  } ],
  "_meta" : {
    "linkedin" : {
      "value" : ""
    },
    "flickr" : {
      "value" : ""
    },
    "published" : {
      "value" : "no"
    },
    "url" : {
      "value" : ""
    },
    "twitter" : {
      "value" : ""
    },
    "instagram" : {
      "value" : ""
    },
    "shareable" : {
      "value" : "yes"
    },
    "archive" : {
      "value" : "no"
    },
    "googleplus" : {
      "value" : ""
    },
    "pinterest" : {
      "value" : ""
    },
    "facebook" : {
      "value" : ""
    },
    "tumblr" : {
      "value" : ""
    },
    "clonable" : {
      "value" : "yes"
    }
  },
  "_basics" : {
    "company" : {
      "textAlign" : "left",
      "fontSize" : 19,
      "fontColor" : "#ffffff",
      "y" : 209,
      "value" : "Me, Myself, & I, LLC.",
      "font" : "Ubuntu",
      "x" : 29
    },
    "name" : {
      "last" : "Great",
      "fontSize" : 59,
      "fontColor" : "#ffffff",
      "y" : 6,
      "font" : "CODE Bold",
      "x" : 34,
      "archived" : "no",
      "first" : "You The"
    },
    "logo" : {
      "url" : "anchor2.png",
      "y" : 193,
      "value" : "Logo",
      "x" : 343
    },
    "title" : {
      "fontSize" : 18,
      "fontColor" : "#ffffff",
      "y" : 68,
      "value" : "CEO",
      "font" : "Ubuntu",
      "x" : 403
    },
    "background" : {
      "color" : "#000000",
      "url" : "",
      "value" : "Background"
    }
  },
  "Created" : 1392334285239
}}, acquired:{"-JGVbPaW4NWL9ri8U28v": {
  "flipside" : {
    "text" : {
      "fontSize" : 29,
      "fontColor" : "#ffffff",
      "y" : 245,
      "value" : "judd@nmblis.com",
      "font" : "Droid Sans",
      "x" : 32
    },
    "activated" : "yes",
    "side" : "b",
    "logo" : {
      "url" : "hippo.gif",
      "y" : 15,
      "value" : "Logo",
      "x" : -2
    },
    "background" : {
      "color" : "#000000",
      "url" : "",
      "value" : "Background"
    }
  },
  "extra" : [ {
    "fontSize" : 286,
    "fontColor" : "#ffffff",
    "y" : -66,
    "value" : "jh",
    "font" : "Playfair Display",
    "deleteable" : "yes",
    "x" : 15
  }, {
    "fontSize" : 15,
    "fontColor" : "#ffffff",
    "y" : 142,
    "value" : "judd@nmblis.com",
    "font" : "Lato",
    "deleteable" : "yes",
    "x" : 280
  }, {
    "fontSize" : 14,
    "fontColor" : "#ffffff",
    "y" : 162,
    "value" : "(415)937-0590",
    "font" : "Lato",
    "deleteable" : "yes",
    "x" : 279
  } ],
  "_meta" : {
    "Creator" : "3",
    "Location" : {
      "lat":"37.7786N",
      "lng":"122.3892W"
    },
    "Date" : "3/09/2014, 5:25:00 AM",
    "linkedin" : {
      "value" : ""
    },
    "flickr" : {
      "value" : ""
    },
    "published" : {
      "value" : "no"
    },
    "url" : {
      "value" : "judd.png",
      "valuee" : "judd.png"
    },
    "twitter" : {
      "value" : "http://twitter.com/nmblis"
    },
    "instagram" : {
      "value" : "http://instagram.com/nmblis"
    },
    "shareable" : {
      "value" : "yes"
    },
    "archive" : {
      "value" : "no"
    },
    "googleplus" : {
      "value" : "https://www.facebook.com/pages/Nmblis/601154903309860"
    },
    "pinterest" : {
      "value" : ""
    },
    "facebook" : {
      "value" : "http://www.facebook.com/pages/Nmblis/601154903309860"
    },
    "tumblr" : {
      "value" : ""
    },
    "clonable" : {
      "value" : "yes"
    }
  },
  "_basics" : {
    "company" : {
      "textAlign" : "left",
      "fontSize" : 15,
      "fontColor" : "#ffffff",
      "y" : 123,
      "value" : "Nmblis",
      "font" : "Lato",
      "x" : 349
    },
    "name" : {
      "last" : "Hendrix",
      "fontSize" : 15,
      "fontColor" : "#000000",
      "y" : 104,
      "font" : "Lato",
      "x" : 279,
      "archived" : "no",
      "first" : "Judd"
    },
    "logo" : {
      "url" : "",
      "y" : 170,
      "value" : "Logo",
      "x" : 132
    },
    "title" : {
      "fontSize" : 15,
      "fontColor" : "#000000",
      "y" : 123,
      "value" : "Ingenieur,",
      "font" : "Lato",
      "x" : 279
    },
    "background" : {
      "color" : "#f93a32",
      "url" : "",
      "value" : "Background"
    }
  },
  "Created" : 1393190349349
}} }, function(err) {
        if( callback ) {
          callback(err);
          $rootScope.$apply();
        }
      });
    }
  }]);