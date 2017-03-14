'use strict'

module.exports = {

  words: function(the_string) {
    var myJSON = {};
    var parts = the_string.split(/[\s,]+/);
    for (var i = 0; i < parts.length; i++) {
      if(!isNaN(myJSON[parts[i]])){
      	myJSON[parts[i]] = myJSON[parts[i]]+1;
      }else{
      	myJSON[parts[i]] = 1;
      }
    }

   return myJSON;
  }

}
