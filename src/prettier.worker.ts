console.log('Prettier worker starting…');

import { setup } from 'monaco-prettier/worker';
import * as typescript from 'prettier/plugins/typescript';
import * as estree from 'prettier/plugins/estree';
import * as html from 'prettier/plugins/html';
import * as css from 'prettier/plugins/postcss';
import { format, type Options } from 'prettier';

setup([
	//
	estree,
	typescript,

	html,
	css,
]);

console.log('Prettier worker: OK');

export async function formatTs(
	text: string,
	options?: Options,
): Promise<string> {
	console.log({ format });
	const result = await format(text, {
		filepath: '/formatted.ts',

		parser: 'typescript',
		plugins: [estree, typescript, html, css],

		...options,
	});

	return result;
}
