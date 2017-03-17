export type LiveMessageType = "update" | "add" | "remove";
export type GlobalID = string;
export type LiveMessageID = string;
export interface ILiveMessage {
    id: LiveMessageID;
    kind: LiveMessageType;
    globalId: GlobalID;
    data: any;
}
export interface ILiveRemoveMessage extends ILiveMessage {
    kind: "remove";
}
export interface ILiveUpdateMessage extends ILiveMessage {
    kind: "update";
}
export interface ILiveAddMessage extends ILiveMessage {
    kind: "add";
}
export type LiveMessage = ILiveUpdateMessage | ILiveAddMessage | ILiveRemoveMessage;
