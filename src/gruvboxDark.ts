import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { Extension } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { tags } from "@lezer/highlight";

const dark0Hard = "#1D2021";
const dark0 = "#282828";
const dark0Soft = "#32302F";
const dark1 = "#3C3836";
const dark2 = "#504945";
const dark3 = "#665C54";
const dark4 = "#7C6F64";
const gray = "#928374";
const light0 = "#FBF1C7";
const light1 = "#EBDBB2";
const light2 = "#D5C4A1";
const light3 = "#BDAE93";
const light4 = "#A89984";
const brightRed = "#FB4934";
const brightGreen = "#B8BB26";
const brightYellow = "#FABD2F";
const brightBlue = "#83A598";
const brightPurple = "#D3869B";
const brightAqua = "#8EC07C";
const brightOrange = "#FE8019";
const neutralRed = "#CC241D";
const neutralGreen = "#98971A";
const neutralYellow = "#D79921";
const neutralBlue = "#458588";
const neutralPurple = "#B16286";
const neutralAqua = "#689D6A";
const neutralOrange = "#D65D0E";

export const darkColors = {
  dark0Hard,
  dark0,
  dark0Soft,
  dark1,
  dark2,
  dark3,
  dark4,
  gray,
  light0,
  light1,
  light2,
  light3,
  light4,
  brightRed,
  brightGreen,
  brightYellow,
  brightBlue,
  brightPurple,
  brightAqua,
  brightOrange,
  neutralRed,
  neutralGreen,
  neutralYellow,
  neutralBlue,
  neutralPurple,
  neutralAqua,
  neutralOrange,
};

export const gruvboxDarkTheme = EditorView.theme(
  {
    "&": {
      backgroundColor: dark0,
      color: light1,
    },
    ".cm-content": {
      caretColor: light1,
    },
    ".cm-cursor, .cm-dropCursor": {
      borderLeftColor: light1,
    },
    "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":
      {
        backgroundColor: dark3,
      },
    ".cm-panels": {
      backgroundColor: dark0Hard,
      color: light1,
    },
    ".cm-panels.cm-panels-top": {
      borderBottom: `2px solid ${dark0Hard}`,
    },
    ".cm-panels.cm-panels-bottom": {
      borderTop: `2px solid ${dark0Hard}`,
    },
    ".cm-searchMatch": {
      backgroundColor: dark2,
    },
    ".cm-searchMatch.cm-searchMatch-selected, .cm-searchMatch.cm-searchMatch-selected *":
      {
        backgroundColor: brightOrange,
        color: dark0,
      },
    ".cm-activeLine": { backgroundColor: dark1 },
    ".cm-selectionMatch": { backgroundColor: dark1 },
    "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
      backgroundColor: dark0Hard,
      outline: `1px solid ${gray}`,
      fontWeight: "bold",
    },
    ".cm-gutters": {
      backgroundColor: dark0,
      color: dark4,
      border: "none",
    },
    ".cm-activeLineGutter": {
      color: brightYellow,
      backgroundColor: dark0,
    },
    ".cm-foldPlaceholder": {
      backgroundColor: dark1,
      color: gray,
      fontStyle: "italic",
      border: "none",
    },
    ".cm-tooltip": {
      backgroundColor: dark1,
      border: "none",
    },
    ".cm-tooltip .cm-tooltip-arrow:before": {
      borderTopColor: "transparent",
      borderBottomColor: "transparent",
    },
    ".cm-tooltip .cm-tooltip-arrow:after": {
      borderTopColor: dark1,
      borderBottomColor: dark1,
    },
    ".cm-tooltip-autocomplete": {
      backgroundColor: dark2,
      "& > ul > li[aria-selected]": {
        backgroundColor: brightBlue,
        color: dark0,
        fontWeight: "bold",
      },
    },
  },
  { dark: true }
);

export const gruvboxDarkHighlightStyle = HighlightStyle.define([
  { tag: tags.comment, color: gray, fontStyle: "italic" },
  { tag: tags.lineComment, color: gray, fontStyle: "italic" },
  { tag: tags.blockComment, color: gray, fontStyle: "italic" },
  { tag: tags.docComment, color: gray, fontStyle: "italic" },
  { tag: tags.name, color: light1 },
  { tag: tags.variableName, color: light1 },
  { tag: tags.typeName, color: brightYellow },
  { tag: tags.tagName, color: brightBlue },
  { tag: tags.propertyName, color: brightBlue },
  { tag: tags.attributeName, color: brightOrange },
  { tag: tags.className, color: brightYellow },
  { tag: tags.labelName, color: brightRed },
  { tag: tags.namespace, color: light1 },
  { tag: tags.macroName, color: brightAqua },
  { tag: tags.literal, color: brightGreen },
  { tag: tags.string, color: brightGreen },
  { tag: tags.docString, color: brightGreen },
  { tag: tags.character, color: brightPurple },
  { tag: tags.attributeValue, color: brightGreen },
  { tag: tags.number, color: brightPurple },
  { tag: tags.integer, color: brightPurple },
  { tag: tags.float, color: brightPurple },
  { tag: tags.bool, color: brightPurple },
  { tag: tags.regexp, color: brightGreen },
  { tag: tags.escape, color: brightOrange },
  { tag: tags.color, color: brightPurple },
  { tag: tags.url, color: brightBlue, textDecoration: "underline" },
  { tag: tags.keyword, color: brightRed },
  { tag: tags.self, color: brightOrange },
  { tag: tags.null, color: brightOrange },
  { tag: tags.atom, color: brightPurple },
  { tag: tags.unit, color: brightPurple },
  { tag: tags.modifier, color: brightOrange },
  { tag: tags.operatorKeyword, color: brightRed },
  { tag: tags.controlKeyword, color: brightRed },
  { tag: tags.definitionKeyword, color: brightRed },
  { tag: tags.moduleKeyword, color: brightAqua },
  { tag: tags.operator, color: brightOrange },
  { tag: tags.derefOperator, color: brightOrange },
  { tag: tags.arithmeticOperator, color: brightOrange },
  { tag: tags.logicOperator, color: brightOrange },
  { tag: tags.bitwiseOperator, color: brightOrange },
  { tag: tags.compareOperator, color: brightOrange },
  { tag: tags.updateOperator, color: brightOrange },
  { tag: tags.definitionOperator, color: brightOrange },
  { tag: tags.typeOperator, color: brightOrange },
  { tag: tags.controlOperator, color: brightOrange },
  { tag: tags.punctuation, color: brightOrange },
  { tag: tags.separator, color: brightOrange },
  { tag: tags.bracket, color: brightOrange },
  { tag: tags.angleBracket, color: brightAqua, fontWeight: "bold" },
  { tag: tags.squareBracket, color: brightOrange },
  { tag: tags.paren, color: brightOrange },
  { tag: tags.brace, color: brightOrange },
  { tag: tags.content, color: light1 },
  { tag: tags.heading, color: brightGreen, fontWeight: "bold" },
  { tag: tags.heading1, color: brightGreen, fontWeight: "bold" },
  { tag: tags.heading2, color: brightGreen, fontWeight: "bold" },
  { tag: tags.heading3, color: brightYellow, fontWeight: "bold" },
  { tag: tags.heading4, color: brightYellow, fontWeight: "bold" },
  { tag: tags.heading5, color: brightYellow },
  { tag: tags.heading6, color: brightYellow },
  { tag: tags.contentSeparator, color: gray },
  { tag: tags.list, color: light1 },
  { tag: tags.quote, color: gray },
  { tag: tags.emphasis, fontStyle: "italic" },
  { tag: tags.strong, fontWeight: "bold" },
  { tag: tags.link, color: brightBlue, textDecoration: "underline" },
  { tag: tags.strikethrough, textDecoration: "line-through" },
  { tag: tags.inserted, color: brightGreen },
  { tag: tags.deleted, color: brightRed },
  { tag: tags.changed, color: brightAqua },
  { tag: tags.invalid, color: brightRed, fontWeight: "bold" },
  { tag: tags.meta, color: brightAqua },
  { tag: tags.documentMeta, color: brightAqua },
  { tag: tags.annotation, color: brightAqua },
  { tag: tags.processingInstruction, color: gray },
  { tag: tags.definition(tags.name), color: brightBlue },
  { tag: tags.constant(tags.name), color: brightPurple },
  {
    tag: tags.function(tags.variableName),
    color: brightGreen,
    fontWeight: "bold",
  },
  { tag: tags.standard(tags.name), color: brightOrange },
  { tag: tags.local(tags.name), color: light1 },
  { tag: tags.special(tags.string), color: brightOrange },
  { tag: tags.special(tags.variableName), color: brightOrange },
]);

export const gruvboxDark: Extension = [
  gruvboxDarkTheme,
  syntaxHighlighting(gruvboxDarkHighlightStyle),
];
