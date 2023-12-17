interface SanityBody{
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}
interface Image{
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    }
}
export interface Project extends SanityBody{
    [x: string]: string | StaticImport;
    _type: "projects";
    author: Author;
    body: Block[];
    projectCategory: Category[];
    mainImage: Image;
    title: string;
    publishedAt: string;
    slug: Slug;
}

export interface Author extends SanityBody{
    bio: Block[];
    mainImage: Image;
    name: string;
    slug: Slug;
}

interface Slug{
    _type: "slug";
    current: string;
}

interface Block{
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h4" | "blockquote";
}

interface Span{
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
}


interface Category extends SanityBody{
    description: string;
    title: string;
}

interface projectCategory extends SanityBody{
    description: string;
    title: string;
}
