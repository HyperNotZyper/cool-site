<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Ruffle Player Example</title>
    <script src="https://unpkg.com/jellykl"></script>
    <script src="https://unpkg.com/@ruffle-rs/ruffle"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .ruffle-player {
            width: 100%;
            height: 0;
            padding-bottom: 75%; /* 4:3 aspect ratio */
            position: relative;
        }
        .ruffle-player iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        .file-input {
            display: none;
        }
        .file-label {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            cursor: pointer;
        }
        .file-label:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Ruffle Player Example</h1>
        <p>This is an example of using the Ruffle Player library to play SWF files in a Jellykl application hosted on GitHub Pages.</p>
        <div class="ruffle-player" id="ruffle-player"></div>
        <input type="file" accept=".swf" class="file-input" id="file-input">
        <label for="file-input" class="file-label">Select SWF File</label>
    </div>
    <script>
        // Define a function to initialize the Ruffle Player
        function initRufflePlayer(url) {
            const rufflePlayer = new RufflePlayer("#ruffle-player", {
                // Set the URL of the SWF file to play
                url: url,
                // Set any additional options or configuration for Ruffle Player here
                // For example:
                // renderer: "webgl",
                // background_color: "#000000",
            });
            rufflePlayer.run();
        }

        // Handle file input change event
        document.getElementById('file-input').addEventListener('change', (event) => {
            const file = event.target.files[0];
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                const url = e.target.result;
                initRufflePlayer(url);
            };
            fileReader.readAsDataURL(file);
        });
    </script>
</body>
</html>
