//*******************************************************************************************************************
// Creates SRTM DEM, Hillshade, Slope and Aspect for download
// Author: Cate Seale
// Original created by Tom Hughes based on work done at IFAD
//*******************************************************************************************************************


// Upload your country boundary (adm0 layer) and import it here
var aoi = ee.FeatureCollection("projects/mapaction-cate/assets/afg_admn_ad0_py_s0_gadm_pp_country");
Map.centerObject(aoi);


// Country Code
var iso3 = 'afg';


// SRTM data
var srtm30 = ee.Image("USGS/SRTMGL1_003");
var srtm90 = ee.Image("CGIAR/SRTM90_V4");


// NoData Values
var elevationNoDataValue = 32767
var noDataValue = 0


// Export Options
// var crs = 'EPSG:4326'
var crs = 'EPSG:3857'


//  SRTM 30 Data
var elevation30 = srtm30.select('elevation').clip(aoi);
var slope30 = ee.Terrain.slope(elevation30).clip(aoi);
var aspect30 = ee.Terrain.aspect(elevation30).clip(aoi);
var hillshade30 = ee.Terrain.hillshade(elevation30, 315, 45).clip(aoi);


// SRTM 90 Data
var elevation90 = srtm90.select('elevation').clip(aoi);
var slope90 = ee.Terrain.slope(elevation90).clip(aoi);
var aspect90 = ee.Terrain.aspect(elevation90).clip(aoi);
var hillshade90 = ee.Terrain.hillshade(elevation90, 315, 45).clip(aoi);


// Add all layers to map
var elevationVizParams = {min: 0, max:4051};
var slopeVizParams = {min: 0, max: 60};
var hillshadeVizParams = {min: 0, max: 255};

Map.addLayer(elevation30, elevationVizParams, 'Elevation 30m', true);
Map.addLayer(slope30, slopeVizParams, 'Slope 30m', false);
Map.addLayer(aspect30, slopeVizParams, 'Aspect 30m', false);
Map.addLayer(hillshade30, hillshadeVizParams, 'Hillshade 30m', false);

Map.addLayer(elevation90, elevationVizParams, 'Elevation 90m', true);
Map.addLayer(slope90, slopeVizParams, 'Slope 90m', false);
Map.addLayer(aspect90, slopeVizParams, 'Aspect 90m', false);
Map.addLayer(hillshade90, hillshadeVizParams, 'Hillshade 90m', false);


// Export 30m Data
Export.image.toDrive({
  image: elevation30.unmask(elevationNoDataValue),
  description: iso3.toLowerCase() + '_elev_dem_ras_s0_srtm_pp_elevation30m',
  folder: 'MapAction',
  region: aoi,
  scale: 30,
  crs: crs,
  maxPixels: 1e13
});

Export.image.toDrive({
  image: hillshade30.unmask(noDataValue),
  description: iso3.toLowerCase() + '_elev_hsh_ras_s0_srtm_pp_hillshade30m',
  folder: 'MapAction',
  region: aoi,
  scale: 30,
  crs: crs,
  maxPixels: 1e13
});

Export.image.toDrive({
  image: slope30.unmask(noDataValue),
  description: iso3.toLowerCase() + '_elev_hsh_ras_s0_srtm_pp_slope30m',
  folder: 'MapAction',
  region: aoi,
  scale: 30,
  crs: crs,
  maxPixels: 1e13
});

Export.image.toDrive({
  image: aspect30.unmask(noDataValue),
  description: iso3.toLowerCase() + '_elev_hsh_ras_s0_srtm_pp_aspect30m',
  folder: 'MapAction',
  region: aoi,
  scale: 30,
  crs: crs,
  maxPixels: 1e13
});


// Export 90m Data
Export.image.toDrive({
  image: elevation90.unmask(elevationNoDataValue),
  description: iso3.toLowerCase() + '_elev_dem_ras_s0_srtm_pp_elevation90m',
  folder: 'MapAction',
  region: aoi,
  scale: 90,
  crs: crs,
  maxPixels: 1e13
});

Export.image.toDrive({
  image: hillshade90.unmask(noDataValue),
  description: iso3.toLowerCase() + '_elev_hsh_ras_s0_srtm_pp_hillshade90m',
  folder: 'MapAction',
  region: aoi,
  scale: 90,
  crs: crs,
  maxPixels: 1e13
});

Export.image.toDrive({
  image: slope90.unmask(noDataValue),
  description: iso3.toLowerCase() + '_elev_hsh_ras_s0_srtm_pp_slope90m',
  folder: 'MapAction',
  region: aoi,
  scale: 90,
  crs: crs,
  maxPixels: 1e13
});

Export.image.toDrive({
  image: aspect90.unmask(noDataValue),
  description: iso3.toLowerCase() + '_elev_hsh_ras_s0_srtm_pp_aspect90m',
  folder: 'MapAction',
  region: aoi,
  scale: 90,
  crs: crs,
  maxPixels: 1e13
});
