function arraysSort(arr) {
  arr.sort(function(){
    for(i=0;i<arr.length;i++){
      
      for(j=0;j<arr[i].length;j++){
        let num = arr[i][j] 

        }
      }
  })
}
// for(i=0;i<arr.length;i++){
//   arr[i].sort((function (a, b) {
//     return a - b;
// }))
  // arr.map(function(arr2){
  //   for(let i = 0;i<arr2.length;i++){
  //   arr2[i].sort(function(a,b){return a-b})
  //   }
  // })

window.arraysSort = arraysSort;

export default arraysSort;
