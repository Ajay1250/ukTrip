const destinations = [
  {
    id: 'birmingham',
    name: 'Birmingham',
    type: 'base',
    date: 'Dec 15–31',
    description: 'Family home base with slow evenings, city walks, and local Christmas atmosphere.',
    lat: 52.4862,
    lng: -1.8904,
    href: '#itinerary',
    googleMaps: 'https://www.google.com/maps/search/Birmingham,+England',
    image: 'https://images.unsplash.com/photo-1719669753130-38c2245c014b?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
  },
  {
    id: 'heathrow',
    name: 'Heathrow Airport',
    type: 'airport',
    date: 'Dec 15 / Dec 31',
    description: 'Main arrival and departure airport for the trip.',
    lat: 51.4700,
    lng: -0.4543,
    href: '#itinerary',
    googleMaps: 'https://www.google.com/maps/search/Heathrow+Airport',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'edinburgh',
    name: 'Edinburgh',
    type: 'main',
    date: 'Dec 18–23',
    description: 'Christmas markets, historic streets, and winter viewpoints in the capital.',
    lat: 55.9533,
    lng: -3.1883,
    href: '#itinerary',
    googleMaps: 'https://www.google.com/maps/search/Edinburgh,+Scotland',
    image: './assets/images/edinburgh-castle-december.jpg'
  },
  {
    id: 'glencoe',
    name: 'Glencoe',
    type: 'optional',
    date: 'Optional',
    description: 'Optional Highlands stop depending on weather, daylight, and driving practicality.',
    lat: 56.6370,
    lng: -5.1044,
    href: '#alternatives',
    googleMaps: 'https://www.google.com/maps/search/Glencoe,+Scotland',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'cotswolds',
    name: 'The Cotswolds',
    type: 'daytrip',
    date: 'Dec 27',
    description: 'A gentle winter day trip through village lanes and stone cottages.',
    lat: 51.9217,
    lng: -1.6987,
    href: '#itinerary',
    googleMaps: 'https://www.google.com/maps/search/Cotswolds,+England',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'stratford',
    name: 'Stratford-upon-Avon',
    type: 'optional',
    date: 'Optional',
    description: 'A historic market town that works well as a relaxed alternative day.',
    lat: 52.1913,
    lng: -1.7086,
    href: '#itinerary',
    googleMaps: 'https://www.google.com/maps/search/Stratford-upon-Avon,+England',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'london',
    name: 'London',
    type: 'optional',
    date: 'Optional',
    description: 'A possible day trip with Westminster, South Bank, and Covent Garden.',
    lat: 51.5072,
    lng: -0.1276,
    href: '#itinerary',
    googleMaps: 'https://www.google.com/maps/search/London,+England',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80'
  }
];

const overviewItems = [
  {
    title: 'Birmingham',
    description: 'Family home base with local walks, city-centre Christmas atmosphere, and quiet evenings.',
    range: 'Dec 15–31',
    tag: 'Family base',
    image: 'https://images.unsplash.com/photo-1719669753130-38c2245c014b?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    section: 'itinerary'
  },
  {
    title: 'Edinburgh',
    description: 'Historic streets, festive markets, and broad city viewpoints with plenty of café time.',
    range: 'Dec 18–23',
    tag: 'Recommended',
    image: './assets/images/edinburgh-castle-december.jpg',
    section: 'itinerary'
  },
  {
    title: 'Scottish countryside',
    description: 'Optional highland scenery, lochs, and mountain roads if weather and daylight cooperate.',
    range: 'Optional',
    tag: 'Optional',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
    section: 'alternatives'
  },
  {
    title: 'The Cotswolds',
    description: 'Stone villages, warm cafés, and a flexible winter driving day from Birmingham.',
    range: 'Dec 27',
    tag: 'Recommended',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
    section: 'itinerary'
  },
  {
    title: 'Stratford-upon-Avon',
    description: 'A heritage town with river walks, cafés, and a slower-paced alternative day.',
    range: 'Optional',
    tag: 'Optional',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    section: 'itinerary'
  },
  {
    title: 'London',
    description: 'A day trip choice with Westminster, South Bank, and festive city energy if desired.',
    range: 'Optional',
    tag: 'Optional',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80',
    section: 'itinerary'
  }
];

const itineraryData = [
  {
    date: '2026-12-14',
    dayLabel: 'Monday',
    title: 'Travel day — Ajax to Toronto Pearson',
    destination: 'Ajax, Ontario to Toronto Pearson (YYZ)',
    tag: 'recommended',
    summary: 'Start and finish the holiday in Ajax. Travel to Pearson for the Virgin Atlantic overnight flight to London; choose a direct drive or a GO Transit and UP Express connection.',
    heroImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    times: [
      'Before leaving — check your Virgin Atlantic booking for the exact departure time, flight number, terminal, and recommended airport arrival time',
      'Option 1 — family drop-off, taxi, or rideshare from Ajax to Toronto Pearson; allow a generous traffic buffer',
      'Option 2 — GO Transit from Ajax to Union Station, then UP Express to Pearson; verify both operators’ schedules and transfer time for your date',
      'At the airport — check in and follow the airline’s current instructions',
      'Evening / overnight — Virgin Atlantic flight from YYZ to London Heathrow (LHR); use your booking to confirm whether your flight is nonstop and its exact schedule'
    ],
    mapPoints: [
      { name: 'Ajax GO Station', lat: 43.8509, lng: -79.0204, type: 'base' },
      { name: 'Toronto Pearson International Airport (YYZ)', lat: 43.6777, lng: -79.6248, type: 'airport' }
    ],
    mapTitle: 'Ajax to Toronto Pearson',
    directions: 'https://www.google.com/maps/dir/?api=1&origin=Ajax,+Ontario&destination=Toronto+Pearson+International+Airport&travelmode=driving',
    directionsLabel: 'Driving directions: Ajax to YYZ',
    secondaryDirections: 'https://www.google.com/maps/dir/?api=1&origin=Ajax+GO+Station,+Ajax,+ON&destination=Toronto+Pearson+International+Airport&travelmode=transit',
    secondaryDirectionsLabel: 'Transit directions: GO + UP Express',
    notes: 'Map pins show the endpoints, not a live route. Driving time depends on traffic; transit depends on the date-specific GO and UP Express schedules. Do not infer a flight departure time from the itinerary.'
  },
  {
    date: '2026-12-15',
    dayLabel: 'Tuesday',
    title: 'Arrival in England',
    destination: 'Heathrow to Birmingham',
    tag: 'recommended',
    summary: 'Arrive at Heathrow at 7:00 PM local time, meet family, and drive to Birmingham for a calm first evening at home.',
    heroImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    times: [
      '7:00 PM — scheduled Heathrow arrival; confirm the local arrival details in your Virgin Atlantic booking',
      'After immigration and baggage — meet family and transfer to the car',
      'Drive to Birmingham, depending on traffic and airport departures',
      'Evening — light dinner, rest, and settle in at the family home'
    ],
    mapPoints: [
      { name: 'Heathrow Airport', lat: 51.47, lng: -0.4543, type: 'airport' },
      { name: 'Birmingham', lat: 52.4862, lng: -1.8904, type: 'base' }
    ],
    mapTitle: 'Heathrow to Birmingham',
    directions: 'https://www.google.com/maps/dir/?api=1&origin=Heathrow+Airport+London&destination=Birmingham+England',
    notes: 'The drive can vary significantly by traffic, immigration, and airport departure time. Aim for a gentle arrival without sightseeing.'
  },
  {
    date: '2026-12-16',
    dayLabel: 'Wednesday',
    title: 'Birmingham local exploration',
    destination: 'Birmingham city centre',
    tag: 'recommended',
    summary: 'A relaxed city-centre day while your sister is working, with canals, public spaces, and the Christmas market if open.',
    heroImage: 'https://images.unsplash.com/photo-1776512973180-1da94dec515b?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    times: [
      'Morning — relaxed breakfast and slow start',
      'Late morning — walk through Centenary Square and the library area',
      'Lunch — café break near Brindleyplace',
      'Afternoon — Birmingham canals and Christmas market, subject to confirmed 2026 opening times',
      'Evening — return to the family home'
    ],
    mapPoints: [
      { name: 'Centenary Square', lat: 52.4794, lng: -1.9035, type: 'main' },
      { name: 'Brindleyplace', lat: 52.4754, lng: -1.9077, type: 'main' },
      { name: 'Birmingham', lat: 52.4862, lng: -1.8904, type: 'base' }
    ],
    mapTitle: 'Birmingham city-centre highlights',
    directions: 'https://www.google.com/maps/dir/?api=1&origin=Birmingham+England&destination=Centenary+Square+Birmingham&waypoints=Brindleyplace+Birmingham',
    notes: 'Check current opening hours and the market schedule before assuming the Christmas market is operating.'
  },
  {
    date: '2026-12-17',
    dayLabel: 'Thursday',
    title: 'Birmingham at our own pace',
    destination: 'Jewellery Quarter and city',
    tag: 'recommended',
    summary: 'A slower day with historic streets, cafés, and optional city-centre wandering without rushing.',
    heroImage: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1200&q=80',
    times: [
      'Late morning — relaxed breakfast and café time',
      'Midday — Jewellery Quarter walk',
      'Afternoon — local shops, cafés, or gentle city wandering',
      'Optional — return home for rest if tired'
    ],
    mapPoints: [
      { name: 'Jewellery Quarter', lat: 52.4835, lng: -1.9068, type: 'daytrip' },
      { name: 'Birmingham', lat: 52.4862, lng: -1.8904, type: 'base' }
    ],
    mapTitle: 'Jewellery Quarter route',
    directions: 'https://www.google.com/maps/dir/?api=1&origin=Birmingham+England&destination=Jewellery+Quarter+Birmingham',
    notes: 'Cadbury World is an alternative if the museum schedule suits your energy and interest, but it is not required.'
  },
  {
    date: '2026-12-18',
    dayLabel: 'Friday',
    title: 'Travel to Edinburgh — Scotland stay begins',
    destination: 'Birmingham to Edinburgh',
    tag: 'recommended',
    summary: 'Start the longer Scotland visit one day earlier, giving Edinburgh four full days before returning to Birmingham on December 23.',
    heroImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    times: [
      'Morning or midday — travel from Birmingham to Edinburgh; prefer rail if a suitable service is available',
      'After arrival — check in, unpack, and take a proper rest',
      'Early evening — optional short walk near the accommodation or festive lights if convenient',
      'Evening — simple dinner and an early night'
    ],
    mapPoints: [
      { name: 'Birmingham', lat: 52.4862, lng: -1.8904, type: 'base' },
      { name: 'Edinburgh', lat: 55.9533, lng: -3.1883, type: 'main' }
    ],
    mapTitle: 'Birmingham to Edinburgh',
    directions: 'https://www.google.com/maps/dir/?api=1&origin=Birmingham,+England&destination=Edinburgh,+Scotland&travelmode=transit',
    directionsLabel: 'Check public transport route',
    secondaryDirections: 'https://www.google.com/maps/dir/?api=1&origin=Birmingham,+England&destination=Edinburgh,+Scotland&travelmode=driving',
    secondaryDirectionsLabel: 'Driving alternative',
    infoUrl: 'https://www.nationalrail.co.uk/',
    infoLabel: 'Check National Rail timetables',
    notes: 'The Scotland stay is planned for December 18–23 (five nights). Verify the actual holiday rail timetable before booking; driving is an alternative, not a confirmed route or schedule.'
  },
  {
    date: '2026-12-19',
    dayLabel: 'Saturday',
    title: 'Edinburgh — festive city day',
    destination: 'Edinburgh city centre',
    tag: 'recommended',
    summary: 'Ease into Edinburgh with festive streets, a relaxed city walk, and one engaging attraction if the group feels up to it.',
    heroImage: './assets/images/edinburgh-castle-december.jpg',
    times: [
      'Morning — slow breakfast and a walk around Princes Street Gardens',
      'Late morning — Edinburgh Christmas market, only if the 2026 event is operating',
      'Lunch — warm café break and time to rest',
      'Afternoon — choose one: Camera Obscura, National Museum of Scotland, or a gentle Old Town wander',
      'Evening — early dinner and a quiet night'
    ],
    mapPoints: [
      { name: 'Princes Street Gardens', lat: 55.9516, lng: -3.1985, type: 'main' },
      { name: 'Edinburgh Christmas market area', lat: 55.9522, lng: -3.1904, type: 'optional' },
      { name: 'Camera Obscura', lat: 55.9489, lng: -3.1956, type: 'optional' },
      { name: 'National Museum of Scotland', lat: 55.9470, lng: -3.1890, type: 'optional' }
    ],
    mapTitle: 'Edinburgh festive city day',
    directions: 'https://www.google.com/maps/dir/?api=1&origin=Princes+Street+Gardens,+Edinburgh&destination=Camera+Obscura,+Edinburgh&waypoints=National+Museum+of+Scotland&travelmode=walking',
    directionsLabel: 'Walking directions around Edinburgh',
    notes: 'Choose one indoor attraction rather than trying to fit everything in. Check attraction booking requirements and Christmas opening calendars; market dates and hours must be confirmed for 2026.'
  },
  {
    date: '2026-12-20',
    dayLabel: 'Sunday',
    title: 'Edinburgh Old Town',
    destination: 'Edinburgh Old Town',
    tag: 'recommended',
    summary: 'Walk through the medieval core with highlights including the castle, Royal Mile, cathedral, and Grassmarket.',
    heroImage: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80',
    times: [
      'Morning — Edinburgh Castle or exterior views if preferred',
      'Late morning — walk along the Royal Mile and St Giles’ Cathedral',
      'Lunch — café stop in the Old Town',
      'Afternoon — Victoria Street and Grassmarket',
      'Evening — relaxed evening with dinner and warm drinks'
    ],
    mapPoints: [
      { name: 'Edinburgh Castle', lat: 55.9486, lng: -3.1999, type: 'main' },
      { name: 'Royal Mile', lat: 55.9496, lng: -3.1868, type: 'main' },
      { name: 'St Giles’ Cathedral', lat: 55.9496, lng: -3.1906, type: 'main' },
      { name: 'Victoria Street', lat: 55.9502, lng: -3.1885, type: 'main' },
      { name: 'Grassmarket', lat: 55.9479, lng: -3.1932, type: 'main' }
    ],
    mapTitle: 'Old Town route',
    directions: 'https://www.google.com/maps/dir/?api=1&origin=Edinburgh+Castle+Scotland&destination=Grassmarket+Edinburgh&waypoints=Royal+Mile+Edinburgh%7CVictoria+Street+Edinburgh',
    notes: 'If the castle interior is selected, book timed entry if needed and check the official opening calendar. Otherwise, enjoy the exterior and surrounding streets.'
  },
  {
    date: '2026-12-21',
    dayLabel: 'Monday',
    title: 'Viewpoints and New Town',
    destination: 'Calton Hill and New Town',
    tag: 'recommended',
    summary: 'Mix a short viewpoint walk with Edinburgh’s New Town and choose one indoor attraction for a fun, weather-proof afternoon.',
    heroImage: 'https://images.unsplash.com/photo-1721349475561-c1b2aab63c12?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    times: [
      'Morning — Calton Hill if weather and ground conditions are suitable',
      'Late morning — browse the New Town and independent shops',
      'Lunch — café lunch and a proper warm-up break',
      'Afternoon — choose one: Dynamic Earth, National Museum of Scotland, or an unhurried café and shop visit',
      'Optional — Arthur’s Seat only if weather, visibility, daylight, and trail conditions are safe'
    ],
    mapPoints: [
      { name: 'Calton Hill', lat: 55.9554, lng: -3.1827, type: 'main' },
      { name: 'New Town', lat: 55.9530, lng: -3.1880, type: 'main' },
      { name: 'Dynamic Earth', lat: 55.9501, lng: -3.1744, type: 'optional' },
      { name: 'National Museum of Scotland', lat: 55.9470, lng: -3.1890, type: 'optional' }
    ],
    mapTitle: 'Calton Hill and New Town',
    directions: 'https://www.google.com/maps/dir/?api=1&origin=Calton+Hill+Edinburgh&destination=Princes+Street+Gardens+Edinburgh',
    notes: 'Arthur’s Seat is weather-dependent and potentially strenuous; only attempt it if conditions are safe and you are comfortable with a more demanding walk.'
  },
  {
    date: '2026-12-22',
    dayLabel: 'Tuesday',
    title: 'Scotland day — choose city, Glasgow, or scenery',
    destination: 'Edinburgh base with optional day trip',
    tag: 'flexible',
    summary: 'Keep Edinburgh as the easy default, or choose a Glasgow city day or a countryside outing if the weather, daylight, and verified transport make it practical.',
    heroImage: 'https://images.unsplash.com/photo-1721428360480-0d4121f629c4?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    times: [
      'Recommended — Edinburgh at an easy pace: National Museum, Camera Obscura, cafés, or the market if open',
      'Option — Glasgow by rail for Kelvingrove, Riverside Museum, and a different city day; check the holiday timetable first',
      'Option — Loch Lomond only if transport, daylight, and weather conditions suit; avoid a long winter drive in poor conditions',
      'Evening — return to the same Edinburgh accommodation; no hotel change required'
    ],
    mapPoints: [
      { name: 'Edinburgh', lat: 55.9533, lng: -3.1883, type: 'base' },
      { name: 'Glasgow', lat: 55.8642, lng: -4.2518, type: 'optional' },
      { name: 'Kelvingrove Art Gallery and Museum', lat: 55.8686, lng: -4.2905, type: 'optional' },
      { name: 'Riverside Museum', lat: 55.8652, lng: -4.3063, type: 'optional' },
      { name: 'Loch Lomond', lat: 56.1120, lng: -4.6400, type: 'optional' },
      { name: 'Glencoe', lat: 56.6370, lng: -5.1044, type: 'optional' }
    ],
    mapTitle: 'Scotland day choice',
    directions: 'https://www.google.com/maps/dir/?api=1&origin=Edinburgh,+Scotland&destination=Glasgow,+Scotland&travelmode=transit',
    directionsLabel: 'Transit directions: Edinburgh to Glasgow',
    secondaryDirections: 'https://www.google.com/maps/dir/?api=1&origin=Edinburgh,+Scotland&destination=Loch+Lomond,+Scotland&travelmode=driving',
    secondaryDirectionsLabel: 'Optional driving route to Loch Lomond',
    infoUrl: 'https://www.nationalrail.co.uk/',
    infoLabel: 'Check National Rail timetables',
    notes: 'Default to more Edinburgh time. Glasgow is the more practical city-day alternative; Loch Lomond is optional and weather/daylight dependent. A Highlands overnight would mean changing accommodation and is not recommended for this short winter stay.'
  },
  {
    date: '2026-12-23',
    dayLabel: 'Wednesday',
    title: 'Return to Birmingham',
    destination: 'Edinburgh to Birmingham',
    tag: 'recommended',
    summary: 'Travel back to Birmingham and settle in for a slower Christmas-eve preparation period.',
    heroImage: 'https://images.unsplash.com/photo-1726915729279-753d37229bfb?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    times: [
      'Morning or midday — travel back to Birmingham',
      'After arrival — check in and rest',
      'Afternoon — family time and help with Christmas preparations'
    ],
    mapPoints: [
      { name: 'Edinburgh', lat: 55.9533, lng: -3.1883, type: 'main' },
      { name: 'Birmingham', lat: 52.4862, lng: -1.8904, type: 'base' }
    ],
    mapTitle: 'Edinburgh to Birmingham',
    directions: 'https://www.google.com/maps/dir/?api=1&origin=Edinburgh,+Scotland&destination=Birmingham,+England&travelmode=transit',
    directionsLabel: 'Check public transport route',
    secondaryDirections: 'https://www.google.com/maps/dir/?api=1&origin=Edinburgh,+Scotland&destination=Birmingham,+England&travelmode=driving',
    secondaryDirectionsLabel: 'Driving alternative',
    infoUrl: 'https://www.nationalrail.co.uk/',
    infoLabel: 'Check National Rail timetables',
    notes: 'Verify the actual return transport schedule, as holiday service patterns and engineering works can change quickly in December. Keep the day clear for the journey.'
  },
  {
    date: '2026-12-24',
    dayLabel: 'Thursday',
    title: 'Christmas Eve at home',
    destination: 'Birmingham home base',
    tag: 'recommended',
    summary: 'Keep Christmas Eve slow and familial with a relaxed morning, food prep, games, and an at-home dinner.',
    heroImage: 'https://images.unsplash.com/photo-1639743776578-7767518bde12?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    times: [
      'Morning — sleep in and breakfast together',
      'Daytime — helping with Christmas meal prep and family arrangements',
      'Afternoon — games, conversation, and time with the child',
      'Evening — family dinner and a relaxed Christmas Eve'
    ],
    mapPoints: [
      { name: 'Birmingham', lat: 52.4862, lng: -1.8904, type: 'base' }
    ],
    mapTitle: 'Family home base',
    directions: 'https://www.google.com/maps/search/Birmingham+family+home',
    notes: 'No long-distance driving or mandatory sightseeing. This day is intentionally family-focused.'
  },
  {
    date: '2026-12-25',
    dayLabel: 'Friday',
    title: 'Christmas Day — Reserved for Family',
    destination: 'Home base',
    tag: 'recommended',
    summary: 'This day is fixed as a home-based Christmas celebration with relaxed breakfast, gifts, lunch, and downtime.',
    heroImage: 'https://plus.unsplash.com/premium_photo-1701454736122-14b846cfb3c3?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    times: [
      'Morning — breakfast and coffee at home',
      'Late morning — gift-giving and family photographs',
      'Lunch — Christmas meal and relaxed conversation',
      'Afternoon — games, films, and quiet family time',
      'Evening — dinner, leftovers, or a relaxed night in'
    ],
    mapPoints: [
      { name: 'Birmingham', lat: 52.4862, lng: -1.8904, type: 'base' }
    ],
    mapTitle: 'Christmas at home',
    directions: 'https://www.google.com/maps/search/Birmingham+family+home',
    notes: 'Most attractions and shops are closed, and public transport service is reduced. Do not schedule outings or long drives on Christmas Day.'
  },
  {
    date: '2026-12-26',
    dayLabel: 'Saturday',
    title: 'Boxing Day',
    destination: 'Birmingham and local area',
    tag: 'flexible',
    summary: 'Take a very relaxed Boxing Day with family time, a nearby walk if practical, and no pressure to travel far.',
    heroImage: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
    times: [
      'Morning — relaxed breakfast and family time',
      'Afternoon — optional nearby park or local stroll',
      'Evening — dinner and a quiet evening at home'
    ],
    mapPoints: [
      { name: 'Birmingham', lat: 52.4862, lng: -1.8904, type: 'base' }
    ],
    mapTitle: 'Boxing Day local plan',
    directions: 'https://www.google.com/maps/search/Birmingham+park+walk',
    notes: 'Keep this day flexible and check local opening hours and road conditions before planning a short local drive.'
  },
  {
    date: '2026-12-27',
    dayLabel: 'Sunday',
    title: 'Cotswolds day trip',
    destination: 'The Cotswolds',
    tag: 'recommended',
    summary: 'A low-stress village day with a flexible route through the Cotswolds and optional third village if time and daylight allow.',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    times: [
      'Morning — drive from Birmingham to the Cotswolds',
      'Late morning — Bourton-on-the-Water and a café stop',
      'Afternoon — Stow-on-the-Wold and optional third village',
      'Evening — return to Birmingham'
    ],
    mapPoints: [
      { name: 'Birmingham', lat: 52.4862, lng: -1.8904, type: 'base' },
      { name: 'Bourton-on-the-Water', lat: 51.9094, lng: -1.7440, type: 'daytrip' },
      { name: 'Stow-on-the-Wold', lat: 51.9308, lng: -1.7230, type: 'daytrip' },
      { name: 'Bibury', lat: 51.7585, lng: -1.8394, type: 'optional' },
      { name: 'Broadway', lat: 52.0372, lng: -1.8668, type: 'optional' },
      { name: 'Castle Combe', lat: 51.4886, lng: -2.2098, type: 'optional' }
    ],
    mapTitle: 'Cotswold village route',
    directions: 'https://www.google.com/maps/dir/?api=1&origin=Birmingham+England&destination=Bourton-on-the-Water+England&waypoints=Stow-on-the-Wold+England',
    notes: 'Keep the day focused on two main villages and add a third only if weather, parking, and daylight are all convenient.'
  },
  {
    date: '2026-12-28',
    dayLabel: 'Monday',
    title: 'Flexible day or Stratford-upon-Avon',
    destination: 'Birmingham or Stratford',
    tag: 'flexible',
    summary: 'Choose a slower family day in Birmingham, or take a relaxed visit to Stratford-upon-Avon if the mood suits.',
    heroImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    times: [
      'Morning — decide between a local family day or a town visit',
      'Midday — walk, café break, and time in the town centre',
      'Afternoon — return to Birmingham or keep exploring locally'
    ],
    mapPoints: [
      { name: 'Birmingham', lat: 52.4862, lng: -1.8904, type: 'base' },
      { name: 'Stratford-upon-Avon', lat: 52.1913, lng: -1.7086, type: 'optional' }
    ],
    mapTitle: 'Stratford-upon-Avon route',
    directions: 'https://www.google.com/maps/dir/?api=1&origin=Birmingham+England&destination=Stratford-upon-Avon+England',
    notes: 'This is intentionally flexible. A family day is perfectly valid and may be the best option if the weather is poor or energy is low.'
  },
  {
    date: '2026-12-29',
    dayLabel: 'Tuesday',
    title: 'London or extra family time',
    destination: 'London or Birmingham',
    tag: 'flexible',
    summary: 'Choose either a London day trip or a slower extra family day in Birmingham. Both are valid plans.',
    heroImage: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=80',
    times: [
      'Option A — London day trip with Westminster, South Bank, and Covent Garden',
      'Option B — family time in Birmingham with a walk and a relaxed meal',
      'Evening — rest and prepare for the final full day'
    ],
    mapPoints: [
      { name: 'Birmingham', lat: 52.4862, lng: -1.8904, type: 'base' },
      { name: 'London', lat: 51.5072, lng: -0.1276, type: 'optional' }
    ],
    mapTitle: 'London or Birmingham plan',
    directions: 'https://www.google.com/maps/dir/?api=1&origin=Birmingham,+England&destination=Westminster,+London&travelmode=transit',
    directionsLabel: 'Transit directions: Birmingham to London',
    secondaryDirections: 'https://www.google.com/maps/dir/?api=1&origin=Birmingham,+England&destination=Westminster,+London&travelmode=driving',
    secondaryDirectionsLabel: 'Driving alternative',
    infoUrl: 'https://www.nationalrail.co.uk/',
    infoLabel: 'Check National Rail timetables',
    notes: 'If London is chosen, remember to verify holiday engineering works and actual transport timetables before setting off. Keep the day focused rather than trying to cover every attraction.'
  },
  {
    date: '2026-12-30',
    dayLabel: 'Wednesday',
    title: 'Final full day with family',
    destination: 'Birmingham',
    tag: 'recommended',
    summary: 'Keep the final full day unhurried with breakfast, family time, optional short outing, packing, and a farewell dinner.',
    heroImage: 'https://images.unsplash.com/photo-1539920951450-2b2d59cff66d?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    times: [
      'Morning — relaxed breakfast and family time',
      'Afternoon — optional short outing or local walk',
      'Evening — pack bags and confirm the airport transfer'
    ],
    mapPoints: [
      { name: 'Birmingham', lat: 52.4862, lng: -1.8904, type: 'base' }
    ],
    mapTitle: 'Final Birmingham day',
    directions: 'https://www.google.com/maps/search/Birmingham+family+home',
    notes: 'This should feel calm and practical rather than overfilled. Keep the day open enough to enjoy the final family moments.'
  },
  {
    date: '2026-12-31',
    dayLabel: 'Thursday',
    title: 'Heathrow departure',
    destination: 'Birmingham to Heathrow',
    tag: 'recommended',
    summary: 'Leave Birmingham in good time, allow a generous buffer, and head to Heathrow for the 4:00 PM departure.',
    heroImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    times: [
      'Morning — breakfast and final packing',
      'Around 9:00 AM — initial planning target for departure from Birmingham',
      'Drive to Heathrow with a generous buffer for traffic',
      '4:00 PM — Virgin Atlantic flight departure from Heathrow; confirm terminal, check-in guidance, and arrival time in your booking',
      'After landing at YYZ — continue to Ajax by family pickup, taxi/rideshare, or GO Transit and UP Express if services and timing suit'
    ],
    mapPoints: [
      { name: 'Birmingham', lat: 52.4862, lng: -1.8904, type: 'base' },
      { name: 'Heathrow Airport', lat: 51.47, lng: -0.4543, type: 'airport' }
    ],
    mapTitle: 'Birmingham to Heathrow',
    directions: 'https://www.google.com/maps/dir/?api=1&origin=Birmingham,+England&destination=Heathrow+Airport,+London&travelmode=driving',
    directionsLabel: 'Driving directions: Birmingham to Heathrow',
    secondaryDirections: 'https://www.google.com/maps/dir/?api=1&origin=Toronto+Pearson+International+Airport&destination=Ajax,+Ontario&travelmode=transit',
    secondaryDirectionsLabel: 'After landing: transit route from YYZ to Ajax',
    notes: 'The suggested 9:00 AM departure is a planning target, not a guaranteed travel time. Confirm Virgin Atlantic’s airport arrival guidance and Heathrow terminal before leaving Birmingham. The UK-to-Canada flight arrival time is not specified here; use your booking before choosing onward travel to Ajax.'
  }
];

const alternativeGroups = [
  {
    date: '2026-12-22',
    label: 'December 22 — Scotland day choice',
    recommendedKey: 'edinburgh',
    options: [
      {
        key: 'edinburgh',
        title: 'More time in Edinburgh',
        description: 'Keep the easiest, most relaxed option: choose an indoor attraction, café time, and a final festive stroll.',
        duration: 'Flexible city day',
        travel: 'No long-distance travel',
        weather: 'Best all-weather choice',
        image: './assets/images/edinburgh-castle-december.jpg',
        map: 'https://www.google.com/maps/search/Edinburgh,+Scotland',
        heroImage: './assets/images/edinburgh-castle-december.jpg',
        heroAlt: 'Edinburgh streets and historic skyline',
        destination: 'Edinburgh',
        summary: 'A flexible day based in Edinburgh: choose one museum or family-friendly attraction, leave time for meals and cafés, and revisit the Christmas market only if it is open.',
        times: [
          'Morning — relaxed breakfast and a museum, gallery, or indoor attraction',
          'Lunch — warm café break and time to rest',
          'Afternoon — explore another neighbourhood or revisit a favourite',
          'Evening — relaxed dinner near the accommodation'
        ],
        mapPoints: [
          { name: 'Edinburgh', lat: 55.9533, lng: -3.1883, type: 'base' },
          { name: 'National Museum of Scotland', lat: 55.9470, lng: -3.1890, type: 'optional' },
          { name: 'Dynamic Earth', lat: 55.9501, lng: -3.1744, type: 'optional' }
        ],
        directions: 'https://www.google.com/maps/dir/?api=1&origin=National+Museum+of+Scotland&destination=Dynamic+Earth&travelmode=walking',
        directionsLabel: 'Walking directions around Edinburgh',
        notes: 'Check attraction opening calendars and booking requirements. The Christmas market and seasonal events need confirmation for 2026.'
      },
      {
        key: 'glasgow',
        title: 'Glasgow city day by rail',
        description: 'A lively alternative with indoor museums and a different city atmosphere, returning to the same Edinburgh base.',
        duration: 'Full but flexible day',
        travel: 'Rail from Edinburgh; verify holiday service',
        weather: 'Good in mixed weather',
        image: './assets/images/glasgow-kelvingrove-gallery.jpg',
        map: 'https://www.google.com/maps/search/Kelvingrove+Art+Gallery+and+Museum,+Glasgow',
        heroImage: './assets/images/glasgow-kelvingrove-gallery.jpg',
        heroAlt: 'Kelvingrove Art Gallery and Museum in Glasgow',
        infoUrl: 'https://www.scotrail.co.uk/',
        infoLabel: 'Check ScotRail services',
        destination: 'Glasgow day trip',
        summary: 'Take a rail day trip to Glasgow for one or two indoor highlights, such as Kelvingrove and the Riverside Museum, then return to Edinburgh. Keep the order flexible and verify the holiday timetable.',
        times: [
          'Morning — check the actual rail service and travel to Glasgow',
          'Late morning — choose Kelvingrove Art Gallery and Museum or another indoor visit',
          'Lunch — café break in the West End',
          'Afternoon — optional Riverside Museum if opening hours and energy allow',
          'Evening — return to Edinburgh on a verified service'
        ],
        mapPoints: [
          { name: 'Edinburgh Waverley', lat: 55.9520, lng: -3.1890, type: 'base' },
          { name: 'Glasgow Central', lat: 55.8581, lng: -4.2582, type: 'optional' },
          { name: 'Kelvingrove Art Gallery and Museum', lat: 55.8689, lng: -4.2910, type: 'optional' },
          { name: 'Riverside Museum', lat: 55.8652, lng: -4.3063, type: 'optional' }
        ],
        directions: 'https://www.google.com/maps/dir/?api=1&origin=Edinburgh+Waverley+Station&destination=Kelvingrove+Art+Gallery+and+Museum&travelmode=transit',
        directionsLabel: 'Transit directions: Edinburgh to Glasgow',
        notes: 'This is an unbooked alternative, not a confirmed train service. Check National Rail/ScotRail holiday schedules and museum opening hours before choosing it.'
      },
      {
        key: 'loch-lomond',
        title: 'Loch Lomond scenery',
        description: 'Choose a countryside outing only if winter daylight, road conditions, and transport are favourable.',
        duration: 'Full day',
        travel: 'Longer journey; verify route and conditions',
        weather: 'Weather- and daylight-dependent',
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
        map: 'https://www.google.com/maps/search/Loch+Lomond,+Scotland',
        heroImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
        heroAlt: 'Loch and mountain scenery in Scotland',
        destination: 'Loch Lomond day trip',
        summary: 'A scenic alternative if the forecast and daylight are suitable. Keep the route simple, confirm transport in advance, and return to the Edinburgh accommodation.',
        times: [
          'Morning — check the forecast, road conditions, and daylight before deciding',
          'Late morning — travel towards Loch Lomond using a verified route',
          'Midday — short scenic stop and lunch',
          'Afternoon — begin the return journey with daylight and rest breaks in mind'
        ],
        mapPoints: [
          { name: 'Edinburgh', lat: 55.9533, lng: -3.1883, type: 'base' },
          { name: 'Balloch, Loch Lomond', lat: 55.9960, lng: -4.5830, type: 'optional' }
        ],
        directions: 'https://www.google.com/maps/dir/?api=1&origin=Edinburgh,+Scotland&destination=Balloch,+Scotland&travelmode=driving',
        directionsLabel: 'Driving directions: Edinburgh to Balloch',
        notes: 'Only choose this option when weather and daylight are good and a suitable transport plan is confirmed. Glencoe/Highlands are not added as a same-day drive.'
      }
    ]
  },
  {
    date: '2026-12-28',
    label: 'December 28 — family day or Stratford',
    recommendedKey: 'family',
    options: [
      {
        key: 'family',
        title: 'Relaxed Birmingham family day',
        description: 'Stay close to home, enjoy time together, and keep the day open for rest.',
        duration: 'Flexible',
        travel: 'No long-distance trip',
        weather: 'All-weather choice',
        image: 'https://images.unsplash.com/photo-1719669753130-38c2245c014b?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
        map: 'https://www.google.com/maps/search/Birmingham,+England',
        heroImage: 'https://images.unsplash.com/photo-1719669753130-38c2245c014b?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
        heroAlt: 'Birmingham city scene',
        destination: 'Birmingham',
        summary: 'Keep this as a calm family day in Birmingham with an optional local walk and an unhurried meal.',
        times: ['Morning — breakfast together', 'Afternoon — family time or a nearby walk', 'Evening — relaxed meal at home or nearby'],
        mapPoints: [{ name: 'Birmingham', lat: 52.4862, lng: -1.8904, type: 'base' }],
        directions: 'https://www.google.com/maps/search/Birmingham,+England',
        directionsLabel: 'Open Birmingham map',
        notes: 'A family day is the recommended choice if everyone wants a rest after Christmas.'
      },
      {
        key: 'stratford',
        title: 'Stratford-upon-Avon',
        description: 'A historic-town alternative with river views, cafés, and Shakespeare-related sights where open.',
        duration: 'Half day or relaxed day',
        travel: 'Driving route from Birmingham; check current conditions',
        weather: 'Good in most conditions',
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
        map: 'https://www.google.com/maps/search/Stratford-upon-Avon,+England',
        heroImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
        heroAlt: 'Historic English town street',
        destination: 'Stratford-upon-Avon',
        summary: 'Visit the historic centre, enjoy a river walk if conditions allow, and choose one Shakespeare-related sight only if it is open.',
        times: ['Morning — drive from Birmingham after checking conditions', 'Late morning — historic centre and a café stop', 'Afternoon — optional riverside walk or one open attraction', 'Return to Birmingham before the evening'],
        mapPoints: [
          { name: 'Birmingham', lat: 52.4862, lng: -1.8904, type: 'base' },
          { name: 'Stratford-upon-Avon', lat: 52.1913, lng: -1.7086, type: 'optional' }
        ],
        directions: 'https://www.google.com/maps/dir/?api=1&origin=Birmingham,+England&destination=Stratford-upon-Avon,+England&travelmode=driving',
        directionsLabel: 'Driving directions to Stratford-upon-Avon',
        notes: 'Check attraction calendars, parking, and winter conditions. Do not treat every Shakespeare site as open.'
      }
    ]
  },
  {
    date: '2026-12-29',
    label: 'December 29 — London or Birmingham',
    recommendedKey: 'birmingham',
    options: [
      {
        key: 'birmingham',
        title: 'Extra Birmingham family time',
        description: 'Keep the day local for a slower farewell, nearby walk, and relaxed meal.',
        duration: 'Flexible',
        travel: 'No long-distance trip',
        weather: 'All-weather choice',
        image: 'https://images.unsplash.com/photo-1719669753130-38c2245c014b?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
        map: 'https://www.google.com/maps/search/Birmingham,+England',
        heroImage: 'https://images.unsplash.com/photo-1719669753130-38c2245c014b?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
        heroAlt: 'Birmingham city scene',
        destination: 'Birmingham',
        summary: 'Stay in Birmingham for more family time, a local walk, optional shopping if open, and a relaxed meal.',
        times: ['Morning — relaxed breakfast with family', 'Afternoon — local walk or one nearby activity', 'Evening — enjoy a relaxed meal and prepare for the final days'],
        mapPoints: [{ name: 'Birmingham', lat: 52.4862, lng: -1.8904, type: 'base' }],
        directions: 'https://www.google.com/maps/search/Birmingham,+England',
        directionsLabel: 'Open Birmingham map',
        notes: 'Recommended for a lower-effort day. Check local holiday opening hours before planning shopping.'
      },
      {
        key: 'london',
        title: 'London day trip',
        description: 'Choose a small cluster of sights: Westminster, a South Bank walk, and Covent Garden if time permits.',
        duration: 'Full day',
        travel: 'Rail preferred if service suits; verify holiday timetable',
        weather: 'Good in most conditions',
        image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=900&q=80',
        map: 'https://www.google.com/maps/search/Westminster,+London',
        heroImage: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=80',
        heroAlt: 'London street and historic architecture',
        destination: 'London',
        summary: 'Make London a focused day trip: Westminster and Big Ben, a short South Bank walk, then Covent Garden only if time, energy, and opening hours allow.',
        times: ['Morning — verify rail service and travel from Birmingham', 'Late morning — Westminster and Big Ben exterior', 'Lunch — South Bank café break', 'Afternoon — choose South Bank or Covent Garden, not a long attraction checklist', 'Evening — return to Birmingham on a verified service'],
        mapPoints: [
          { name: 'Birmingham New Street', lat: 52.4778, lng: -1.8997, type: 'base' },
          { name: 'Westminster / Big Ben', lat: 51.5007, lng: -0.1246, type: 'optional' },
          { name: 'South Bank', lat: 51.5055, lng: -0.1165, type: 'optional' },
          { name: 'Covent Garden', lat: 51.5117, lng: -0.1240, type: 'optional' }
        ],
        directions: 'https://www.google.com/maps/dir/?api=1&origin=Birmingham+New+Street&destination=Westminster,+London&travelmode=transit',
        directionsLabel: 'Transit directions: Birmingham to Westminster',
        notes: 'Verify holiday rail timetables and engineering work. Winter Wonderland, if considered, needs official date, hours, and entry details checked.'
      }
    ]
  }
];

const selectedKey = 'uk-christmas-alt-selections';
const visibilityKey = 'uk-christmas-show-selected';

document.addEventListener('error', (event) => {
  const image = event.target;
  if (!(image instanceof HTMLImageElement) || image.classList.contains('leaflet-tile') || image.dataset.fallbackApplied) return;

  image.dataset.fallbackApplied = 'true';
  image.alt = `Photograph temporarily unavailable: ${image.alt}`;
  image.src = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><rect width="900" height="600" fill="#e8dfd1"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#355f4d" font-family="sans-serif" font-size="28">Photograph temporarily unavailable</text></svg>'
  )}`;
}, true);

function safeStorageGet(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // Ignore storage errors in restricted environments.
  }
}

function buildOverview() {
  const grid = document.getElementById('overview-grid');
  if (!grid) return;

  grid.innerHTML = overviewItems.map((item) => `
    <article class="overview-card">
      <img src="${item.image}" alt="${item.title} landscape" loading="lazy" />
      <div class="overview-card-body">
        <span class="tag">${item.tag}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="card-meta">
          <span>${item.range}</span>
        </div>
        <div class="card-actions">
          <a class="button button-secondary" href="#${item.section}">See itinerary</a>
          <button type="button" class="button button-primary" data-map-target="${item.title}">Map</button>
        </div>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('[data-map-target]').forEach((button) => {
    button.addEventListener('click', () => {
      const name = button.dataset.mapTarget;
      const destination = destinations.find((item) => item.name === name);
      if (destination) {
        const map = document.getElementById('journey-map');
        if (map && window.tripMap) {
          const marker = window.tripMap.markers.find((item) => item.options.title === destination.name);
          if (marker) {
            window.tripMap.map.flyTo([destination.lat, destination.lng], 6, { duration: 1.1 });
            marker.openPopup();
          }
        }
      }
    });
  });
}

function createMapMarker(lat, lng, label, type) {
  const colors = {
    airport: '#8d3f4f',
    base: '#1d4d3c',
    main: '#b99754',
    optional: '#6c7a89',
    daytrip: '#ad6c46'
  };

  const icon = L.divIcon({
    className: 'custom-marker',
    html: `<span style="display:block;width:16px;height:16px;border-radius:50%;background:${colors[type]||colors.main};border:3px solid white;box-shadow:0 0 0 2px rgba(0,0,0,0.12)"></span>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
    popupAnchor: [0, -10]
  });

  return L.marker([lat, lng], { icon, title: label }).bindPopup(`<strong>${label}</strong><br>${type.toUpperCase()}`);
}

function initBaseMap() {
  const mapContainer = document.getElementById('journey-map');
  if (!mapContainer || typeof L === 'undefined') return;

  const map = L.map('journey-map', { zoomControl: true, scrollWheelZoom: false });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const bounds = [[48.8, -7.9],[58.6, 1.2]];
  map.fitBounds(bounds, { padding: [24, 24] });

  const routeCoords = [
    [51.47, -0.4543],
    [52.4862, -1.8904],
    [55.9533, -3.1883],
    [56.6370, -5.1044],
    [51.9217, -1.6987],
    [52.1913, -1.7086],
    [51.5072, -0.1276]
  ];

  const routeLine = L.polyline(routeCoords, { color: '#1d4d3c', weight: 4, opacity: 0.8, dashArray: '8 12' }).addTo(map);
  routeLine.bindPopup('Schematic journey route — use the detailed Google Maps links for live driving directions.');

  const markers = [];
  destinations.forEach((item) => {
    const marker = createMapMarker(item.lat, item.lng, item.name, item.type);
    marker.addTo(map);
    marker.bindPopup(`
      <div>
        <strong>${item.name}</strong><br>
        <small>${item.date}</small><br>
        <span>${item.description}</span>
        <div style="margin-top:8px;display:flex;gap:8px;flex-wrap:wrap;">
          <a href="${item.googleMaps}" target="_blank" rel="noreferrer">Google Maps</a>
          <a href="#itinerary">Itinerary</a>
        </div>
      </div>
    `);
    markers.push(marker);
  });

  window.tripMap = { map, markers };
}

function renderItinerary() {
  const container = document.getElementById('itinerary-container');
  if (!container) return;

  const selected = safeStorageGet(selectedKey, {});
  const showOnlySelected = safeStorageGet(visibilityKey, false);

  let visibleDays = itineraryData;
  if (showOnlySelected) {
    visibleDays = itineraryData.filter((day) => Boolean(selected[day.date]));
  }

  container.innerHTML = `
    <div class="itinerary-list">
      ${visibleDays.map((sourceDay) => {
        const day = getDayPlan(sourceDay, selected);
        const selectedStatus = Boolean(selected[sourceDay.date]);
        return `
          <article class="itinerary-card ${selectedStatus ? 'selected-plan' : ''}" data-day="${day.date}">
            <div class="itinerary-header">
              <div class="itinerary-date">
                <strong>${day.date.split('-')[2]} Dec</strong>
                <span>${day.dayLabel}</span>
              </div>
              <div class="itinerary-badges">
                <span class="itinerary-tag ${day.tag}">${day.tag === 'recommended' ? 'Recommended' : day.tag === 'flexible' ? 'Flexible' : 'Optional'}</span>
                ${day.alternativeTitle ? `<span class="preferred-plan-label">Preferred plan: ${day.alternativeTitle}</span>` : ''}
              </div>
            </div>
            <div class="itinerary-content">
              <div class="itinerary-main">
                <h3>${day.title}</h3>
                <p class="detail-copy"><strong>${day.destination}</strong> — ${day.summary}</p>
                <ul class="itinerary-schedule">
                  ${day.times.map((item) => `<li><strong>${item.split('—')[0]}</strong><span>${item.includes('—') ? item.split('—').slice(1).join('—').trim() : item}</span></li>`).join('')}
                </ul>
                <div class="day-summary">${day.notes}</div>
                <div class="itinerary-actions">
                  <a class="button button-primary" href="${day.directions}" target="_blank" rel="noreferrer">${day.directionsLabel || 'Open map directions'}</a>
                  ${day.secondaryDirections ? `<a class="button button-secondary" href="${day.secondaryDirections}" target="_blank" rel="noreferrer">${day.secondaryDirectionsLabel || 'Alternative route'}</a>` : ''}
                  ${day.infoUrl ? `<a class="button button-secondary" href="${day.infoUrl}" target="_blank" rel="noreferrer">${day.infoLabel || 'Official travel information'}</a>` : ''}
                  <a class="button button-secondary" href="#alternatives">View alternatives</a>
                </div>
              </div>
              <div class="itinerary-side">
                <div class="itinerary-image">
                  <img src="${day.heroImage}" alt="${day.heroAlt || `${day.title} at ${day.destination}`}" loading="lazy" />
                </div>
                <div class="itinerary-meta">
                  <ul>
                    <li><strong>Area:</strong> ${day.destination}</li>
                    <li><strong>Key note:</strong> ${day.notes}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="daily-map" data-map="${day.date}"></div>
            <p class="map-note daily-map-note">Map pins show approximate locations; any line between pins is schematic, not a verified road or live route. Use the directions links for navigation.</p>
          </article>
        `;
      }).join('')}
    </div>
  `;

  renderDailyMaps();
}

function getDayPlan(day, selections) {
  const group = alternativeGroups.find((item) => item.date === day.date);
  if (!group) return day;

  const selectedKey = selections[day.date] || group.recommendedKey;
  const option = group.options.find((item) => item.key === selectedKey);
  if (!option) return day;

  return {
    ...day,
    title: option.itineraryTitle || day.title,
    destination: option.destination,
    summary: option.summary,
    times: option.times,
    heroImage: option.heroImage || day.heroImage,
    heroAlt: option.heroAlt || `${option.title} photograph`,
    mapPoints: option.mapPoints,
    directions: option.directions,
    directionsLabel: option.directionsLabel,
    secondaryDirections: option.secondaryDirections,
    secondaryDirectionsLabel: option.secondaryDirectionsLabel,
    infoUrl: option.infoUrl,
    infoLabel: option.infoLabel,
    notes: option.notes,
    alternativeTitle: option.title
  };
}

function renderDailyMaps() {
  if (typeof L === 'undefined') return;

  document.querySelectorAll('[data-map]').forEach((el) => {
    const date = el.dataset.map;
    const sourceDay = itineraryData.find((item) => item.date === date);
    if (!sourceDay) return;

    el.innerHTML = '';
    const selected = safeStorageGet(selectedKey, {});
    const day = getDayPlan(sourceDay, selected);
    const relevantPoints = day.mapPoints;

    const map = L.map(el, { zoomControl: true, scrollWheelZoom: false });
    const center = [...relevantPoints].slice(0, 1)[0];
    if (relevantPoints.length === 1) {
      map.setView([center.lat, center.lng], 10);
    } else {
      const bounds = L.latLngBounds(relevantPoints.map((point) => [point.lat, point.lng]));
      map.fitBounds(bounds.pad(0.4));
    }

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    relevantPoints.forEach((point) => {
      const icon = createMapMarker(point.lat, point.lng, point.name, point.type);
      icon.addTo(map);
      icon.bindPopup(`
        <strong>${point.name}</strong><br>
        <span>${point.type}</span>
      `);
    });

    if (relevantPoints.length > 1) {
      const route = L.polyline(relevantPoints.map((point) => [point.lat, point.lng]), { color: '#1d4d3c', weight: 3, opacity: 0.8 });
      route.addTo(map);
    }

    if (selected[day.date]) {
      const note = document.createElement('div');
      note.className = 'selected-banner';
      note.textContent = `Preferred: ${day.alternativeTitle}`;
      el.style.position = 'relative';
      el.appendChild(note);
    }
  });
}

function buildAlternativeCards() {
  const container = document.getElementById('alternatives-container');
  if (!container) return;

  const selections = safeStorageGet(selectedKey, {});
  container.innerHTML = alternativeGroups.map((group) => {
    const activeKey = selections[group.date] || group.recommendedKey;
    return `
    <div class="alternative-group" style="margin-bottom: 2rem;">
      <div class="alternative-heading">
        <h3>${group.label}</h3>
        <button type="button" class="button button-secondary reset-option" data-reset-date="${group.date}">Reset to recommended plan</button>
      </div>
      <div class="alternatives-grid">
        ${group.options.map((option) => {
          const active = activeKey === option.key;
          const recommended = group.recommendedKey === option.key;
          return `
            <article class="alternative-card ${active ? 'selected' : ''}">
              <img src="${option.image}" alt="${option.title}" loading="lazy" />
              <div class="alternative-body">
                ${recommended ? '<span class="tag">Recommended</span>' : ''}
                <h3>${option.title}</h3>
                <p>${option.description}</p>
                <ul class="alternative-list">
                  <li><strong>Why choose it:</strong> A distinct alternative that suits the day’s energy and conditions.</li>
                  <li><strong>Suggested duration:</strong> ${option.duration}</li>
                  <li><strong>Travel:</strong> ${option.travel}</li>
                  <li><strong>Weather:</strong> ${option.weather}</li>
                </ul>
                <div class="alternative-actions">
                  <button type="button" class="button button-primary choose-option" data-option-key="${option.key}" data-option-date="${group.date}">${active ? 'Preferred plan' : 'Choose this option'}</button>
                  <a class="button button-secondary" href="${option.map}" target="_blank" rel="noreferrer">Map</a>
                  <a class="button button-secondary" href="${option.directions}" target="_blank" rel="noreferrer">${option.directionsLabel || 'Directions'}</a>
                  ${option.infoUrl ? `<a class="button button-secondary" href="${option.infoUrl}" target="_blank" rel="noreferrer">${option.infoLabel || 'Official information'}</a>` : ''}
                </div>
              </div>
            </article>
          `;
        }).join('')}
      </div>
    </div>
  `;
  }).join('');

  container.querySelectorAll('.choose-option').forEach((button) => {
    button.addEventListener('click', () => {
      const optionDate = button.dataset.optionDate;
      const optionKey = button.dataset.optionKey;
      const selections = safeStorageGet(selectedKey, {});
      selections[optionDate] = optionKey;
      safeStorageSet(selectedKey, selections);
      buildAlternativeCards();
      renderItinerary();
    });
  });

  container.querySelectorAll('.reset-option').forEach((button) => {
    button.addEventListener('click', () => {
      const selections = safeStorageGet(selectedKey, {});
      delete selections[button.dataset.resetDate];
      safeStorageSet(selectedKey, selections);
      buildAlternativeCards();
      renderItinerary();
    });
  });
}

function toggleSelectedOnly() {
  const button = document.getElementById('toggle-selected-only');
  if (!button) return;

  const showOnlySelected = safeStorageGet(visibilityKey, false);
  button.textContent = showOnlySelected ? 'Show all plans' : 'Show only selected plans';

  if (button.dataset.bound === 'true') return;
  button.dataset.bound = 'true';
  button.addEventListener('click', () => {
    const next = !safeStorageGet(visibilityKey, false);
    safeStorageSet(visibilityKey, next);
    renderItinerary();
    toggleSelectedOnly();
  });
}

function setupChecklist() {
  document.querySelectorAll('.checklist input').forEach((input) => {
    const key = `${input.closest('.checklist').dataset.checklist}:${input.parentElement.textContent.trim()}`;
    const saved = safeStorageGet('checklist-state', {});
    input.checked = Boolean(saved[key]);
    input.addEventListener('change', () => {
      const store = safeStorageGet('checklist-state', {});
      store[key] = input.checked;
      safeStorageSet('checklist-state', store);
    });
  });
}

function initNavigation() {
  const navToggle = document.querySelector('.nav-toggle');
  const navPanel = document.getElementById('nav-menu');
  if (navToggle && navPanel) {
    navToggle.addEventListener('click', () => {
      const isOpen = navPanel.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      if (navPanel) navPanel.classList.remove('open');
      if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  const printButton = document.querySelector('.print-button');
  if (printButton) {
    printButton.addEventListener('click', () => window.print());
  }

  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
}

function checkCountdown() {
  const countdown = document.getElementById('countdown');
  if (!countdown) return;

  const departureDate = new Date(2026, 11, 14);
  const now = new Date();

  if (now >= departureDate) {
    countdown.textContent = 'Travel day from Ajax';
    return;
  }

  const diff = departureDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  countdown.textContent = `${days}d ${hours}h ${minutes}m until we leave Ajax`;
}

function init() {
  buildOverview();
  initBaseMap();
  buildAlternativeCards();
  renderItinerary();
  setupChecklist();
  initNavigation();
  checkCountdown();
  toggleSelectedOnly();

  document.getElementById('jump-to-map')?.addEventListener('click', () => {
    document.getElementById('map')?.scrollIntoView({ behavior: 'smooth' });
  });

  setInterval(checkCountdown, 60000);
}

document.addEventListener('DOMContentLoaded', init);
