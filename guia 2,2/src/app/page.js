import styles from "./page.module.css";
const Equipos = ({ equipos }) => {
return (
<div className={styles.container__list}>
<h2 className={styles.title}>Equipos de Fútbol</h2>
{equipos.map((equipo) => (
<div key={equipo.id}>
<h3 className={styles.nameclub}>{equipo.nombre}</h3>
<ul >
{equipo.plantilla.map((jugador) => (
<li className={styles.container__list} key={jugador.id}>
<strong>{jugador.nombre}</strong>
<p>Altura: {jugador.Altura}m <br></br> Peso:
{jugador.Peso}Kg</p>
</li>
))}
</ul>
</div>
))}
</div>
);
};


export default function Home() {
  const equiposData = [
    {
      id: 1,
      nombre: "Real Madrid",
      plantilla: [
        { id: 1, nombre: "Eden Hazard", Altura: "1.75", Peso: "74"},
        { id: 2, nombre: "Gonzalo García", Altura: "1.82", Peso: "74"},
        { id: 3, nombre: "Karim Benzema", Altura: "1.85", Peso: "81"},
        { id: 4, nombre: "Sergio Ramos", Altura: "1.84", Peso: "82"},
        { id: 5, nombre: "Luka Modric", Altura: "1.74", Peso: "65"},
        { id: 6, nombre: "Toni Kroos", Altura: "1.82", Peso: "78"},
        { id: 7, nombre: "Vinicius Junior", Altura: "1.76", Peso: "73"},
        { id: 8, nombre: "Ferland Mendy", Altura: "1.81", Peso: "73"},
        { id: 9, nombre: "Rodrygo", Altura: "1.74", Peso: "64"},
        { id: 10, nombre: "Casemiro", Altura: "1.85", Peso: "84"}
      ]
    },
    {
      id: 2,
      nombre: "Barcelona",
      plantilla: [
        { id: 1, nombre: "Marc-André ter Stegen", Altura: "1.87", Peso: "85"},
        { id: 2, nombre: "Iñigo Martinez", Altura: "1.82", Peso: "82"},
        { id: 3, nombre: "Gavi", Altura: "1.75", Peso: "71" },
        { id: 4, nombre: "Lionel Messi", Altura: "1.70", Peso: "72"},
        { id: 5, nombre: "Pedri", Altura: "1.70", Peso: "68"},
        { id: 6, nombre: "Frenkie de Jong", Altura: "1.81", Peso: "74"},
        { id: 7, nombre: "Sergi Roberto", Altura: "1.78", Peso: "68"},
        { id: 8, nombre: "Ansu Fati", Altura: "1.78", Peso: "70"},
        { id: 9, nombre: "Ousmane Dembélé", Altura: "1.78", Peso: "67"},
        { id: 10, nombre: "Gerard Piqué", Altura: "1.94", Peso: "85"}
      ]
    },
    {
      id: 3,
      nombre: "Liverpool",
      plantilla: [ 
        { id: 1, nombre: "Mohamed Salah", Altura: "1.75", Peso: "71"},
        { id: 2, nombre: "Virgil van Dijk", Altura: "1.93", Peso: "92"},
        { id: 3, nombre: "Sadio Mané", Altura: "1.75", Peso: "69"},
        { id: 4, nombre: "Roberto Firmino", Altura: "1.81", Peso: "76"},
        { id: 5, nombre: "Andrew Robertson", Altura: "1.78", Peso: "64"},
        { id: 6, nombre: "Trent Alexander-Arnold", Altura: "1.80", Peso: "69"},
        { id: 7, nombre: "Jordan Henderson", Altura: "1.82", Peso: "67"},
        { id: 8, nombre: "Fabinho", Altura: "1.88", Peso: "78"},
        { id: 9, nombre: "Alisson Becker", Altura: "1.91", Peso: "91"},
        { id: 10, nombre: "Diogo Jota", Altura: "1.78", Peso: "69"}
      ]
    },
    {
      id: 4,
      nombre: "Manchester City",
      plantilla: [
        { id: 1, nombre: "Kevin De Bruyne", Altura: "1.81", Peso: "68"},
        { id: 2, nombre: "Rúben Dias", Altura: "1.87", Peso: "85"},
        { id: 3, nombre: "Phil Foden", Altura: "1.71", Peso: "70"},
        { id: 4, nombre: "Raheem Sterling", Altura: "1.70", Peso: "69"},
        { id: 5, nombre: "Bernardo Silva", Altura: "1.73", Peso: "64"},
        { id: 6, nombre: "Riyad Mahrez", Altura: "1.79", Peso: "73"},
        { id: 7, nombre: "João Cancelo", Altura: "1.82", Peso: "74"},
        { id: 8, nombre: "Ilkay Gündogan", Altura: "1.80", Peso: "70"},
        { id: 9, nombre: "Ederson", Altura: "1.88", Peso: "86"},
        { id: 10, nombre: "Kyle Walker", Altura: "1.78", Peso: "70"}
      ]
    }
  ];

return (
<main className={styles.main}>
<div>
<h1>Mi Aplicación de Fútbol</h1>
<Equipos equipos={equiposData} />
</div>
</main>
);
}