export const style = [
    {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [{
            color: '#ffffff'
        },
        {
            weight: 2
        }
    ]
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.stroke',
    stylers: [{
            color: '#494949'
        },
        {
            weight: 2
        }
    ]
  },
  {
    featureType: 'administrative.land_parcel',
    stylers: [{
        visibility: 'off'
    }]
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{
        color: '#575700'
    }]
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.stroke',
    stylers: [{
            color: '#ffffff'
        },
        {
            weight: 3
        }
    ]
  },
  {
    featureType: 'administrative.neighborhood',
    stylers: [{
        visibility: 'off'
    }]
  },
  {
    featureType: 'administrative.province',
    elementType: 'labels.text.fill',
    stylers: [{
        color: '#004040'
    }]
  },
  {
    featureType: 'administrative.province',
    elementType: 'labels.text.stroke',
    stylers: [{
        color: '#ffffff'
    }]
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry.fill',
    stylers: [{
        color: '#e4e4e4'
    }]
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry.stroke',
    stylers: [{
            color: '#800040'
        },
        {
            saturation: -35
        },
        {
            lightness: -30
        },
        {
            weight: 0.5
        }
    ]
  },
  {
    featureType: 'poi',
    stylers: [{
        visibility: 'off'
    }]
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.icon',
    stylers: [{
        visibility: 'off'
    }]
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [{
        color: '#121212'
    }]
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.stroke',
    stylers: [{
            color: '#ffffff'
        },
        {
            weight: 4
        }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.icon',
    stylers: [{
        visibility: 'off'
    }]
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'labels.icon',
    stylers: [{
        visibility: 'off'
    }]
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [{
            color: '#003366'
        },
        {
            weight: 0.5
        }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.stroke',
    stylers: [{
            color: '#ffffff'
        },
        {
            weight: 1.5
        }
    ]
  },
  {
    featureType: 'transit',
    stylers: [{
        visibility: 'off'
    }]
  }
  ];

  export const cluster = {
    url: 'https://googlemaps.github.io/js-marker-clusterer/images/pin.png',
    height: 48,
    width: 30,
    anchor: [-18, 0],
    textColor: '#ffffff',
    textSize: 10,
    iconAnchor: [15, 48]
  };

