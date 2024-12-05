import query from './query.gql';
import { VideoSearchQuery, VideoSearchQueryVariables } from './__gen_gql';
import { client } from '@/apolloClient';

export * from './__gen_gql';

export const searchQuery = async (variables: VideoSearchQueryVariables): Promise<VideoSearchQuery & {query: string}> => {
  const _client = client.getClient()
  const fallback = {
    query: variables.query,
    videoSearch: {
        entries: []
    }
  }
  if(_client===null){
    return fallback
  }else{
    try{
      return _client
      .query<VideoSearchQuery, VideoSearchQueryVariables>({ query, variables })
      .then((r) => {
        return {
          query: variables.query,
          ...r.data
        };
      });
    }catch(err){
      console.warn("searchQuery fail: ", err.message)
      return fallback
    }
  }
};
