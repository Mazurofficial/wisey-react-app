const BASE_URL = 'https://api.wisey.app/api/v1'

export const ALL_COURSES = BASE_URL + '/core/preview-courses'
export const getCourseById = (courseId:string) => BASE_URL + '/core/preview-courses/' + courseId

const header = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
const body = 'eyJzdWIiOiJkOTRlNjg4NS1kM2U5LTQwY2EtYTVjYy01MDRkNjZlZDVlN2QiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3MDQ3NjIsImV4cCI6MTY3OTYwNDc2Mn0'
const signature = 'Qw3LF39CDp27ZxoGzt5rikJM_OTx0eNaoyFFLxxrXUM'
export const TOKEN = [header, body, signature].join('.')

