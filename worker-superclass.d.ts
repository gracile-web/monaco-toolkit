/* eslint-disable perfectionist/sort-classes */
/* eslint-disable perfectionist/sort-interfaces */
/* eslint-disable perfectionist/sort-modules */

// NOTE: Monaco doesn't offer typings for easy TS worker subclassing.
// This was extracted from official Monaco TS worker class,
// and re-adapted to address this.

import type { worker } from 'monaco-editor-core';
import type * as Ts from 'typescript';

/**
 * Usage, in a ambient file in your project:
 * declare module 'monaco-editor/esm/vs/language/typescript/ts.worker.js' {
 *   export * from '.../worker-superclass';
 * }
 *
 * And in the custom TS worker:
 * declare var self: DedicatedWorkerGlobalScope;
 * ...
 */

// NOTE: Provided in the worker superclass file
declare global {
	interface WorkerGlobalScope {
		ts: typeof Ts;
	}
}

export function initialize(
	function_: (
		context: worker.IWorkerContext,
		data: ICreateData,
	) => TypeScriptWorker,
): void;

interface IExtraLib {
	content: string;
	version: number;
}

interface IExtraLibs {
	[path: string]: IExtraLib;
}

export type IWorkerContext = worker.IWorkerContext;

export interface ICreateData {
	compilerOptions: Ts.CompilerOptions;
	extraLibs: IExtraLibs;
	customWorkerPath?: string;
	inlayHintsOptions?: Ts.UserPreferences;
}

export declare abstract class TypeScriptWorker
	implements Ts.LanguageServiceHost
{
	protected _ctx: worker.IWorkerContext;
	protected _extraLibs: IExtraLibs;
	protected _languageService: Ts.LanguageService;
	protected _compilerOptions: Ts.CompilerOptions;
	protected _inlayHintsOptions?: Ts.UserPreferences;

	public constructor(context: worker.IWorkerContext, createData: ICreateData);

	protected getCompilationSettings(): Ts.CompilerOptions;
	protected getScriptFileNames(): string[];
	protected getScriptVersion(fileName: string): string;
	protected getScriptSnapshot(fileName: string): Ts.IScriptSnapshot | undefined;
	protected getScriptKind?(fileName: string): Ts.ScriptKind;
	protected getCurrentDirectory(): string;
	protected getDefaultLibFileName(options: Ts.CompilerOptions): string;
	protected isDefaultLibFileName(fileName: string): boolean;
	protected readFile(path: string): string | undefined;
	protected fileExists(path: string): boolean;
	protected getLibFiles(): Promise<Record<string, string>>;

	protected getLanguageService(): Ts.LanguageService;
	protected getExtraLibs(): IExtraLibs;

	// Language features
	protected getSyntacticDiagnostics(fileName: string): Promise<Ts.Diagnostic[]>;
	protected getSemanticDiagnostics(fileName: string): Promise<Ts.Diagnostic[]>;
	protected getSuggestionDiagnostics(
		fileName: string,
	): Promise<Ts.Diagnostic[]>;
	protected getCompilerOptionsDiagnostics(
		fileName: string,
	): Promise<Ts.Diagnostic[]>;

	protected getCompletionsAtPosition(
		fileName: string,
		position: number,
	): Promise<Ts.CompletionInfo | undefined>;
	protected getCompletionEntryDetails(
		fileName: string,
		position: number,
		entry: string,
	): Promise<Ts.CompletionEntryDetails | undefined>;
	protected getSignatureHelpItems(
		fileName: string,
		position: number,
		options: Ts.SignatureHelpItemsOptions | undefined,
	): Promise<Ts.SignatureHelpItems | undefined>;
	protected getQuickInfoAtPosition(
		fileName: string,
		position: number,
	): Promise<Ts.QuickInfo | undefined>;
	protected getDocumentHighlights(
		fileName: string,
		position: number,
		filesToSearch: string[],
	): Promise<readonly Ts.DocumentHighlights[] | undefined>;
	protected getDefinitionAtPosition(
		fileName: string,
		position: number,
	): Promise<readonly Ts.DefinitionInfo[] | undefined>;
	protected getReferencesAtPosition(
		fileName: string,
		position: number,
	): Promise<Ts.ReferenceEntry[] | undefined>;
	protected getNavigationTree(
		fileName: string,
	): Promise<Ts.NavigationTree | undefined>;

	protected getFormattingEditsForDocument(
		fileName: string,
		// NOTE: We don't know if monaco will honor the newer interfaces
		// eslint-disable-next-line @typescript-eslint/no-deprecated
		options: Ts.FormatCodeOptions,
	): Promise<Ts.TextChange[]>;
	protected getFormattingEditsForRange(
		fileName: string,
		start: number,
		end: number,
		// NOTE: We don't know if monaco will honor the newer interfaces
		// eslint-disable-next-line @typescript-eslint/no-deprecated
		options: Ts.FormatCodeOptions,
	): Promise<Ts.TextChange[]>;
	protected getFormattingEditsAfterKeystroke(
		fileName: string,
		position: number,
		ch: string,
		// NOTE: We don't know if monaco will honor the newer interfaces
		// eslint-disable-next-line @typescript-eslint/no-deprecated
		options: Ts.FormatCodeOptions,
	): Promise<Ts.TextChange[]>;

	protected findRenameLocations(
		fileName: string,
		position: number,
		findInStrings: boolean,
		findInComments: boolean,
		providePrefixAndSuffixTextForRename: boolean,
	): Promise<readonly Ts.RenameLocation[] | undefined>;

	protected getRenameInfo(
		fileName: string,
		position: number,
		// NOTE: We don't know if monaco will honor the newer interfaces
		// eslint-disable-next-line @typescript-eslint/no-deprecated
		options: Ts.RenameInfoOptions,
	): Promise<Ts.RenameInfo>;

	protected getEmitOutput(
		fileName: string,
		emitOnlyDtsFiles?: boolean,
		forceDtsEmit?: boolean,
	): Promise<Ts.EmitOutput>;

	protected getCodeFixesAtPosition(
		fileName: string,
		start: number,
		end: number,
		errorCodes: number[],
		// NOTE: We don't know if monaco will honor the newer interfaces
		// eslint-disable-next-line @typescript-eslint/no-deprecated
		formatOptions: Ts.FormatCodeOptions,
	): Promise<readonly Ts.CodeFixAction[]>;

	protected updateExtraLibs(extraLibs: IExtraLibs): Promise<void>;

	protected provideInlayHints(
		fileName: string,
		start: number,
		end: number,
	): Promise<readonly Ts.InlayHint[]>;
}
