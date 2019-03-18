function LinkList () {
  let Node = function (element) {
    this.element = element;
    this.next = null;
  }

  let length = 0;
  let head = null;

  this.append = function (element) {
    let node = new Node(element);
    let current = node;

    if (head === null) {
      head = node;
    }else {
      current = head;
      
      // 循环列表，直至找到最后一项
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    length++;// 更新列表长度
  };
  this.insert = function (position, element) {
    if (position > -1 && position <= length) {
      let node = new Node(element),
        current = head,
        previous,
        index = 0;

        if (position === 0) {
          node.next = current;
          head = node;
        } else {
          while (index++ < position) {
            previous = current;
            current = current.next;
          }
          node.next = current;
          previous.next = node;
        }
        length++;
        return true;
    }
    return false;
  };
  this.removeAt = function (position) {
    // 检查是否越界
    if (position > -1 && position < length) {
      let current = head;
      let previous;
      let index = 0;

      // 移除第一项
      if (position === 0) {
        head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        // 将previous与current的下一项链接起来，跳过current,从而移除它
        previous.next = current.next;
        // current.next = previous.next;
      }
      
      length--;
      return current.element
    }
    return null;
  };
  this.remove = function (element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  };
  this.indexOf = function (element) {
    let current = head;
    let index = 0;
    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  };
  this.isEmpty = function () {
    return length === 0;
  };
  this.size = function () {
    return length;
  };
  this.getHead = function () {
    return head;
  };
  this.toString = function () {
    let current = head;
    let string = '';

    while (current) {
      string += current.element + (current.next ? '-' : '');
      current = current.next;
    }
    return string;
  };
  this.print = function () {};
}

let list = new LinkList();
list.append(10);
list.append(13);
list.append(15)
list.removeAt(1)
console.log(list.isEmpty())
console.log(list.toString())