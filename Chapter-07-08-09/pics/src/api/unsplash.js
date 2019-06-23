import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 18ed021c64b4ef1bbcb3162eb4bdfdbf229f04de0a15ad0fd6ded4f4e4de3b44'
    }
});


