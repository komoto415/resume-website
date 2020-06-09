export interface PageMeta {
    penId: string;
    pageTitle: string;
    imgSrc: string;
    scripts: PageScript[];
}

export interface PageScript {
    name: string;
    cloud: string;
    desc: string;
}