'use server'


export async function authenticate(prevState: StaticRange, formData: FormData) {
    console.log(formData)
    try {
        let data = await fetch('https://id.twitch.tv/oauth2/token?' + new URLSearchParams({
            client_id: process.env.clientID as string,
            client_secret: process.env.clientSecret as string,
            grant_type: 'client_credentials'
        }), {
            method: 'POST',
        });

        let response = await data.json();
        console.log('Found token', response);

        let test = await fetch('https://api.igdb.com/v4/games', {
            method: 'POST',
            headers: {
                'Client-ID': `${process.env.clientID}`,
                'Authorization': `Bearer ${response.access_token}`
            },
            body: "fields name, genres.name, url, total_rating, total_rating_count, rating, rating_count, aggregated_rating, aggregated_rating_count, first_release_date, themes.name; where rating > 80 & total_rating_count > 100  & aggregated_rating_count > 0 & category = 0; sort rating desc; limit 10;"
        });

        response = await test.json();
        console.log('Found games', response);
    }
    catch (err) {
        console.error(err);
    }
}
