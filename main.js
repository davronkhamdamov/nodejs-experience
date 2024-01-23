const rotateRight = function (head, k) {
    for (let i = 0; i < k; i++) {
        head.unshift(head.pop());
    }
    return head;
};
console.log(rotateRight([1, 2, 3, 4, 5], 2));
