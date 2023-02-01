// import {
//   ApolloClient,
//   createHttpLink,
//   gql,
//   InMemoryCache,
// } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";
export default function Skills() {
  return (
    <div className="relative row-span-2 overflow-hidden rounded-[2rem] bg-white p-6 font-medium dark:bg-[#2F3763] dark:text-white sm:order-2 xl:order-6 ">
      <h1 className="text-center text-2xl">Skills</h1>
      <div className="mb-2 mt-5 flex justify-between">
        <h2>Tailwind CSS</h2>
        <h2>99%</h2>
      </div>
      <div className="flex w-full rounded-full bg-pink-50  dark:bg-[#1F295B]">
        <div className=" h-6 w-49/50  animate-fadeIn48 rounded-full bg-pinklight transition-all duration-300 ease-in dark:bg-[#8D5BE9]" />
      </div>
      <div className="mb-2 mt-5 flex justify-between">
        <h2>HTML &amp; CSS</h2>
        <h2>90%</h2>
      </div>
      <div className="flex w-full rounded-full bg-pink-50 dark:bg-[#1F295B]">
        <div className=" h-6 animate-fadeIn46 rounded-full bg-pinklight transition-all duration-300 ease-in dark:bg-[#8D5BE9]" />
      </div>
      <div className="mt-5 mb-2 flex justify-between">
        <h2>Github</h2>
        <h2>75%</h2>
      </div>
      <div className="flex w-full rounded-full bg-pink-50 dark:bg-[#1F295B]">
        <div className=" h-6 animate-fadeIn38 rounded-full bg-pinklight transition-all duration-300 ease-in dark:bg-[#8D5BE9]" />
      </div>
      <div className="mt-5 mb-2 flex justify-between">
        <h2>React &#40;native &#41;</h2>
        <h2>60%</h2>
      </div>
      <div className="flex w-full rounded-full bg-pink-50 dark:bg-[#1F295B]">
        <div className=" h-6 animate-fadeIn30 rounded-full bg-pinklight transition-all duration-300 ease-in dark:bg-[#8D5BE9]" />
      </div>
      <div className="mt-5 mb-2 flex justify-between">
        <h2>NextJS</h2>
        <h2>50%</h2>
      </div>
      <div className="flex w-full rounded-full bg-pink-50 dark:bg-[#1F295B]">
        <div className=" h-6 animate-fadeIn50 rounded-full bg-pinklight transition-all duration-300 ease-in dark:bg-[#8D5BE9]" />
      </div>
      <div className="mt-5 mb-2 flex justify-between">
        <h2>Docker</h2>
        <h2>30%</h2>
      </div>
      <div className="flex w-full rounded-full bg-pink-50 dark:bg-[#1F295B]">
        <div className=" h-6 animate-fadeIn15 rounded-full bg-pinklight transition-all duration-300 ease-in dark:bg-[#8D5BE9]" />
      </div>
    </div>
  );
}

//get the stats from the api
// export async function getServerSideProps() {
//   const httpLink = createHttpLink({
//     uri: "https://api.github.com/graphql",
//   });

//   const authLink = setContext((_, { headers }) => {
//     return {
//       headers: {
//         ...headers,
//         authorization: `Bearer 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`,
//       },
//     };
//   });

//   const client = new ApolloClient({
//     link: authLink.concat(httpLink),
//     cache: new InMemoryCache(),
//   });
//   const query = gql`
//     query {
//       viewer {
//         repositories(
//           affiliations: [OWNER, ORGANIZATION_MEMBER, COLLABORATOR]
//           ownerAffiliations: [OWNER, ORGANIZATION_MEMBER, COLLABORATOR]
//         ) {
//           totalCount
//         }
//       }

//       user(login: "Lvdwardt") {
//         contributionsCollection {
//           contributionCalendar {
//             totalContributions
//           }
//         }
//       }
//     }
//   `;
//   try {
//     const { data } = await client.query({
//       query: query,
//     });
//     const totalContributions =
//       data.user.contributionsCollection.contributionCalendar.totalContributions;
//     const totalRepos = data.viewer.repositories.totalCount;

//     return {
//       props: {
//         totalContributions,
//         totalRepos,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {
//         error,
//       },
//     };
//   }
// }

//not working code for getting the languages
// repositories(
//   ownerAffiliations: [OWNER, COLLABORATOR]
//   isFork: false
//   first: 100
// ) {
//   nodes {
//     name
//     languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
//       edges {
//         size
//         node {
//           color
//           name
//         }
//       }
//     }
//   }
// }
