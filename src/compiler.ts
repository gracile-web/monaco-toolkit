import * as monaco from 'monaco-editor';

export function setupCompilerOptions() {
	monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
		noEmit: true,
		strict: true,

		skipLibCheck: true,

		experimentalDecorators: true,
		useDefineForClassFields: false,

		// NOTE: Intentionnaly emptied
		lib: [],
		types: [],

		target: monaco.languages.typescript.ScriptTarget.ES2020,
		module: monaco.languages.typescript.ModuleKind.ESNext,
		moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,

		// jsx: monaco.languages.typescript.JsxEmit.ReactJSX,
		jsx: monaco.languages.typescript.JsxEmit.Preserve,
	});
}

export const tsDeps = [
	'/node_modules/typescript/package.json',
	'/node_modules/typescript/lib/lib.d.ts', // NOTE: Not needed, but just in case
	'/node_modules/typescript/lib/lib.es5.d.ts',
	'/node_modules/typescript/lib/lib.dom.d.ts',
	'/node_modules/typescript/lib/lib.dom.iterable.d.ts',
	'/node_modules/typescript/lib/lib.webworker.importscripts.d.ts',
	'/node_modules/typescript/lib/lib.scripthost.d.ts',
	'/node_modules/typescript/lib/lib.es2015.collection.d.ts',
	'/node_modules/typescript/lib/lib.es2015.generator.d.ts',
	'/node_modules/typescript/lib/lib.es2015.iterable.d.ts',
	'/node_modules/typescript/lib/lib.es2015.promise.d.ts',
	'/node_modules/typescript/lib/lib.es2015.proxy.d.ts',
	'/node_modules/typescript/lib/lib.es2015.reflect.d.ts',
	'/node_modules/typescript/lib/lib.es2015.symbol.d.ts',
	'/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts',
	'/node_modules/typescript/lib/lib.es2016.array.include.d.ts',
	'/node_modules/typescript/lib/lib.es2017.object.d.ts',
	'/node_modules/typescript/lib/lib.es2017.sharedmemory.d.ts',
	'/node_modules/typescript/lib/lib.es2017.string.d.ts',
	'/node_modules/typescript/lib/lib.es2017.intl.d.ts',
	'/node_modules/typescript/lib/lib.es2017.typedarrays.d.ts',
	'/node_modules/typescript/lib/lib.es2018.asyncgenerator.d.ts',
	'/node_modules/typescript/lib/lib.es2018.asynciterable.d.ts',
	'/node_modules/typescript/lib/lib.es2018.intl.d.ts',
	'/node_modules/typescript/lib/lib.es2018.promise.d.ts',
	'/node_modules/typescript/lib/lib.es2018.regexp.d.ts',
	'/node_modules/typescript/lib/lib.es2019.array.d.ts',
	'/node_modules/typescript/lib/lib.es2019.object.d.ts',
	'/node_modules/typescript/lib/lib.es2019.string.d.ts',
	'/node_modules/typescript/lib/lib.es2019.symbol.d.ts',
	'/node_modules/typescript/lib/lib.es2020.bigint.d.ts',
	'/node_modules/typescript/lib/lib.es2020.intl.d.ts',
	'/node_modules/typescript/lib/lib.es2020.promise.d.ts',
	'/node_modules/typescript/lib/lib.es2020.sharedmemory.d.ts',
	'/node_modules/typescript/lib/lib.es2020.string.d.ts',
	'/node_modules/typescript/lib/lib.es2020.symbol.wellknown.d.ts',
	'/node_modules/typescript/lib/lib.es2021.intl.d.ts',
	'/node_modules/typescript/lib/lib.es2021.promise.d.ts',
	'/node_modules/typescript/lib/lib.es2021.string.d.ts',
	'/node_modules/typescript/lib/lib.es2021.weakref.d.ts',
	'/node_modules/typescript/lib/lib.es2022.d.ts', // NOTE: Not strictly useful? But used for default.
	'/node_modules/typescript/lib/lib.es2022.array.d.ts',
	'/node_modules/typescript/lib/lib.es2022.error.d.ts',
	'/node_modules/typescript/lib/lib.es2022.intl.d.ts',
	'/node_modules/typescript/lib/lib.es2022.object.d.ts',
	'/node_modules/typescript/lib/lib.es2022.regexp.d.ts',
	'/node_modules/typescript/lib/lib.es2022.sharedmemory.d.ts',
	'/node_modules/typescript/lib/lib.es2022.string.d.ts',
	'/node_modules/typescript/lib/lib.es2022.typedarray.d.ts',
	'/node_modules/typescript/lib/lib.decorators.d.ts',
	'/node_modules/typescript/lib/lib.decorators.legacy.d.ts',
] as const;
