let boxs = document.querySelectorAll(".boxes");
let img_2 = document.querySelectorAll(".img-2");
let p_points = document.querySelector("#p-points");
let start = document.querySelector("#start");

let li1 = document.querySelector("#li1")
let keys = 3;
let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");

let sp16 = document.querySelector("#sp16");
let sp17 = document.querySelector("#sp17");

let moneyed_box1 = Math.floor(Math.random() * 10);
let moneyed_box3 = Math.floor(Math.random() * 10);
let moneyed_box2 = Math.floor(Math.random() * 10);
let finish_window = document.querySelector("#x");



window.onload = function () {

    while (moneyed_box1 == moneyed_box2 || moneyed_box1 == moneyed_box3 || moneyed_box2 == moneyed_box3) {
        moneyed_box1 = Math.floor(Math.random() * 10);
        moneyed_box3 = Math.floor(Math.random() * 10);
        moneyed_box2 = Math.floor(Math.random() * 10);
    }
    
}
for (let i = 0; i < boxs.length; i++) {
    boxs[i].addEventListener("click", function () {
            if (i == moneyed_box1 && keys > 0) {
            // console.log("Its True, You Won 10 Dollars");
               boxs[i].innerHTML="Its True, You Won 10 Dollars";
               boxs[i].setAttribute("disabled","")
               boxs[i].style.cursor="defult";
               img_2[i].setAttribute("src","")
               keys--;
            } else if (i == moneyed_box2 && keys > 0) {
            //  console.log("Its True, You Won NFT");
                boxs[i].innerHTML="Its True, You Won NFT";
                boxs[i].setAttribute("disabled","")
                boxs[i].style.cursor="defult";
                img_2[i].setAttribute("src","")
                keys--;
            } else if (i == moneyed_box3 && keys > 0) {
            //  console.log("Its True, You Won 1.000 Coins");
                boxs[i].innerHTML="Its True, You Won 1.000 Coins";
                boxs[i].setAttribute("disabled","")
                boxs[i].style.cursor="defult";
                img_2[i].setAttribute("src","")
                keys--;
            } else if(keys > 0){
            //  console.log("Its False");
                boxs[i].innerHTML="Empty";
                img_2[i].setAttribute("src","")
                boxs[i].setAttribute("disabled","")
                boxs[i].style.cursor="defult";
                img_2[i].setAttribute("src","")
                keys--;
            }

            if (keys == 0) {
                    finish_window.setAttribute("class","glass");
                    sp16.style.display="block"
                    if (boxs[moneyed_box1].hasAttribute("disabled")) {
                        li1.innerHTML="Its True, You Won 10 Dollars";  
                    } else {
                        li1.innerHTML="Nothing Won"; 
                    }

                    if (boxs[moneyed_box2].hasAttribute("disabled")) {
                        li2.innerHTML="Its True, You Won NFT";  
                    } else {
                        li2.innerHTML="Nothing Won"; 
                    }

                    if (boxs[moneyed_box3].hasAttribute("disabled")) {
                        li3.innerHTML="Its True, You Won 1.000 Coins"; 
                    } else {
                        li3.innerHTML="Nothing Won"; 
                    }

                    if (boxs[moneyed_box1].hasAttribute("disabled") || boxs[moneyed_box2].hasAttribute("disabled") || boxs[moneyed_box3].hasAttribute("disabled")) {
                        sp17.innerHTML="Won";
                        start.innerHTML="Claim Reward"
                    } else {
                        sp17.innerHTML="Lost";
                        start.innerHTML="Ok"
                    }
                }
            
            if (keys == 2) {
                img3.setAttribute("src","C:/Users/DMC BİLGİSAYAR/Desktop/Codes/Code F/Images/unkey.jpg")
            } 
            if (keys == 1) {
                img2.setAttribute("src","C:/Users/DMC BİLGİSAYAR/Desktop/Codes/Code F/Images/unkey.jpg")
            } 
            if (keys == 0) {
                img1.setAttribute("src","C:/Users/DMC BİLGİSAYAR/Desktop/Codes/Code F/Images/unkey.jpg")
            }
        })
    }