var Queue = function() {
 this.storage =  {};
 this.end = 0;
 this.start = 0;

};
 Queue.prototype.enqueue  = function(value) {
    this.storage[this.end] = value;
    this.end++;
};

Queue.prototype.dequeue = function() { 
      var result = this.storage[this.start];
        if(this.size()){
         delete this.storage[this.start];
         this.start++;
         }
         return result;
    
}

Queue.prototype.size = function() {
   return this.end - this.start;
}



