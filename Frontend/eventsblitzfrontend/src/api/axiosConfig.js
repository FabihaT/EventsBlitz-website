import axios from 'axios';

export default axios.create({
    baseURL: 'https://eventsblitz-website-backend.onrender.com/api'
});