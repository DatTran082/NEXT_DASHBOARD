import client from './clients/axios-client';

const gamesApi = {
  treasureHunt: {
    createMaps: (params) => {
      const url = '/TreasureHunt/CreateMap';
      // const pagination = params?.pagination ?? { pageNumber: 1, pageSize: 1000 };
      return client.post(url, { ...params });
    },
    getAllMaps: (params) => {
      const url = '/TreasureHunt/GetAllMaps';
      return client.get(url, { params });
    },
    getMapById: (params) => {
      const url = '/TreasureHunt/GetMapById';
      return client.get(url, { params });
    },
    deleteMaps: (params) => {
      const url = 'TreasureHunt/DeleteMap';
      return client.delete(url, { params });
    },
    solvingMaps: (params) => {
      const url = '/TreasureHunt/solve';
      return client.get(url, { params });
    }
  }
};

export default gamesApi;
