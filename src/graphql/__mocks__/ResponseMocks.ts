import {
  IRepository,
  IUserContributedRepositories
} from '../ResponseInterfaces';

export const mockResponse = (
  ownRepo: IRepository[],
  contributedRepo: IRepository[]
): IUserContributedRepositories => {
  return {
    user: {
      login: 'username',
      name: 'name',
      repositories: {
        nodes: ownRepo
      },
      repositoriesContributedTo: {
        nodes: contributedRepo
      }
    }
  };
};

export const mockRepository = (index): IRepository => {
  return {
    name: `repo_${index}`,
    nameWithOwner: '`project/repo_${index}`',
    stargazers: { totalCount: index }
  };
};
