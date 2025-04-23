using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace data.API
{
    public class PlantIdService
    {
        private readonly HttpClient _httpClient;
        private const string ApiKey = "Lq1gU81VpzPVQMvSmTm1ZHOLiPZuhFBCBYvtEUzzXO7IaIvDm2";
        private const string Endpoint = "https://api.plant.id/v3/identify";

        public PlantIdService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<string> IdentifyPlantAsync(string base64Image)
        {
            var requestBody = new
            {
                images = new[] { base64Image },
                organs = new[] { "leaf" },
                details = new[] { "common_names", "url", "name_authority", "wiki_description" }
            };

            var json = JsonSerializer.Serialize(requestBody);
            var content = new StringContent(json, Encoding.UTF8, "application/json");
            content.Headers.Add("Api-Key", ApiKey);

            var response = await _httpClient.PostAsync(Endpoint, content);
            response.EnsureSuccessStatusCode();

            return await response.Content.ReadAsStringAsync();
        }
    }
}