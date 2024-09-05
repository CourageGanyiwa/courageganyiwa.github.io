  
    const images = [
      {
        img: "images/bcaa.jpg",
        text:`Recovery`
      },
      {
        img: "images/serious siz banner.jpg",
        text:`Mass`
      },
      {
        img: "images/lean-girl-squat.jpg",
        text:`Tone`
      },
      {
        img: "images/115797339_3091013824325519_7487768016168430546_n.jpg",
        text:`Strength`
      }
    ];

    const featureImages = document.querySelectorAll(".ad-pic");
    const container = document.querySelector(".ad-container");
    const date = new Date();
    const fullYear = date.getFullYear();
    

    document.querySelector('.fullYear').innerHTML = fullYear;

    let display = images.map((image) => {
      return ` 
      <div class="ad">
          <div class="feat-img1">
            <img src="${image.img}" alt="" class="ad-pic" />
              <h2 class='mt-2'>
              ${image.text}
              </h2>
            <button class="read-more-btn read">Read More</button>
          </div>
        </div>`;
    });

    display = display.join(" ");
    container.innerHTML = display;

    function displayMenuItems(menuItems) {
      let displayMenu = menuItems.map((item) => {
        return ` 
     <div class="feat-img2">
            <img src="{images.}" alt="" class="ad-pic" />
          </div>
          <p>
          </p>
         
       `;
      });
      displayMenu = displayMenu.join("");
      sectionCenter.innerHTML = displayMenu;
    }

    const readMoreBtn = document.querySelector('.read');

    readMoreBtn.addEventListener('click', (e)=> {
      console.log(e.target);
      
    })
    


  
    






    

    