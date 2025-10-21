import { setupCompilerOptions } from './compiler.js';
import { addExtraLibs } from './editor-settings.js';
import { setupFormatting } from './formatting.js';
import { setupEmmet, setupKeybindings } from './keybindings.js';
import type { Monaco } from './monaco.js';

import { setupTheming } from './theming.js';
export { commonEditorSettings } from './editor-settings.js';

export async function setupMonacoEnvironment(
	monaco: typeof Monaco,
	extraLibs: Record<string, string>,
	options: {
		lit: boolean;
	},
) {
	setupEmmet();
	setupKeybindings(monaco);
	setupFormatting(monaco);
	setupCompilerOptions(monaco);
	addExtraLibs(monaco, extraLibs);

	await setupTheming(monaco, options);
}
