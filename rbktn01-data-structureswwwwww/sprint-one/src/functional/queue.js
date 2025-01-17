var Queue = function() {
  var someInstance = {};
  //var counter = 0;
  var start = 0;
  var end = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    /*if(value === undefined){
      return;
    }
    storage[counter] = value;
    counter++;*/
    storage[end++] = value;
  };

  someInstance.dequeue = function() {
    /*if (counter === 0){
      return;
    } 
    var dequeued = storage[0];
    var newStorage = {};
    for(var key in storage){
      if(key > 0){
        newStorage[key - 1] = storage[key];
      }
    }
    --counter;
    storage = newStorage;
    return dequeued;*/
    var result = storage[start];
    if(someInstance.size()){
      delete storage[start];
      start ++;
    }
    return result;
  };

  someInstance.size = function() {
    //return counter;
    return end - start;
  };

  return someInstance;
}; 