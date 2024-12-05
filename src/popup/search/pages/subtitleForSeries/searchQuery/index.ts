import query from './query.gql';
import { SubtitleSearchForSeriesQuery, SubtitleSearchForSeriesQueryVariables } from './__gen_gql';
import { client } from '@/apolloClient';

export * from './__gen_gql'

const fallback = {
  subtitleSearch: {
      data: []
  },
  seasons: {
      seasons: []
  }
}

export const searchQuery = async (variables: SubtitleSearchForSeriesQueryVariables): Promise<SubtitleSearchForSeriesQuery> => {
  const _client = client.getClient()
  if(_client===null){
    return fallback
  }else{
    try{
      return _client
      .query<SubtitleSearchForSeriesQuery, SubtitleSearchForSeriesQueryVariables>({ query, variables })
      .then((r) => r.data);
    }catch(err){
      console.warn("searchQuery fail: ", err.message)
      return fallback
    }
  }
};
