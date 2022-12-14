export function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}

export function setCookie(cname, cvalue, exdays, path = "/", exsec = -1) {
  var d = new Date();
  var val = 0;
  if (exsec > -1) {
    val = exsec * 1000;
  } else {
    val = exdays * 24 * 60 * 60 * 1000;
  }
  d.setTime(d.getTime() + val);
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
