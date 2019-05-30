ymaps.ready(init);

function init(){

    var myMap;

    myMap = new ymaps.Map("map", {
        center: [59.938856, 30.323069],
        zoom: 17,
        controls: []
    });

    myMap.behaviors.disable("scrollZoom");

    myMap.controls.add("zoomControl", {
        position: {top: 15, left: 15}
    });

    var myPlacemark = new ymaps.Placemark([59.938856, 30.323069] , {},
        { iconLayout: "default#image",
          iconImageHref: "img/icon-map-pin.svg",
          iconImageSize: [67, 100],
          iconImageOffset: [-20, -47] });

    myMap.geoObjects.add(myPlacemark);
}
