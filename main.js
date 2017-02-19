// Promiseオブジェクトを返す関数
function asyncPromise() {

  // promiseオブジェクトを生成
  return new Promise(

    // 非同期処理が終わったら成功時にresolve失敗時にrejectを呼ぶ
    function(resolve, reject){

      // 非同期の処理
      setTimeout(function(){
        resolve("Hello ");
      },2000)

    }
  );
}

// 成功/失敗の処理を登録
asyncPromise.then(

  // onFulfilled resolveが呼び出された成功時
  function(result){
    document.write(result + "World");
  },
).catch(error){

  // 失敗だけの処理を登録
  function(error){
    console.log(error);
  }
}
