import * as monaco from 'monaco-editor';
import { DEFAULT_PRINT_WIDTH } from './formatting.js';
import { toFileUrl } from './paths.js';

export const commonEditorSettings: monaco.editor.IStandaloneEditorConstructionOptions =
	{
		theme: 'custom-theme',
		// theme: 'vs-dark',
		tabSize: 2,
		automaticLayout: true,
		scrollBeyondLastLine: false,
		cursorSmoothCaretAnimation: 'on',
		cursorBlinking: 'expand',
		cursorWidth: 2,
		minimap: { autohide: true },
		renderLineHighlight: 'all',
		fontSize: 14,
		formatOnPaste: true,
		renderWhitespace: 'trailing',
		renderFinalNewline: 'on',
		renderControlCharacters: true,
		rulers: [DEFAULT_PRINT_WIDTH],

		hover: { delay: 250, above: true },

		// autoClosingQuotes: 'always',
		// wordSeparators: '`~!#$%^&*()=+[{]}\\|;:\'",.<>/?',
		// wordSeparators: '`~!@#$%^&*()=+[{]}\\|;:\'",.<>/?',

		// FIXME:
		inlayHints: { enabled: 'on' /* padding: true */ },
	};

export function addExtraLibs(extraLibs: Record<string, string>) {
	Object.entries(extraLibs).forEach(([fileName, content]) => {
		const filePath = toFileUrl(fileName);

		monaco.languages.typescript.typescriptDefaults.addExtraLib(
			content,
			filePath,
		);
	});
}
