function DoubleLinkList() {
  let Node = function (element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
  let length = 0;
  let head = null;
  let tail = null;
  
  this.insert = function (position, element) {
    // 检查越界
    if (position > -1 && position <= length) {
      let node = new Node(element),
        current = head,
        previous,
        index = 0;
      
      if (position === 0) {
        if (!head) {
          head = node;
          tail = node;
        } else {
          node.next = current;
          current.prev = node;
          head = node;
        }
      } else if(position === length) {
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        current.prev = node; // 新增的
        node.prev = previous;// 新增的
      } 
      length++;
      return true;
    } 
    return false
  }

  this.removeAt = function (position) {
    if ( position > -1 && position < length) {
      let current = head,
      previous,
      index = 0;

      if (position === 0) {
        head = current.next;

        if (length === 1) {
          tail = null;
        } else {
          head.prev = null;
        }
      }else if (position === length-1) {
        current = tail;5555
        tail = current.prev;
        tail.next = null;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        // 将previous 与 current 下一项链接起来，跳过current
        previous.next = current.next;
        current.next.prev = previous;
      }
      length--;
      return current.element;
    }
    return null;
  }
}