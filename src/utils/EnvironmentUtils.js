export const getEnvironment = () => {
    if (window.location.hostname === "localhost") {
        return "local";
    }
    return "prod";
};
