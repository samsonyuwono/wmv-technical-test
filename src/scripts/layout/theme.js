import "../../styles/theme.scss";
import "../../styles/theme.scss.liquid";

import { focusHash, bindInPageLinks } from "@shopify/theme-a11y";
import { cookiesEnabled } from "@shopify/theme-cart";

// Common a11y fixes
focusHash();
bindInPageLinks();

// Apply a specific class to the html element for browser support of cookies.
if (cookiesEnabled()) {
  document.documentElement.className = document.documentElement.className.replace(
    "supports-no-cookies",
    "supports-cookies"
  );
}

var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  cellAlign: "center",
  groupCells: 4,
  contain: true,
  wrapAround: true
});
