var xhr=XMLHttpRequest();
xhr.onreadystatechange=function() {
    if(xhr.readyState===4 && xhr.status===200){
        obj=JSON.parse(xhr.responseText);
        for(){

        }
    }
    url='https://img.alicdn.com/bao/uploaded/'+'i4/TB1ejGcdgsSMeJjSspeXXa77VXa_.jpg';
    xhr.open('get','url');
    xhr.send();
};
