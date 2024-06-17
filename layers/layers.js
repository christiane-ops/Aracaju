var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SETORES_MALHA2023_1 = new ol.format.GeoJSON();
var features_SETORES_MALHA2023_1 = format_SETORES_MALHA2023_1.readFeatures(json_SETORES_MALHA2023_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SETORES_MALHA2023_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SETORES_MALHA2023_1.addFeatures(features_SETORES_MALHA2023_1);
var lyr_SETORES_MALHA2023_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SETORES_MALHA2023_1, 
                style: style_SETORES_MALHA2023_1,
                popuplayertitle: "SETORES_MALHA2023",
                interactive: true,
                    title: '<img src="styles/legend/SETORES_MALHA2023_1.png" /> SETORES_MALHA2023'
                });
var format_280480505000513_2 = new ol.format.GeoJSON();
var features_280480505000513_2 = format_280480505000513_2.readFeatures(json_280480505000513_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280480505000513_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280480505000513_2.addFeatures(features_280480505000513_2);
var lyr_280480505000513_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280480505000513_2, 
                style: style_280480505000513_2,
                popuplayertitle: "280480505000513",
                interactive: true,
                    title: '<img src="styles/legend/280480505000513_2.png" /> 280480505000513'
                });
var format_280030805000827_3 = new ol.format.GeoJSON();
var features_280030805000827_3 = format_280030805000827_3.readFeatures(json_280030805000827_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280030805000827_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280030805000827_3.addFeatures(features_280030805000827_3);
var lyr_280030805000827_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280030805000827_3, 
                style: style_280030805000827_3,
                popuplayertitle: "280030805000827",
                interactive: true,
                    title: '<img src="styles/legend/280030805000827_3.png" /> 280030805000827'
                });
var format_280330205000051_4 = new ol.format.GeoJSON();
var features_280330205000051_4 = format_280330205000051_4.readFeatures(json_280330205000051_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280330205000051_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280330205000051_4.addFeatures(features_280330205000051_4);
var lyr_280330205000051_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280330205000051_4, 
                style: style_280330205000051_4,
                popuplayertitle: "280330205000051",
                interactive: true,
                    title: '<img src="styles/legend/280330205000051_4.png" /> 280330205000051'
                });
var format_280030805000840_5 = new ol.format.GeoJSON();
var features_280030805000840_5 = format_280030805000840_5.readFeatures(json_280030805000840_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280030805000840_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280030805000840_5.addFeatures(features_280030805000840_5);
var lyr_280030805000840_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280030805000840_5, 
                style: style_280030805000840_5,
                popuplayertitle: "280030805000840",
                interactive: true,
                    title: '<img src="styles/legend/280030805000840_5.png" /> 280030805000840'
                });
var format_280480505000369_6 = new ol.format.GeoJSON();
var features_280480505000369_6 = format_280480505000369_6.readFeatures(json_280480505000369_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280480505000369_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280480505000369_6.addFeatures(features_280480505000369_6);
var lyr_280480505000369_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280480505000369_6, 
                style: style_280480505000369_6,
                popuplayertitle: "280480505000369",
                interactive: true,
                    title: '<img src="styles/legend/280480505000369_6.png" /> 280480505000369'
                });
var format_280480505000280_7 = new ol.format.GeoJSON();
var features_280480505000280_7 = format_280480505000280_7.readFeatures(json_280480505000280_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280480505000280_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280480505000280_7.addFeatures(features_280480505000280_7);
var lyr_280480505000280_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280480505000280_7, 
                style: style_280480505000280_7,
                popuplayertitle: "280480505000280",
                interactive: true,
                    title: '<img src="styles/legend/280480505000280_7.png" /> 280480505000280'
                });
var format_280030805000144_8 = new ol.format.GeoJSON();
var features_280030805000144_8 = format_280030805000144_8.readFeatures(json_280030805000144_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280030805000144_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280030805000144_8.addFeatures(features_280030805000144_8);
var lyr_280030805000144_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280030805000144_8, 
                style: style_280030805000144_8,
                popuplayertitle: "280030805000144",
                interactive: true,
                    title: '<img src="styles/legend/280030805000144_8.png" /> 280030805000144'
                });
var format_280030805000855_9 = new ol.format.GeoJSON();
var features_280030805000855_9 = format_280030805000855_9.readFeatures(json_280030805000855_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280030805000855_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280030805000855_9.addFeatures(features_280030805000855_9);
var lyr_280030805000855_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280030805000855_9, 
                style: style_280030805000855_9,
                popuplayertitle: "280030805000855",
                interactive: true,
                    title: '<img src="styles/legend/280030805000855_9.png" /> 280030805000855'
                });
var format_280030805000838_10 = new ol.format.GeoJSON();
var features_280030805000838_10 = format_280030805000838_10.readFeatures(json_280030805000838_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280030805000838_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280030805000838_10.addFeatures(features_280030805000838_10);
var lyr_280030805000838_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280030805000838_10, 
                style: style_280030805000838_10,
                popuplayertitle: "280030805000838",
                interactive: true,
                    title: '<img src="styles/legend/280030805000838_10.png" /> 280030805000838'
                });
var format_280480505000279_11 = new ol.format.GeoJSON();
var features_280480505000279_11 = format_280480505000279_11.readFeatures(json_280480505000279_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280480505000279_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280480505000279_11.addFeatures(features_280480505000279_11);
var lyr_280480505000279_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280480505000279_11, 
                style: style_280480505000279_11,
                popuplayertitle: "280480505000279",
                interactive: true,
                    title: '<img src="styles/legend/280480505000279_11.png" /> 280480505000279'
                });
var format_280030805000242_12 = new ol.format.GeoJSON();
var features_280030805000242_12 = format_280030805000242_12.readFeatures(json_280030805000242_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280030805000242_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280030805000242_12.addFeatures(features_280030805000242_12);
var lyr_280030805000242_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280030805000242_12, 
                style: style_280030805000242_12,
                popuplayertitle: "280030805000242",
                interactive: true,
                    title: '<img src="styles/legend/280030805000242_12.png" /> 280030805000242'
                });
var format_280030805000593_13 = new ol.format.GeoJSON();
var features_280030805000593_13 = format_280030805000593_13.readFeatures(json_280030805000593_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280030805000593_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280030805000593_13.addFeatures(features_280030805000593_13);
var lyr_280030805000593_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280030805000593_13, 
                style: style_280030805000593_13,
                popuplayertitle: "280030805000593",
                interactive: true,
                    title: '<img src="styles/legend/280030805000593_13.png" /> 280030805000593'
                });
var format_280030805000706_14 = new ol.format.GeoJSON();
var features_280030805000706_14 = format_280030805000706_14.readFeatures(json_280030805000706_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280030805000706_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280030805000706_14.addFeatures(features_280030805000706_14);
var lyr_280030805000706_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280030805000706_14, 
                style: style_280030805000706_14,
                popuplayertitle: "280030805000706",
                interactive: true,
                    title: '<img src="styles/legend/280030805000706_14.png" /> 280030805000706'
                });
var format_280060505000053_15 = new ol.format.GeoJSON();
var features_280060505000053_15 = format_280060505000053_15.readFeatures(json_280060505000053_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280060505000053_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280060505000053_15.addFeatures(features_280060505000053_15);
var lyr_280060505000053_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280060505000053_15, 
                style: style_280060505000053_15,
                popuplayertitle: "280060505000053",
                interactive: true,
                    title: '<img src="styles/legend/280060505000053_15.png" /> 280060505000053'
                });
var format_280360905000010_16 = new ol.format.GeoJSON();
var features_280360905000010_16 = format_280360905000010_16.readFeatures(json_280360905000010_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280360905000010_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280360905000010_16.addFeatures(features_280360905000010_16);
var lyr_280360905000010_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280360905000010_16, 
                style: style_280360905000010_16,
                popuplayertitle: "280360905000010",
                interactive: true,
                    title: '<img src="styles/legend/280360905000010_16.png" /> 280360905000010'
                });
var format_280360905000023_17 = new ol.format.GeoJSON();
var features_280360905000023_17 = format_280360905000023_17.readFeatures(json_280360905000023_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280360905000023_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280360905000023_17.addFeatures(features_280360905000023_17);
var lyr_280360905000023_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280360905000023_17, 
                style: style_280360905000023_17,
                popuplayertitle: "280360905000023",
                interactive: true,
                    title: '<img src="styles/legend/280360905000023_17.png" /> 280360905000023'
                });
var format_280360905000049_18 = new ol.format.GeoJSON();
var features_280360905000049_18 = format_280360905000049_18.readFeatures(json_280360905000049_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280360905000049_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280360905000049_18.addFeatures(features_280360905000049_18);
var lyr_280360905000049_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280360905000049_18, 
                style: style_280360905000049_18,
                popuplayertitle: "280360905000049",
                interactive: true,
                    title: '<img src="styles/legend/280360905000049_18.png" /> 280360905000049'
                });
var format_280400305000023_19 = new ol.format.GeoJSON();
var features_280400305000023_19 = format_280400305000023_19.readFeatures(json_280400305000023_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280400305000023_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280400305000023_19.addFeatures(features_280400305000023_19);
var lyr_280400305000023_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280400305000023_19, 
                style: style_280400305000023_19,
                popuplayertitle: "280400305000023",
                interactive: true,
                    title: '<img src="styles/legend/280400305000023_19.png" /> 280400305000023'
                });
var format_280480505000060_20 = new ol.format.GeoJSON();
var features_280480505000060_20 = format_280480505000060_20.readFeatures(json_280480505000060_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280480505000060_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280480505000060_20.addFeatures(features_280480505000060_20);
var lyr_280480505000060_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280480505000060_20, 
                style: style_280480505000060_20,
                popuplayertitle: "280480505000060",
                interactive: true,
                    title: '<img src="styles/legend/280480505000060_20.png" /> 280480505000060'
                });
var format_280030805000065_21 = new ol.format.GeoJSON();
var features_280030805000065_21 = format_280030805000065_21.readFeatures(json_280030805000065_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280030805000065_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280030805000065_21.addFeatures(features_280030805000065_21);
var lyr_280030805000065_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280030805000065_21, 
                style: style_280030805000065_21,
                popuplayertitle: "280030805000065",
                interactive: true,
                    title: '<img src="styles/legend/280030805000065_21.png" /> 280030805000065'
                });
var format_280030805000389_22 = new ol.format.GeoJSON();
var features_280030805000389_22 = format_280030805000389_22.readFeatures(json_280030805000389_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280030805000389_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280030805000389_22.addFeatures(features_280030805000389_22);
var lyr_280030805000389_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280030805000389_22, 
                style: style_280030805000389_22,
                popuplayertitle: "280030805000389",
                interactive: true,
                    title: '<img src="styles/legend/280030805000389_22.png" /> 280030805000389'
                });
var format_280030805000679_23 = new ol.format.GeoJSON();
var features_280030805000679_23 = format_280030805000679_23.readFeatures(json_280030805000679_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280030805000679_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280030805000679_23.addFeatures(features_280030805000679_23);
var lyr_280030805000679_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280030805000679_23, 
                style: style_280030805000679_23,
                popuplayertitle: "280030805000679",
                interactive: true,
                    title: '<img src="styles/legend/280030805000679_23.png" /> 280030805000679'
                });
var format_280030805000990_24 = new ol.format.GeoJSON();
var features_280030805000990_24 = format_280030805000990_24.readFeatures(json_280030805000990_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280030805000990_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280030805000990_24.addFeatures(features_280030805000990_24);
var lyr_280030805000990_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280030805000990_24, 
                style: style_280030805000990_24,
                popuplayertitle: "280030805000990",
                interactive: true,
                    title: '<img src="styles/legend/280030805000990_24.png" /> 280030805000990'
                });
var format_280530705000026_25 = new ol.format.GeoJSON();
var features_280530705000026_25 = format_280530705000026_25.readFeatures(json_280530705000026_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280530705000026_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280530705000026_25.addFeatures(features_280530705000026_25);
var lyr_280530705000026_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280530705000026_25, 
                style: style_280530705000026_25,
                popuplayertitle: "280530705000026",
                interactive: true,
                    title: '<img src="styles/legend/280530705000026_25.png" /> 280530705000026'
                });
var format_280530705000028_26 = new ol.format.GeoJSON();
var features_280530705000028_26 = format_280530705000028_26.readFeatures(json_280530705000028_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280530705000028_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280530705000028_26.addFeatures(features_280530705000028_26);
var lyr_280530705000028_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280530705000028_26, 
                style: style_280530705000028_26,
                popuplayertitle: "280530705000028",
                interactive: true,
                    title: '<img src="styles/legend/280530705000028_26.png" /> 280530705000028'
                });
var format_280670105000169_27 = new ol.format.GeoJSON();
var features_280670105000169_27 = format_280670105000169_27.readFeatures(json_280670105000169_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280670105000169_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280670105000169_27.addFeatures(features_280670105000169_27);
var lyr_280670105000169_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280670105000169_27, 
                style: style_280670105000169_27,
                popuplayertitle: "280670105000169",
                interactive: true,
                    title: '<img src="styles/legend/280670105000169_27.png" /> 280670105000169'
                });
var format_280670105000198_28 = new ol.format.GeoJSON();
var features_280670105000198_28 = format_280670105000198_28.readFeatures(json_280670105000198_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280670105000198_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280670105000198_28.addFeatures(features_280670105000198_28);
var lyr_280670105000198_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280670105000198_28, 
                style: style_280670105000198_28,
                popuplayertitle: "280670105000198",
                interactive: true,
                    title: '<img src="styles/legend/280670105000198_28.png" /> 280670105000198'
                });
var format_280030805000036_29 = new ol.format.GeoJSON();
var features_280030805000036_29 = format_280030805000036_29.readFeatures(json_280030805000036_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280030805000036_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280030805000036_29.addFeatures(features_280030805000036_29);
var lyr_280030805000036_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280030805000036_29, 
                style: style_280030805000036_29,
                popuplayertitle: "280030805000036",
                interactive: true,
                    title: '<img src="styles/legend/280030805000036_29.png" /> 280030805000036'
                });
var format_280030805000359_30 = new ol.format.GeoJSON();
var features_280030805000359_30 = format_280030805000359_30.readFeatures(json_280030805000359_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280030805000359_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280030805000359_30.addFeatures(features_280030805000359_30);
var lyr_280030805000359_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280030805000359_30, 
                style: style_280030805000359_30,
                popuplayertitle: "280030805000359",
                interactive: true,
                    title: '<img src="styles/legend/280030805000359_30.png" /> 280030805000359'
                });
var format_280030805000537_31 = new ol.format.GeoJSON();
var features_280030805000537_31 = format_280030805000537_31.readFeatures(json_280030805000537_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280030805000537_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280030805000537_31.addFeatures(features_280030805000537_31);
var lyr_280030805000537_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280030805000537_31, 
                style: style_280030805000537_31,
                popuplayertitle: "280030805000537",
                interactive: true,
                    title: '<img src="styles/legend/280030805000537_31.png" /> 280030805000537'
                });
var format_280030805000709_32 = new ol.format.GeoJSON();
var features_280030805000709_32 = format_280030805000709_32.readFeatures(json_280030805000709_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280030805000709_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280030805000709_32.addFeatures(features_280030805000709_32);
var lyr_280030805000709_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280030805000709_32, 
                style: style_280030805000709_32,
                popuplayertitle: "280030805000709",
                interactive: true,
                    title: '<img src="styles/legend/280030805000709_32.png" /> 280030805000709'
                });
var format_280060505000039_33 = new ol.format.GeoJSON();
var features_280060505000039_33 = format_280060505000039_33.readFeatures(json_280060505000039_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280060505000039_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280060505000039_33.addFeatures(features_280060505000039_33);
var lyr_280060505000039_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280060505000039_33, 
                style: style_280060505000039_33,
                popuplayertitle: "280060505000039",
                interactive: true,
                    title: '<img src="styles/legend/280060505000039_33.png" /> 280060505000039'
                });
var format_280480505000463_34 = new ol.format.GeoJSON();
var features_280480505000463_34 = format_280480505000463_34.readFeatures(json_280480505000463_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280480505000463_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280480505000463_34.addFeatures(features_280480505000463_34);
var lyr_280480505000463_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280480505000463_34, 
                style: style_280480505000463_34,
                popuplayertitle: "280480505000463",
                interactive: true,
                    title: '<img src="styles/legend/280480505000463_34.png" /> 280480505000463'
                });
var format_280480505000470_35 = new ol.format.GeoJSON();
var features_280480505000470_35 = format_280480505000470_35.readFeatures(json_280480505000470_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280480505000470_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280480505000470_35.addFeatures(features_280480505000470_35);
var lyr_280480505000470_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280480505000470_35, 
                style: style_280480505000470_35,
                popuplayertitle: "280480505000470",
                interactive: true,
                    title: '<img src="styles/legend/280480505000470_35.png" /> 280480505000470'
                });
var format_280480505000472_36 = new ol.format.GeoJSON();
var features_280480505000472_36 = format_280480505000472_36.readFeatures(json_280480505000472_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280480505000472_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280480505000472_36.addFeatures(features_280480505000472_36);
var lyr_280480505000472_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280480505000472_36, 
                style: style_280480505000472_36,
                popuplayertitle: "280480505000472",
                interactive: true,
                    title: '<img src="styles/legend/280480505000472_36.png" /> 280480505000472'
                });
var format_280670105000012_37 = new ol.format.GeoJSON();
var features_280670105000012_37 = format_280670105000012_37.readFeatures(json_280670105000012_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280670105000012_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280670105000012_37.addFeatures(features_280670105000012_37);
var lyr_280670105000012_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280670105000012_37, 
                style: style_280670105000012_37,
                popuplayertitle: "280670105000012",
                interactive: true,
                    title: '<img src="styles/legend/280670105000012_37.png" /> 280670105000012'
                });
var group_CENFE_SETEMBRO_PNADC_OUT = new ol.layer.Group({
                                layers: [lyr_280030805000036_29,lyr_280030805000359_30,lyr_280030805000537_31,lyr_280030805000709_32,lyr_280060505000039_33,lyr_280480505000463_34,lyr_280480505000470_35,lyr_280480505000472_36,lyr_280670105000012_37,],
                                fold: "open",
                                title: "CENFE_SETEMBRO_PNADC_OUT"});
var group_CNEFE_OUTUBRO_PNADC_NOV = new ol.layer.Group({
                                layers: [lyr_280030805000065_21,lyr_280030805000389_22,lyr_280030805000679_23,lyr_280030805000990_24,lyr_280530705000026_25,lyr_280530705000028_26,lyr_280670105000169_27,lyr_280670105000198_28,],
                                fold: "open",
                                title: "CNEFE_OUTUBRO_PNADC_NOV"});
var group_CNEFE_NOVEMBRO_PNADC_DEZ = new ol.layer.Group({
                                layers: [lyr_280030805000242_12,lyr_280030805000593_13,lyr_280030805000706_14,lyr_280060505000053_15,lyr_280360905000010_16,lyr_280360905000023_17,lyr_280360905000049_18,lyr_280400305000023_19,lyr_280480505000060_20,],
                                fold: "open",
                                title: "CNEFE_NOVEMBRO_PNADC_DEZ"});
var group_CNEFE_DEZEMBRO_PNADC_JAN = new ol.layer.Group({
                                layers: [lyr_280480505000513_2,lyr_280030805000827_3,lyr_280330205000051_4,lyr_280030805000840_5,lyr_280480505000369_6,lyr_280480505000280_7,lyr_280030805000144_8,lyr_280030805000855_9,lyr_280030805000838_10,lyr_280480505000279_11,],
                                fold: "open",
                                title: "CNEFE_DEZEMBRO_PNADC_JAN"});

lyr_OSMStandard_0.setVisible(true);lyr_SETORES_MALHA2023_1.setVisible(true);lyr_280480505000513_2.setVisible(true);lyr_280030805000827_3.setVisible(true);lyr_280330205000051_4.setVisible(true);lyr_280030805000840_5.setVisible(true);lyr_280480505000369_6.setVisible(true);lyr_280480505000280_7.setVisible(true);lyr_280030805000144_8.setVisible(true);lyr_280030805000855_9.setVisible(true);lyr_280030805000838_10.setVisible(true);lyr_280480505000279_11.setVisible(true);lyr_280030805000242_12.setVisible(true);lyr_280030805000593_13.setVisible(true);lyr_280030805000706_14.setVisible(true);lyr_280060505000053_15.setVisible(true);lyr_280360905000010_16.setVisible(true);lyr_280360905000023_17.setVisible(true);lyr_280360905000049_18.setVisible(true);lyr_280400305000023_19.setVisible(true);lyr_280480505000060_20.setVisible(true);lyr_280030805000065_21.setVisible(true);lyr_280030805000389_22.setVisible(true);lyr_280030805000679_23.setVisible(true);lyr_280030805000990_24.setVisible(true);lyr_280530705000026_25.setVisible(true);lyr_280530705000028_26.setVisible(true);lyr_280670105000169_27.setVisible(true);lyr_280670105000198_28.setVisible(true);lyr_280030805000036_29.setVisible(true);lyr_280030805000359_30.setVisible(true);lyr_280030805000537_31.setVisible(true);lyr_280030805000709_32.setVisible(true);lyr_280060505000039_33.setVisible(true);lyr_280480505000463_34.setVisible(true);lyr_280480505000470_35.setVisible(true);lyr_280480505000472_36.setVisible(true);lyr_280670105000012_37.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_SETORES_MALHA2023_1,group_CNEFE_DEZEMBRO_PNADC_JAN,group_CNEFE_NOVEMBRO_PNADC_DEZ,group_CNEFE_OUTUBRO_PNADC_NOV,group_CENFE_SETEMBRO_PNADC_OUT];
lyr_SETORES_MALHA2023_1.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280480505000513_2.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280030805000827_3.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280330205000051_4.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280030805000840_5.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280480505000369_6.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280480505000280_7.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280030805000144_8.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280030805000855_9.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280030805000838_10.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280480505000279_11.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280030805000242_12.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280030805000593_13.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280030805000706_14.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280060505000053_15.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280360905000010_16.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280360905000023_17.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280360905000049_18.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280400305000023_19.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280480505000060_20.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280030805000065_21.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280030805000389_22.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280030805000679_23.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280030805000990_24.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280530705000026_25.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280530705000028_26.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280670105000169_27.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280670105000198_28.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280030805000036_29.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280030805000359_30.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280030805000537_31.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280030805000709_32.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280060505000039_33.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280480505000463_34.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280480505000470_35.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280480505000472_36.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280670105000012_37.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_SETORES_MALHA2023_1.set('fieldImages', {'COD_SETOR': 'TextEdit', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280480505000513_2.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280030805000827_3.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280330205000051_4.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280030805000840_5.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280480505000369_6.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280480505000280_7.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280030805000144_8.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280030805000855_9.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280030805000838_10.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280480505000279_11.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280030805000242_12.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280030805000593_13.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280030805000706_14.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280060505000053_15.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280360905000010_16.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280360905000023_17.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280360905000049_18.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280400305000023_19.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280480505000060_20.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280030805000065_21.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280030805000389_22.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280030805000679_23.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280030805000990_24.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280530705000026_25.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280530705000028_26.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280670105000169_27.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280670105000198_28.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280030805000036_29.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280030805000359_30.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280030805000537_31.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280030805000709_32.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280060505000039_33.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280480505000463_34.set('fieldImages', {'COD_SETOR': 'TextEdit', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280480505000470_35.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280480505000472_36.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280670105000012_37.set('fieldImages', {'COD_SETOR': 'TextEdit', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_SETORES_MALHA2023_1.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'no label', 'NOME_MUNI': 'no label', });
lyr_280480505000513_2.set('fieldLabels', {'COD_SETOR': 'no label', 'SIT_TIPO': 'no label', 'NOME_MUNI': 'no label', });
lyr_280030805000827_3.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280330205000051_4.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280030805000840_5.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280480505000369_6.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280480505000280_7.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280030805000144_8.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280030805000855_9.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280030805000838_10.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280480505000279_11.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280030805000242_12.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280030805000593_13.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280030805000706_14.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280060505000053_15.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280360905000010_16.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280360905000023_17.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280360905000049_18.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280400305000023_19.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280480505000060_20.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280030805000065_21.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - visible with data', });
lyr_280030805000389_22.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280030805000679_23.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280030805000990_24.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280530705000026_25.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280530705000028_26.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280670105000169_27.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280670105000198_28.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280030805000036_29.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280030805000359_30.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280030805000537_31.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280030805000709_32.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280060505000039_33.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280480505000463_34.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280480505000470_35.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280480505000472_36.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280670105000012_37.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280670105000012_37.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});