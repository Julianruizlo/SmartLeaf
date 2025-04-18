export async function identifyPlant(imageBase64) {
    const response = await fetch("https://api.plant.id/v2/identify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Api-Key": "TU_API_KEY",
      },
      body: JSON.stringify({
        images: [imageBase64],
        modifiers: ["crops_fast", "similar_images"],
        plant_language: "es",
        plant_details: ["common_names", "watering", "sunlight"],
      }),
    });
    return await response.json();
  }
  