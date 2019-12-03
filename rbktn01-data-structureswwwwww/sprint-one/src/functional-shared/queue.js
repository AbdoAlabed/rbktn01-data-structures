var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};



var Queue = function() {
	var someInstance = {};
	someInstance.storage = {};
	someInstance.start = 0;
  someInstance.end = 0;
	extend(someInstance, queueMethods);
	return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
    this.storage[this.end++] = value;
};

queueMethods.dequeue = function() {
        var result = this.storage[this.start];
        if(this.size()){
         delete this.storage[this.start];
         this.start++;
         }
         return result;
    }

queueMethods.size = function() {
return this.end - this.start;
};



