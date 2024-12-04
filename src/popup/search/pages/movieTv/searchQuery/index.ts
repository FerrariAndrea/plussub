import query from './query.gql';
import { VideoSearchQuery, VideoSearchQueryVariables } from './__gen_gql';


export * from './__gen_gql';

export const searchQuery = async (variables: VideoSearchQueryVariables): Promise<VideoSearchQuery & {query: string}> => {
  return {
    query: variables.query,
    videoSearch: {
        entries: []
    }
  }
}
