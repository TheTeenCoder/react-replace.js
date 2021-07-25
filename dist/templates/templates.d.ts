declare type Template = {
    css?: string;
    className?: string;
};
export declare const Url: ({ className, css }: Template) => {
    text: RegExp;
    css: string;
    className: string;
    tag: string;
};
export {};
