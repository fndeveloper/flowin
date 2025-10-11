import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";  // ✅ Removed 'auth' from import
  import { getFirestore, collection, getDocs,getDoc,doc ,deleteDoc, updateDoc} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
 
const firebaseConfig = {
      apiKey: "AIzaSyC1zoSG4uMziRnA1Iaiz5r-9UBbHwJTRD8",
  authDomain: "veroroma-1a37b.firebaseapp.com",
  projectId: "veroroma-1a37b",
  storageBucket: "veroroma-1a37b.appspot.com",
  messagingSenderId: "738682652885",
  appId: "1:738682652885:web:7dabde8d7285773e757a5c",
  measurementId: "G-LVGP1FPRMQ"
};

// ✅ Initialize Firebase App
const app = initializeApp(firebaseConfig);

// ✅ Initialize Auth
const auth = getAuth(app);

const db = getFirestore(app);
// ✅ Check Auth State
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = 'login.html'; 
  }
});

// =================== CHECK CURRENT USER CODE END ===========================


// ============ LOGOUT CODE START =======================
 const logoutBtn = document.getElementById('logout-btn');

  if(logoutBtn){
      logoutBtn.addEventListener('click', () => {
            signOut(auth).then(() => {
                // Redirect to login page after successful logout
                window.location.href = 'login.html'; // Adjust path to login.html if needed
            }).catch((error) => {
                // Handle errors (optional)
                console.error("Error logging out: ", error);
            });
        })
  }
// ============ LOGOUT CODE END =========================


// ============= nav_pills code start ===========
var nav_pills=document.getElementById("nav_pills");
if(nav_pills){
    fetch("nav_pills.html")
    .then(res => res.text())
    .then((e)=>{
        nav_pills.innerHTML=e;

        // ======================== NAV-LINK ACTIVE CODE START =================
const currentPage = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('.nav_pills_link');

navLinks.forEach(link => {
  const hrefPage = link.getAttribute('href')?.split('/').pop(); // get only the filename from href

  if (hrefPage === currentPage) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

        // ======================== NAV-LINK ACTIVE CODE END ===================
    })
}
// ============= nav_pills code end =============


         // ========== DOM References ==========
         document.getElementById("category_lenght").innerHTML=`  <div class="spinner-border text-center" role="status">
 <span class="visually-hidden">Loading...</span>
 </div>`;
      const categorySnapshot = await getDocs(collection(db, "categories"));
var num=0;
      categorySnapshot.forEach(doc => {
num++;
        document.getElementById("category_lenght").innerHTML=num;

      });


    
// ========== FETCH PRODUCT IS HOME PAGE START ================

document.getElementById("product_lenght").innerHTML=`  <div class="spinner-border text-center" role="status">
<span class="visually-hidden">Loading...</span>
</div>`;
async function fetchProducts() {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));

      let count = 0;
      querySnapshot.forEach((doc,index) => {

        count++;
document.getElementById("product_lenght").innerHTML=count;

       
      });
    } catch (error) {
    
    }
  }

  fetchProducts();


