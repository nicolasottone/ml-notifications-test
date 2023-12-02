import { ApiQuestionResponse, QuestionDetailsType } from './types'

/**
 * Fetches details of a specific question.
 * @param {string} questionId - The ID of the question for which details are to be obtained.
 * @returns {Promise<QuestionDetailsType|null>} - question object or null if there is an error.
 * @throws {Error} - Throws an error if there is an issue making the API request.
 */
export async function getQuestionDetails(questionId: string) {
  try {
    const response = await fetch(`https://api.mercadolibre.com/questions/${questionId}?api_version=4`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`
      }
    })
    if (!response.ok) {
      console.error(`Error fetching question ${questionId} details:`, response.statusText)
      return null
    }
    const question: QuestionDetailsType = await response.json()
    return question
  } catch (error) {
    console.error(`Error fetching question ${questionId} details:`, error)
    return null
  }
}

/**
 * Fetches questions made by a user for a specific item,  sorted in ascending order by creation date.
 * @param {string} itemId - The ID of the item for which questions are to be obtained.
 * @param {string} userId - The ID of the user who made the questions.
 * @returns {Promise<QuestionDetailsType[]|null>} - questions array or null if there is an error.
 * @throws {Error} - Throws an error if there is an issue making the API request.
 */
export async function getQuestionsByItemAndUser(itemId: string, userId: string) {
  try {
    const response = await fetch(
      `https://api.mercadolibre.com/questions/search?item=${itemId}&from=${userId}&sort_fields=date_created&sort_types=ASC&api_version=4`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`
        }
      }
    )
    if (!response.ok) {
      console.error(`Error fetching questions from item: ${itemId} & user: ${userId}`, response.statusText)
      return null
    }
    const data: ApiQuestionResponse = await response.json()
    return data.questions
  } catch (error) {
    console.error(`Error fetching questions from item: ${itemId} & user: ${userId}`, error)
    return null
  }
}

/**
 * Fetches questions associated with a specific item, sorted in ascending order by creation date.
 * @param {string} itemId - The ID of the item for which questions are to be obtained.
 * @returns {Promise<QuestionDetailsType[]|null>} - Questions array or null if there is an error.
 * @throws {Error} - Throws an error if there is an issue making the API request.
 */
export async function getQuestionsByItem(itemId: string) {
  try {
    const response = await fetch(
      `https://api.mercadolibre.com/questions/search?item=${itemId}&sort_fields=date_created&sort_types=ASC&api_version=4`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`
        }
      }
    )
    if (!response.ok) {
      console.error(`Error fetching questions from item: ${itemId}`, response.statusText)
      return null
    }
    const data: ApiQuestionResponse = await response.json()
    return data.questions
  } catch (error) {
    console.error(`Error fetching questions from item: ${itemId}`, error)
    return null
  }
}

/**
 * Fetches unanswered questions associated with a specific item, sorted in ascending order by creation date.
 * @param {string} itemId - The ID of the item for which questions are to be obtained.
 * @returns {Promise<QuestionDetailsType[]|null>} - Unanswered questions array or null if there is an error.
 * @throws {Error} - Throws an error if there is an issue making the API request.
 */
export async function getUnansweredQuestionsByItem(itemId: string) {
  try {
    const response = await fetch(
      `https://api.mercadolibre.com/questions/search?item=${itemId}&status=UNANSWERED&sort_fields=date_created&sort_types=ASC&api_version=4`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`
        }
      }
    )
    if (!response.ok) {
      console.error(`Error fetching unanswered questions from item: ${itemId}`, response.statusText)
      return null
    }
    const data: ApiQuestionResponse = await response.json()
    return data.questions
  } catch (error) {
    console.error(`Error fetching unanswered questions from item: ${itemId}`, error)
    return null
  }
}

/**
 * Fetches questions associated with a specific seller, sorted in ascending order by creation date.
 * @param {string} sellerId - The ID of the seller for whom questions are to be obtained.
 * @returns {Promise<QuestionDetailsType[]|null>} - questions arrays or null if there is an error.
 * @throws {Error} - Throws an error if there is an issue making the API request.
 */
export async function getQuestionsBySeller(sellerId: string) {
  try {
    const response = await fetch(
      `https://api.mercadolibre.com/questions/search?seller_id=${sellerId}&sort_fields=date_created&sort_types=ASC&api_version=4`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`
        }
      }
    )
    if (!response.ok) {
      console.error(`Error fetching questions from seller: ${sellerId}`, response.statusText)
      return null
    }
    const data: ApiQuestionResponse = await response.json()
    return data.questions
  } catch (error) {
    console.error(`Error fetching questions from seller: ${sellerId}`, error)
    return null
  }
}

/**
 * Fetches unanswered questions associated with a specific seller, sorted in ascending order by creation date.
 * @param {string} sellerId - The ID of the seller for whom unanswered questions are to be obtained.
 * @returns {Promise<QuestionDetailsType[]|null>} - array of unanswered questions or null if there is an error.
 * @throws {Error} - Throws an error if there is an issue making the API request.
 */
export async function getUnansweredQuestionsBySeller(sellerId: string) {
  try {
    const response = await fetch(
      `https://api.mercadolibre.com/questions/search?seller_id=${sellerId}&status=UNANSWERED&sort_fields=date_created&sort_types=ASC&api_version=4`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`
        }
      }
    )
    if (!response.ok) {
      console.error(`Error fetching unanswered questions from seller: ${sellerId}`, response.statusText)
      return null
    }
    const data: ApiQuestionResponse = await response.json()
    return data.questions
  } catch (error) {
    console.error(`Error fetching unanswered questions from seller: ${sellerId}`, error)
    return null
  }
}
