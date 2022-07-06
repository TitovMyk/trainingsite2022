let up = document.querySelector(".up");
window.addEventListener("scroll", function(){
	if (window.pageYOffset > 200){
	up.classList.add("show");
} else {
	up.classList.remove("show");
}
});

up.addEventListener("click", function(){
	window.scrollTo(0,0);
})
