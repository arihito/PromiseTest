// Promiseオブジェクトを返す関数
function getURL(URL){

  // promiseオブジェクトを生成
  return new Promise(

    // 非同期処理が終わったら成功時にresolve失敗時にrejectを呼ぶ
    function(resolve, reject){

      // 非同期でHTTPのステータスコードを取得
      var req = new XMLHttpRequest();
        req.open('GET', URL, true);
        // もしステータスコードが200であれば
        req.onload = function () {
            if (req.status === 200) {
              // resolve関数に指定した引数を次のthen関数へ移動
              resolve(req.responseText);
            } else {
              // エラーオブジェクトを改めて生成
              reject(new Error(req.statusText));
            }
        };
        req.onerror = function () {
            reject(new Error(req.statusText));
        };
        req.send();

    }
  );
}

// 成功/失敗の処理を登録
var URL = "http://httpbin.org/get";
getURL(URL).then(

  // onFulfilled resolveが呼び出された成功時
  function(result){
    document.write(result);
  }
).catch(

  // 失敗だけの処理を登録
  function(error){
    console.error(error);
  }
);
