# Portfolio Site

This is my personal portfolio site showcasing my projects, skills, and experiences. It is built using modern web technologies to provide an engaging and user-friendly experience. The site incorporates data from various APIs to enhance its functionality.

## Technologies Used

- Next.js (v13) with App Router: Next.js is a React framework that allows for server-side rendering, static site generation, and client-side rendering. App Router provides a better syntax for writing and handling front- and back-end code.

- Tailwind CSS: Tailwind CSS is a utility-first CSS framework that provides a set of pre-defined styles and classes to streamline the styling process and ensure consistency across the site.

- Vercel is a cloud platform that provides hosting, deployment, and management. It’s the easiest way to host a Nextjs site.

- TypeScript: TypeScript is a typed superset of JavaScript that brings static typing and improved tooling to the development process. It helps catch errors early and provides better code documentation and autocompletion.

<br/>
<p align="center">
   <br/>
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=next,tailwind,vercel,typescript" />
  </a>
</p>

## APIs Used

- GitHub API: The GitHub API is utilized to fetch my github statistics

- Wakatime API: The Wakatime API integration provides insights into my coding activity and productivity.

- Own api for google maps location retrieval using [locationsharinglib](https://github.com/costastf/locationsharinglib), hosted on [DigitalOcean Functions](https://www.digitalocean.com/products/functions)

## Installation and Setup

1. Clone the repository to your local machine.
2. Install the required dependencies by running `pnpm install`.
3. Obtain API keys for the GitHub API, Wakatime API, and Mapbox
4. Setup [[vercel edge config](https://vercel.com/storage/edge-config)] for the project
5. Add the following to your edge config:

   ```json
   {
     "location": {
       "latitude": "number",
       "longitude": "number"
     }
   }
   ```

6. Create a `.env` file in the root directory and add your API keys as environment variables:

   ```
   MY_SECRET_TOKEN=your_api_revalidate_token (just generate a random token)
   NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token
   WAKATIME_KEY=your_wakatime_api_key
   GITHUB_KEY=your_github_api_key
   EDGE_CONFIG=your_vercel_edge_config (step 4)
   ```

7. Start the development server with `pnpm dev`.
8. Open your browser and navigate to `http://localhost:3000` to see the portfolio site in action.

## Contribution

I welcome contributions to enhance the functionality, design, and overall user experience of my portfolio site. If you have any suggestions, bug reports, or feature requests, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to modify and use the code for your own portfolio site. Just give me a shoutout somewhere :)

## Shoutout

I would like to give a special shoutout to [Nev Flynn](https://nevflynn.com) for the amazing design of this portfolio site, and [Rob Zaccardi](https://robertozaccardi.dev/) for the awesome project page ideas!

---

Thank you for visiting my portfolio site! I hope you enjoy exploring my projects and learning more about my skills and experiences.
