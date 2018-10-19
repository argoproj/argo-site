const elasticlunr = require('elasticlunr');
import * as React from 'react';

let searchIndexPromise: Promise<any> = null;

export class DocsFinder extends React.Component<{
    searchText: string;
    children: (docs: { path: string, score: number, body: string, title: string}[]) => React.ReactNode;
}, { searchIndex: any }> {

    constructor(props: any) {
        super(props);
        this.state = { searchIndex: null };
    }

    public componentDidMount() {
        if (searchIndexPromise === null) {
            searchIndexPromise = fetch('/searchIndex.json').then((res) => res.json()).then((searchIndexData) => {
                return elasticlunr.Index.load(searchIndexData);
            });
        }
        searchIndexPromise.then((index) => {
            this.setState({ searchIndex: index });
        });
    }

    public render() {
        return this.state.searchIndex && (
            this.props.children(this.state.searchIndex.search(this.props.searchText).map((item: any) => {
                const doc = this.state.searchIndex.documentStore.getDoc(item.ref);
                return {
                    path: item.ref,
                    score: item.score,
                    body: doc.body,
                    title: doc.title,
                };
            }))
        ) || (
            <p>Loading...</p>
        );
    }
}
