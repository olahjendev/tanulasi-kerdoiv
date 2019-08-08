function ajaxPost(url, dataString, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        callback(JSON.parse(this.response));
      }
    }
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'x-www-form-urlencoded');
    xhr.send(dataString);
}

function ajaxGet(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        callback(JSON.parse(this.response));
      }
    }
    xhr.open('GET', url, true);
    xhr.send();
}

/*

ajaxGet(firebaseDatabseUrl + table, function(response) {
    console.log(response)
});



  ajaxPost(firebaseDatabseUrl + table, dataString, function (response) {
      console.log('success');
      console.log('res', response);
  })

*/