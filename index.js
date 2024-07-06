require('dotenv').config();

const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI; 
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Provincias dominicanas
const provincias = [
    { nombre: 'Azua', region: 'Sur' },
    { nombre: 'Baoruco', region: 'Sur' },
    { nombre: 'Barahona', region: 'Sur' },
    { nombre: 'Dajabón', region: 'Noroeste' },
    { nombre: 'Distrito Nacional', region: 'Ozama' },
    { nombre: 'Duarte', region: 'Nordeste' },
    { nombre: 'Elías Piña', region: 'Sur' },
    { nombre: 'El Seibo', region: 'Este' },
    { nombre: 'Espaillat', region: 'Norte' },
    { nombre: 'Hato Mayor', region: 'Este' },
    { nombre: 'Hermanas Mirabal', region: 'Nordeste' },
    { nombre: 'Independencia', region: 'Sur' },
    { nombre: 'La Altagracia', region: 'Este' },
    { nombre: 'La Romana', region: 'Este' },
    { nombre: 'La Vega', region: 'Norte' },
    { nombre: 'María Trinidad Sánchez', region: 'Nordeste' },
    { nombre: 'Monseñor Nouel', region: 'Norte' },
    { nombre: 'Monte Cristi', region: 'Noroeste' },
    { nombre: 'Monte Plata', region: 'Ozama' },
    { nombre: 'Pedernales', region: 'Sur' },
    { nombre: 'Peravia', region: 'Sur' },
    { nombre: 'Puerto Plata', region: 'Norte' },
    { nombre: 'Samaná', region: 'Nordeste' },
    { nombre: 'San Cristóbal', region: 'Ozama' },
    { nombre: 'San José de Ocoa', region: 'Sur' },
    { nombre: 'San Juan', region: 'Sur' },
    { nombre: 'San Pedro de Macorís', region: 'Este' },
    { nombre: 'Sánchez Ramírez', region: 'Norte' },
    { nombre: 'Santiago', region: 'Norte' },
    { nombre: 'Santiago Rodríguez', region: 'Noroeste' },
    { nombre: 'Santo Domingo', region: 'Ozama' },
    { nombre: 'Valverde', region: 'Noroeste' }
];

async function main() {
    try {
        await client.connect();

        // Se conecta a la base de datos
        const database = client.db('dominican_republic');
        const collection = database.collection('provincias');

        // Inserta los datos en la colección
        await collection.insertMany(provincias);
        console.log('Datos insertados correctamente');

        // Recupera e imprime los datos
        const results = await collection.find({}).toArray();
        console.log('Datos en la colección:');
        console.log(results);

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
