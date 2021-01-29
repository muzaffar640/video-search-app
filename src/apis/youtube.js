import axios from "axios";

const KEY = "AIzaSyDj_gVW58mOakR9KU53Ga4cfhVf3MZ_XLA"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        // type: 'video',
        key: `${KEY}`
    }
});

