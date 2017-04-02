function send(){
  document.getElementById('sentText').innerHTML = "判定中...";
  document.getElementById('resultChara').innerHTML = "";
  document.getElementById('result').innerHTML = "";
  text = document.getElementById("text").value;
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://script.google.com/macros/s/AKfycbwcOWC-mc22d_d2NgK-v28zboIXe-UKoAclZNeGq8GB8H99n6k/exec?text="+text+"&callback=_callback";
  function callBack(json){
    console.log(json.response);
    document.getElementById('sentText').innerHTML = "テキスト:"+text;
    if(json.response.result_S==json.response.result_K){
      document.getElementById('resultChara').innerHTML = "判定: わかんないよ！";
      document.getElementById('result').innerHTML = "サーバルちゃん:"+json.response.result_S+"<br>かばんちゃん　:"+json.response.result_K;
    }else if(json.response.result_S>json.response.result_K){
      document.getElementById('resultChara').innerHTML = "判定: サーバルちゃん";
      document.getElementById('result').innerHTML = "サーバルちゃん:"+json.response.result_S+"<br>かばんちゃん　:"+json.response.result_K;
    }else{
      document.getElementById('resultChara').innerHTML = "判定: かばんちゃん";
      document.getElementById('result').innerHTML = "かばんちゃん　:"+json.response.result_K+"<br>サーバルちゃん:"+json.response.result_S;
    }
  }
  window._callback = callBack;
  document.body.appendChild(script);
}
