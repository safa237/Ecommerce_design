const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
if(bar) {
    bar.addEventListener('click' , () => {
        nav.classList.add('active');
    })
}

const close = document.getElementById('btnclose');
if(close) {
    close.addEventListener('click' , () => {
        nav.classList.remove('active');
    })
}

var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");


for (let i = 0; i < smallimg.length; i++) {
    smallimg[i].onclick = function() {
      MainImg.src = smallimg[i].src;
    };
  }

const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product1");
    const product = document.querySelectorAll(".pro");
    const pname = document.getElementsByTagName("h5");

    for(var i=0; i < pname.length; i++){
        let match = product[i].getElementsByTagName('h5')[0];
        if(match) {
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
    }
}
