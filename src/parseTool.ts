const { window, Position, Range, workspace } = require("vscode")

let editor, doc, text

export const init = () => {
  editor = window.activeTextEditor
  if (!editor) {
    throw new Error("当前没有激活的页面！")
  }
  doc = editor.document
  text = editor.getText()
  let newText = ''
  let start = new Position(0, 0);
  let end = new Position(this.lineCount + 1, 0);
  let range = new Range(start, end);
  editor.edit((editBuilder, error) => {
      error && window.showErrorMessage(error);
      editBuilder.replace(range, newText);
  });
}
