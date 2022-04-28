import { parse, generate, traverse, NODE_TYPES } from "wxml-parse";
const { window, Position, Range, workspace } = require("vscode");
let editor, doc, text;

export const init = () => {
  editor = window.activeTextEditor;
  if (!editor) {
    throw new Error("当前没有激活的页面！");
  }
  doc = editor.document;
  text = doc.getText();
  let newText = '';
  newText = generate(parse(text), {});

  let start = new Position(0, 0);
  let end = new Position(doc.lineCount + 1, 0);
  let range = new Range(start, end);
  editor.edit((editBuilder: string, error: any) => {
      error && window.showErrorMessage(error);
      editBuilder.replace(range, newText);
  });
};
