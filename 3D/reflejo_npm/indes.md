<!DOCTYPE html>
<html lang="es" style="height: 100%;">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Radio Rehobot 97.7 FM</title>
    <style>
        body {
            background: linear-gradient(to bottom, #1a1a2e, #563d7c);
            margin: 0;
            height: 100%;
            font-family: 'Arial', sans-serif;
            color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        header {
            text-align: center;
            padding: 20px;
        }

        h1 {
            font-size: 4rem;
            margin: 0;
        }

        main {
            text-align: center;
            padding: 20px;
        }

        section {
            text-align: center;
            padding: 20px;
            width: 100%;
            box-sizing: border-box;
        }
 audio {
            width: 100%;
            max-width: 400px;
            margin: 20px auto;
            background-color: #fff;
            border-radius: 5px;
            padding: 10px;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }

        button {
            background-color: #000;
            color: white;
            padding: 10px 20px;
            border: 2px solid white;
            border-radius: 5px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            cursor: pointer;
            margin-top: 20px;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.3); /* Añade una sombra brillante */
        }
    </style>
</head>

<body>

    <header>
        <h1>Bienvenido a Radio Rehobot 97.7 FM</h1>
    </header>

    <main>
        <p>Esta es tu radio dedicada a la música cristiana y la edificación espiritual.</p>
        <p>¡Sintoniza para disfrutar de música que eleva el alma y edifica tu espíritu!</p>
    </main>

    <section>
        <h2>Reproductor de Audio</h2>
        <audio controls>
              <source src="http://35.185.202.79:8000/musica.ogg" type="audio/mpeg">
            Tu navegador no soporta la etiqueta de audio.
        </audio>
    </section>

    <section>
        <a href="https://radio2x2.vercel.app/" target="">
            <button type="button">Inicio a Rehobot</button>
        </a>
    </section>

</body>

</html>

