import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { Extension } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { tags } from "@lezer/highlight";

const light0Hard = "#F9F5D7";
const light0 = "#FBF1C7";
const light0Soft = "#F2E5BC";
const light1 = "#EBDBB2";
const light2 = "#D5C4A1";
const light3 = "#BDAE93";
const light4 = "#A89984";
const gray = "#928374";
const dark0 = "#282828";
const dark1 = "#3C3836";
const dark2 = "#504945";
const dark3 = "#665C54";
const dark4 = "#7C6F64";
const fadedRed = "#9D0006";
const fadedGreen = "#79740E";
const fadedYellow = "#B57614";
const fadedBlue = "#076678";
const fadedPurple = "#8F3F71";
const fadedAqua = "#427B58";
const fadedOrange = "#AF3A03";
const neutralRed = "#CC241D";
const neutralGreen = "#98971A";
const neutralYellow = "#D79921";
const neutralBlue = "#458588";
const neutralPurple = "#B16286";
const neutralAqua = "#689D6A";
const neutralOrange = "#D65D0E";

export const lightColors = {
  light0Hard,
  light0,
  light0Soft,
  light1,
  light2,
  light3,
  light4,
  gray,
  dark0,
  dark1,
  dark2,
  dark3,
  dark4,
  fadedRed,
  fadedGreen,
  fadedYellow,
  fadedBlue,
  fadedPurple,
  fadedAqua,
  fadedOrange,
  neutralRed,
  neutralGreen,
  neutralYellow,
  neutralBlue,
  neutralPurple,
  neutralAqua,
  neutralOrange,
};

export const gruvboxLightTheme = EditorView.theme(
  {
    "&": {
      backgroundColor: light0,
      color: dark1,
    },
    ".cm-content": {
      caretColor: dark1,
    },
    ".cm-cursor, .cm-dropCursor": {
      borderLeftColor: dark1,
    },
    "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":
      {
        backgroundColor: light3,
      },
    ".cm-panels": {
      backgroundColor: light0Hard,
      color: dark1,
    },
    ".cm-panels.cm-panels-top": {
      borderBottom: `2px solid ${light0Hard}`,
    },
    ".cm-panels.cm-panels-bottom": {
      borderTop: `2px solid ${light0Hard}`,
    },
    ".cm-searchMatch": {
      backgroundColor: light2,
    },
    ".cm-searchMatch.cm-searchMatch-selected, .cm-searchMatch.cm-searchMatch-selected *":
      {
        backgroundColor: fadedOrange,
        color: light0,
      },
    ".cm-activeLine": { backgroundColor: light1 },
    ".cm-selectionMatch": { backgroundColor: light1 },
    "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
      backgroundColor: light0Hard,
      outline: `1px solid ${gray}`,
      fontWeight: "bold",
    },
    ".cm-gutters": {
      backgroundColor: light0,
      color: light4,
      border: "none",
    },
    ".cm-activeLineGutter": {
      color: fadedYellow,
      backgroundColor: light0,
    },
    ".cm-foldPlaceholder": {
      backgroundColor: light1,
      color: gray,
      fontStyle: "italic",
      border: "none",
    },
    ".cm-tooltip": {
      backgroundColor: light1,
      border: "none",
    },
    ".cm-tooltip .cm-tooltip-arrow:before": {
      borderTopColor: "transparent",
      borderBottomColor: "transparent",
    },
    ".cm-tooltip .cm-tooltip-arrow:after": {
      borderTopColor: light1,
      borderBottomColor: light1,
    },
    ".cm-tooltip-autocomplete": {
      backgroundColor: light2,
      "& > ul > li[aria-selected]": {
        backgroundColor: fadedBlue,
        color: light0,
        fontWeight: "bold",
      },
    },
  },
  { dark: false }
);

export const gruvboxLightHighlightStyle = HighlightStyle.define([
  { tag: tags.comment, color: gray, fontStyle: "italic" },
  { tag: tags.lineComment, color: gray, fontStyle: "italic" },
  { tag: tags.blockComment, color: gray, fontStyle: "italic" },
  { tag: tags.docComment, color: gray, fontStyle: "italic" },
  { tag: tags.name, color: dark1 },
  { tag: tags.variableName, color: dark1 },
  { tag: tags.typeName, color: fadedYellow },
  { tag: tags.tagName, color: fadedBlue },
  { tag: tags.propertyName, color: fadedBlue },
  { tag: tags.attributeName, color: fadedOrange },
  { tag: tags.className, color: fadedYellow },
  { tag: tags.labelName, color: fadedRed },
  { tag: tags.namespace, color: dark1 },
  { tag: tags.macroName, color: fadedAqua },
  { tag: tags.literal, color: fadedGreen },
  { tag: tags.string, color: fadedGreen },
  { tag: tags.docString, color: fadedGreen },
  { tag: tags.character, color: fadedPurple },
  { tag: tags.attributeValue, color: fadedGreen },
  { tag: tags.number, color: fadedPurple },
  { tag: tags.integer, color: fadedPurple },
  { tag: tags.float, color: fadedPurple },
  { tag: tags.bool, color: fadedPurple },
  { tag: tags.regexp, color: fadedGreen },
  { tag: tags.escape, color: fadedOrange },
  { tag: tags.color, color: fadedPurple },
  { tag: tags.url, color: fadedBlue, textDecoration: "underline" },
  { tag: tags.keyword, color: fadedRed },
  { tag: tags.self, color: fadedOrange },
  { tag: tags.null, color: fadedOrange },
  { tag: tags.atom, color: fadedPurple },
  { tag: tags.unit, color: fadedPurple },
  { tag: tags.modifier, color: fadedOrange },
  { tag: tags.operatorKeyword, color: fadedRed },
  { tag: tags.controlKeyword, color: fadedRed },
  { tag: tags.definitionKeyword, color: fadedRed },
  { tag: tags.moduleKeyword, color: fadedAqua },
  { tag: tags.operator, color: fadedOrange },
  { tag: tags.derefOperator, color: fadedOrange },
  { tag: tags.arithmeticOperator, color: fadedOrange },
  { tag: tags.logicOperator, color: fadedOrange },
  { tag: tags.bitwiseOperator, color: fadedOrange },
  { tag: tags.compareOperator, color: fadedOrange },
  { tag: tags.updateOperator, color: fadedOrange },
  { tag: tags.definitionOperator, color: fadedOrange },
  { tag: tags.typeOperator, color: fadedOrange },
  { tag: tags.controlOperator, color: fadedOrange },
  { tag: tags.punctuation, color: fadedOrange },
  { tag: tags.separator, color: fadedOrange },
  { tag: tags.bracket, color: fadedOrange },
  { tag: tags.angleBracket, color: fadedAqua, fontWeight: "bold" },
  { tag: tags.squareBracket, color: fadedOrange },
  { tag: tags.paren, color: fadedOrange },
  { tag: tags.brace, color: fadedOrange },
  { tag: tags.content, color: dark1 },
  { tag: tags.heading, color: fadedGreen, fontWeight: "bold" },
  { tag: tags.heading1, color: fadedGreen, fontWeight: "bold" },
  { tag: tags.heading2, color: fadedGreen, fontWeight: "bold" },
  { tag: tags.heading3, color: fadedYellow, fontWeight: "bold" },
  { tag: tags.heading4, color: fadedYellow, fontWeight: "bold" },
  { tag: tags.heading5, color: fadedYellow },
  { tag: tags.heading6, color: fadedYellow },
  { tag: tags.contentSeparator, color: gray },
  { tag: tags.list, color: dark1 },
  { tag: tags.quote, color: gray },
  { tag: tags.emphasis, fontStyle: "italic" },
  { tag: tags.strong, fontWeight: "bold" },
  { tag: tags.link, color: fadedBlue, textDecoration: "underline" },
  { tag: tags.strikethrough, textDecoration: "line-through" },
  { tag: tags.inserted, color: fadedGreen },
  { tag: tags.deleted, color: fadedRed },
  { tag: tags.changed, color: fadedAqua },
  { tag: tags.invalid, color: fadedRed, fontWeight: "bold" },
  { tag: tags.meta, color: fadedAqua },
  { tag: tags.documentMeta, color: fadedAqua },
  { tag: tags.annotation, color: fadedAqua },
  { tag: tags.processingInstruction, color: gray },
  { tag: tags.definition(tags.name), color: fadedBlue },
  { tag: tags.constant(tags.name), color: fadedPurple },
  {
    tag: tags.function(tags.variableName),
    color: fadedGreen,
    fontWeight: "bold",
  },
  { tag: tags.standard(tags.name), color: fadedOrange },
  { tag: tags.local(tags.name), color: dark1 },
  { tag: tags.special(tags.string), color: fadedOrange },
  { tag: tags.special(tags.variableName), color: fadedOrange },
]);

export const gruvboxLight: Extension = [
  gruvboxLightTheme,
  syntaxHighlighting(gruvboxLightHighlightStyle),
];
