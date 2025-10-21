import { createOnigurumaEngine, loadWasm, type ThemeInput } from 'shiki';
import langMarkdown from 'shiki/langs/markdown.mjs';
import langJsx from 'shiki/langs/jsx.mjs';
import langTsx from 'shiki/langs/tsx.mjs';
import langTypescript from 'shiki/langs/typescript.mjs';
import langJavascript from 'shiki/langs/javascript.mjs';
import langHtml from 'shiki/langs/html.mjs';
import langCss from 'shiki/langs/css.mjs';
import langJson from 'shiki/langs/json.mjs';

import themeGithubDark from 'shiki/themes/github-dark.mjs';
import themeGithubLight from 'shiki/themes/github-light.mjs';

import { createdBundledHighlighter } from 'shiki';
import { litShikiLanguages } from './literals-grammars.js';
import type { IRawThemeSetting } from 'shiki/textmate';

export async function setupShikiMonaco(options: { lit: boolean }) {
	await loadWasm(import('shiki/wasm'));

	const getHighlighter = createdBundledHighlighter({
		themes: {
			'github-dark': themeGithubDark,
			'github-light': themeGithubLight,
		},

		langs: {
			markdown: langMarkdown,
			jsx: langJsx,
			tsx: langTsx,
			typescript: langTypescript,
			javascript: langJavascript,
			html: langHtml,
			css: langCss,
			json: langJson,

			...((options.lit ? litShikiLanguages : []) as any),
		},
		engine: () => createOnigurumaEngine(),
	});

	const jsxLikeHtmlOverrides = [
		{
			scope: [
				'punctuation.definition.tag.begin.html',
				'punctuation.definition.tag.end.html',
			],
			// NOTE: (variable.parameter.function)
			settings: { foreground: '#e1e4e8' },
		},
		// NOTE: (keyword)
		{
			scope: ['punctuation.separator.key-value.html'],
			settings: { foreground: '#f97583' },
		},
	];
	const ghDark = themeGithubDark;

	const commentMarkers: IRawThemeSetting[] = [
		// {
		// 	scope: ['comment.keyword.mark.ts'],
		// 	settings: {
		// 		foreground: '#666',
		// 		fontStyle: '',
		// 	},
		// },
		{
			scope: ['comment.mark.trailing.ts'],
			settings: {
				foreground: '#ff8800',
				fontStyle: 'bold italic',
			},
		},

		{
			scope: 'markup.heading.markdown',
			settings: {
				foreground: '#79B8EE',
				fontStyle: 'bold',
			},
		},
		// {
		// 	scope: 'text.html.markdown',
		// 	settings: {
		// 		foreground: '#E1E4E8',
		// 	},
		// },
		// {
		// 	scope: 'meta.embedded.block.markdown',
		// 	settings: {
		// 		foreground: '#F00',
		// 	},
		// },
		{
			scope: 'meta.paragraph.markdown',
			settings: {
				foreground: '#E1E4E8',
			},
		},
		{
			scope: 'markup.quote.markdown meta.paragraph.markdown',
			settings: {
				foreground: '#85E89D',
			},
		},
		// {
		// 	scope: 'markup.quote.markdown',
		// 	settings: {
		// 		foreground: '#000',
		// 		fontStyle: 'italic',
		// 	},
		// },
		// {
		// 	scope: 'meta.paragraph.markdown',
		// 	settings: {
		// 		foreground: '#cccccc',
		// 	},
		// },
		// {
		// 	scope: 'string',

		// 	settings: {
		// 		foreground: '#cccccc',
		// 	},
		// },
		// {
		// 	scope: 'string.quoted.double.html',
		// 	settings: {
		// 		// TODO: Deduplicate pre-existing scope, so we don't have to tweak
		// 		// original ghDark theme color a bit to make the "poke" to shiki.
		// 		foreground: '#9ECBFE', // 9ECBFF => No changes as it's the original.
		// 	},
		// },
		{
			scope: 'entity.name.section.markdown',
			settings: {
				foreground: '#79B8EE',
				fontStyle: 'bold',
			},
		},

		// FIXME:
		{
			scope: 'markup.bold.markdown',
			settings: {
				fontStyle: 'bold',
				foreground: '#E1E4E7',
			},
		},
		{
			scope: 'markup.italic.markdown',
			settings: {
				foreground: '#E1E4E7',
				fontStyle: 'italic',
			},
		},
	];

	const theme = 'custom-theme';

	console.debug({ ghDark });

	const customTheme = {
		...ghDark,

		colors: {
			...ghDark.colors,
			'editor.hoverHighlightBackground': '#ff4d0036',
		},
		name: theme,
		tokenColors: [
			...(ghDark.tokenColors || []),
			...jsxLikeHtmlOverrides,
			...commentMarkers,
		],
	} as const satisfies ThemeInput;

	return { getHighlighter, customTheme };
}
