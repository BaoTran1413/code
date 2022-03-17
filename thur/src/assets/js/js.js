// array luu thong tin object
var data=[];
function select(){
    var list=this.data;
    var table='<table ><thead> <tr> <th> name </th> <th> diem </th> <thead> <tbody>';
    for(var i=0;i<list.length;i++){
        table += '<tr>';
        table += '<td>'+ list[i].name +'</td>';
        table += '<td>'+ list[i].mark +'</td>';
        table += '</tr>'
    }
    table += '</tbody> <table>';

    document.getElementById('ketthuc').innerHTML=table;
}

function insert(){
    var name=document.getElementById('fuser').value;
    var mark=document.getElementById('fmark').value;
    var item={
        name:name,
        mark:mark
    };
    this.data.push(item);
    select();

}








// function sub(){
//     var name=document.getElementById('fuser').value;
//     for(var i=0;i<100;i++)
//     {
//         document.getElementById('ketqua').value = name;
//     } 

// }
// let moives=[];
// const addmovie = (ev)=>{
//     ev.preventDefault();
//     let movie={
//         name:document.getElementById('fuser').value,
//     }
//     movies.push(movie);
//     document.forms[0].reset();
//     // console.log
//     console.warn('added',{movies});
//     let pre=document.querySelector('#ketqua pre');
//     // saving to local
//     pre.textContent='\n'+ JSON.stringify(movies,'\t',2);
//     localStorage.setItem('MymovieList',JSON.stringify(movies));
// }
// document.addEventListener('DOMContentLoaded',()=>{
//     document.getElementById('btn').addEventListener('click',addMovie);
// });