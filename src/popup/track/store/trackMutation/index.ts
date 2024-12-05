import mutation from './mutation.gql';
import { client } from '@/apolloClient';

export interface Payload {
  source: 'file'  | 'search-for-movie' | 'search-for-series' | 'legacy-search';
  language: string;
}


export const trackMutation = async ({source, language}: Payload): Promise<unknown> => {
  const _client = client.getClient()
  // probably this fallback maybe is not correct (but seems not to be a problem)
  const fallback = {
    mutation,
    variables: {
      origin: window.location.origin,
      source,
      language
    }
  }
  if(_client===null){    
    return fallback
  }else{
    try{
      return _client.mutate({
        mutation,
        variables: {
          origin: window.location.origin,
          source,
          language
        }
      });
    }catch(err){
      console.warn("trackMutation fail: ",err.message)
      return fallback
    }
  }
};
