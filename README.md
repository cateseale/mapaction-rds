# MapAction Rolling Data Scramble Helper Scripts

This repository hold various scripts created to process data or assist with the Rolling Data Scramble

## geofabrik_to_mapaction.py

This script unzips and renames Geofabrik downloads to Mapaction filenames and folder structure.

Download data from: https://download.geofabrik.de/index.html

Usage: ``python3 geofabrik_to_mapaction.py path/to/your/zipfile.zip``

For examples, ``python3 geofabrik_to_mapaction.py /Users/cate/git/data/country_data/sudan/sudan-latest-free.zip`` results in folder structure:

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
