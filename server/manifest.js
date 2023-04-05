export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.39d2ca19.js","imports":["_app/immutable/entry/start.39d2ca19.js","_app/immutable/chunks/index.0f361bbd.js","_app/immutable/chunks/singletons.55623789.js","_app/immutable/chunks/index.a9f649c5.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.ba6e8d9c.js","imports":["_app/immutable/entry/app.ba6e8d9c.js","_app/immutable/chunks/index.0f361bbd.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
