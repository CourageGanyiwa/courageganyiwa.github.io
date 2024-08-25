  
    const images = [
      {
        img: "images/Tesepo.jpg",
        text:`Lorem ipsum dolor, sit amet jlhf lljgghgf hkjgrfgyul lhuhdydb blbnkjbgcu
        ftydufhvhbljb!`
      },
      {
        img: "images/body5.webp",
        text:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel hic id
            possimus magnam sequi iste nobis est alias molestias nihil!`
      },
      {
        img: "images/body5.webp",
        text:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel hic id
            possimus magnam sequi iste nobis est alias molestias nihil!`
      }
    ];

    const featureImages = document.querySelectorAll(".ad-pic");
    const container = document.querySelector(".ad-container");

    let display = images.map((image) => {
      return ` 
      <div class="ad">
          <div class="feat-img1">
            <img src="${image.img}" alt="" class="ad-pic" />
          </div>
          <p>
          ${image.text}
          </p>
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