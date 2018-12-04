'use strict';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    const disposable1 = vscode.commands.registerTextEditorCommand('extension.embraceParenthesis', (textEditor, edit) => { doSurround(textEditor, edit, '(', ')'); });
    const disposable2 = vscode.commands.registerTextEditorCommand('extension.embraceSquareBrackets', (textEditor, edit) => { doSurround(textEditor, edit, '[', ']'); });
    const disposable3 = vscode.commands.registerTextEditorCommand('extension.embraceCurlyBrackets', (textEditor, edit) => { doSurround(textEditor, edit, '{', '}'); });
    const disposable4 = vscode.commands.registerTextEditorCommand('extension.embraceAngleBrackets', (textEditor, edit) => { doSurround(textEditor, edit, '<', '>'); });
    const disposable5 = vscode.commands.registerTextEditorCommand('extension.embraceSingleQuotes', (textEditor, edit) => { doSurround(textEditor, edit, '\'', '\''); });
    const disposable6 = vscode.commands.registerTextEditorCommand('extension.embraceDoubleQuotes', (textEditor, edit) => { doSurround(textEditor, edit, '\"', '\"'); });
    const disposable7 = vscode.commands.registerTextEditorCommand('extension.embraceUser', (textEditor, edit) => { doUserSurround(textEditor, edit); });

    context.subscriptions.push(disposable1);
    context.subscriptions.push(disposable2);
    context.subscriptions.push(disposable3);
    context.subscriptions.push(disposable4);
    context.subscriptions.push(disposable5);
    context.subscriptions.push(disposable6);
    context.subscriptions.push(disposable7);
}

export function deactivate() {
}

function doSurround(textEditor: vscode.TextEditor, edit: vscode.TextEditorEdit, insBefore: string, insAfter: string) {

    const document = textEditor.document;
    const newSelections: vscode.Selection[] = [];

    textEditor.edit(editBuilder => {

        textEditor.selections.forEach(selection => {

            const adjust = selection.start.line == selection.end.line ? 1 : 0;
            editBuilder.insert(selection.start, insBefore);
            editBuilder.insert(selection.end, insAfter);
            newSelections.push(new vscode.Selection(selection.start.translate(0, 1), selection.end.translate(0, adjust)));

        });
    }).then(() => {

        textEditor.selections
        textEditor.selections = newSelections;

    });
}
function doUserSurround(textEditor: vscode.TextEditor, edit: vscode.TextEditorEdit) {
    vscode.window.showInputBox().then(function(trigger) {
        if (trigger === undefined) {
            return;
        }
        const pairs = vscode.workspace.getConfiguration('embrace').pairs;
        var tokens = [trigger, trigger];
        if (trigger in pairs) {
            tokens = pairs[trigger]
        }
        doSurround(textEditor, edit, tokens[0], tokens[1]);
    });
}