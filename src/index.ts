import { getUserProfile, getUserRepos } from "./github";

program
    .command("analyze <username>")
    .action(async (username) => {
        const profile = await getUserProfile(username);
        const repos = await getUserRepos(username);

        console.log("\nDeveloper Summary");
        console.log("-----------------");
        console.log(`Name: ${profile.name}`);
        console.log(`Public Repos: ${profile.public_repos}`);
        console.log(`Followers: ${profile.followers}`);
        console.log(`Total Repositories Fetched: ${repos.length}`);
    });
