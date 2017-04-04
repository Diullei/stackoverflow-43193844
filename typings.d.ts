export interface ShowSection {
    key: SectionName;
}

export type SectionName =  "webview" | "index" | "settings";

declare global {
    namespace Electron {
        interface WebContents extends NodeJS.EventEmitter {
            send(channel: "show-section", arg: ShowSection): void;
        }
    }
}
