const cursor = document.querySelector(".cursor");
const tentcursor = document.querySelector(".tentcursor");

// move cursor as mouse move
document.addEventListener("mousemove", (e) => {
   cursor.style.left = e.pageX - scrollX + 'px'
   cursor.style.top = e.pageY - scrollY + 'px'
})

// add different classes on events
const links = document.querySelectorAll("a")
links.forEach((link) => {
   link.addEventListener("mouseover", () => {
      cursor.classList.add('link');
   })
   link.addEventListener("mouseout", () => {
      cursor.classList.remove('link');
   })
})