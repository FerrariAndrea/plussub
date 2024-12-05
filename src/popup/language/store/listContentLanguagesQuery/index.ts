import query from './query.gql';
import { ListContentLanguagesQuery } from './__gen_gql';
import { client } from '@/apolloClient';

export * from './__gen_gql';

const fallback =  {
  listContentLanguages: {
      data:[]
  }
}
export const listContentLanguagesQuery = async (): Promise<ListContentLanguagesQuery> => {
  const _client = client.getClient()
  if(_client===null){
    return fallback
  }else{
    try{
      return _client
      .query<ListContentLanguagesQuery>({ query })
      .then((r) => r.data).catch((err)=>{
        console.warn("listContentLanguagesQuery fail(catch): ", err.message)
        return fallback
      })
    }catch(err){
      console.warn("listContentLanguagesQuery fail: ", err.message)
      return fallback
    }
  }
};
