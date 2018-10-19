const marked = require('marked')
const elasticlunr = require('elasticlunr');
const fs = require('fs');
const glob = require('glob');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const { normalizeDocPath } = require('../docs-config');

const [, , docsPath] = process.argv;

const index = elasticlunr(function () {
    this.addField('title');
    this.addField('body');
    this.setRef('id');
});

glob.sync(`${docsPath}/**/*.md`).map((docPath) => ({
    path: docPath,
    content: fs.readFileSync(docPath, 'utf8'),
})).forEach((item) => {
    const docPath = normalizeDocPath(item.path.substring(docsPath.length));
    const html = marked(item.content);

    let dom = new JSDOM(html);
    let content = dom.window.document.body.textContent;
    index.addDoc({
        id: docPath,
        title: docPath,
        body: content,
    });
});

console.info(JSON.stringify(index));
