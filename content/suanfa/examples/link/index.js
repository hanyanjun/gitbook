// const a = {val : 'a'};
// const b = {val : 'b'};
// const c = {val : 'c'};
// const d = {val : 'd'};
// a.next = b;
// b.next = c;
// c.next = d;


// // 遍历列表
// let head = a;
// while(head){
//     console.log(head.val)
//     head = head.next;
// }

// // 插入 
// const e = {val : 'e'}
// c.next = e;
// e.next = d;

// // 删除  e
// c.next = d




var twoSum = function(nums, target) {
    const map = new Map();
    for(let i =0 ; i < nums.length ; i++){
        const n = nums[i];
        const n1 = target - n;
        if(map.has(n1)){
            console.log([map.get(n1) , i])
            return [map.get(n1) , i];
        }else{
            map.set(n , i);
        }
    }
    console.log(map)
  };

  twoSum([2,7,11,5],9)