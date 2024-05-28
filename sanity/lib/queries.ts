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
} | order(startDate desc)`;

// get all uses
export const usesQuery = groq`*[_type == "uses"]{
    name,
    link,
    image
}`;

/**
 * Projects
 */
// get all projects with image ans slug
export const projectsQuery = groq`*[_type == "projects" && defined(slug.current)] {
    _id, title, slug, coverImage, position
  }`;

// get the featured projects with image and slug
export const featuredProjectsQuery = groq`*[_type == "projects" && defined(slug.current) && featured == true] {
    _id, title, slug, coverImage
    }`;

// get the project with the given slug
export const projectQuery = groq`*[_type == "projects" && slug.current == $slug][0]{
    title,
    slug,
    quote,
    description,
    url,
    logo,
    hasBg,
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
    media,
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
 * About
 */

// get all about sections
export const aboutQuery = groq`*[_type == "about"]{
    slug,
    memojis,
    text
}`;

/**
 * Skills
 */

// get all skills
export const skillsQuery = groq`*[_type == "skills"][0]{
    icons
}`;

/**
 * Travel Data
 */

// get all travel data
export const travelDataQuery = groq`*[_type == "travelData"][0]{
    visitedCountries,
    visitedAirports,
    visitedCapitals,
}`;
