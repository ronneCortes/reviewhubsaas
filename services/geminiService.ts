// This service is currently deprecated as the live demo uses a controlled simulation for marketing purposes.
// It can be re-enabled if real-time API calls are needed in the future.


export const analyzeReviewWithGemini = async (reviewText: string, businessName: string): Promise<any> => {
    console.warn("API desativada no modo de demonstração.");
    return Promise.resolve(null);
};