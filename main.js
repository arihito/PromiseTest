// promiseオブジェクトを生成
var promise = new Promise(

  // 非同期処理が終わったら成功時にresolve失敗時にrejectを呼ぶ
  function(resolve, reject){

    // 非同期の処理
    setTimeout(function(){
      resolve("Hello ");
    },2000)

  }
);

// 成功/失敗の処理を登録
promise.then(

  // onFulfilled resolveが呼び出された成功時
  function(result){
    document.write(result + "World");
  },

  // onRejected rejectが呼び出された失敗時
  function(result){
    console.log(result);
  }
);

// 失敗だけの処理を登録
// promise.catch(onRejected);


// グローバルオブジェクトの静的な補助メソッド
// promise.all();
// promise.resolve();
