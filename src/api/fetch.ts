const callAPI = async () => {
    try {
        const res = await fetch(
            `http://api.stw.test/formats`,
            {
                method: 'GET',
                headers: {
                    'X-localization': 'ru',
                }
            }
        );
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
};

let test = callAPI();