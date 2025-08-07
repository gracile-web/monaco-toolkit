import { configureMonacoPrettier } from 'monaco-prettier';

import * as monaco from 'monaco-editor';

export const DEFAULT_PRINT_WIDTH = 80;

export function setupFormatting(printWidth?: number) {
	// Disable the builtin formatting providers.

	monaco.languages.css.cssDefaults.setModeConfiguration({
		documentFormattingEdits: false,
		documentRangeFormattingEdits: false,
	});
	monaco.languages.html.htmlDefaults.setModeConfiguration({
		documentFormattingEdits: false,
		documentRangeFormattingEdits: false,
	});

	monaco.languages.json.jsonDefaults.setModeConfiguration({
		documentFormattingEdits: false,
		documentRangeFormattingEdits: false,
	});

	monaco.languages.typescript.javascriptDefaults.setModeConfiguration({
		documentRangeFormattingEdits: false,
	});
	// NOTE: This one get the editor stuck, IDK why
	// monaco.languages.typescript.typescriptDefaults.setModeConfiguration({
	// 	documentRangeFormattingEdits: false,
	// });

	configureMonacoPrettier(monaco, {
		parsers: {
			javascript: 'babel',
			javascriptreact: 'babel',
			typescript: 'typescript',
			typescriptreact: 'typescript',
			html: 'html',
			css: 'css',
		},

		prettier: {
			printWidth,
			proseWrap: 'always',
			singleQuote: true,
		},
	});

	return printWidth ?? DEFAULT_PRINT_WIDTH;
}
