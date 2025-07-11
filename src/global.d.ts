export {}; // make this file a module

declare global {
  interface Window {
    ET: {
      /** Fires a custom event */
      track(eventName: string, properties?: Record<string, any>): void;
      /** Returns the anonymous visitor ID as a string */
      getAnonymousId(): string;
    };
  }
}