 // Node() : data와 point를 가지고 있는 객체
 function Node(data){
    this.data = data;
    this.next = null;
};

//LinkedList() : head와 length를 가지고 있는 객체
function LinkedList(){
    this.head = null;
    this.length = 0;
};

//isEmpty()
LinkedList.prototype.isEmpty = function(){
    return this.length === null;
}

//size ()
LinkedList.prototype.size = function(){
    return this.length;
};

//printNode()
LinkedList.prototype.printNode = function(){
    for(let node =this.head;node != null; node = node.next){
        process.stdout.write(`${node.data} ->`)
    }
    console.log('null')

}

//append()
LinkedList.prototype.append = function(value){
    let node = new Node(value);
    let current = this.head;

    if(current === null){
        this.head = node;
    }else{
        while(current.next != null){
            current = current.next;
        }
        current.next = node;
    }
    this.length++;
}

//insert() : position 위치에 노드 추가
LinkedList.prototype.insert = function(value,position = 0){
    if(position < 0 || position > this.length){
        return false;
    }

    let node = new Node(value);
    let current = this.head,
    index = 0,
    prev;

    if(position === 0 ){
        node.next = current;
        this.head = node;
    } else {
        while(index++ < position){
            prev = current;
            current = current.next;
        }
        node.next = current;
        prev.next = node;
    }

    this.length++;


    return true;
};

//remove() : value 데이터를 찾아 노드 삭제
// LinkedList.prototype.remove = function(value){
//     let current = this.head;
//     prev = current;

//     while(current.data != value && current.next != null){
//         prev = current;
//         current = current.next;
//     }

//     if(current.data != value){
//         return null;
//     }

//     if(current === this.head){
//         this.head = current.next;
//     }else{
//         prev.next = current.next;
//     }

//     this.length--;
//     return current.data;
// };
LinkedList.prototype.remove = function(value){
    let current = this.head;
    let prev = current;

    while(current.data !=value && current.next !=null){
        prev = current;
        current = current.next;
    }

    if(current.data != value){
        return null;
    }

    if(current === this.head){
        this.head = current.next;
    }else{
        prev.next = current.next;
    }

    this.length--;

    return current.data

}


let ll = new LinkedList();

ll.insert(1);
ll.insert(10);
ll.insert(100);
ll.remove(10);
ll.printNode();