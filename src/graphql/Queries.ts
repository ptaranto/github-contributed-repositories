export const getUserContributedRepositories = `query getUserContributedRepositories($username: String!) {
  user(login: $username) {
    login
    name
    repositories (first: 10, orderBy: {field: STARGAZERS, direction: DESC}){
      nodes{
        name
        nameWithOwner
        stargazers {
          totalCount
        }
      }
    }
    repositoriesContributedTo(contributionTypes: [COMMIT, PULL_REQUEST], first: 10, includeUserRepositories: true, orderBy: {field: STARGAZERS, direction: DESC}) {
      nodes {
        name
        nameWithOwner
        stargazers {
          totalCount
        }
      }
    }
  }
}`;
