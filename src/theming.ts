import { shikiToMonaco } from '@shikijs/monaco';

import { setupShikiMonaco } from './syntax/shiki.js';
import type { Monaco } from './monaco.js';

export async function setupTheming(
	monaco: typeof Monaco,
	options: { lit: boolean },
): Promise<string> {
	const { lit = true } = options;
	const { customTheme, getHighlighter } = await setupShikiMonaco({ lit });
	const langs = [
		'javascript',
		'typescript',
		'tsx',
		'jsx',
		'json',
		'jsonc',
		'css',
		'markdown',
		// 'html', // NOTE: Overriden
	];

	if (lit) langs.push('lit-html');

	const highlighter = await getHighlighter({
		themes: [customTheme],
		langs,
		langAlias: {
			javascript: 'jsx',
			typescript: 'tsx',
			jsonc: 'json',
		},
	});

	monaco.languages.register({ id: 'jsx' });
	monaco.languages.register({ id: 'tsx' });

	shikiToMonaco(highlighter, monaco as any);

	return customTheme.name;
}
