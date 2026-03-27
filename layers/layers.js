var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 0.584000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_TTC_TreeInventory4_1 = new ol.format.GeoJSON();
var features_TTC_TreeInventory4_1 = format_TTC_TreeInventory4_1.readFeatures(json_TTC_TreeInventory4_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TTC_TreeInventory4_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TTC_TreeInventory4_1.addFeatures(features_TTC_TreeInventory4_1);
var lyr_TTC_TreeInventory4_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TTC_TreeInventory4_1, 
                style: style_TTC_TreeInventory4_1,
                popuplayertitle: 'TTC_TreeInventory4',
                interactive: true,
    title: 'TTC_TreeInventory4<br />\
    <img src="styles/legend/TTC_TreeInventory4_1_0.png" /> American elm<br />\
    <img src="styles/legend/TTC_TreeInventory4_1_1.png" /> Autumn Blaze maple<br />\
    <img src="styles/legend/TTC_TreeInventory4_1_2.png" /> littleleaf linden<br />\
    <img src="styles/legend/TTC_TreeInventory4_1_3.png" /> Norway maple<br />\
    <img src="styles/legend/TTC_TreeInventory4_1_4.png" /> Siberian elm<br />\
    <img src="styles/legend/TTC_TreeInventory4_1_5.png" /> white spruce<br />\
    <img src="styles/legend/TTC_TreeInventory4_1_6.png" /> <br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_TTC_TreeInventory4_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_TTC_TreeInventory4_1];
lyr_TTC_TreeInventory4_1.set('fieldAliases', {'fid': 'fid', 'SpeciesCode': 'SpeciesCode', 'BotanicalName': 'BotanicalName', 'CommonName': 'CommonName', 'Condition': 'Condition', 'Notes': 'Notes', 'Attachments': 'Attachments', 'Date': 'Date', 'Cables': 'Cables', 'Bolts': 'Bolts', 'Reduction': 'Reduction', 'Structural': 'Structural', 'DBH': 'DBH', });
lyr_TTC_TreeInventory4_1.set('fieldImages', {'fid': 'TextEdit', 'SpeciesCode': 'TextEdit', 'BotanicalName': 'TextEdit', 'CommonName': 'TextEdit', 'Condition': 'TextEdit', 'Notes': 'TextEdit', 'Attachments': 'TextEdit', 'Date': 'DateTime', 'Cables': 'Range', 'Bolts': 'Range', 'Reduction': 'TextEdit', 'Structural': 'TextEdit', 'DBH': 'Range', });
lyr_TTC_TreeInventory4_1.set('fieldLabels', {'fid': 'inline label - always visible', 'SpeciesCode': 'inline label - always visible', 'BotanicalName': 'inline label - always visible', 'CommonName': 'inline label - always visible', 'Condition': 'inline label - always visible', 'Notes': 'inline label - visible with data', 'Attachments': 'inline label - visible with data', 'Date': 'inline label - always visible', 'Cables': 'inline label - visible with data', 'Bolts': 'inline label - visible with data', 'Reduction': 'inline label - visible with data', 'Structural': 'inline label - visible with data', 'DBH': 'no label', });
lyr_TTC_TreeInventory4_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});