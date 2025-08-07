import { htmlGrammar as rawHtml } from './html.tm-language.js';

// NOTE: It's already patch in the tm-language itself, keeping this just in case ("CUSTOM")
export const patchedHtmlGrammar = {
	...rawHtml,
	repository: {
		...rawHtml.repository,
		['tags-valid']: {
			patterns: [...(rawHtml.repository?.['tags-valid']?.patterns || [])],
		},
	},
};
