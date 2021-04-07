// Your code goes here

//1. `mouseover`
const funBus = document.querySelector("h1.logo-heading");
//console.log(funBus);
funBus.addEventListener("mouseover", function (event) {
    funBus.style.fontSize = "5rem";
    funBus.style.color = "red";

  });

  //2. `keydown`
document.addEventListener("keydown", function (event) {
//    alert("Keydown is Pressed!");
});

//3. `dblclick`

    const busImg = document.querySelector('.intro img');
    document.addEventListener("dblclick",function (event) {
    busImg.style.borderRadius = "200px";
 });

//4. 'mouseleave
funBus.addEventListener("mouseleave", function (event) {
    funBus.style.fontSize = "5rem";
    funBus.style.color = "blue";

  });

  //5. 'select`

//  const head1 = document.querySelector(".text-content p");
//  console.log(head1);
//  head1.addEventListener("select", function (event) { 
//         debugger 
//         head1.textContent.style.fontSize = "6rem";
//         head1.textContent.style.color = "blue";
//      });

//   * `focus`
//     const navLinks = document.querySelector("nav a");

//     navLinks.addEventListener("focus", function (event) {  
//     navLinks.style.fontSize = "6rem";
//     navLinks.style.color = "blue";
//      });
// const btnFocus = document.querySelector(".destination .btn");
// console.log(btnFocus);

// btnFocus.addEventListener("focus", function (event) {   
//     btnFocus.textContent.style.fontSize = "4rem";
//     btnFocus.textContent.style.color = "blue";

//      });

     // 5.  `resize`
window.addEventListener("resize", function (event) {   
    funBus.style.fontSize = "2rem";
    funBus.style.color = "orange";
     });
  
      //   * `copy`

// 6. `scroll`
const adventures = document.querySelector(".text-content:nth-of-type(2) h2");
console.log(adventures);
document.addEventListener("scroll", function (event) {   
    adventures.style.fontSize = "10rem";
    adventures.style.color = "orange";
     });

     //7. wheel
document.addEventListener("wheel", function (event) {   
    busImg.style.borderWidth = "10px";
    busImg.style.borderColor = "green";
     });


