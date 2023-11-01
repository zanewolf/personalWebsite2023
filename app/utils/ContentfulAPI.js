import {createClient} from "contentful";

export const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function fetchMedia(query){

    const res = await client.getEntries(query)

    return res.items

}


export async function fetchProject(slug){
    const items = await client.getEntries({
        content_type: 'projects',
        'fields.slug':slug})

    return items.items[0]

}

