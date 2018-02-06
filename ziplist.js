const testListOne = ['a','b','c'];
const testListTwo = [1,2,3];

function zipList(list1, list2){
  const resultList = [];
  for(let i = 0; i < list1.length; i++) {
    resultList.push(list1[i], list2[i]);
    return resultList;
  }
}
console.log(zipList(testListOne, testListTwo));

function zipListTheSimpleWay(list1, list2){
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(testListOne, testListTwo));