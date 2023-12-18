import { client } from "../../sanity";
import { Project } from "typings";

// const query = `
// *[_type == "projects"]`

const query = `
*[_type == "projects"]{title,"name": author->name,"categories": projectCategory[]->title, body, publishedAt ,slug,"imageUrl": mainImage.asset->url,"thumbnail": thumbnail.asset->url}
`
export const fetchRates = async () => {

    const data = await client.fetch(query);

    const projects: Project[] = data;

    return projects;
}