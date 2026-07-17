(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=class extends HTMLElement{connectedCallback(){this.innerHTML=`
            <div class="flex justify-between gap-3 max-w-[1600px] items-center flex-1">
                ${arrObj.map(e=>`
                        <div class="flex flex-col items-center justify-center">
                            <img src="${e.img}" alt="" class="" >
                            <p class="font-semibold text-[18px] ">${e.title}</p>
                        </div>
                    `).join(``)}
            </div>
            `}};customElements.define(`card-component`,e);var t=0;n();function n(){let e,r=document.getElementsByClassName(`recent-slide`),i=document.getElementsByClassName(`dot-recent`);for(e=0;e<r.length;e++)r[e].style.display=`none`;t++,t>r.length&&(t=1),r[t-1].style.display=`flex`,i[t-1].className+=` active`,setTimeout(n,3e3)}var r=class extends HTMLElement{connectedCallback(){this.innerHTML=`
        <footer class="bg-[#24292b] h-[870px] md:h-[370px] mt-[200px]">
            <div class="max-w-[1300px] mx-auto px-3">
                <div class="md:justify-between md:items-center md:flex md:h-[50%] md:flex-row flex-col">
                    <div class="flex items-center justify-center">
                        <a href="index.html">
                        <img src="https://www.yonex.com/static/version1712695184/frontend/Yonex/base/en_US/images/Yonex_Logo.svg" alt="" class="items-center flex justify-center size-[130px] Logo">
                        </a>
                    </div>
                    
                    <div
                class="flex justify-between items-center md:gap-6 md:px-0 px-3"
            >
                <img
                src="assets/images/icons/facebook-icon.svg"
                alt="facebook-icon"
                class="size-[40px] "
                />
                <img
                src="assets/images/icons/twitter_icon.svg"
                alt="twittter-icon"
                class="size-[40px]"
                />
                <img
                src="assets/images/icons/youtube_icon.svg"
                alt="youtube-icon"
                class="size-[40px]"
                />
                <img
                src="assets/images/icons/instagram_icon.svg"
                alt="instagram-icon"
                class="size-[40px] "
                />
            </div>
                </div>
                <hr class="my-4 border-gray-500 opacity-30">
                <div class="md:flex md:justify-between md:items-center">
                    <div>
                        <ul class="md:flex md:flex-row gap-4 text-[#f5f5f5] text-[15px] py-2 flex flex-col justify-center items-center font-[Oswald] ">
                            <li class="tracking-[2px]">BADMINTON</li>
                            <li class="tracking-[2px]">GOLF</li>
                            <li class="tracking-[2px]">TENNIS</li>
                            <li class="tracking-[2px]">RUNNING</li>
                            <li class="tracking-[2px]">SNOWBOARDING</li>
                        </ul>
                    </div>
                    <hr class="md:hidden my-4 border-gray-500 opacity-30 ">
                    <div class="flex items-center justify-center">
                        <img src="https://www.yonex.com/static/version1712695184/frontend/Yonex/base/en_US/images/menu-icons/accessibility_icon.svg" alt="" class="size-[50px] cursor-pointer">
                    </div>
                </div>
                <hr class="my-4 border-gray-500 opacity-30">
                <div class="md:flex md:justify-between md:items-center">
                    <div class="md:flex md:flex-row gap-4 text-[#a8a8a8] text-[14px] py-2 flex flex-col justify-center items-center">
                        © 2012-2024 YONEX Co., Ltd.
                    </div>
                    <hr class="md:hidden my-4 border-gray-500 opacity-30">
                    <div class="md:flex md:flex-row gap-4 text-[#a8a8a8] text-[14px] py-2 flex flex-col justify-center items-center">
                        <a href="">Terms & Conditions</a>
                        <a href=""> Accessibility </a>
                        <a href="">Privacy Policy</a>
                        <a href="">Using Yonex Products Safely</a>
                    </div>
                </div>
            </div>
        </footer>
        `}};customElements.define(`my-footer`,r);var i=class extends HTMLElement{connectedCallback(){let e=this.getAttribute(`bg-color`);this.innerHTML=`
        <div class="bg-black opacity-50 w-full hidden h-screen fixed z-[9000] overlay-page " id="overlay-blur" ></div>
        <nav
        class="w-full ${e} absolute md:bg-opacity-40 hover:bg-white hover:text-black bg-white border border-1 top-0 z-[9000] font-Oswald" id="navbar"
      >
        <div
          class="h-[60px] flex justify-between max-w-[1600px] mx-auto items-center md:h-[100px] lg:px-6 px-3"
        >
          <!-- Hamburger Icons -->
          <div class="block cursor-pointer md:hidden ml-3" onclick="openNav()" id="hamburger-logo"> 
            <div class="bg-black w-7 h-1 rounded-md mt-1"></div>
            <div class="bg-black w-7 h-1 rounded-md mt-1"></div>
            <div class="bg-black w-7 h-1 rounded-md mt-1"></div>
          </div>
          <div class="hidden" id="close-sidebar" onclick="closeNav()">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="relative right-0 w-[35px] top-0"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
          </div>
          <!-- Logo -->
          <div>
            <a href="index.html">
              <img
              src="https://www.yonex.com/static/version1712695184/frontend/Yonex/base/en_US/images/Yonex_Logo.svg"
              alt=""
              class="w-[140px] Logo px-[10px] py-3"
            />
          </a>
            <p class="my-0 text-xs text-center hidden md:block">
              far beyond ordinary
            </p>
          </div>
  
          <!-- Center Navigation -->
          <div
            class="hidden font-meduim lg:text-[14px] md:flex items-center justify-between h-[100px] max-lg:text-[12px]"
          >
            <!-- Badminton Hoverdrop -->
            <div  class="group h-full pt-[30px] px-5 max-[940px]:px-2"  id="hoverLink"  onmouseenter="hoverDrop(1)"  onmouseleave="hoverHide(-1)">
              <a href="product-review-badminton.html" class="group-hover:opacity-50 text-[13px] tracking-[1px] font-[500] relative top-[7%]">BADMINTON</a>
              <!-- Badminton section -->
              <section class="w-full bg-white absolute top-[100px] max-h-[0px] overflow-hidden duration-500 ease-in-out z-[10000] left-0" id="badminton" >
                <div id="" class="max-w-[95%] mx-auto p-[40px]">
                  <div class="max-w-[1600px] mx-auto flex mb-4 justify-center">
                    <card-slide data-source="badminton-obj" grid-style="grid-cols-4 gap-4"></card-slide>
                  </div>
                </div>
              </section>
            </div>
        
            <div  class="group h-full pt-[30px] px-5 max-[940px]:px-2"  id="hoverLink"  onmouseenter="hoverDrop(2)"  onmouseleave="hoverHide(-2)">
              <a href="product-review-tennis.html" class="group-hover:opacity-50 text-[13px] tracking-[1px] font-[500] relative top-[7%]">TENNIS</a>
              <!-- Tennis section -->
              <section class="w-full bg-white absolute top-[100px] max-h-[0px] overflow-hidden duration-500 ease-in-out z-[10000] left-0" id="tennis" >
                <div id="" class="max-w-[95%] mx-auto p-[40px]">
                  <div class="max-w-[1600px] mx-auto flex mb-4 justify-center">
                    <card-slide data-source="tennis-obj" grid-style="grid-cols-4 gap-4"></card-slide>
                  </div>
                </div>
              </section>
            </div>
        
            <div  class="group h-full pt-[30px] px-5 max-[940px]:px-2"  id="hoverLink"  onmouseenter="hoverDrop(3)"  onmouseleave="hoverHide(-3)">
              <a href="product-review-golf.html" class="group-hover:opacity-50 text-[13px] tracking-[1px] font-[500] relative top-[7%]">GOLF</a>
              <!-- Golf section -->
              <section class="w-full bg-white absolute top-[100px] max-h-[0px] overflow-hidden duration-500 ease-in-out z-[10000] left-0" id="golf" >
                <div id="" class="max-w-[95%] mx-auto p-[40px]">
                  <div class="max-w-[1600px] mx-auto flex mb-4 justify-center">
                    <card-slide data-source="golf-obj" grid-style="grid-cols-4 gap-4"></card-slide>
                  </div>
                </div>
              </section>
            </div>
            
            <div  class="group h-full pt-[30px] px-5 max-[940px]:px-2"  id="hoverLink"  onmouseenter="hoverDrop(4)"  onmouseleave="hoverHide(-4)">
              <a href="product-review-all-running.html" class="group-hover:opacity-50 text-[13px] tracking-[1px] font-[500] relative top-[7%]">RUNNING</a>
              <!-- Running section -->
              <section class="w-full bg-white absolute top-[100px] max-h-[0px] overflow-hidden duration-500 ease-in-out z-[10000] left-0" id="running" >
                <div id="" class="max-w-[95%] mx-auto p-[40px]">
                  <div class="max-w-[1600px] mx-auto flex mb-4 justify-center">
                    <card-slide data-source="running-obj" grid-style="grid-cols-3 pl-5 gap-4"></card-slide>
                  </div>
                </div>
              </section>
            </div>
        
            <div  class="group h-full pt-[30px] px-5 max-[940px]:px-2"  id="hoverLink"  onmouseenter="hoverDrop(5)"  onmouseleave="hoverHide(-5)">
              <a href="product-review-snowboarding.html" class="group-hover:opacity-50 text-[13px] tracking-[1px] font-[500] relative top-[7%]">SNOWBOARDING</a>
              <!-- Snowboarding section -->
              <section class="w-full bg-white absolute top-[100px] max-h-[0px] overflow-hidden duration-500 ease-in-out z-[10000] left-0" id="snowboard" >
                <div id="" class="max-w-[95%] mx-auto p-[40px] pb-[20px]">
                  <div class="max-w-[900px] mx-auto flex mb-4 justify-center flex-col gap-3">
                    <card-slide data-source="snowboarding-obj" grid-style="grid-cols-4 gap-4"></card-slide>
                    <div class="flex max-w-[1200px] mx-auto">
                        <div class="flex flex-col items-center justify-center w-[213px]">
                            <a id="hoverLink" href="athletes-snowboarding.html" class="bg-[#F7F8FA]"><img src="assets/images/snowboard-images/skate-athlete.webp" alt=""></a>
                            <p class="text-[16px] text-black tracking-[1.5px] pt-2">TEAM</p>
                        </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
        
            <div class="cursor-pointer hover:opacity-80 h-full pt-[30px] px-5 max-[940px]:px-2">
              <a href="news.html" class="relative top-[7%] pb-4 text-[13px] tracking-[1px] font-[500]">NEWS</a>
            </div>
        
            <div  class="group h-full pt-[30px] px-5 max-[940px]:px-2"  id="hoverLink"  onmouseenter="hoverDrop(6)"  onmouseleave="hoverHide(-6)">
              <a href="#" class="group-hover:opacity-50 text-[13px] tracking-[1px] font-[500] relative top-[7%]">ABOUT</a>
              <!-- About section -->
              <section class="w-full bg-white absolute top-[100px] max-h-[0px] overflow-hidden duration-300 ease-in-out z-[10000] left-0" id="about" >
                <div id="" class="max-w-[95%] mx-auto p-[40px]">
                  <div class="max-w-[1600px] mx-auto flex mb-4 justify-center">
                    <card-slide data-source="about-obj" grid-style="grid-cols-6 gap-6"></card-slide>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <button onclick="opensearchresponse()" class="inline-block cursor-pointer md:hidden mr-3">
            <img src="assets/images/icons/search-interface-symbol (1).png" alt="" class="size-4"/>
          </button>
          <div class="bg-white items-center gap-2 justify-between shadow-md absolute top-0 -left-[2px] w-full py-[15px] hidden" id="search-bar2">
            <input type="text" placeholder="Search" class="w-full pl-3 h-full">
            <button onclick="closesearchresponse()" class="size-[30px]">
              <img src="assets/images/icons/close.svg" alt="" class="bg-[#6E7677] rounded-[50%] size-[16px]"/>
            </button>
          </div>
          <div class="w-[120px] fill-slate-100 items-center gap-3 md:flex hidden relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mb-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
            </svg>          
            <div class="mt-1">
              <button onclick="opensearch()" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mb-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>       
              </button>
              <div class="bg-white items-center gap-2 justify-between shadow-md absolute md:right-16 top-0 md:w-[300px] max-md:px-3 py-4 hidden" id="search-bar">
                <button class="md:block hidden size-[30px] ml-3 mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mb-2 flex-none">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>  
                </button>
                <input type="text" placeholder="Search" class="pr-20">
                <button onclick="closesearch()" class="size-[30px]">
                  <img src="assets/images/icons/close.svg" alt="" class="bg-[#6E7677] rounded-[50%] size-[16px]"/>
                </button>
              </div>
            </div>
               
            <img
              src="assets/images/icons/accessibility_icon.svg"
              alt=""
              class="max-w-[50px] cursor-pointer mb-[7.5px] flex-shrink"
            />
          </div>
        </div>
        
      </nav>
        `}};customElements.define(`my-navbar`,i);var a={"badminton-obj":[{img:`assets/images/badminton-images/racquets_240306.png`,title:`RAQUEST`,link:`product-review-badminton.html`},{img:`assets/images/badminton-images/strings_240306.webp`,title:`STRINGS`,link:`#`},{img:`assets/images/badminton-images/shuttlecocks_img.webp`,title:`SHUTTLECOCKS`,link:`#`},{img:`assets/images/badminton-images/10566_011_520x320.webp`,title:`APPAREL`,link:`#`},{img:`assets/images/badminton-images/shoes_240306.webp`,title:`SHOES`,link:`#`},{img:`assets/images/badminton-images/bag.webp`,title:`BAGS`,link:`#`},{img:`assets/images/badminton-images/accessories_img2.webp`,title:`ACCESSORIES`,link:`#`},{img:`assets/images/badminton-images/athletes_240306.webp`,title:`ATHLETES`,link:`athletes-badminton.html`}],"tennis-obj":[{img:`assets/images/tennis-images/raquet-tennis.webp`,title:`RAQUEST`,link:`product-review-tennis.html`},{img:`assets/images/tennis-images/strings-tennis.webp`,title:`SHAFTS`,link:`#`},{img:`assets/images/tennis-images/tennis-ball.webp`,title:`BALLS`,link:`#`},{img:`assets/images/tennis-images/apparel-tennis.webp`,title:`APPAREL`,link:`#`},{img:`assets/images/tennis-images/shoes-tennis.webp`,title:`SHOES`,link:`#`},{img:`assets/images/tennis-images/tennis_Bag_.webp`,title:`BAGS`,link:`#`},{img:`assets/images/tennis-images/accessories-tennis.webp`,title:`ACCESSORIES`,link:`#`},{img:`assets/images/tennis-images/tennis-athlete.webp`,title:`ATHLETES`,link:`athletes-tennis.html`}],"golf-obj":[{img:`assets/images/golf-images/thm_club_ezone.webp`,title:`CLUBS`,link:`product-review-golf.html`},{img:`assets/images/golf-images/Mega-Menu-Golf-Shaft_1.webp`,title:`SHAFTS`,link:`#`},{img:`assets/images/golf-images/Mega-Golf-Bag.webp`,title:`GEAR`,link:`#`},{img:`assets/images/golf-images/golf-athletes.webp`,title:`ATHLETES`,link:`athletes-golf.html`}],"running-obj":[{img:`assets/images/running-images/shoe-orange.webp`,title:`MEN`,link:`product-review-men.html`},{img:`assets/images/running-images/shoe-white.webp`,title:`WOMEN`,link:`product-review-women.html`},{img:`assets/images/running-images/shoe-brown.webp`,title:`UNISEX`,link:`product-review-unisex.html`}],"snowboarding-obj":[{img:`assets/images/snowboard-images/skate.webp`,title:`BOARD`,link:`product-review-snowboarding.html`},{img:`assets/images/snowboard-images/skate-shoe.webp`,title:`BOOT & BINDING`,link:`#`},{img:`assets/images/snowboard-images/skate-coat.webp`,title:`APPAREL`,link:`#`},{img:`assets/images/snowboard-images/skate-glove.webp`,title:`ACCESSORIES`,link:`#`}],"about-obj":[{title:`ABOUT US`,link:`about-us.html`},{title:`YONEX GROUP`,link:`yonex-group.html`},{title:`YONEX DISTRIBUTOR`,link:`yonex-distributors.html`},{title:`INVESTOR RELATION`,link:`#`},{title:`PRODUCT CATALOGS`,link:`#`},{title:`MADE BY YONEX`,link:`#`}]},o=(e,t)=>`
    <div class="grid ${t} max-w-[1600px] items-center flex-1">
        ${e.map(e=>`
            <div class="flex flex-col items-center justify-center max-w-[213px] ">
                <a id="hoverLink" href="${e.link}" class="bg-[#F7F8FA]"><img src="${e.img}" alt=""></a>
                <a href="${e.link}" class="text-[16px] text-black tracking-[1.5px] pt-2">${e.title}</a>
            </div>
            `).join(``)}
     </div>
    `,s=class extends HTMLElement{connectedCallback(){let e=this.getAttribute(`grid-style`),t=a[this.getAttribute(`data-source`)]||[];this.innerHTML=o(t,e)}};customElements.define(`card-slide`,s);var c=[{img:`assets/images/homePage-hero/Lucas.webp`,titleB1:`Watch Video`},{img:`assets/images/homePage-hero/badminton-cover.webp`,titleB1:`Learn More`},{img:`assets/images/homePage-hero/badminton-image.webp`,titleB1:`Read More`},{img:`assets/images/homePage-hero/beyond-i-see.webp`,titleB1:`Watch Video`},{img:`assets/images/homePage-hero/bwis_manifest_1002.webp`,titleB1:`Read More`},{img:`assets/images/homePage-hero/ezong.webp`,titleB1:`Learn More`},{img:`assets/images/homePage-hero/fly-direction.webp`,titleB1:`Read More`},{img:`assets/images/homePage-hero/made-by-yonex-desktop.webp`,titleB1:`Learn More`},{img:`assets/images/homePage-hero/new-dawn.webp`,titleB1:`Learn More`},{img:`assets/images/homePage-hero/shoes.webp`,titleB1:`Read More`}],l=[{imgResponsive:[`assets/images/homePage-hero/responsive/lucas.webp`,`assets/images/homePage-hero/responsive/badminton-1000.webp`,`assets/images/homePage-hero/responsive/beyond-what-i-see.webp`,`assets/images/homePage-hero/responsive/craft.webp`,`assets/images/homePage-hero/responsive/counter-drive.webp`,`assets/images/homePage-hero/responsive/craft.webp`,`assets/images/homePage-hero/responsive/cover.webp`,`assets/images/homePage-hero/responsive/far-beyond.webp`]}],u={"hero-banner":c,"hero-responsive":l[0].imgResponsive,"card-carousel":[{link:`product-review-badminton.html`,img:`assets/images/sport-image/badminton.webp`,title:`BADMINTON`},{link:`product-review-golf.html`,img:`assets/images/sport-image/golf.webp`,title:`GOLF`},{link:`product-review-all-running.html`,img:`assets/images/sport-image/orange-shoes.webp`,title:`RUNNING`},{link:`product-review-tennis.html`,img:`assets/images/sport-image/tennis.webp`,title:`TENNIS`},{link:`product-review-snowboarding.html`,img:`assets/images/sport-image/snowboard.webp`,title:`SNOWBOARD`}],"athlete-carousel":[{link:`athlete-profile-badminton.html`,img:`assets/images/product-review/al1.webp`,title:`VIKTOR AXELSON`},{link:`athlete-profile-golf.html`,img:`https://www.yonex.com/media/athletes/tmp/square/kim_570x570_.jpg`,title:`HYO JOO KIM`},{link:`athlete-profile-tennis.html`,img:`assets/images/product-review/t1.webp`,title:`ELENA RYBAKINA`},{link:`athlete-profile-snowboarding.html`,img:`https://www.yonex.com/media/athletes/tmp/square/Yuto-square.jpg`,title:`YUTO TOTSKA`},{link:`#`,img:`assets/images/product-review/nakashima_570x570.webp`,title:` BRANDOM NAKASHIMA`},{link:`#`,img:`assets/images/product-review/vekic_570x570.webp`,title:`DONNA VEKIC`},{link:`#`,img:`assets/images/product-review/kim_570x570_.webp`,title:`HYOO JOO KIM`}],"new-arrival-carousel":[{link:`detail-golf.html`,img:`assets/images/detail-golf/ezone.png`,title:`EZONE GT DRIVER TYPE S`},{link:`detail-tennis.html`,img:`assets/images/detail-tennis/percept97.png`,title:`PERCEPT 97`},{link:`detail-badminton.html`,img:`assets/images/productPage/Astrox88.png`,title:`ASTROX 88 S GAME`},{link:`detail-snowboard.html`,img:`assets/images/detail-snowboard/regna.png`,title:`REGNA`},{link:`detail-women.html`,img:`https://www.yonex.com/media/catalog/product/s/h/shr100xl_663_1_1.png?quality=80&fit=bounds&height=819&width=600&canvas=600:819`,title:`SAFERUN 100X WOMEN`},{link:`detail-men.html`,img:`assets/images/running-page/shr100xm_440_1.webp`,title:`SAFERUN 100X MEN`},{link:`detail-unisex.html`,img:`https://www.yonex.com/media/catalog/product/s/h/shr900c_bk007_fs_rs_1.png?quality=80&fit=bounds&height=819&width=600&canvas=600:819`,title:`SAFERUN 900C`}]},d=e=>`
        <div class="hidden md:relative md:block">
        ${e.map(e=>`
            <div class="mySlides fade relative">
                <img src="${e.img}" class="w-full h-auto object-cover" alt="Slide Image">
                <div class="absolute top-[50%] left-[44%] flex flex-col gap-4">
                    <button class="bg-black text-white py-3 hover:bg-white hover:text-black lg:px-8 px-9">${e.titleB1}</button>
                </div>
            </div>
        `).join(``)}
        <button class="prev absolute top-1/2 left-1 transform -translate-y-1/2 w-[50px] h-[50px] bg-zinc-700 text-3xl font-light ml-2 text-white pb-1 pr-1">❮</button>
        <button class="next absolute top-1/2 right-1 transform -translate-y-1/2 w-[50px] h-[50px] bg-zinc-700 text-3xl font-light mr-2 text-white pb-1 pl-1">❯</button>
        </div>
    `,f=e=>`
        ${e.map(e=>`
        <div class="mySlides1 fade dot">
            <img src="${e}" class="w-[100%]" alt="heropicture">
        </div>
    `).join(``)}
    `,p=(e,t)=>`
        <section class="mx-auto px-[50px] py-[45px]">
        <ul class="overflow-x-hidden w-[100%] slideShow relative grid grid-cols-[repeat(${e.length},300px)] ssm:grid-cols-[repeat(${e.length},330px)] smd:grid-cols-[repeat(${e.length},450px)] slg:grid-cols-[repeat(${e.length},399px)] sxl:grid-cols-[repeat(${e.length},300px)] max-sm:grid-cols-[repeat(${e.length},280px)] max-md:grid-cols-[repeat(${e.length},340px)] max-lg:grid-cols-[repeat(${e.length},360px)] overflow-auto font-[Oswald]">
            ${e.map(e=>`
                <li class="slide-list slg:px-[20px]">
                    <a href="${e.link}" class"relative">
                        <img class="w-[260px] bg-[#f7f8f9]" src="${e.img}" alt=""/>
                        <h3 class="${t}">
                            ${e.title}
                        </h3>
                    </a>
                </li>
            `).join(``)}
            </ul> 
            <div class="back absolute top-[52%] right-[30px] max-sm:right-0 md:right-[20px]  bg-[#f3f2f2] p-5">
                <img class="w-[1.5rem]" src="assets/images/product-review/right-arrow.svg" alt="" />
            </div>
            <div class="skip absolute top-[52%] left-[30px] max-sm:left-0 max-lg:left-[10px] bg-[#f3f2f2] p-5">
                <img class="w-[1.5rem]" src="assets/images/product-review/left-arrow.svg" alt="" />
            </div>
        </section>
    `,m=class extends HTMLElement{constructor(){super(),this.cards=c[0].imgBanner,this.slideIndex=1}connectedCallback(){let e=u[this.getAttribute(`data-source`)]||[];this.innerHTML=d(e),this.showSlides(this.slideIndex),this.querySelector(`.prev`).addEventListener(`click`,()=>this.plusSlides(-1)),this.querySelector(`.next`).addEventListener(`click`,()=>this.plusSlides(1))}plusSlides(e){this.showSlides(this.slideIndex+=e)}showSlides(e){let t=this.getElementsByClassName(`mySlides`);e>t.length&&(this.slideIndex=1),e<1&&(this.slideIndex=t.length);for(let e=0;e<t.length;e++)t[e].style.display=`none`;t[this.slideIndex-1].style.display=`block`}};customElements.define(`hero-slider`,m);var h=class extends HTMLElement{constructor(){super(),this.items=l[0].imgResponsive,this.slideIndex=1}connectedCallback(){let e=u[this.getAttribute(`card-data-source`)]||[];this.innerHTML=f(e),this.showSlides1()}showSlides1(){let e,t=document.getElementsByClassName(`mySlides1`),n=document.getElementsByClassName(`dot`);for(e=0;e<t.length;e++)t[e].style.display=`none`;this.slideIndex++,this.slideIndex>t.length&&(this.slideIndex=1),t[this.slideIndex-1].style.display=`block`,n[this.slideIndex-1].className+=` active`,setTimeout(this.showSlides1.bind(this),2e3)}};customElements.define(`hero-responsive`,h);var g=class extends HTMLElement{constructor(){super(),this.currentSlide=0}connectedCallback(){let e=u[this.getAttribute(`card-slide`)]||[],t=this.getAttribute(`text-style`);this.innerHTML=p(e,t),this.querySelector(`.back`).addEventListener(`click`,()=>this.plusSlides(1)),this.querySelector(`.skip`).addEventListener(`click`,()=>this.plusSlides(-1))}plusSlides(e){let t=this.querySelector(`.slideShow`),n=t.querySelectorAll(`.slide-list`),r=n[0].clientWidth;this.currentSlide=Math.max(0,Math.min(this.currentSlide+e,n.length-1)),t.scrollTo({left:this.currentSlide*r,behavior:`smooth`})}};customElements.define(`card-carousel`,g);var _=class extends HTMLElement{connectedCallback(){this.innerHTML=`
        <div class="bg-black opacity-50 w-full hidden h-screen top-[62px] fixed z-[9000] overlay-page md:hidden" id="overlay-blur1" onclick="closeNav()"></div>
        <div
        id="mySidenav"
        class="bg-white absolute z-[9000] w-0 h-screen left-0 top-[62px] duration-500 overflow-hidden md:hidden"
      >
        
        <ul class="mt-4 ml-4 flex-col gap-[24px] flex font-[Oswald]">
          <li class="border-b">
            <div class="flex justify-between">
              <a
                href="#"
                class="py-2 px-4 block text-[#1f2427] transition duration-300 tracking-[1px] text-[18px]"
                >BADMINTON</a
              >
              <button
                onclick="showDropdown(1)"
                class=""
              >
                <img
                  src="assets/images/icons/dropdown.png"
                  alt="dropdown"
                  class="size-6 mr-3"
                />
              </button>
            </div>
            <ul
              class="max-h-0 overflow-y-hidden duration-300 pl-10 bg-[#F7F8F9] font-[Oswald] mt-4"
              id="badminton-drop"
            >
              <li class="tracking-[2px] pb-2"><a href="product-review-badminton.html">RAQUEST</a></li>
              <li class="tracking-[2px] pb-2"><a href="">STRINGS</a></li>
              <li class="tracking-[2px] pb-2"><a href="">SHUTTLECOCKS</a></li>
              <li class="tracking-[2px] pb-2"><a href="">APPAREL</a></li>
              <li class="tracking-[2px] pb-2"><a href="">SHOES</a></li>
              <li class="tracking-[2px] pb-2"><a href="">BAGS</a></li>
              <li class="tracking-[2px] pb-2"><a href="">ACCESSORIES</a></li>
              <li class="tracking-[2px] pb-2"><a href="athletes-badminton.html">ATHLETES</a></li>
            </ul>
          </li>
          <li class="border-b">
            <div class="flex justify-between">
              <a
                href="product-review-golf.html"
                class="py-2 px-4 block text-[#1f2427] transition duration-300 tracking-[1px] text-[18px]"
                >GOLF</a
              >
              <button
                onclick="showDropdown(2)"
                class=""
              >
                <img
                  src="assets/images/icons/dropdown.png"
                  alt="dropdown"
                  class="size-6 mr-3"
                />
              </button>
            </div>
            <ul
              class="max-h-0 overflow-y-hidden duration-300 pl-10 bg-[#F7F8F9] font-[Oswald] mt-4"
              id="golf-drop"
            >
              <li class="tracking-[2px] pb-2"><a href="product-review-golf.html">CLUBS</a></li>
              <li class="tracking-[2px] pb-2"><a href="">SHAFTS</a></li>
              <li class="tracking-[2px] pb-2"><a href="">GEAR</a></li>
              <li class="tracking-[2px] pb-2"><a href="athletes-golf.html">ATHLETES</a></li>
            </ul>
          </li>
          <li class="border-b">
            <div class="flex justify-between">
              <a
                href="#"
                class="py-2 px-4 block text-[#1f2427] transition duration-300 tracking-[1px] text-[18px]"
                >TENNIS</a
              >
              <button
                onclick="showDropdown(3)"
                class=""
              >
                <img
                  src="assets/images/icons/dropdown.png"
                  alt="dropdown"
                  class="size-6 mr-3"
                />
              </button>
            </div>
            <ul
              class="max-h-0 overflow-y-hidden duration-300 pl-10 bg-[#F7F8F9] font-[Oswald] mt-4"
              id="tennis-drop"
            >
              <li class="tracking-[2px] pb-2"><a href="product-review-tennis.html">RAQUEST</a></li>
              <li class="tracking-[2px] pb-2"><a href="">STRINGS</a></li>
              <li class="tracking-[2px] pb-2"><a href="">BALLS</a></li>
              <li class="tracking-[2px] pb-2"><a href="">APPAREL</a></li>
              <li class="tracking-[2px] pb-2"><a href="">FOOTWEAR</a></li>
              <li class="tracking-[2px] pb-2"><a href="">BAGS</a></li>
              <li class="tracking-[2px] pb-2"><a href="">ACCESSORIES</a></li>
              <li class="tracking-[2px] pb-2"><a href="athletes-tennis.html">ATHLETES</a></li>
            </ul>
          </li>
          <li class="border-b">
            <div class="flex justify-between">
              <a
                href="#"
                class="py-2 px-4 block text-[#1f2427] transition duration-300 tracking-[1px] text-[18px]"
                >RUNNING</a
              >
              <button
                onclick="showDropdown(4)"
                class=""
              >
                <img
                  src="assets/images/icons/dropdown.png"
                  alt="dropdown"
                  class="size-6 mr-3"
                />
              </button>
            </div>
            <ul
              class="max-h-0 overflow-y-hidden duration-300 pl-10 bg-[#F7F8F9] font-[Oswald] mt-4"
              id="running-drop"
            >
              <li class="tracking-[2px] pb-2"><a href="product-review-men.html">MEN</a></li>
              <li class="tracking-[2px] pb-2"><a href="product-review-women.html">WOMEN</a></li>
              <li class="tracking-[2px] pb-2"><a href="product-review-unisex.html">UNISEX</a></li>
            </ul>
          </li>
          <li class="border-b">
            <div class="flex justify-between">
              <a
                href="#"
                class="py-2 px-4 block text-[#1f2427] transition duration-300 tracking-[1px] text-[18px]"
                >SNOWBOARDING</a
              >
              <button
                onclick="showDropdown(5)"
                class=""
              >
                <img
                  src="assets/images/icons/dropdown.png"
                  alt="dropdown"
                  class="size-6 mr-3"
                />
              </button>
            </div>
            <ul
              class="max-h-0 overflow-y-hidden duration-300 pl-10 bg-[#F7F8F9] font-[Oswald] mt-4"
              id="snowboard-drop"
            >
              <li class="tracking-[2px] pb-2"><a href="product-review-snowboarding.html">BOARDS</a></li>
              <li class="tracking-[2px] pb-2"><a href="">BOOTS & BINDING</a></li>
              <li class="tracking-[2px] pb-2"><a href="">APPAREL</a></li>
              <li class="tracking-[2px] pb-2"><a href="">ACCESSORIES</a></li>
              <li class="tracking-[2px] pb-2"><a href="athletes-snowboarding.html">TEAM</a></li>
            </ul>
          </li>
          <li class="border-b">
            <a
              href="news.html"
              class="pb-2 mb-3 px-4 block text-[#1f2427] transition duration-300 tracking-[1px] text-[18px]"
              >NEWS</a
            >
          </li>
          <li class="border-b">
            <div class="flex justify-between">
              <a
                href="about-us.html"
                class="py-2 px-4 block text-[#1f2427] transition duration-300 tracking-[1px] text-[18px]"
                >ABOUT</a
              >
              <button
                onclick="showDropdown(6)"
                class=""
              >
                <img
                  src="assets/images/icons/dropdown.png"
                  alt="dropdown"
                  class="size-6 mr-3"
                />
              </button>
            </div>
            <ul
              class="max-h-[0] overflow-y-hidden duration-300 pl-10 bg-[#F7F8F9] font-[Oswald] mt-4 border-t"
              id="about-drop"
            >
              <li class="tracking-[2px] pb-2"><a href="about-us.html">ABOUT US</a></li>
              <li class="tracking-[2px] pb-2"><a href="yonex-group.html">YONEX GROUP</a></li>
              <li class="tracking-[2px] pb-2">
                <a href="yonex-distributors.html">YONEX DISTRIBUTIORS</a>
              </li>
              <li class="tracking-[2px] pb-2">
                <a href="">INVESTOR RELATIONS</a>
              </li>
              <li class="tracking-[2px] pb-2">
                <a href="">PRODUCT CATATLOGS</a>
              </li>
              <li class="tracking-[2px] pb-2"><a href="">MADE BY YONEX</a></li>
            </ul>
          </li>
        </ul>
        <div class="flex mt-4 ml-8 items-center gap-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 356.926 356.926"
            width="18"
            height="18"
          >
            <title>International Sites</title>
            <path
              d="M211.89 213.669c0-10.475-8.521-18.997-18.996-18.997-.401 0-.799.017-1.193.041v2.406c.396-.028.79-.061 1.193-.061 9.158 0 16.608 7.452 16.608 16.611s-7.45 16.61-16.608 16.61c-.269 0-.53-.027-.795-.041v7.129H186.2v3.182h13.388v-3.182h-5.104v-4.774c9.734-.812 17.406-8.986 17.406-18.924zM260.072 79.408l.326 2.637-3.951.837-.534 5.635h4.764l6.321-.604 3.253-3.892-3.463-1.343-1.905-2.19-2.859-4.63-1.347-6.529-5.391 1.08-1.487 2.312v2.591l2.579 1.772z"
            ></path>
            <path
              d="M255.495 81.569l.278-3.532-3.136-1.354-4.404 1.023-3.288 5.234v3.404h3.823zM164.852 96.598l-.976 2.498h-4.7v2.428h1.121s.07.511.168 1.191l2.876-.238 1.783-1.121.465-2.248 2.335-.204.912-1.888-2.138-.442-1.846.024zM152.739 101.001l-.174 2.365 3.411-.285.348-2.376-2.045-1.609z"
            ></path>
            <path
              d="M356.868 176.633a179.671 179.671 0 00-.802-15.505 177.018 177.018 0 00-11.828-48.589c-.441-1.127-.859-2.283-1.336-3.41-8.121-19.183-19.531-36.646-33.474-51.721a161.937 161.937 0 00-2.765-2.916c-2.649-2.736-5.333-5.415-8.156-7.971C266.788 17.631 224.642 0 178.463 0 131.896 0 89.447 17.957 57.635 47.271c-7.413 6.832-14.221 14.303-20.408 22.285C13.919 99.717 0 137.49 0 178.463c0 98.398 80.059 178.463 178.463 178.463 69.225 0 129.316-39.643 158.897-97.399a176.73 176.73 0 0016.777-49.879c1.801-10.137 2.788-20.56 2.788-31.196-.023-.593-.057-1.203-.057-1.819zm-33.59-71.327l1.022-1.162a143.83 143.83 0 013.846 8.028l-1.708-.07-3.172.436v-7.233h.012zm-25.794-31.15l.023-7.971a162.178 162.178 0 018.087 9.214l-3.207 4.781-11.247-.111-.696-2.341 7.04-3.572zM82.214 54.364v-.302h3.567l.325-1.226h5.838v2.55l-1.691 2.236h-8.052v-3.259h.013zm5.711 7.959s3.578-.61 3.892-.61c.296 0 0 3.573 0 3.573l-8.081.511-1.534-1.847 5.723-1.627zm246.717 70.833h-13.06l-7.971-5.92-8.365.808v5.112h-2.648l-2.848-2.033-14.512-3.671v-9.4l-18.38 1.423-5.705 3.062h-7.285l-3.59-.36-8.854 4.926v9.254l-18.097 13.065 1.5 5.583h3.677l-.964 5.315-2.58.953-.133 13.884 15.633 17.823h6.819l.407-1.081h12.246l3.531-3.265h6.948l3.812 3.811 10.328 1.069-1.359 13.757 11.503 20.28-6.064 11.572.406 5.438 4.775 4.752v13.095l6.251 8.412v10.897h5.391c-30.046 36.913-75.823 60.534-127.026 60.534-90.312 0-163.783-73.454-163.783-163.777 0-22.732 4.665-44.401 13.077-64.089v-5.106l5.855-7.11a159.322 159.322 0 016.542-11.235l.25 2.974-6.791 8.261c-2.108 3.985-4.084 8.052-5.855 12.217v9.312l6.791 3.276v12.955l6.535 11.136 5.316.808.68-3.817-6.245-9.661-1.237-9.388h3.677l1.557 9.673 9.051 13.193-2.33 4.27 5.734 8.795 14.291 3.532v-2.306l5.711.808-.534 4.078 4.484.825 6.948 1.888 9.8 11.171 12.507.941 1.237 10.207-8.58 5.984-.39 9.115-1.237 5.588 12.386 15.5.947 5.32s4.49 1.209 5.048 1.209c.535 0 10.062 7.227 10.062 7.227v28.024l3.393.964-2.294 12.92 5.71 7.634-1.068 12.827 7.563 13.269 9.696 8.47 9.731.197.952-3.148-7.163-6.029.418-2.986 1.272-3.684.273-3.741-4.839-.14-2.44-3.066 4.021-3.881.546-2.916-4.496-1.29.261-2.719 6.402-.976 9.73-4.672 3.265-6.006 10.196-13.06-2.312-10.213 3.131-5.438 9.399.278 6.327-5.02 2.051-19.693 7.04-8.877 1.237-5.704-6.39-2.045-4.224-6.942-14.419-.145-11.444-4.351-.534-8.162-3.811-6.675-10.335-.145-5.995-9.382-5.298-2.585-.273 2.858-9.672.569-3.532-4.926-10.079-2.045-8.302 9.603-13.065-2.23-.953-14.727-9.527-1.632 3.805-7.221-1.092-4.148-12.531 8.371-7.877-.964-2.817-6.158 1.737-6.355 4.339-8.005 9.998-5.072h19.322l-.064 5.891 6.948 3.235-.558-10.062 5.007-5.037 10.103-6.64.703-4.659 10.068-10.486 10.707-5.937-.941-.773 7.256-6.826 2.655.703 1.214 1.522 2.76-3.062.68-.296-3.021-.43-3.084-.987v-2.963l1.632-1.33h3.579l1.655.726 1.418 2.858 1.737-.267v-.244l.5.163 5.02-.772.714-2.463 2.852.726v2.667l-2.666 1.818h.018l.377 2.928 9.115 2.794s0 .035.023.11l2.079-.18.146-3.939-7.209-3.282-.396-1.894 5.972-2.033.273-5.722-6.245-3.805-.412-9.667-8.581 4.218h-3.143l.837-7.355-11.688-2.748-4.816 3.654v11.119l-8.673 2.754-3.486 7.244-3.758.604v-9.277L124.11 76.3l-4.096-2.667-1.639-6.007 14.611-8.54 7.14-2.179.72 4.804 3.991-.215.308-2.411 4.166-.599.07-.842-1.784-.738-.407-2.544 5.118-.43 3.091-3.213.18-.238.035.012.941-.976 10.753-1.354 4.746 4.032-12.467 6.64 15.871 3.747 2.045-5.31h6.948l2.44-4.625-4.903-1.226v-5.856l-15.359-6.803-10.62 1.226-6.001 3.125.407 7.628-6.257-.953-.964-4.212 6.007-5.449-10.898-.535-3.125.953-1.359 3.677 4.084.686-.813 4.084-6.936.406-1.092 2.725-10.075.277s-.273-5.711-.703-5.711c-.389 0 7.901-.145 7.901-.145l5.995-5.85-3.271-1.632-4.339 4.223-7.222-.406-4.403-6.019h-9.254l-9.661 7.21h8.848l.796 2.597-2.307 2.172 9.807.279 1.487 3.532-11.032-.407-.546-2.725-6.925-1.499-3.689-2.033-8.255.069c27.043-19.699 60.284-31.358 96.226-31.358 41.403 0 79.263 15.476 108.124 40.915l-1.929 3.474-7.564 2.962-3.194 3.462.743 4.02 3.893.546 2.358 5.867 6.704-2.713 1.127 7.86h-2.045l-5.519-.819-6.111 1.022-5.926 8.377-8.458 1.319-1.221 7.25 3.579.842-1.046 4.665-8.412-1.69-7.703 1.69-1.639 4.293 1.325 9.01 4.531 2.115 7.61-.046 5.123-.465 1.58-4.078 8.018-10.422 5.264 1.081 5.193-4.7.976 3.678 12.78 8.621-1.557 2.108-5.763-.308 2.23 3.137 3.556.79 4.159-1.737-.093-5.002 1.859-.923-1.487-1.575-8.528-4.758-2.254-6.314h7.099l2.243 2.248 6.134 5.257.244 6.367 6.332 6.733 2.348-9.231 4.392-2.394.802 7.552 4.287 4.7 8.54-.139a150.819 150.819 0 014.427 12.978l-.929.834zM97.324 81.092l4.27-2.044 3.881.929-1.324 5.211-4.183 1.319-2.644-5.415zm22.749 12.258v3.37h-9.783l-3.689-1.028.918-2.341 4.7-1.94h6.437v1.94h1.417zm4.509 4.7v3.259l-2.463 1.58-3.044.575v-5.415h5.507zm-2.76-1.33v-3.893l3.363 3.067-3.363.826zm1.533 7.848v3.178l-2.347 2.347h-5.211l.813-3.573 2.463-.215.5-1.226 3.782-.511zM110.39 98.05h5.408l-6.948 9.696-2.852-1.534.616-4.084 3.776-4.078zm22.139 5.414v3.166h-5.211l-1.417-2.062v-2.951h.406l6.222 1.847zm-4.781-4.368l1.475-1.557 2.498 1.557-1.999 1.656-1.974-1.656zm209.543 42.332l.511-.61c.232.93.441 1.859.662 2.789l-1.173-2.179z"
            ></path>
            <path
              d="M27.734 109.268v5.106c1.771-4.177 3.747-8.231 5.855-12.223l-5.855 7.117z"
            ></path>
          </svg>
          <p class="text-gray-600">INTERNATIONAL SITE</p>
        </div>
        <img
              src="assets/images/icons/accessibility_icon.svg"
              alt=""
              class="size-[50px] cursor-pointer mb-[7.5px] ml-7"
            />
      </div>
        `}};customElements.define(`my-sidebar`,_);