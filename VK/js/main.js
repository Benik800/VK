const outlet = document.getElementById("outlet");
if (outlet) outlet.addEventListener("click", mesGroupsActive);
function mesGroupsActive() 
{
  const aside = document.getElementById("aside");
  aside.classList.toggle("aside-active");
}
