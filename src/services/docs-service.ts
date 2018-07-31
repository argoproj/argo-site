import * as path from 'path';

interface Projects { [dirPath: string]: { docs: DocEntry[], title: string; description: string; }; }

const { projs, normalizeDocPath }: { projs: Projects, normalizeDocPath: (input: string) => string } = require('../../docs-config.js');

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

function indexDocs(input: Projects): DocsIndex {
    const index: DocsIndex = {};
    for (const proj of Object.keys(input)) {
        for (const entry of input[proj].docs) {
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
            this.idx = indexDocs(projs);
        }
        return this.idx;
    }

    public defaultDoc(proj: string) {
        return normalizeDocPath(path.join(proj, projs[proj].docs[0].path));
    }

    public projs() {
        return Object.keys(projs);
    }

    public byPath(docPath: string): DocInfo {
        docPath = normalizeDocPath(docPath);
        let doc = this.index[docPath];
        if (!doc) {
            doc = {
                parent: null,
                children: [],
                path: docPath,
                proj: docPath.split('/')[0],
                title: path.basename(docPath),
            };
        }
        return doc;
    }

    public roots(proj: string) {
        return this.all(proj).filter((item) => !item.parent);
    }

    public all(proj: string): DocInfo[] {
        return Object.keys(this.index).map((key) => this.index[key]).filter((item) => item.proj === proj);
    }

    public projInfo(proj: string): { title: string; description: string; } {
        return { title: projs[proj].title, description: projs[proj].description };
    }
}
