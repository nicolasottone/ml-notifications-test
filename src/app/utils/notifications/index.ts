import { NotificationType } from './types'

/**
 * Retrieve the resource data for a given notification.
 *
 * @param {NotificationType} notification - The notification object that includes the resource path.
 * @returns {Promise<any|null>} The data from the requested resource, or null in case of an error.
 */
export async function getNotificationResource(notification: NotificationType) {
  try {
    const response = await fetch(`https://api.mercadolibre.com${notification.resource}?api_version=4`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`
      }
    })
    if (!response.ok) {
      console.error(`Error fetching ${notification.resource}, details:`, response.statusText)
      return null
    }

    return await response.json()
  } catch (error) {
    console.error(`Error fetching ${notification.resource}, details:`, error)
    return null
  }
}

/**
 * Retrieve the missed question notifications. Limit 20 by default
 *
 * @returns {Promise<any|null>} The data from the notifications fetch, or null in case of an error.
 */
export async function getMissedQuestionsNotifications() {
  try {
    const response = await fetch(
      `https://api.mercadolibre.com/missed_feeds?app_id=${process.env.ML_APP_ID}&topic=questions&limit=20`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`
        }
      }
    )
    if (!response.ok) {
      console.error(`Error fetching missed question notifications, details:`, response.statusText)
      return null
    }

    return await response.json()
  } catch (error) {
    console.error(`Error fetching missed question notifications, details:`, error)
    return null
  }
}
