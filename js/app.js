// ===================== HEADER CODE START ======================
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  if (header) {
    fetch("../header.html")
      .then((res) => res.text())
      .then((data) => {
        header.innerHTML = data;

        // ============= CANVAS CODE HEADER START ====================
        
var header_open_btn=document.getElementById("header_open_btn");
if(header_open_btn){
  
  var top_canvas=document.getElementById("offcanvasTop");
  var bottom_canvas=document.getElementById("offcanvasBottom");


  header_open_btn.addEventListener("click",(e)=>{
    e.preventDefault()


    if(top_canvas.classList.contains("show") && bottom_canvas.classList.contains("show")){
      top_canvas.classList.remove("show")
      bottom_canvas.classList.remove("show")
    }
else
{
    
    top_canvas.classList.add("show");
    bottom_canvas.classList.add("show");
}

    
  })
}
        // ============= CANVAS CODE HEADER END ======================  




   // ============= CANVAS CODE HEADER START ====================
        
var header_open_btn1=document.getElementById("header_open_btn1");
if(header_open_btn1){
  
  var top_canvas=document.getElementById("offcanvasTop");
  var bottom_canvas=document.getElementById("offcanvasBottom");


  header_open_btn1.addEventListener("click",(e)=>{
    e.preventDefault()


    if(top_canvas.classList.contains("show") && bottom_canvas.classList.contains("show")){
      top_canvas.classList.remove("show")
      bottom_canvas.classList.remove("show")
    }
else
{
    
    top_canvas.classList.add("show");
    bottom_canvas.classList.add("show");
}

    
  })
}
        // ============= CANVAS CODE HEADER END ======================  












        // ============= themes_codes CODE START =================
        var themes_codes_btn=document.getElementById("theme_btn");
        var themes_codes_value_Set=localStorage.getItem("themes_codes");
    var nav_logo=document.getElementById("nav_logo");
        if(!themes_codes_value_Set){
          localStorage.setItem("themes_codes","white");
          document.body.classList.add("white")

        }

        themes_codes_btn.addEventListener("click",(et)=>{
        et.preventDefault();

        var themes_codes_value=localStorage.getItem("themes_codes");
        
        if(themes_codes_value === "white"){
         
          localStorage.setItem("themes_codes","black")
          document.body.classList.add("black")
          document.body.classList.remove("white")
          nav_logo.src = "assets/images/logo/light_logo.png";
          themes_codes_btn.innerHTML=`     <i class="fa-solid fa-moon"></i>`
          
        }
        else{
          localStorage.setItem("themes_codes","white")
          
          document.body.classList.add("white")

          document.body.classList.remove("black")
   nav_logo.src = "assets/images/logo/logo.png";
          themes_codes_btn.innerHTML=`     <i class="fa-solid fa-moon"></i>`

        }

    console.log(localStorage.getItem("themes_codes"));

        })
        // ============= themes_codes CODE END ===================
// ============ CURSOR CODE START ================
var cusor_body = document.getElementById("cursor_body");

if (cusor_body) {
  document.addEventListener("mousemove", (e) => {
    cusor_body.style.top = e.clientY + "px";
    cusor_body.style.left = e.clientX + "px";
  });
}
   // ============ CURSOR CODE END ================

      })
      .catch((err) => console.error("Error loading header:", err));
  }
});
// ===================== HEADER CODE END ======================
// ===================== FOOTER CODE START ======================
var footer = document.getElementById("footer");
if (footer) {
  // ===================== footer CODE START ======================
  fetch("../footer.html")
    .then((e) => e.text())
    .then((data) => {
      footer.innerHTML = data;
    });
}
// ===================== FOOTER CODE END ======================

// ============ MAEUQE ACTIVE CODE START =====================
document.addEventListener("DOMContentLoaded", () => {
  const marque_container = document.getElementById("marque_container");

  if (marque_container) {
    window.addEventListener("scroll", () => {
      const rect = marque_container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 30) {
        marque_container.classList.add("maruqe_active");
      } else {
        marque_container.classList.remove("maruqe_active");
      }
    });
  } 
});

// ============ MAEUQE ACTIVE CODE END =======================

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section"); 

  if (sections.length > 0) {
    window.addEventListener("scroll", () => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight -240 && rect.bottom >0) {
          section.classList.add("active_section");
        } else {
          section.classList.remove("active_section");
        }
      });
    });
  } else {
    console.log("❌ No <section> found");
  }
});

// =============== service-block-container start ===================
 

document.addEventListener("DOMContentLoaded", () => {
  const service_block_container = document.querySelectorAll(".service-block-container"); 

  if (service_block_container.length > 0) {
    window.addEventListener("scroll", () => {
      service_block_container.forEach((section) => {
        console.log(section);
        
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight - 180  && rect.bottom >0) {
        section.classList.add("active_sservice_block_container");
        } else {
          section.classList.remove("active_sservice_block_container");
        }
      });
    });
  } else {
    console.log("❌ No <section> found");
  }
});

// =============== service-block-container end ===================
