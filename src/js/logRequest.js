import RequestCreator from './requestCreator';

export default (type, params) => {
  switch (type) {
    case 'wrong':
      console.log('make wrong request');
      RequestCreator('wrong', params);
      break;
    case 'loadChannels':
      console.log('loadChannels request');
      RequestCreator('loadChannels', params);
      break;
    case 'loadNews':
      RequestCreator('loadNews', params);
      console.log('loadNews request');
      break;
    default:
      break;
  }
};
