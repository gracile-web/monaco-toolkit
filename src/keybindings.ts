import * as monaco from 'monaco-editor';

export function setupKeybindings() {
	monaco.editor.addCommand({
		id: 'toggle-comment',
		run: () => {
			const editor = monaco.editor.getEditors().find((e) => e.hasTextFocus());
			if (editor) {
				editor.getAction('editor.action.commentLine')?.run();
			}
		},
	});

	monaco.editor.addKeybindingRule({
		keybinding:
			monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.Slash,
		command: 'toggle-comment',
		when: 'editorTextFocus',
	});
}

// TODO: For literals
// import {
// 	// emmetHTML,
// 	// emmetCSS,
// 	emmetJSX,
// 	// expandAbbreviation,
// 	// registerCustomSnippets,
// } from 'emmet-monaco-es';
export function setupEmmet() {
	// emmetHTML(monaco, ['typescript']);
	// emmetCSS(monaco, ['typescript']);
	// FIXME:
	// emmetJSX(monaco, [
	// 	'html',
	// 	'lit-html',
	// 	'typescript',
	// 	'javascript',
	// 	'jsx',
	// 	'tsx',
	// ]);
	console.warn('EMMET UNIMPLEMENTED');
}

// TODO: Find a way to make rename word selection as a whole

// monaco.languages.setLanguageConfiguration('typescript', {
// 	wordPattern: /[a-zA-Z0-9]+/g,
// 	// autoClosingPairs: [
// 	// 	{ open: '<', close: '>' },
// 	// 	{ open: '"', close: '"' },
// 	// 	{ open: "'", close: "'" },
// 	// ],
// });

// monaco.languages.registerCompletionItemProvider('typescript', {
//   triggerCharacters: ['.', '_', '@', '#'],
//   provideCompletionItems: (model, pos) => {
//     return {
//       suggestions: [{}],
//     };
//   },
// });
// monaco.languages.setLanguageConfiguration('typescript', {
//   wordPattern: /[a-zA-Z]+/, // so '_' isn't part of a word
// });

// monaco.languages.registerNewSymbolNameProvider('typescript', {
// 	supportsAutomaticNewSymbolNamesTriggerKind: new Promise(() => true),
// 	provideNewSymbolNames() {
// 		return [{ newSymbolName: 'test' }];
// 	},
// });
// monaco.languages.registerRenameProvider('typescript', {
// 	provideRenameEdits() {
// 		console.log({ provideRenameEdits: 'OK' });
// 	},
// 	resolveRenameLocation(model, position) {
// 		console.log({ resolveRenameLocation: 'OK' });
// 		// const word = model.getWordAtPosition(position);

// 		// // Expand to full tag like `my-first-el` manually
// 		// const fullRange = getCustomHyphenatedRange(model, position);
// 		// return fullRange;
// 	},
// });
