import borderStyles from "./tokens/build/_border.css";
import colorStyles from "./tokens/build/_colors.css";
import restStyles from "./tokens/build/_rest.css";
import shadowStyles from "./tokens/build/_shadow.css";
import sizingStyles from "./tokens/build/_sizing.css";
import spacingStyles from "./tokens/build/_spacing.css";
import typographyStyles from "./tokens/build/_typography.css";

const styleTag = document.createElement("style");
styleTag.appendChild(document.createTextNode(borderStyles));
styleTag.appendChild(document.createTextNode(colorStyles));
styleTag.appendChild(document.createTextNode(shadowStyles));
styleTag.appendChild(document.createTextNode(sizingStyles));
styleTag.appendChild(document.createTextNode(spacingStyles));
styleTag.appendChild(document.createTextNode(typographyStyles));
styleTag.appendChild(document.createTextNode(restStyles));

document.head.appendChild(styleTag);

export * from "./components/badge";
