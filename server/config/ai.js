const AIConfig = {
    baseURL:
        process.env.AI_SERVICE_URL ||
        "http://localhost:8000",

    timeout: 15000,

    retries: 3,

    retryDelay: 1000,
};

export default AIConfig;