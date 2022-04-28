import * as vscode from "vscode";
import {init} from "./parseTool";
export function activate(context: vscode.ExtensionContext) {
  console.log("Miniso 格式化 wxml vscode 插件");

  let disposable = vscode.commands.registerCommand(
    "parsewxml.minisoParsewxml",
    () => {
      let acEditor = vscode.window.activeTextEditor;
	  if (!acEditor) {
        vscode.window.showInformationMessage("没有文件在编辑，小心顶哥头给你打爆！");
		return;
	  }
      if (acEditor && acEditor.document.languageId === "wxml") {
        init();
      } else {
        vscode.window.showInformationMessage("不是.wxml文件，别瞎搞");
      }
    }
  );
  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
