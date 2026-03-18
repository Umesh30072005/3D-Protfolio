/// <reference types="vite/client" />

declare module 'gsap/SplitText' {
  export class SplitText {
    constructor(target: string | Element | (string | Element)[], vars?: any);
    revert(): void;
    chars: Element[];
    words: Element[];
    lines: Element[];
  }
}

declare module 'gsap/ScrollSmoother' {
  export const ScrollSmoother: any;
}
