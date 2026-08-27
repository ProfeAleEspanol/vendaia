export type AIProviderName = "openai" | "anthropic" | "google" | "mock";

export type AICompletionRequest = {
  system?: string;
  prompt: string;
  temperature?: number;
};

export type AICompletionResponse = {
  text: string;
  provider: AIProviderName;
};

export type AIProvider = {
  name: AIProviderName;
  complete(request: AICompletionRequest): Promise<AICompletionResponse>;
};

