using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

public class ChatbotService
{
    private readonly HttpClient _httpClient;
    private readonly string _accessToken;
    public ChatbotService(HttpClient httpClient, IConfiguration configuration)
    {
        _httpClient = httpClient;
        _accessToken = configuration["Chatbot:AccessToken"];
    }
public async Task<ChatbotResponse> AskChatbotAsync(string accessToken, ChatbotRequest request)
{
    var jsonRequest = JsonSerializer.Serialize(request);
    Console.WriteLine($"Cuerpo de la solicitud enviado al servicio externo: {jsonRequest}");

    var content = new StringContent(jsonRequest, Encoding.UTF8, "application/json");
    var url = $"https://plant.id/api/v3/identification/{accessToken}/conversation";

    var requestMessage = new HttpRequestMessage(HttpMethod.Post, url)
    {
        Content = content
    };

    requestMessage.Headers.Add("Api-Key", "38uu4UOHxF9WBPA6ABjuGCKT5kuhAYsKP2HfIlKJaKjmTIV7Zy");

    var response = await _httpClient.SendAsync(requestMessage);

    if (!response.IsSuccessStatusCode)
    {
        var errorContent = await response.Content.ReadAsStringAsync();
        Console.WriteLine($"Error al llamar al servicio externo: {response.StatusCode} - {errorContent}");
        throw new HttpRequestException($"Error al llamar al servicio externo: {response.StatusCode}");
    }

    var jsonResponse = await response.Content.ReadAsStringAsync();
    Console.WriteLine($"Respuesta del servicio externo: {jsonResponse}");

    // Deserializar la respuesta en un objeto ChatbotResponse
    var chatbotResponse = JsonSerializer.Deserialize<ChatbotResponse>(jsonResponse, new JsonSerializerOptions
    {
        PropertyNameCaseInsensitive = true // Ignorar mayúsculas/minúsculas en los nombres de las propiedades
    });

    return chatbotResponse;
}
}