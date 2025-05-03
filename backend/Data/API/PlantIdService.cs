using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace data.API
{

    public class PlantIdService
{
    private readonly HttpClient _httpClient;
    private const string _apiKey = "Lq1gU81VpzPVQMvSmTm1ZHOLiPZuhFBCBYvtEUzzXO7IaIvDm2";
    private const string _url = "https://api.plant.id/v2/identify";

    public PlantIdService(HttpClient httpClient)
    {
        _httpClient = httpClient;
        _httpClient.BaseAddress = new Uri(_url);
    }

    public async Task<string> IdentifyPlantAsync(string base64Image)
    {
        var requestBody = new
        {
            images = new[] { $"data:image/jpg;base64,{base64Image}" },
            organs = new[] { "leaf" },
            modifiers = new[] {"crops_fast","similar_images"},
            plant_language = "es",
            plant_details = new [] {"common_names", "url", "name_authority", "wiki_description" }
        };

        var json = JsonSerializer.Serialize(requestBody);

        _httpClient.DefaultRequestHeaders.Add("Api-Key", _apiKey);
        var content = new StringContent(json, Encoding.UTF8, "application/json");

        var response = await _httpClient.PostAsync(_url, content);
        var responseString = await response.Content.ReadAsStringAsync();

        return responseString;
    }
}




}