export const getRepoData = async() => {
    const url ='https://api.github.com/repos/imran9663/portfolio-v2'
    try {
        const response = await fetch(url);
        if (!response) throw new Error('result not Found');
        const result = response.json()
        return result
    } catch (error) {
        console.log("ERROR",error);
    }
}