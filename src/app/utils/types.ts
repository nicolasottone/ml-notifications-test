export type ApiQuestionResponse = {
  total: number
  limit: number
  questions: QuestionDetailsType[]
  filters: CurrentFilters
  available_filters: Filters[]
  available_sorts: Sorts[]
}

export type QuestionDetailsType = {
  id: number
  seller_id: number
  text: string
  tags: string[]
  status: QuestionStatus
  item_id: string
  date_created: string
  hold: boolean
  deleted_from_listing: boolean
  answer: AnswerType | null
  from: {
    id: number
    answered_questions?: number
  }
}

export type AnswerType = {
  text: string
  status: string
  date_created: string
}

type QuestionStatus =
  | 'ANSWERED'
  | 'BANNED'
  | 'CLOSED_UNANSWERED'
  | 'DELETED'
  | 'DISABLED'
  | 'UNANSWERED'
  | 'UNDER_REVIEW'

type CurrentFilters = {
  limit: number
  offset: number
  api_version: string
  is_admin: boolean
  sorts: {
    field: Sorts
    type: 'ASC' | 'DESC'
  }[]
  caller: number
  item?: string
  from?: number
  seller?: number
  totalDivisions?: number
  division?: number
  status?: QuestionStatus
  client_id: number
}

type Sorts = 'item_id' | 'from_id' | 'date_created' | 'seller_id'

type Filters = {
  id: 'from' | 'item' | 'seller' | 'totalDivisions' | 'divisions' | 'status'
  name: 'From user id' | 'Item' | 'Seller id' | 'total divisions' | 'Division' | 'Status'
  type: 'number' | 'text'
  values?: QuestionStatus[]
}
