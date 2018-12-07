/**
 * Importaing all GSAP tools
 * Documentation: https://greensock.com/docs/NPMUsage
 */
import { CSSPlugin, AttrPlugin } from "gsap/all";

 // CSSPlugin and AttrPlugin may get dropped by webpack, so it's important
 // to keep below lines
const plugins = [ CSSPlugin, AttrPlugin ];
