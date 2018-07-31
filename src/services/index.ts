import { DocsService } from './docs-service';

export * from './docs-service';

export const services = {
    docs: new DocsService(),
};
