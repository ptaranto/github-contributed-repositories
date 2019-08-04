import {
  IRepository,
  IUserContributedRepositories
} from './ResponseInterfaces';

export const processRepositories = (
  data: IUserContributedRepositories
): IRepository[] => {
  const jointList = [
    ...data.user.repositories.nodes,
    ...data.user.repositoriesContributedTo.nodes
  ]
    .sort((a, b) => b.stargazers.totalCount - a.stargazers.totalCount)
    .slice(0, 10);

  return jointList;
};
