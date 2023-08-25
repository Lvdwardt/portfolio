import { groq } from "next-sanity";

/**
 * Experiences
 */

// get all experiences
export const experiencesQuery = groq`*[_type == "experiences"]{
    name,
    small,
    role,
    hours,
    description,
    image,
    link,
    startDate,
    endDate
}`;

/**
 * Projects
 */
// get all projects
export const projectsQuery = groq`*[_type == "projects" && defined(slug.current)] {
    _id, title, slug
  }`;

// get the project with the given slug
export const projectQuery = groq`*[_type == "projects" && slug.current == $slug][0]{
    title,
    slug,
    quote,
    description,
    url,
    logo,
    coverImage,
    projectImage,
    projectImageLight,
    translate,
    width,
    grid,
    order,
    workedOn,
    newSkills,
    icons,
    githubUrl
}`;

// get all project paths
export const projectPathsQuery = groq`*[_type == "projects" && defined(slug.current)] {
    "params": {
        "slug": slug.current
    }
}`;

/**
 * Current Location
 */

// get the current location
export const locationQuery = groq`*[_type == "location"][0]{
    currentLocation
}`;

/**
 * Travel Stats
 */

// get all travel stats
export const travelStatsQuery = groq`*[_type == "travelStats"][0]{
    countries,
    capitals,
    airports
}`;

/**
 * About
 */

// get all about sections
export const aboutQuery = groq`*[_type == "about"]{
    slug,
    memojis,
    text
}`;
