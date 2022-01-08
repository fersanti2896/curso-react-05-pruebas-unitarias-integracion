/* Async - Await */

const getImagen = async() => {
    try {
        const apiKey = 'o1oBT0uzPdpH7pcJqtl8hBtCNqDcIrOX';
        const giphyRUL = 'https://api.giphy.com/v1/gifs/random'

        const resp = await fetch(`${giphyRUL}?api_key=${apiKey}`)
        const { data } = await resp.json();
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    } catch (error) {
        console.log(error);
    }
}

getImagen();