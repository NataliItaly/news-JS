export default function getElement<T extends HTMLElement>(parent: ParentNode, selector: string): T {
    const element = parent.querySelector<T>(selector);

    if (!element) {
        throw new Error(`Element not found: ${selector}`);
    }

    return element;
}
