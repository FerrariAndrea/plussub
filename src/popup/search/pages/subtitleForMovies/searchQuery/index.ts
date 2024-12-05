import query from './query.gql';
import { SubtitleSearchForMoviesQuery, SubtitleSearchForMoviesQueryVariables } from './__gen_gql';
export * from './__gen_gql'
import { client } from '@/apolloClient';

const fallback={
  subtitleSearch: {
      data: []
  }
}
export const searchQuery = async (variables: SubtitleSearchForMoviesQueryVariables): Promise<SubtitleSearchForMoviesQuery> => {
  const _client = client.getClient()
  if(_client===null){
    return fallback
  }else{
    try{
      return _client
      .query<SubtitleSearchForMoviesQuery, SubtitleSearchForMoviesQueryVariables>({ query, variables })
      .then((r) => r.data);
    }catch(err){
      console.warn("searchQuery fail: ", err.message)
      return fallback
    }
  }
};
