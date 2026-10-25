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
    image: 'https://images.unsplash.com/photo-1518407613690-d9fc6b5a1bf2?auto=format&fit=crop&w=900&q=80'
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
    date: 'Dec 19–23',
    description: 'Christmas markets, historic streets, and winter viewpoints in the capital.',
    lat: 55.9533,
    lng: -3.1883,
    href: '#itinerary',
    googleMaps: 'https://www.google.com/maps/search/Edinburgh,+Scotland',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80'
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
    image: 'https://images.unsplash.com/photo-1518407613690-d9fc6b5a1bf2?auto=format&fit=crop&w=900&q=80',
    section: 'itinerary'
  },
  {
    title: 'Edinburgh',
    description: 'Historic streets, festive markets, and broad city viewpoints with plenty of café time.',
    range: 'Dec 19–23',
    tag: 'Recommended',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80',
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
    date: '2026-12-15',
    dayLabel: 'Tuesday',
    title: 'Arrival in England',
    destination: 'Heathrow to Birmingham',
    tag: 'recommended',
    summary: 'Arrive at Heathrow, meet family, and drive to Birmingham for a calm first evening at home.',
    heroImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    times: [
      '7:00 PM — Heathrow arrival',
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
    notes: 'The drive can vary significantly by traffic and arrival time. Aim for a gentle arrival without sightseeing.'
  },
  {
    date: '2026-12-16',
    dayLabel: 'Wednesday',
    title: 'Birmingham local exploration',
    destination: 'Birmingham city centre',
    tag: 'recommended',
    summary: 'A relaxed city-centre day while your sister is working, with canals, public spaces, and the Christmas market if open.',
    heroImage: 'https://images.unsplash.com/photo-1518407613690-d9fc6b5a1bf2?auto=format&fit=crop&w=1200&q=80',
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
    title: 'Flexible Birmingham day',
    destination: 'Local attraction choice',
    tag: 'flexible',
    summary: 'Choose one local attraction from several good December options, or keep the day beautifully simple with family time.',
    heroImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    times: [
      'Morning — family time or a relaxed start',
      'Choose one: Black Country Living Museum, Cannon Hill Park, or Thinktank',
      'Lunch — local café or picnic',
      'Afternoon — flexible rest or a short city walk'
    ],
    mapPoints: [
      { name: 'Black Country Living Museum', lat: 52.5294, lng: -2.0671, type: 'optional' },
      { name: 'Cannon Hill Park', lat: 52.4553, lng: -1.9345, type: 'optional' },
      { name: 'Thinktank', lat: 52.4791, lng: -1.9081, type: 'optional' },
      { name: 'Birmingham', lat: 52.4862, lng: -1.8904, type: 'base' }
    ],
    mapTitle: 'Local attraction choices',
    directions: 'https://www.google.com/maps/dir/?api=1&origin=Birmingham+England&destination=Black+Country+Living+Museum+Dudley',
    notes: 'These are alternatives, not a mandatory sequence. Pick the one that matches opening hours, weather, and energy.'
  },
  {
    date: '2026-12-19',
    dayLabel: 'Saturday',
    title: 'Travel to Edinburgh',
    destination: 'Birmingham to Edinburgh',
    tag: 'recommended',
    summary: 'Travel to Edinburgh, check in, rest, and enjoy the Christmas market if it is convenient after arrival.',
    heroImage: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80',
    times: [
      'Morning or midday — travel from Birmingham to Edinburgh',
      'Check in and settle into accommodation',
      'Afternoon — rest time and a slow wander',
      'Evening — optional Christmas market visit if the timing works'
    ],
    mapPoints: [
      { name: 'Birmingham', lat: 52.4862, lng: -1.8904, type: 'base' },
      { name: 'Edinburgh', lat: 55.9533, lng: -3.1883, type: 'main' }
    ],
    mapTitle: 'Birmingham to Edinburgh',
    directions: 'https://www.google.com/maps/dir/?api=1&origin=Birmingham+England&destination=Edinburgh+Scotland',
    notes: 'Default plan favors rail if a suitable service is available. Verify the actual Christmas-period timetable before booking, and treat driving as a flexible alternative if preferred.'
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
    directions: 'https://www.google.com/maps/dir/?api=1&origin=Edinburgh+Castle+Scotland&destination=Grassmarket+Edinburgh&waypoints=Royal+Mile+Edinburgh|Victoria+Street+Edinburgh',
    notes: 'If the castle interior is selected, book timed entry if needed and check the official opening calendar. Otherwise, enjoy the exterior and surrounding streets.'
  },
  {
    date: '2026-12-21',
    dayLabel: 'Monday',
    title: 'Viewpoints and New Town',
    destination: 'Calton Hill and New Town',
    tag: 'recommended',
    summary: 'Enjoy a scenic viewpoint, browse the New Town, and keep the afternoon flexible around weather and energy.',
    heroImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
    times: [
      'Morning — Calton Hill if weather and ground conditions are suitable',
      'Late morning — walk through New Town and independent shops',
      'Lunch — café lunch or lighter break',
      'Afternoon — optional quieter afternoon in the city'
    ],
    mapPoints: [
      { name: 'Calton Hill', lat: 55.9554, lng: -3.1827, type: 'main' },
      { name: 'New Town', lat: 55.9530, lng: -3.1880, type: 'main' },
      { name: 'Edinburgh', lat: 55.9533, lng: -3.1883, type: 'main' }
    ],
    mapTitle: 'Calton Hill and New Town',
    directions: 'https://www.google.com/maps/dir/?api=1&origin=Calton+Hill+Edinburgh&destination=Princes+Street+Gardens+Edinburgh',
    notes: 'Arthur’s Seat is weather-dependent and potentially strenuous; only attempt it if conditions are safe and you are comfortable with a more demanding walk.'
  },
  {
    date: '2026-12-22',
    dayLabel: 'Tuesday',
    title: 'Flexible Scotland day',
    destination: 'Edinburgh or countryside choice',
    tag: 'flexible',
    summary: 'Keep the day relaxed in Edinburgh, or choose a countryside option if weather, daylight, and transport all suit.',
    heroImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
    times: [
      'Morning — museum, gallery, or another neighbourhood walk',
      'Afternoon — revisit the Christmas market or have a café break',
      'Optional — Loch Lomond day trip if travel and weather make it practical',
      'Alternative — consider a Highlands extension if preferred'
    ],
    mapPoints: [
      { name: 'Edinburgh', lat: 55.9533, lng: -3.1883, type: 'base' },
      { name: 'Loch Lomond', lat: 56.1120, lng: -4.6400, type: 'optional' },
      { name: 'Glencoe', lat: 56.6370, lng: -5.1044, type: 'optional' }
    ],
    mapTitle: 'Scotland day choice',
    directions: 'https://www.google.com/maps/dir/?api=1&origin=Edinburgh+Scotland&destination=Loch+Lomond+Scotland',
    notes: 'This is a decision day: choose more Edinburgh time, a countryside day trip, or a Highlands overnight extension depending on the weather and energy levels.'
  },
  {
    date: '2026-12-23',
    dayLabel: 'Wednesday',
    title: 'Return to Birmingham',
    destination: 'Edinburgh to Birmingham',
    tag: 'recommended',
    summary: 'Travel back to Birmingham and settle in for a slower Christmas-eve preparation period.',
    heroImage: 'https://images.unsplash.com/photo-1518407613690-d9fc6b5a1bf2?auto=format&fit=crop&w=1200&q=80',
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
    directions: 'https://www.google.com/maps/dir/?api=1&origin=Edinburgh+Scotland&destination=Birmingham+England',
    notes: 'Verify the actual return transport schedule, as holiday service patterns and engineering works can change quickly in December.'
  },
  {
    date: '2026-12-24',
    dayLabel: 'Thursday',
    title: 'Christmas Eve at home',
    destination: 'Birmingham home base',
    tag: 'recommended',
    summary: 'Keep Christmas Eve slow and familial with a relaxed morning, food prep, games, and an at-home dinner.',
    heroImage: 'https://images.unsplash.com/photo-1512364730924-9f49d804f9e6?auto=format&fit=crop&w=1200&q=80',
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
    heroImage: 'https://images.unsplash.com/photo-1512389142861-9c73d2bc5315?auto=format&fit=crop&w=1200&q=80',
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
    directions: 'https://www.google.com/maps/dir/?api=1&origin=Birmingham+England&destination=Westminster+London',
    notes: 'If London is chosen, remember to verify holiday engineering works and actual transport timetables before setting off. Keep the day focused rather than trying to cover every attraction.'
  },
  {
    date: '2026-12-30',
    dayLabel: 'Wednesday',
    title: 'Final full day with family',
    destination: 'Birmingham',
    tag: 'recommended',
    summary: 'Keep the final full day unhurried with breakfast, family time, optional short outing, packing, and a farewell dinner.',
    heroImage: 'https://images.unsplash.com/photo-1512389142861-9c73d2bc5315?auto=format&fit=crop&w=1200&q=80',
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
      'Check in and depart for a 4:00 PM flight'
    ],
    mapPoints: [
      { name: 'Birmingham', lat: 52.4862, lng: -1.8904, type: 'base' },
      { name: 'Heathrow Airport', lat: 51.47, lng: -0.4543, type: 'airport' }
    ],
    mapTitle: 'Birmingham to Heathrow',
    directions: 'https://www.google.com/maps/dir/?api=1&origin=Birmingham+England&destination=Heathrow+Airport+London',
    notes: 'The suggested 9:00 AM departure is a planning recommendation, not a guarantee of actual traffic or airport procedures. Confirm the airline’s likely arrival window and terminal before leaving.'
  }
];

const selectedKey = 'uk-christmas-alt-selections';
const visibilityKey = 'uk-christmas-show-selected';

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
    visibleDays = itineraryData.filter((day) => selected[day.date] === 'selected');
  }

  container.innerHTML = `
    <div class="itinerary-list">
      ${visibleDays.map((day) => {
        const selectedStatus = selected[day.date] === 'selected' ? 'selected' : '';
        return `
          <article class="itinerary-card ${selectedStatus ? 'selected-plan' : ''}" data-day="${day.date}">
            <div class="itinerary-header">
              <div class="itinerary-date">
                <strong>${day.date.split('-')[2]} Dec</strong>
                <span>${day.dayLabel}</span>
              </div>
              <span class="itinerary-tag ${day.tag}">${day.tag === 'recommended' ? 'Recommended' : day.tag === 'flexible' ? 'Flexible' : 'Optional'}</span>
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
                  <a class="button button-primary" href="${day.directions}" target="_blank" rel="noreferrer">Open Driving Directions</a>
                  <a class="button button-secondary" href="#alternatives">View alternatives</a>
                </div>
              </div>
              <div class="itinerary-side">
                <div class="itinerary-image">
                  <img src="${day.heroImage}" alt="${day.title} at ${day.destination}" loading="lazy" />
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
          </article>
        `;
      }).join('')}
    </div>
  `;

  renderDailyMaps();
}

function renderDailyMaps() {
  if (typeof L === 'undefined') return;

  document.querySelectorAll('[data-map]').forEach((el) => {
    const date = el.dataset.map;
    const day = itineraryData.find((item) => item.date === date);
    if (!day) return;

    el.innerHTML = '';
    const selected = safeStorageGet(selectedKey, {});
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

    const selectedOption = selected[day.date];
    if (selectedOption === 'selected') {
      const note = document.createElement('div');
      note.className = 'selected-banner';
      note.textContent = 'Preferred plan selected';
      note.style.position = 'absolute';
      note.style.top = '8px';
      note.style.right = '8px';
      note.style.zIndex = '500';
      note.style.background = 'rgba(18,49,38,0.85)';
      note.style.color = '#fff';
      note.style.padding = '6px 10px';
      note.style.borderRadius = '999px';
      note.style.fontSize = '12px';
      note.style.fontWeight = '700';
      el.style.position = 'relative';
      el.appendChild(note);
    }
  });
}

function buildAlternativeCards() {
  const container = document.getElementById('alternatives-container');
  if (!container) return;

  const selections = safeStorageGet(selectedKey, {});
  const groups = [
    {
      label: 'December 18',
      options: [
        { key: '2026-12-18', title: 'Black Country Living Museum', description: 'Hands-on social-history experience with a slower pace and plenty of space.', duration: 'Half day', travel: 'Approx. 30–45 mins', weather: 'Good in mixed weather', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80', map: 'https://www.google.com/maps/search/Black+Country+Living+Museum+Dudley' },
        { key: '2026-12-18-alt-2', title: 'Cannon Hill Park', description: 'A gentle green space for a relaxed morning and an easy winter stroll.', duration: '1–2 hours', travel: 'Approx. 20–30 mins', weather: 'Best in mild weather', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80', map: 'https://www.google.com/maps/search/Cannon+Hill+Park+Birmingham' },
        { key: '2026-12-18-alt-3', title: 'Thinktank Science Museum', description: 'A comfortable indoor choice if the temperature or weather is poor.', duration: '2–3 hours', travel: 'Approx. 15–25 mins', weather: 'Ideal for poor weather', image: 'https://images.unsplash.com/photo-1532169509583-1a1efb4068e7?auto=format&fit=crop&w=900&q=80', map: 'https://www.google.com/maps/search/Thinktank+Birmingham' }
      ]
    },
    {
      label: 'December 22',
      options: [
        { key: '2026-12-22', title: 'Edinburgh city day', description: 'Stay in the city for a slower day of museums, cafés, shopping, and Christmas atmosphere.', duration: 'Flexible', travel: 'No travel required', weather: 'Good for all weather', image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&q=80', map: 'https://www.google.com/maps/search/Edinburgh+Scotland' },
        { key: '2026-12-22-alt-2', title: 'Loch Lomond excursion', description: 'A day trip to Scottish countryside if the weather and daylight are suitable.', duration: 'Full day', travel: 'Approx. 1.5–2.5 hours each way', weather: 'Weather-dependent', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80', map: 'https://www.google.com/maps/search/Loch+Lomond+Scotland' },
        { key: '2026-12-22-alt-3', title: 'Highlands overnight extension', description: 'The most scenic option, best reserved for the best weather and stable road conditions.', duration: 'Overnight', travel: 'Longer drive', weather: 'Weather-dependent', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80', map: 'https://www.google.com/maps/search/Glencoe+Scotland' }
      ]
    },
    {
      label: 'December 28',
      options: [
        { key: '2026-12-28', title: 'Relaxed family day', description: 'Stay in Birmingham for a gentle day without adding distance or pressure.', duration: 'Flexible', travel: 'No long drive', weather: 'Excellent for all conditions', image: 'https://images.unsplash.com/photo-1518407613690-d9fc6b5a1bf2?auto=format&fit=crop&w=900&q=80', map: 'https://www.google.com/maps/search/Birmingham+England' },
        { key: '2026-12-28-alt-2', title: 'Stratford-upon-Avon', description: 'Historic streets, cafés, and the river make for a charming alternative day trip.', duration: 'Half day', travel: 'Approx. 1–1.5 hours each way', weather: 'Good in most conditions', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80', map: 'https://www.google.com/maps/search/Stratford-upon-Avon+England' }
      ]
    },
    {
      label: 'December 29',
      options: [
        { key: '2026-12-29', title: 'London day trip', description: 'A focused London visit with Westminster, South Bank, and Covent Garden.', duration: 'Day trip', travel: 'Train or drive depending on preference', weather: 'Good in most conditions', image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=900&q=80', map: 'https://www.google.com/maps/search/London+England' },
        { key: '2026-12-29-alt-2', title: 'Extra Birmingham family time', description: 'Keep the day local for a slower farewell to the family and a lower-effort day.', duration: 'Flexible', travel: 'No long trip', weather: 'Excellent for all weather', image: 'https://images.unsplash.com/photo-1512389142861-9c73d2bc5315?auto=format&fit=crop&w=900&q=80', map: 'https://www.google.com/maps/search/Birmingham+family+home' }
      ]
    }
  ];

  container.innerHTML = groups.map((group) => `
    <div class="alternative-group" style="margin-bottom: 2rem;">
      <h3 style="margin-bottom: 1rem;">${group.label}</h3>
      <div class="alternatives-grid">
        ${group.options.map((option) => {
          const active = selections[option.key] === 'selected';
          return `
            <article class="alternative-card ${active ? 'selected' : ''}">
              <img src="${option.image}" alt="${option.title}" loading="lazy" />
              <div class="alternative-body">
                <h3>${option.title}</h3>
                <p>${option.description}</p>
                <ul class="alternative-list">
                  <li><strong>Why:</strong> Best for a slower, flexible day.</li>
                  <li><strong>Suggested duration:</strong> ${option.duration}</li>
                  <li><strong>Travel:</strong> ${option.travel}</li>
                  <li><strong>Weather:</strong> ${option.weather}</li>
                </ul>
                <div class="alternative-actions">
                  <button type="button" class="button button-primary choose-option" data-option-key="${option.key}">${active ? 'Selected' : 'Choose this option'}</button>
                  <a class="button button-secondary" href="${option.map}" target="_blank" rel="noreferrer">Map</a>
                </div>
              </div>
            </article>
          `;
        }).join('')}
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.choose-option').forEach((button) => {
    button.addEventListener('click', () => {
      const optionKey = button.dataset.optionKey;
      const selections = safeStorageGet(selectedKey, {});
      Object.keys(selections).forEach((key) => {
        if (selections[key] === 'selected') delete selections[key];
      });
      selections[optionKey] = 'selected';
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

  const departureDate = new Date('2026-12-31T16:00:00');
  const now = new Date();

  if (now >= departureDate) {
    countdown.textContent = 'Trip departure complete';
    return;
  }

  const diff = departureDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  countdown.textContent = `${days}d ${hours}h ${minutes}m to departure`;
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
