export function setupWorkers(options: {
	tsWorkerUrl: URL;
	defaultWorkerUrl: URL;
	jsonWorkerUrl: URL;
	prettierWorkerUrl: URL;
}) {
	const { defaultWorkerUrl, jsonWorkerUrl, prettierWorkerUrl, tsWorkerUrl } =
		options;

	const tsWorker = new Worker(tsWorkerUrl, { type: 'module' });
	globalThis.window.MonacoEnvironment = {
		getWorker: function (_, label) {
			if (label === 'typescript' || label === 'javascript' || label === 'tsx') {
				return tsWorker;
			}

			if (label === 'json')
				return new Worker(jsonWorkerUrl, { type: 'module' });

			if (label === 'prettier')
				return new Worker(prettierWorkerUrl, { type: 'module' });

			return new Worker(defaultWorkerUrl, { type: 'module' });
		},
	};

	return { tsWorker };
}
