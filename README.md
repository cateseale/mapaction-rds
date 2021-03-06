# MapAction Rolling Data Scramble Helper Scripts

This repository hold various scripts created to process data or assist with the Rolling Data Scramble

## geofabrik_to_mapaction.py

This script unzips and renames Geofabrik downloads to Mapaction filenames and folder structure. Adapted from original Windows script by Tom Hughes.

Download data from: https://download.geofabrik.de/index.html

Usage: ``python3 geofabrik_to_mapaction.py path/to/your/zipfile.zip``

For example, ``python3 geofabrik_to_mapaction.py /Users/cate/git/data/country_data/sudan/sudan-latest-free.zip`` results in folder structure containing renamed shapefiles as below:

```
sudan
│   sudan-latest-free.zip
│
└───processed
    │
    └───206_bldg
    |   |   ...
    |
    └───218_land
    |   |   ...
    |
    └───221_phys
    |   |   ...
    |
    └───222_pois
    |   |   ...
    |
    └───229_stle
    |   |   ...    
    |
    └───232_tran
    |   |   ...
    
```

Works on MacOS, untested on Windows and Linux
