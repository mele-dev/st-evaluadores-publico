export enum NotificationType {
  Success = "success",
  Error = "danger",
  Info = "info",
  Warning = "warning"
}

export interface Notification {
  type: NotificationType;
  message: string;
}