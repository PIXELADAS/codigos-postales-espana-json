import fs from "fs";
import { parse } from "csv-parse";

const inputFiles = ["data/codigos_postales_municipios_entidades.csv", "data/codigos_postales_municipios.csv", "data/codigos_postales_municipiosid_entidades_historical.csv", "data/codigos_postales_municipiosid_entidades.csv", "data/codigos_postales_municipiosid_historical.csv", "data/codigos_postales_municipiosid.csv" ];

if (!inputFiles || inputFiles.length === 0) {
  console.error("No se han proporcionado archivos de entrada.");
  process.exit(1);
}

inputFiles.forEach((inputFile) => {
  const outputFile = inputFile.replace(/\.csv$/, ".json");
  convertCsvToJson(inputFile, outputFile);
});

function convertCsvToJson(inputFile, outputFile) {
  fs.readFile(inputFile, "utf8", (err, data) => {
    if (err) {
      console.error("Error leyendo el archivo:", err);
      return;
    }

    parse(data, { columns: true, trim: true }, (err, output) => {
      if (err) {
        console.error("Error parseando el CSV:", err);
        return;
      }

      fs.writeFile(outputFile, JSON.stringify(output, null, 2), (err) => {
        if (err) {
          console.error("Error escribiendo el archivo JSON:", err);
          return;
        }

        console.log(`✅ Archivo convertido y guardado como ${outputFile}`);
      });
    });
  });
}
