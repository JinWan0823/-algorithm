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
    let node = new Node(value);
    let current = this.head;
    let index = 0;
    let prev;

    if(position < 0 || position >this.length) return false;
    
    if(position === 0){
        this.head = node;
        node.next = current;
    }else{
        while(index++ < position){
            prev = current;
            current = current.next;
        }
        prev.next = node;
        node.next =current;
    }

    this.length++;

    return true;


}


let ll = new LinkedList();

ll.insert(1);
ll.insert(10);
ll.insert(100);

ll.insert(2,1)
ll.insert(3,3)

ll.printNode();