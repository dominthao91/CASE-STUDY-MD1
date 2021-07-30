
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
   let name = document.getElementById("nameCustomer").value;
   let email = document.getElementById("emailCustomer").value;
   let phone = document.getElementById("phoneCustomer").value;
   let person = document.getElementById("personCustomer").value;
   let date = document.getElementById("timeCustomer").value;
   let arrayCustomer = [3,name,email,phone,person,date];
   let a = confirm('bạn có chắc muốn đặt trước không');
   if (a == true){
       alert('Bạn đã đặt chỗ thành công');

       localStorage.setItem('arrayCustomer', arrayCustomer);
   }else {
       alert('Cảm ơn bạn đã quan tâm');
   }
}
