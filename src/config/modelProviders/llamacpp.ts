import { ModelProviderCard } from '@/types/llm';

// ref https://docs.ai21.com/reference/jamba-15-api-ref
const LlamaCPP: ModelProviderCard = {
  chatModels: [],
  description: 'LlamaCPP is for CPU。',
  id: 'llamaCPP',
  modelsUrl: 'https://lmstudio.ai/models',
  name: 'Llama CPP',
  settings: {
    defaultShowBrowserRequest: true,
    proxyUrl: {
      placeholder: 'http://127.0.0.1:8080',
    },
    showApiKey: false,
    showModelFetcher: true,
    smoothing: {
      speed: 2,
      text: true,
    },
  },
  url: 'https://lmstudio.ai',
};
export default LlamaCPP;
