import axios from "axios";
import { baseUrl } from "@/lib/BaseUrl";
export const apiClient = axios.create({
  baseURL: baseUrl,
});
