# Script

Procesa los archivos fuente del callejero INE alojado en `../archive`.

Si no los encuentra, los descarga.


## Modo de Uso

    $ php script.php [COMMAND SUBCOMMAND]] [OPTIONS]

Si se invoca sin subcomandos o argumentos, ejecuta:

  1. download all
  2. process all
  3. merge
  4. update
  


### Opciones

    COMMANDS

        download [SUBCOMMAND]   Descarga los archivos fuente, pero no los procesa.

                                Se puede especificar opcionalmente un subcomando:

            year YEAR MONTH     Descarga únicamente el periodo YEAR MONTH (Month es 1 ó 7)
            all                 Descarga todos los años

            OPTIONS

                --force, -f     Fuerza la descarga de los archivos fuente, aunque existan



        process [SUBCOMMAND]    Procesa los archivos fuente, y crea los archivos CSV/JSON.

                                Se puede especificar opcionalmente un subcomando:

            period YEAR         Procesa únicamente el año YEAR
            period last         Procesa únicamente el último año
            historical          Procesa todos los años y general histórico.
            all                 Procesa todo


        merge                   Hace el merge con ds-organizacion-administrativa para obtener el
                                nombre del municipio, que no viene en los archivos fuente.


        convert-to-json         Convierte todos los archivos .csv almacenados en /data a .json.

            
        update                  Actualiza el archivo datapackage.json

            OPTIONS

                --json, -j      Habilita la creación de recursos para los archivos JSON en datapackage.json




## Requisitos

* PHP 5.4+
* PHP Zip extension
* csvkit 1.0.4

PHP-ZIP se instala mediante:

    $ sudo apt install php-zip

### csvkit

Para poder generar los archivos en `.json`, hay que tener instalado [csvkit](https://csvkit.readthedocs.org/en/540/index.html) y `jq`. Para este script se ha usado la version 1.0.4 de `csvkit`.


Se instala mediante:

    $ sudo pip install csvkit
    $ sudo apt install jq


Así mismo, `pip` tiene que estar instalado. En Ubuntu esto se hace mediante:

    $ sudo apt-get install python-pip python-dev build-essential
    $ sudo pip install --upgrade pip
    $ sudo pip install --upgrade virtualenv
