export interface IUserContributedRepositories {
  user: {
    login: string;
    name: string | null;
    repositories: {
      nodes: IRepository[];
    };
    repositoriesContributedTo: {
      nodes: IRepository[];
    };
  };
}

export interface IRepository {
  name: string;
  nameWithOwner: string;
  stargazers: IStargazers;
}

export interface IStargazers {
  totalCount: number;
}
