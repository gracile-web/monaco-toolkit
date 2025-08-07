import { setupCompilerOptions } from './compiler.js';
import { addExtraLibs } from './editor-settings.js';
import { setupFormatting } from './formatting.js';
import { setupEmmet, setupKeybindings } from './keybindings.js';
import { setupWorkers } from './setup-workers.js';

import { setupTheming } from './theming.js';
export { commonEditorSettings } from './editor-settings.js';

/**
 * - `monaco-editor/esm/vs/language/typescript/ts.worker.js`
 * - `monaco-editor/esm/vs/language/json/json.worker.js`
 * - `monaco-editor/esm/vs/editor/editor.worker.js`
 */
export async function setupMonacoEnvironment(
	extraLibs: Record<string, string>,
	options: {
		tsWorkerUrl: URL;
		defaultWorkerUrl: URL;
		jsonWorkerUrl: URL;
		prettierWorkerUrl: URL;
		lit: boolean;
	},
) {
	setupEmmet();
	setupKeybindings();
	setupFormatting();
	setupCompilerOptions();
	addExtraLibs(extraLibs);

	await setupTheming(options);

	return setupWorkers(options);
}
