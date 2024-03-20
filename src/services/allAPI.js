import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./server_url";

export const getAllQuestionsAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/questions `, "")
}