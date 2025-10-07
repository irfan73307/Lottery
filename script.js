const pick=document.getElementById('pick');
const lotterycontainer=document.getElementById('lottery-container');
const tick=new Audio('clickSound.wav');
const win=new Audio('WinningSound.wav');
const reset=document.getElementById('reset');



const gifts = [
  "₹100 Cash",
  "Toy Car",
  "Chocolate Box",
  "₹500 Cash",
  "Smartphone Cover",
  "Book",
  "Headphones",
  "₹50 Cash",
  "Gift Voucher",
  "Watch",
  "Teddy Bear",
  "Bluetooth Speaker",
  "Movie Ticket",
  "₹200 Cash",
  "Puzzle Game",
  "Perfume",
  "Sunglasses",
  "₹1000 Cash",
  "Board Game",
  "Fitness Band",
  "Digital Clock",
  "Lamp",
  "Shopping Voucher",
  "Laptop Bag",
  "Wireless Mouse",
  "Travel Mug",
  "Notebook Set",
  "Gaming Mousepad",
  "₹250 Cash",
  "Keychain",
  "Water Bottle",
  "Portable Charger",
  "Desk Organizer",
  "Cooking Set",
  "Action Figure",
  "₹300 Cash",
  "Travel Pillow",
  "Mini Backpack",
  "Personalized Mug",
  "Gaming Controller",
  "Camera Strap",
  "Toy Robot",
  "₹750 Cash",
  "Sports Equipment",
  "Pen Set",
  "Bluetooth Earbuds",
  "Digital Photo Frame",
  "Wallet",
  "Backpack",
  "Gift Hamper"
];



pick.addEventListener('click', () => {
const v = Math.floor(Math.random() * 50) + 1;

    for (let i = 1; i <= 50; i++) {
    const box = document.getElementById(i);
    box.classList.remove('highlight', 'winning');
  }
  pick.disabled = true;

  document.getElementById('result').textContent ="Waiting for the result...";
    let count = 0;

    const intervalId = setInterval(() => {

        const randombox=Math.floor(Math.random()*50)+1;
        count++;
            tick.pause();
            tick.currentTime=0;
            tick.play();


        // Highlight animation using forEach
        for(let i=1;i<=50;i++){
            if(i===randombox){
                document.getElementById(i).classList.add('highlight');
            }
            else{
                document.getElementById(i).classList.remove('highlight');   
            }
        }
 

        if (count === 5) {
            clearInterval(intervalId);

            setTimeout(() => {
                pick.disabled=false;
                win.play();

                let result = document.getElementById('result').textContent;
                result= ` 🎉 You Won the Lottery Number: ${v}, Item: ${gifts[v - 1]} 🎁`;
                document.getElementById('result').textContent=result;
                const btn = document.getElementById(v);
                document.getElementById(randombox).classList.remove('highlight');
                btn.classList.add('winning');
                
 

            }, 500); // slight delay for better effect
        }

      

    }, 800);

        reset.addEventListener('click',()=>{
            document.getElementById(v).classList.remove('winning');
            document.getElementById('result').textContent="Spin...";
        });     
 
});

gifts.forEach(function (value,i){
    const box=`<div class="box" id="${i+1}">${i+1}: ${value} </div>`;
    lotterycontainer.insertAdjacentHTML("beforeend",box);
})




