/** Checks generated HTML, links and assets, including GitHub Pages base paths. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pages, company } from '../src/data.ts';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const dist=path.join(root,'dist');
const actualBase = fs.readFileSync(path.join(dist,'index.html'),'utf8').match(/href="(\/[^\"]*?)styles\.css"/)?.[1];
const base=actualBase??'/';let failed=0, checked=0;
function expect(test,message){checked++;if(!test){failed++;console.error('✗',message);}}
function localTarget(url){let p=url.split(/[?#]/)[0];if(p.startsWith('#')||/^(mailto:|tel:|https?:|data:)/.test(p))return null;
 if(!p.startsWith(base))return {invalidBase:p};
 p=p.substring(base.length);
 if(!p||p.endsWith('/'))p+='index.html';
 return path.join(dist,decodeURIComponent(p));
}
for(const pg of pages){
 const f=path.join(dist,pg.route,'index.html');expect(fs.existsSync(f),`Missing page ${pg.route}`);if(!fs.existsSync(f))continue;
 const html=fs.readFileSync(f,'utf8');expect((html.match(/<h1(?:\s|>)/g)||[]).length===1,`Incorrect h1 ${pg.route}`);expect(html.includes('<html lang="es">'),`lang missing ${pg.route}`);expect(html.includes('name="description"'),`description missing ${pg.route}`);expect(!/Haz clic para editar|lorem ipsum|href="#"|src=""|<form\b/i.test(html),`Placeholder or dummy form ${pg.route}`);
 for(const c of company.contactChannels)expect(!html.includes(c.address),`Pending email published on ${pg.route}`);
 const re=/<(?:a|link|script|img)\b[^>]*?\b(?:href|src)="([^"]+)"/g;
 for(const match of html.matchAll(re)){
  const href=match[1],target=localTarget(href);
  if(target&&typeof target==='object')expect(!target.invalidBase,`Wrong base href ${href} in ${pg.route}`);
  if(typeof target==='string') expect(fs.existsSync(target),`Broken link ${href} in ${pg.route}`);
 }
}
const errFile=path.join(dist,'404.html');expect(fs.existsSync(errFile),'Missing 404');
expect(fs.existsSync(path.join(dist,'.nojekyll')),'Missing .nojekyll');
expect(fs.existsSync(path.join(dist,'robots.txt')),'Missing robots.txt');
const expectedPaths=pages.map(x=>x.route);expect(new Set(expectedPaths).size===expectedPaths.length,'Duplicated routes');
if(failed){console.error(`${failed}/${checked} checks failed`);process.exit(1)}
console.log(`PASS ${checked} static checks · ${pages.length} routes · base ${base}`);
