import axios from "axios"
const base_url= process.env.REACT_APP_BASE_URL

export const getQuestions = async () => {
    try {
        const response = await axios.get(
            `${base_url}/questionnaire`
        )

        return { success: true, data: response.data }
    } catch (err) {
        return { success: false, message: err.message }
    }
}
export const getQuestionnaire = async (id) => {
    try {
        const response = await axios.get(
            `${base_url}/questionnaire/${id}`
        )

        return { success: true, data: response.data }
    } catch (err) {
        return { success: false, message: err.message }
    }
}

export const getQuestionFromAnswer = async (id) => {
    try {
        const response = await axios.get(
            `${base_url}/questionnaire/answer/${id}`
        )

        return { success: true, data: response.data }
    } catch (err) {
        return { success: false, message: err.message }
    }
}

export const sendLog = async (data) => {
    try {
        const response = await axios.post(
            `${base_url}/questionnaire/logger/`,{
                data:data
            }
        )

        return { success: true, data: response.data }
    } catch (err) {
        return { success: false, message: err.message }
    }
}