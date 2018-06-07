//滿版
document.querySelector('.wrapbig').style.height = window.innerHeight+"px";
window.onresize = function(){
    document.querySelector('.wrapbig').style.height = window.innerHeight+"px";
}

//指定DOM
var data = JSON.parse(localStorage.getItem('listData')) || [];

//加入列表，並同步更新網頁與 localstorage
var btn = document.querySelector('.btn');
function addbtn(e){
    var txt = document.querySelector('.textclass').value;
    var todo = {content:txt};
    data.push(todo);
    updateList(data);
    localStorage.setItem('listData',JSON.stringify(data));
}
btn.addEventListener('click',addbtn);

//更新網頁內容
var list = document.querySelector('.list');
function updateList(items){
    var str = '';
    var len = items.length;
    for(var i=0;i<len;i++){
        str += '<li><a href="#" data-num="'+i+'">刪除</a><span>'+items[i].content+'</span></li>';
    }
    list.innerHTML = str;
}
updateList(data);

//刪除代辦事項
function toggleDone(e){
    e.preventDefault();
    if(e.target.nodeName !== "A"){return};
    var num = e.target.dataset.num;
    data.splice(num,1);
    localStorage.setItem('listData',JSON.stringify(data));
    updateList(data);
}
list.addEventListener('click',toggleDone);