// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode"
import {init} from "./parseTool"
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  console.log("格式化wxml插件")

  let disposable = vscode.commands.registerCommand(
    "parsewxml.openDialog",
    () => {
      let acEditor = vscode.window.activeTextEditor

      if (acEditor && acEditor.document.languageId === "vue") {
        init()
      } else {
        vscode.window.showInformationMessage("It‘s not a .vue file")
      }
    }
  )
  context.subscriptions.push(disposable)
}

// this method is called when your extension is deactivated
export function deactivate() {}
