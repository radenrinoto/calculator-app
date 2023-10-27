let index = 1;
function changeindex() {
  if (index === 3) {
    index = 1;
  } else {
    index += 1;
  }
  changeTheme(index);
}
function changeTheme(themeVal) {
  const bodyElement = document.getElementsByTagName("BODY")[0];
  const dot = document.getElementsByClassName("dot");
  switch (themeVal) {
    case 1:
      bodyElement.className = "theme-1";
      dot[0].style.left = "";
      document.documentElement.style.setProperty("--content", "'1'");
      document.documentElement.style.setProperty("--shadowcolor", "#b0a49f");
      break;
    case 2:
      bodyElement.className = "theme-2";
      dot[0].style.left = "1.5rem";
      dot[0].style.left = "1.5rem";
      document.documentElement.style.setProperty("--content", "'2'");
      document.documentElement.style.setProperty("--shadowcolor", "#a59d91");
      break;
    case 3:
      bodyElement.className = "theme-3";
      dot[0].style.left = "2.5rem";
      dot[0].style.left = "2.5rem";
      document.documentElement.style.setProperty("--content", "'3'");
      document.documentElement.style.setProperty("--shadowcolor", "#851e9d");
      break;
    default:
      break;
  }
}
