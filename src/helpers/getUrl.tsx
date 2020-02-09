const getUrl = (route: string) => {
    return window.location.hostname === 'localhost' ?
        `http://localhost:5000/${route}` :
        `../${route}`;
};

export default getUrl