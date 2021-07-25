import * as React from 'react';
declare type ReplaceObject = {
    text: string;
    css: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    className?: string;
};
declare type Props = {
    children: React.ReactNode;
    replace: Array<ReplaceObject>;
};
export default class Replace extends React.Component<Props, {}> {
    renderChildren(children: string): string;
    parse(children: any): any;
    render(): JSX.Element;
}
export {};
