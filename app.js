function getbackground() {

   const randomNumber = Math.floor(Math.random() * 16777215);
   const randomcode = randomNumber.toString(16).padStart(6, "0");
   //    document.main.style.backgroundColor("#"+randomcode);

   if (randomcode) {
      bckgrd.style.backgroundColor = `#${randomcode}`;
      console.log("Working");



      //to change the h1 

      text.innerText = `#${randomcode}`;

      navigator.clipboard.writeText(randomcode);

      if(randomcode==="#ffffff")
      {
         box.style.backgroundColor=`black`;
         box.style.color='white';
      }
      else{
         box.style.backgroundColor='';
         box.style.color='';
      }

   }

}

const btn = document.querySelector('.btn');
const bckgrd = document.querySelector('.main');
const text = document.querySelector('.color-value');
const box=document.querySelector(".container");

btn.addEventListener("click", () => {

   getbackground();
   
})

