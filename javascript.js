// Setup
let boxs = document.querySelectorAll(".boxes");
let img_2 = document.querySelectorAll(".img-2");
let p_points = document.querySelector("#p-points");
let claim = document.querySelector("#claim");
let connect_wallet = document.querySelector("#connect-wallet");
let wallet_address = document.querySelector("#wallet-address")
let li1 = document.querySelector("#li1")

let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");

let keys = 3;
let sp16 = document.querySelector("#sp16");
let sp17 = document.querySelector("#sp17");

// Determines treasure numbers 
let moneyed_box1 = Math.floor(Math.random() * 10);
let moneyed_box3 = Math.floor(Math.random() * 10);
let moneyed_box2 = Math.floor(Math.random() * 10);
let finish_window = document.querySelector("#x");

// If the numbers are the same, to change
window.onload = function () {

    while (moneyed_box1 == moneyed_box2 || moneyed_box1 == moneyed_box3 || moneyed_box2 == moneyed_box3) {
        // Treasure 1
        moneyed_box1 = Math.floor(Math.random() * 10);

        // Treasure 2
        moneyed_box2 = Math.floor(Math.random() * 10);
        
        // Treasure 3
        moneyed_box3 = Math.floor(Math.random() * 10);
    }
    
}
       // When the connect_wallet button is clicked
       connect_wallet.addEventListener("click", function () {
        // Is there a wallet plugin?
        if (window.ethereum) {
        // if yes

        // Connect Wallet
        let account;
        ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
            account = accounts[0];
            // Do Style
            connect_wallet.innerHTML="Connected";
            connect_wallet.style.background="white"
            connect_wallet.style.color="#3b3b3b"
            connect_wallet.style.border="4px solid lightgray"
            wallet_address.innerHTML=account;
        });
        
        // Clicked Box
        for (let i = 0; i < boxs.length; i++) {
            boxs[i].addEventListener("click", function () {
                if (i == moneyed_box1 && keys > 0) {
                       // 1. When you know the box correctly

                       // Change the text of the box
                       boxs[i].innerHTML="Its True, You Won 10 Dollars";

                       // Make untouchable
                       boxs[i].setAttribute("disabled","")

                       // Change mouse cursor
                       boxs[i].style.cursor="defult";

                       // Remove Chest Image
                       img_2[i].setAttribute("src","")

                       // Reduce Number of Keys
                       keys--;
                    } else if (i == moneyed_box2 && keys > 0) {
                       // 2. When you know the box correctly

                       // Change the text of the box
                       boxs[i].innerHTML="Its True, You Won NFT";

                       // Make untouchable
                       boxs[i].setAttribute("disabled","")

                       // Change mouse cursor
                       boxs[i].style.cursor="defult";

                       // Remove Chest Image
                       img_2[i].setAttribute("src","")

                        // Reduce Number of Keys
                        keys--;
                    } else if (i == moneyed_box3 && keys > 0) {
                        // 3. When you know the box correctly

                        // Change the text of the box
                        boxs[i].innerHTML="Its True, You Won 1.000 Coins";

                        // Make untouchable
                        boxs[i].setAttribute("disabled","")

                        // Change mouse cursor
                        boxs[i].style.cursor="defult";

                        // Remove Chest Image
                        img_2[i].setAttribute("src","")

                        // Reduce Number of Keys
                        keys--;
                    } else if(keys > 0){
                    //  When we pick the wrong box

                        // Change the text of the box
                        boxs[i].innerHTML="Empty";

                        // Remove Chest Image
                        img_2[i].setAttribute("src","")

                        // Make untouchable
                        boxs[i].setAttribute("disabled","")

                        // Change mouse cursor
                        boxs[i].style.cursor="defult";

                        // Reduce Number of Keys
                        keys--;
                    }
        
                    // Result screen when the keys are finished
                    if (keys == 0) {
                            // Adding the glass class
                            finish_window.setAttribute("class","glass");

                            // Make text visible
                            sp16.style.display="block"

                            // If the correct box is selected
                            if (boxs[moneyed_box1].hasAttribute("disabled")) {
                                // 1. If the treasure is correct, to the 1st li on the result screen.
                                li1.innerHTML="You Won 10 Dollars";  
                            } else {
                                // 1. If the treasure is correct, to the 1st li on the result screen.
                                li1.innerHTML="Nothing Won"; 
                            }
        
                            // If the correct box is selected
                            if (boxs[moneyed_box2].hasAttribute("disabled")) {
                                // 2. If the treasure is correct, to the 2st li on the result screen.
                                li2.innerHTML="You Won NFT";  
                            } else {
                                // 2. If the treasure is wrong, to the 2st li on the result screen.
                                li2.innerHTML="Nothing Won"; 
                            }
        
                            // If the correct box is selected
                            if (boxs[moneyed_box3].hasAttribute("disabled")) {
                                // 3. If the treasure is correct, to the 3st li on the result screen.
                                li3.innerHTML="You Won 1.000 Coins"; 
                            } else {
                                // 3. If the treasure is correct, to the 3st li on the result screen.
                                li3.innerHTML="Nothing Won"; 
                            }
                            
                            if (boxs[moneyed_box1].hasAttribute("disabled") || boxs[moneyed_box2].hasAttribute("disabled") || boxs[moneyed_box3].hasAttribute("disabled")) {
                                // If one of the 3 treasures is correct

                                // Changes the span on the results screen
                                sp17.innerHTML="Won";

                                // Change the content of the claim button
                                claim.innerHTML="Claim Reward";
                            } else {
                                // If all 3 are wrong

                                // Changes the span on the results screen
                                sp17.innerHTML="Lost";

                                // Change the content of the claim button
                                claim.innerHTML="Ok";
                            }
                        } 
                    
                    if (keys == 2) {
                        // Change key image when clicking on treasure
                        img3.setAttribute("src","./Images/unkey.jpg")
                    } 
                    if (keys == 1) {
                        // Change key image when clicking on treasure
                        img2.setAttribute("src","./Images/unkey.jpg")
                    } 
                    if (keys == 0) {
                        // Change key image when clicking on treasure
                        img1.setAttribute("src","./Images/unkey.jpg")
                    }
                })
            }
        } else {
            // if not
            alert("Please Download Metamask Extension")
        }
    })
