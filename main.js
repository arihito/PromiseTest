var p = new Promise(function(fulfill,reject){
  setTimeout(function(){
    document.write(fulfill);
  },3000)
});

p.then(function(result){
  document.write("World");
},function(result){
  console.log(result);
});
