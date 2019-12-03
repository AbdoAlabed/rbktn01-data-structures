class Queue {

  constructor() {
  	this.storage = {};
    this.start = 0;
    this.end = 0;
  }
  enqueue(value) {
    this.storage[this.end] = value;
    this.end++;
};

   dequeue() {   
       var result = this.storage[this.start];
         if(this.size()){
         delete this.storage[this.start];
         this.start++;
         }
         return result;
    
}

   size() {
		return this.end - this.start;
	};

}
