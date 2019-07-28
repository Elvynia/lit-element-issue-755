import { LitElement, html, property, customElement } from "lit-element";

@customElement('my-child')
export class ChildElement extends LitElement {
    @property()
    prop1: string;

    constructor() {
        super();
        this.prop1 = 'VALUE';
    }

    render() {
        return html`<h2>${this.prop1}</h2>`;
    }
}