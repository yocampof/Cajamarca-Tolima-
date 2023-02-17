var wms_layers = [];

var lyr_NDVI20151_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI2015 (1)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI20151_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8402290.606599, 491683.262898, -8391395.606599, 498643.262898]
                            })
                        });
var lyr_NDVI20221_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI2022 (1)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI20221_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8402290.606599, 491683.262898, -8391395.606599, 498643.262898]
                            })
                        });

lyr_NDVI20151_0.setVisible(true);lyr_NDVI20221_1.setVisible(true);
var layersList = [lyr_NDVI20151_0,lyr_NDVI20221_1];
