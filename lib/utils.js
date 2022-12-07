export function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}

export function setCookie(cname, cvalue, exdays, path = "/") {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toGMTString();
  document.cookie = `${cname}=${cvalue}; ${expires}; path=${path};`;
  // cname + "=" + cvalue + "; " + expires + "; " + `path=${path};`;
}

export function getExpires(exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  return d;
}

export function getTheme() {
  var theme = localStorage.getItem("theme");
  if (theme === null) theme = "dark";
  return theme;
}
