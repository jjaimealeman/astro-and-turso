import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { g as server_default, h as deserializeManifest } from './chunks/astro.e128b1b0.mjs';
import { _ as _page0, a as _page1, b as _page2, c as _page3 } from './chunks/pages/all.9467fd21.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'string-width';
import '@astrojs/rss';
/* empty css                                 *//* empty css                                 */import '@libsql/client/web';
import 'import-meta-resolve';
import 'path';
import 'url';
import 'github-slugger';
import 'unist-util-visit';
import 'prismjs';
import 'prismjs/components/index.js';
import 'shiki';
import 'rehype-raw';
import 'rehype-stringify';
import 'remark-gfm';
import 'remark-parse';
import 'remark-rehype';
import 'remark-smartypants';
import 'unified';
import 'vfile';

const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/rss.xml.ts", _page1],["src/pages/about.astro", _page2],["src/pages/post/[slug].astro", _page3],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.b5bd035c.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","type":"endpoint","pattern":"^\\/rss\\.xml$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.ts","pathname":"/rss.xml","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.b5bd035c.css"},{"type":"external","src":"/_astro/about.26bc61b1.css"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.b5bd035c.css"},{"type":"external","src":"/_astro/about.26bc61b1.css"}],"routeData":{"route":"/post/[slug]","type":"page","pattern":"^\\/post\\/([^/]+?)\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/post/[slug].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://example.com","base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"componentMetadata":[["/home/jaime/www/turso-demo/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/jaime/www/turso-demo/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/home/jaime/www/turso-demo/src/pages/post/[slug].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(s,c,i)=>{let o=async()=>{await(await s())()},n=new IntersectionObserver(e=>{for(let t of e)if(t.isIntersecting){n.disconnect(),o();break}});for(let e=0;e<i.children.length;e++){let t=i.children[e];n.observe(t)}};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","astro:scripts/before-hydration.js":""},"assets":["/_astro/about.b5bd035c.css","/_astro/about.26bc61b1.css","/favicon.svg","/placeholder-about.jpg","/placeholder-hero.jpg","/placeholder-social.jpg"]}), {
	pageMap: pageMap,
	renderers: renderers,
	
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
