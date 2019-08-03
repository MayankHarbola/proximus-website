
    const navSlide=()=>{
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
       const navLinks = document.querySelectorAll('.nav-links li');
       console.log("navlinks is",navLinks)
        console.log("burger",burger, "nav",nav)
        burger.addEventListener('click',()=>{
            nav.classList.toggle('nav-active');
        });
        navLinks.forEach((link,index)=>{
             console.log('index is',index);
             link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 1}s`;
        })
    
    }
    navSlide();


// navSlide();