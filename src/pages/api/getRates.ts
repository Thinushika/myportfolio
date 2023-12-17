import {client} from '../../../sanity'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Project } from '../../../typings'
import { groq } from 'next-sanity'


const query = groq`
*[_type == "projects"]
`

type Data = {
  projects: Project[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects: Project[] = await client.fetch(query);
  res.status(200).json({ projects })
  console.log(projects)
}
