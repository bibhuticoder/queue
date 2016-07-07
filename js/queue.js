function Queue(m) {
    this.rear = -1;
    this.front = 0;
    this.MAX = m;
    this.data = [];

    for (var i = 0; i < this.MAX; i++) {
        this.data[i] = 'null';
    }

}

Queue.prototype.enqueue = function (val) {

    if (!this.isFull()) {
        this.rear++;
        this.data[this.rear] = val;
    } else {
        alert("Error : Queue is full");
    }

}

Queue.prototype.dequeue = function () {

    if (!this.isEmpty()) {
        var toReturn = this.data[this.front];
        this.data[this.front++] = 'done';
        console.log(toReturn + ' dequeued');
        return (toReturn);
    } else {
        alert("Error : Queue is empty");
        return null;
    }

}

Queue.prototype.isEmpty = function () {
    return (this.rear < this.front);
}

Queue.prototype.isFull = function () {
    return (this.rear + 1 === this.MAX);
}

Queue.prototype.inFront = function () {
    return (this.data[this.front]);
}

Queue.prototype.refresh = function () {
    this.rear = -1;
    this.front = 0;
}

Queue.prototype.traverse = function () {
    var toDisplay = '';
    for (var i = this.front; i <= this.rear; i++) {
        if (this.data[i] != 'null') {
            toDisplay += " " + this.data[i];
        }
    }
    console.log(toDisplay);
    return toDisplay;

}