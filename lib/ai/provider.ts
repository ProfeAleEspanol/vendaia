import type { AICompletionRequest, AICompletionResponse, AIProvider } from "@/lib/ai/types";

const mockProvider: AIProvider = {
  name: "mock",
  async complete(request: AICompletionRequest): Promise<AICompletionResponse> {
    return {
      provider: "mock",
      text: `Camada de IA preparada. Prompt recebido: ${request.prompt.slice(0, 160)}`,
    };
  },
};

export function getAIProvider(): AIProvider {
  return mockProvider;
}

