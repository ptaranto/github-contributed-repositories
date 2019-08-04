import { IRepository } from '../ResponseInterfaces';
import { processRepositories } from '../Response';
import { mockResponse, mockRepository } from '../__mocks__/ResponseMocks';

describe('GraphQL response tests', () => {
  it('Test merge repositories with 2 empty lists', () => {
    const response = mockResponse([], []);

    expect(processRepositories(response)).toHaveLength(0);
  });

  it('Test merge repositories with empty own repositorie list', () => {
    const contributedRepo: IRepository = mockRepository(1);
    const response = mockResponse([], [contributedRepo]);
    const result = processRepositories(response);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual(contributedRepo);
  });

  it('Test merge repositories with empty contributed repositorie list', () => {
    const ownRepo: IRepository = mockRepository(1);
    const response = mockResponse([ownRepo], []);
    const result = processRepositories(response);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual(ownRepo);
  });

  it('Test merge repositories and its sort order', () => {
    const ownRepo: IRepository = mockRepository(1);
    const contributedRepo: IRepository = mockRepository(10);
    const response = mockResponse([ownRepo], [contributedRepo]);
    const result = processRepositories(response);

    expect(result).toHaveLength(2);
    expect(result[0]).toEqual(contributedRepo);
  });

  it('Test merged repositories with max of 10 repo', () => {
    const ownRepos: IRepository[] = [
      mockRepository(0),
      mockRepository(1),
      mockRepository(2),
      mockRepository(3),
      mockRepository(4),
      mockRepository(5),
      mockRepository(6),
      mockRepository(7)
    ];
    const contributedRepos: IRepository[] = [
      mockRepository(10),
      mockRepository(20),
      mockRepository(30),
      mockRepository(40),
      mockRepository(50),
      mockRepository(60),
      mockRepository(70),
      mockRepository(80)
    ];
    const response = mockResponse(ownRepos, contributedRepos);
    const result = processRepositories(response);

    expect(result).toHaveLength(10);
  });

  it('Test merge repositories are sorted by stargazers.totalCount', () => {
    const ownRepos: IRepository[] = [
      mockRepository(0),
      mockRepository(2),
      mockRepository(4),
      mockRepository(6),
      mockRepository(8),
      mockRepository(10),
      mockRepository(12),
      mockRepository(14)
    ];
    const contributedRepos: IRepository[] = [
      mockRepository(1),
      mockRepository(3),
      mockRepository(5),
      mockRepository(7),
      mockRepository(9),
      mockRepository(11),
      mockRepository(13),
      mockRepository(15)
    ];
    const response = mockResponse(ownRepos, contributedRepos);
    const result = processRepositories(response);
    const expectedOrder = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6];

    expect(result).toHaveLength(10);
    expectedOrder.forEach((value, index) =>
      expect(result[index].stargazers.totalCount).toEqual(value)
    );
  });
});
