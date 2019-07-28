import { LitElement, html, customElement } from "lit-element";

@customElement('my-parent')
class ParentElement extends LitElement {

    render() {
        return html`<slot></slot>`;
    }

    async connectedCallback() {
        super.connectedCallback();
        await super.updateComplete;
        let children: any[] = Array.from(this.querySelectorAll('my-child'));
        for (let child of children) {
            // child.updateComplete -> gives undefined at this point.
            // But ok if wrapping in a setTimeout.
            console.log('child.updateComplete -> ', child.updateComplete);
            await child.updateComplete;
            // Any child property even initialized in constructor also gives undefined.
            console.log('Child property value : %s', child.prop1)
        }
    }
}