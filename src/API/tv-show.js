import axios from "axios";
import { BASE_URL, API_KEY_PARAM, LANGUAGE_PARAM_FR} from "../config.js";

export class tvShowAPI{

    static async fetchPopulars() {
        const populars = await axios.get
            (`${BASE_URL}tv/popular${API_KEY_PARAM}${LANGUAGE_PARAM_FR}`);
        return populars.data.results;
    }

    static async fetchRecommendations(tvShowId) {
        const response = await axios.get(
                `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}${LANGUAGE_PARAM_FR}`
            );
        return response.data.results;
    }

    static async fetchByTitle(title) {
        const response = await axios.get(
                `${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}${LANGUAGE_PARAM_FR}`
            );
        return response.data.results;
    }
    
    static async fetchAggregateCredits(tvShowId) {
        const response = await axios.get(
            `${BASE_URL}tv/${tvShowId}/aggregate_credits${API_KEY_PARAM}`);
            return response.data.cast;           
    }
}