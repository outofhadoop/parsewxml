[TOC]

# MINISO 格式化wxml的vscode插件

## 如何使用

### 1. 通过快捷键

ctrl + shift + p , 在弹出的输入框输入 **miniso** , 可以看到 **Miniso parse wxml** 的提示，鼠标左键单击或者选中该选项敲回车即可

### 2. 鼠标右键

单击鼠标右键，可以看到 **Miniso parse wxml** 的提示，按下去就可以了

## 安装

因为没有搞 [Azure DevOps](https://docs.microsoft.com/zh-cn/azure/devops/organizations/accounts/create-organization?view=azure-devops) ，所以通过 .vsix **手动安装** , 如下图：

![安装向导](https://scrm-community.oss-cn-shenzhen.aliyuncs.com/miniso/vscode-plugins/install-plugin.png)

## 其他

(个人建议)
建议使用2空格缩进
不建议保存自动格式化

### 有问题请找**顶哥[陈安顶(于晏)]**


### 版本日志

1. 1.0.2: 添加icon
2. 1.0.3: 修复 wx:for-item, wx:for-index 加了{{}} 的问题