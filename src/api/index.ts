import axios from "axios";
import {
    SubmitRequest,
    SubmitResponse
} from "../types/api.types";

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API || "http://localhost:5000",
});

const submitForm = async (data: SubmitRequest) => api.post<SubmitResponse>("/form/submit", data);

export { api, submitForm };
