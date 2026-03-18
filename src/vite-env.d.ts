/// <reference types="vite/client" />

declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(target: string | Element | (string | Element)[], vars?: any);
    revert(): void;
    chars: Element[];
    words: Element[];
    lines: Element[];
  }
}

declare module 'gsap-trial/ScrollSmoother' {
  export const ScrollSmoother: any;
}
