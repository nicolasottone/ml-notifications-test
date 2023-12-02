/**
 * Asynchronously submits an answer to a given question on the Mercado Libre API.
 *
 * @param {string} text - The text of the answer to be submitted.
 * @param {number} questionId - The ID of the question to which the answer is provided.
 * @returns {Promise<object>} - A promise that resolves to the response object if successful, or an error object if the operation fails.
 * alwasy use inside a try catch block
 * ```
 *  try {
 *  const response = await sendAnswer('Your answer text here', 12345);
 *   console.log('Answer was successful:', response);
 * } catch (error) {
 *   console.error('An error occurred while sending the answer:', error);
 * }
 * ```
 */
export async function sendAnswer(text: string, questionId: number): Promise<any> {
  try {
    const response = await fetch('https://api.mercadolibre.com/answers', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        question_id: questionId,
        text: text
      })
    })

    const data = await response.json()

    if (!response.ok) {
      console.error(`Error answering question ${questionId} details:`, response.statusText)
      throw data
    }

    return data
  } catch (error) {
    console.error(`Error answering question ${questionId} details:`, error)
    throw error
  }
}
