// src/services/githubApi.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_GITHUB_API_URL;

export const searchUser = async (username) => {
  const response = await axios.get(`${API_URL}/users/${username}`);
  return response.data;
};