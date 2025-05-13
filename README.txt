Hay demasiados cambios para ponerlos en el mensaje del commit:

Deleted: PlanIdentifier.jsx (no se usaba, existía una page con el mismo nombre)
Fix (PlantCard): Agregué un caso base para cuando no se reciban datos
Feat (PlantProvider): Viene de julián, es el proveedor de contexto de las plantas, que también agrega el uso
    localStorage para mantener las plantas creadas en una sesión
Add (Avatar.jpg)
Feat (PlantContext): Es el contexto de la planta en la aplicación
Add (AddPlant.css, PlantDetails.css, Profile.css, Settings.css)
Fix (css): detalles pequeños, insignificantes de colores
Add (AddPlant.jsx): pantalla para agregar plantas al jardín
Add (PlantDetails): Página específica de las plantas del jardín, donde aparecen los datos.
Feat (Calendar): Ahora cada planta tiene su fecha de plantado y fechas de riego, de modo que cada día tiene sus propios
    eventos en cada día, y se puede ver el calendario de cada planta
Fix (Garden): Simplificación de código
Fix (PlantConsultantAI): ahora contiene el mismo PageHead que todas las demás páginas
Feat (Profile): ahora se puede ver los datos del usuario, pero se muestra con un usuario harcodeado por ahora.
Feat (Settings): se copió el estilo de Profile para las opciones y colores
