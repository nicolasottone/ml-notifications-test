/**
 * Notification returned by mercado libre
 */
export type NotificationType = {
  _id: string
  resource: string
  user_id: number
  topic: string
  application_id: number
  attempts: number
  sent: string
  received: string
}
