import { contract } from './contract';
import { generateOpenApi } from '@ts-rest/open-api';

export const openApiDocument = generateOpenApi(contract, {
  info: {
    title: 'Posts API',
    version: '1.0.0',
  },
},
  {
    setOperationId: true,
    jsonQuery: true,
  },
);