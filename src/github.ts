import axios from "axios";

const BASE_URL = "https://api.github.com";

export async function getUserProfile(username: string) {
    const { data } = await axios.get(`${BASE_URL}/users/${username}`);
    return data;
}

export async function getUserRepos(username: string) {
    const { data } = await axios.get(`${BASE_URL}/users/${username}/repos`);
    return data;
}
