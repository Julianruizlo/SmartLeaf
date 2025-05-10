public class ChatbotResponse
{
    public List<Message> Messages { get; set; } = new();
    public string Identification { get; set; } = string.Empty;
    public int Remaining_Calls { get; set; }
    public ModelParameters Model_Parameters { get; set; } = new();
    public Dictionary<string, object> Feedback { get; set; } = new();
}

public class Message
{
    public string Content { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty;
    public string Created { get; set; } = string.Empty;
}

public class ModelParameters
{
    public string Model { get; set; } = string.Empty;
    public double Temperature { get; set; }
}