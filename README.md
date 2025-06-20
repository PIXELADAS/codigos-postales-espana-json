# codigos-postales-espana-json

Dataset que proporciona un listado de todos los códigos postales de España asociados a los municipios y unidades poblacionales.

Usa como fuente el Callejero del Censo Electoral (INE).

Antes de nada agradecer el gran trabajo de Iñigo Flores ya que este es un fork de su proyecto que convierte los datos de CSV a JSON para que se puedan tratar mejor desde proyectos Javascript. 

> [!WARNING]
> Este repositorio es un fork con modificaciones del proyecto original para adaptarlo a las necesidades específicas de desarrollo en JavaScript. Para acceder al dataset original y obtener la versión más actualizada, por favor visita el [repositorio original de Code for Spain](https://github.com/inigoflores/ds-codigos-postales-ine-es).

## Para ejecutar la conversión
Lanza uno de estos comandos
```bash
pnpm install
pnpm run dev
```

O bien
```bash
npm install
npm run dev
```



## Codigos Postales y Municipios Asociados
- Fuente: [Callejero del Censo Electoral (INE)](https://www.ine.es/prodyser/callejero/)
- URL: `http://www.ine.es/prodyser/callejero/caj_esp/caj_esp_[MM][YYYY].zip` donde `MM` es el mes (01 ó 07) y la cadena `YYYY` es el último año
- Tipo: Texto de ancho fijo comprimido (.zip)
- Datos procesados: [/data/codigos_postales_municipios.csv](data/codigos_postales_municipios.csv)
- Datos procesados en formato JSON: [/data/codigos_postales_municipios.json](data/codigos_postales_municipios.json)


### Formato de los datos


Ejemplo en CSV:

|codigo_postal|municipio_id|municipio_nombre|
|-------------|------------|----------------|
|29601        |29069       |Marbella        |
|29602        |29069       |Marbella        |
|29603        |29069       |Marbella        |
|29604        |29069       |Marbella        |
|29610        |29076       |Ojén            |
|29611        |29061       |Istán           |
|29612        |29076       |Ojén            |
|29620        |29067       |Málaga          |
|29620        |29901       |Torremolinos    |
|29630        |29025       |Benalmádena     |
|29631        |29025       |Benalmádena     |
|29639        |29025       |Benalmádena     |
|29640        |29054       |Fuengirola      |
|29649        |29070       |Mijas           |



## Codigos Postales y Unidades Poblacionales Asociadas
- Fuente: [Callejero del Censo Electoral (INE)](https://www.ine.es/prodyser/callejero/)
- URL: `http://www.ine.es/prodyser/callejero/caj_esp/caj_esp_[MM][YYYY].zip` donde `MM` es el mes (01 ó 07) y la cadena `YYYY` es el último año
- Tipo: Texto de ancho fijo comprimido (.zip)
- Datos procesados: [/data/codigos_postales_municipios_entidades.csv](data/codigos_postales_municipios_entidades.csv)
- Datos procesados en formato JSON: [/data/codigos_postales_municipios_entidades.json](data/codigos_postales_municipios_entidades.json)


### Formato de los datos


Ejemplo en CSV:

|codigo_postal|municipio_id|municipio_nombre|codigo_unidad_poblacional|entidad_singular_nombre  |nucleo_nombre            |
|-------------|------------|----------------|-------------------------|-------------------------|-------------------------|
|29601        |29069       |Marbella        |0009401                  |Marbella                 |Marbella                 |
|29602        |29069       |Marbella        |0009401                  |Marbella                 |Marbella                 |
|29602        |29069       |Marbella        |0009404                  |Marbella                 |Monteros (Los)           |
|29603        |29069       |Marbella        |0009401                  |Marbella                 |Marbella                 |
|29603        |29069       |Marbella        |0009404                  |Marbella                 |Monteros (Los)           |
|29603        |29069       |Marbella        |0009405                  |Marbella                 |Ricmar                   |
|29603        |29069       |Marbella        |0009406                  |Marbella                 |Rio Real                 |
|29603        |29069       |Marbella        |0010801                  |Nueva Andalucia          |Nueva Andalucia          |
|29604        |29069       |Marbella        |0009402                  |Marbella                 |Artola                   |
|29604        |29069       |Marbella        |0009403                  |Marbella                 |Elviria                  |
|29604        |29069       |Marbella        |0009405                  |Marbella                 |Ricmar                   |
|29604        |29069       |Marbella        |0009407                  |Marbella                 |Rosario (El)             |
|29604        |29069       |Marbella        |0009499                  |Marbella                 |*diseminado*             |
|29610        |29076       |Ojén            |0001701                  |Ojen                     |Ojen                     |
|29610        |29076       |Ojén            |0001702                  |Ojen                     |Mairena (La)             |
|29610        |29076       |Ojén            |0001799                  |Ojen                     |*diseminado*             |
|29611        |29061       |Istán           |0001701                  |Istan                    |Istan                    |
|29611        |29061       |Istán           |0001702                  |Istan                    |Balcones del Lago        |
|29611        |29061       |Istán           |0001703                  |Istan                    |Cerros del Lago          |
|29611        |29061       |Istán           |0001799                  |Istan                    |*diseminado*             |
|29612        |29076       |Ojén            |0001702                  |Ojen                     |Mairena (La)             |
|29620        |29067       |Málaga          |0002203                  |Churriana                |Cortijo de Maza-El Olivar|
|29620        |29067       |Málaga          |0002299                  |Churriana                |*diseminado*             |
|29620        |29901       |Torremolinos    |0001706                  |Torremolinos             |Torremolinos             |
|29620        |29901       |Torremolinos    |0001799                  |Torremolinos             |*diseminado*             |
|29630        |29025       |Benalmádena     |0001701                  |Arroyo de la Miel-Benalma|Arroyo de la Miel-Benalma|
|29630        |29025       |Benalmádena     |0001702                  |Arroyo de la Miel-Benalma|Torrequebrada            |
|29630        |29025       |Benalmádena     |0002202                  |Benalmadena              |Capellania (La)          |
|29630        |29025       |Benalmádena     |0002204                  |Benalmadena              |Perla-Torremuelle (La)   |
|29631        |29025       |Benalmádena     |0001701                  |Arroyo de la Miel-Benalma|Arroyo de la Miel-Benalma|
|29639        |29025       |Benalmádena     |0002201                  |Benalmadena              |Benalmadena              |
|29639        |29025       |Benalmádena     |0002202                  |Benalmadena              |Capellania (La)          |
|29639        |29025       |Benalmádena     |0002203                  |Benalmadena              |Carvajal                 |
|29639        |29025       |Benalmádena     |0002204                  |Benalmadena              |Perla-Torremuelle (La)   |
|29639        |29025       |Benalmádena     |0002205                  |Benalmadena              |Santana                  |
|29639        |29025       |Benalmádena     |0002206                  |Benalmadena              |Sierrezuela (La)         |
|29639        |29025       |Benalmádena     |0002299                  |Benalmadena              |*diseminado*             |
|29640        |29054       |Fuengirola      |0001701                  |Fuengirola               |Fuengirola               |
|29649        |29070       |Mijas           |0006999                  |Entrerrios               |*diseminado*             |
|29649        |29070       |Mijas           |0007504                  |Lagunas (Las)            |Mijas Golf               |
|29649        |29070       |Mijas           |0016701                  |Calahonda-Chaparral      |Cala (La)                |
|29649        |29070       |Mijas           |0016702                  |Calahonda-Chaparral      |Cerros del Aguila        |
|29649        |29070       |Mijas           |0016703                  |Calahonda-Chaparral      |Chaparral                |
|29649        |29070       |Mijas           |0016704                  |Calahonda-Chaparral      |Sitio de Calahonda       |
|29649        |29070       |Mijas           |0016799                  |Calahonda-Chaparral      |*diseminado*             |




## Codigos Postales y Municipios Asociados (Histórico)
- Fuente: [Callejero del Censo Electoral (INE)](https://www.ine.es/prodyser/callejero/)
- URL: `http://www.ine.es/prodyser/callejero/caj_esp/caj_esp_[MM][YYYY].zip` donde `MM` es el mes (01 ó 07) y la cadena `YYYY` es el año, (desde 2013 hasta la actualidad))
- Tipo: Texto de ancho fijo comprimido (.zip)
- Datos procesados: [/data/codigos_postales_municipiosid_historical.csv](data/codigos_postales_municipiosid_historical.csv)
- Datos procesados en formato JSON: [/data/codigos_postales_municipiosid_historical.json](data/codigos_postales_municipiosid_historical.json)

En este caso no se incluye el nombre del municipio. 

### Formato de los datos


Ejemplo en CSV:

|codigo_postal|municipio_id|year        |month|
|-------------|------------|------------|-----|
|29610        |29076       |2013        |01   |
|29620        |29076       |2013        |01   |
|29610        |29076       |2013        |07   |
|29612        |29076       |2013        |07   |


En el ejemplo se aprecia como en julio de 2013 desaparece el código postal 29620 y aparece el código postal 29612 para el municipio 29076.


## Codigos Postales y Unidades Poblacionales Asociadas
- Fuente: [Callejero del Censo Electoral (INE)](https://www.ine.es/prodyser/callejero/)
- URL: `http://www.ine.es/prodyser/callejero/caj_esp/caj_esp_[MM][YYYY].zip` donde `MM` es el mes (01 ó 07) y la cadena `YYYY` es el año, (desde 2013 hasta la actualidad))
- Tipo: Texto de ancho fijo comprimido (.zip)
- Datos procesados: [/data/codigos_postales_municipiosid_entidades_historical.csv](data/codigos_postales_municipiosid_entidades_historical.csv)
- Datos procesados en formato JSON: [/data/codigos_postales_municipiosid_entidades_historical.json](data/codigos_postales_municipiosid_entidades_historical.json)

En este caso no se incluye el nombre del municipio. 

### Formato de los datos


Ejemplo en CSV:

|codigo_postal|municipio_id|codigo_unidad_poblacional|entidad_singular_nombre|nucleo_nombre|year|month|
|-------------|------------|-------------------------|-----------------------|-------------|----|-----|
|29610        |29076       |0001701                  |Ojen                   |Ojen         |2013|01   |
|29610        |29076       |0001799                  |Ojen                   |*diseminado* |2013|01   |
|29620        |29076       |0001799                  |Ojen                   |*diseminado* |2013|01   |
|29610        |29076       |0001701                  |Ojen                   |Ojen         |2013|07   |
|29610        |29076       |0001702                  |Ojen                   |Mairena (La) |2013|07   |
|29610        |29076       |0001799                  |Ojen                   |*diseminado* |2013|07   |
|29612        |29076       |0001702                  |Ojen                   |Mairena (La) |2013|07   |

Siguiendo el ejemplo anterior, se aprecia como en Julio de 2013 aparece una nueva unidad poblacional (La Mairena), a la que se le asigna los códigos postales 29610 y 29612.


## Script

El script se puede encontrar en [/scripts/](/scripts/).


## Merge con ds-organizacion-administrativa

Para aquellos conjuntos de datos que no incluan el nombre del municipio asociado al codigo INE, este se puede obtener 
haciendo un merge con `ds-organizacion-administrativa/ds-oa-municipios` mediante `csvjoin`. 

Un ejemplo:

    $ curl https://raw.githubusercontent.com/codeforspain/ds-organizacion-administrativa/master/data/municipios.csv \
        | csvcut -c 'municipio_id,nombre' \
        | csvjoin --snifflimit 0 -I -c "municipio_id" ../data/codigos_postales_municipiosid_entidades.csv - \
        | csvcut -c "codigo_postal,municipio_id,nombre,codigo_unidad_poblacional,entidad_singular_nombre,nucleo_nombre" \
        > ../data/codigos_postales_municipios_entidades.csv


## Compatibilidad del Código de Unidad Poblacional con otros datasets del INE

Este dataset incorpora un Código de Unidad Poblacional (CUN) que consta de 7 digitos, mientras que otros conjuntos de datos del INE, como el de [Población del Padrón Continuo por Unidad Poblacional](https://www.ine.es/nomen2/index.do) están referenciados a un CUN de tan solo 6 digitos. 

El problema viene de que el INE añade un dígito de control. Esto está explicado en el [diseño de registro](https://www.ine.es/ss/Satellite?blobcol=urldata&blobheader=application%2Fmsword&blobheadername1=Content-Disposition&blobheadervalue1=attachment%3B+filename%3Ddisenocallejero.doc&blobkey=urldata&blobtable=MungoBlobs&blobwhere=817%2F26%2Fdisenocallejero%2C1.doc&ssbinary=true):

> _1. El campo CUN será cumplimentado por el INE, que remitirá periódicamente a los Ayuntamientos la codificación asignada.
> Este campo presenta la estructura CCSSDNN, donde CC= Código de entidad colectiva, SS= Código de entidad singular, D= Dígito de control obtenido por el método ABC a partir del conjunto formado por CC y SS y NN= Código de núcleo (Si = 99, es DISEMINADO)._

Por lo tanto, si se elimina el 5º dígito, quedará un CUN de 6 dígitos con el que se deberían poder establecer asociaciones.

