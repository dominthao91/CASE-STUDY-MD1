
let modal = document.getElementById("myModal");

let btn = document.getElementById("myBtn");

let span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function order(){
   let a= confirm('bạn có muốn đặt chỗ trước không');
   if (a == true){
       alert('bạn đã đặt chỗ thành công');
   }else {}
   alert('cảm ơn bạn đã quan tâm tới chúng tôi');
}