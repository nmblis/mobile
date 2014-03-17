'use strict';
 
angular.module('nmblisApp.services.fonts', [])
  .factory('Fonts', [ 
    function(angularFire, angularFireCollection, FirebaseService) {
      return { 
        list: function() {
          var fonts = [
              {"name": "Arvo", "value": "Arvo", "type": "Serif"}
            , {"name": "Average", "value": "Average", "type": "Serif"}  
            , {"name": "Bitter", "value": "Bitter", "type": "Serif"}
            , {"name": "Droid Serif", "value": "Droid Serif", "type": "Serif"}
            , {"name": "EB Garamond", "value": "EB Garamond", "type": "Serif"}
            , {"name": "Gabriela", "value": "Gabriela", "type": "Serif"}
            , {"name": "Libre Baskerville", "value": "Libre Baskerville", "type": "Serif"}
            , {"name": "Lora", "value": "Lora", "type": "Serif"}
            , {"name": "Merriweather", "value": "Merriweather", "type": "Serif"}
            , {"name": "Playfair Display", "value": "Playfair Display", "type": "Serif"}
            , {"name": "PT Serif", "value": "PT Serif", "type": "Serif"}
            , {"name": "Roboto Slab", "value": "Roboto Slab", "type": "Serif"}
            , {"name": "Rokkitt", "value": "Rokkitt", "type": "Serif"}
            , {"name": "Rufina", "value": "Rufina", "type": "Serif"}

            , {"name": "Alegreya Sans SC", "value": "Alegreya Sans SC", "type": "Sans-Serif"}
            , {"name": "CODE Light", "value": "CODE Light", "type": "Sans-Serif"}           
            , {"name": "CODE Bold", "value": "CODE Bold", "type": "Sans-Serif"}             
            , {"name": "Droid Sans", "value": "Droid Sans", "type": "Sans-Serif"}
            , {"name": "Fjalla One", "value": "Fjalla One", "type": "Sans-Serif"}
            , {"name": "Lato", "value": "Lato", "type": "Sans-Serif"}
            , {"name": "Open Sans", "value": "Open Sans", "type": "Sans-Serif"}      
            , {"name": "Open Sans Condensed", "value": "Open Sans Condensed", "type": "Sans-Serif"}            
            , {"name": "Oswald", "value": "Oswald", "type": "Sans-Serif"}         
            , {"name": "Oxygen", "value": "Oxygen", "type": "Sans-Serif"}                 
            , {"name": "PT Sans", "value": "PT Sans", "type": "Sans-Serif"}
            , {"name": "PT Sans Narrow", "value": "PT Sans Narrow", "type": "Sans-Serif"} 
            , {"name": "Raleway", "value": "Raleway", "type": "Sans-Serif"}
            , {"name": "Roboto", "value": "Roboto", "type": "Sans-Serif"}                     
            , {"name": "Roboto Condensed", "value": "Roboto Condensed", "type": "Sans-Serif"}           
            , {"name": "Sintony", "value": "Sintony", "type": "Sans-Serif"}
            , {"name": "Source Sans Pro", "value": "Source Sans Pro", "type": "Sans-Serif"}
            , {"name": "Ubuntu", "value": "Ubuntu", "type": "Sans-Serif"}
 
            , {"name": "Aguafina Script", "value": "Aguafina Script", "type": "Cursive"}
            , {"name": "Allura", "value": "Allura", "type": "Cursive"}
            , {"name": "Architects Daughter", "value": "Architects Daughter", "type": "Cursive"} 
            , {"name": "Berkshire Swash", "value": "Berkshire Swash", "type": "Cursive"}            
            , {"name": "Bonbon", "value": "Bonbon", "type": "Cursive"}
            , {"name": "Clicker Script", "value": "Clicker Script", "type": "Cursive"}
            , {"name": "Dr Sugiyama", "value": "Dr Sugiyama", "type": "Cursive"}                       
            , {"name": "Engagement", "value": "Engagement", "type": "Cursive"}           
            , {"name": "Gochi Hand", "value": "Gochi Hand", "type": "Cursive"}      
            , {"name": "Meie Script", "value": "Meie Script", "type": "Cursive"}                   
            , {"name": "Niconne", "value": "Niconne", "type": "Cursive"}
            , {"name": "Over the Rainbow", "value": "Over the Rainbow", "type": "Cursive"}            
            , {"name": "Romanesco", "value": "Romanesco", "type": "Cursive"}          
            , {"name": "Shadows Into Light Two", "value": "Shadows Into Light Two", "type": "Cursive"}             
            , {"name": "Stalemate", "value": "Stalemate", "type": "Cursive"} 

          ]   
          return fonts;
        }  
    }
  }])