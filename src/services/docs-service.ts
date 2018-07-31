import * as path from 'path';

const { docs, normalizeDocPath } = require('../../docs-config.js');

export interface DocEntry {
    path: string;
    title: string;
    children?: DocEntry[];
}

export interface DocInfo extends DocEntry {
    parent?: DocInfo;
    proj: string;
}

interface DocsIndex { [docPathPath: string]: DocInfo; }

function indexDocs(docsConf: { [dirPath: string]: DocEntry[] }): DocsIndex {
    const index: DocsIndex = {};
    for (const proj of Object.keys(docsConf)) {
        for (const entry of docsConf[proj]) {
            const toProcess = [{...entry, parent: null as DocInfo, proj, path: normalizeDocPath(path.join(proj, entry.path))}];
            while (toProcess.length > 0) {
                const next = toProcess.pop();
                index[next.path] = next;
                for (const child of (next.children || [])) {
                    toProcess.push({...child, parent: next, proj, path: normalizeDocPath(path.join(proj, child.path))});
                }
            }
        }
    }
    return index;
}

export class DocsService {
    private idx: DocsIndex;

    private get index(): DocsIndex {
        if (!this.idx) {
            this.idx = indexDocs(docs);
        }
        return this.idx;
    }

    public defaultDoc(proj: string) {
        return normalizeDocPath(path.join(proj, docs[proj][0].path));
    }

    public projs() {
        return Object.keys(docs);
    }

    public byPath(docPath: string): DocInfo {
        return this.index[normalizeDocPath(docPath)];
    }

    public roots(proj: string) {
        return this.all(proj).filter((item) => !item.parent);
    }

    public all(proj: string): DocInfo[] {
        return Object.keys(this.index).map((key) => this.index[key]).filter((item) => item.proj === proj);
    }
}
