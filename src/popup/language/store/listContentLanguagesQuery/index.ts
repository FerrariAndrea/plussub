import { ListContentLanguagesQuery } from './__gen_gql';

export * from './__gen_gql';

export const listContentLanguagesQuery = async (): Promise<ListContentLanguagesQuery> => {
  return {
    listContentLanguages: {
        data:[]
    }
  }
};
