// Historical Google Earth Imagery Dataset (Chronologically Sorted: May 1994 -> Apr 2025)
const IMAGERY_FRAMES = [
  {
    id: '1994-05-08',
    file: '8MAY1994.png',
    dateISO: '1994-05-08',
    displayDate: 'May 8, 1994',
    shortLabel: "May '94",
    season: 'Mid-Spring (B&W)',
    seasonColor: '#94a3b8',
    width: 2559,
    height: 1007,
    notes: 'Historical USGS black-and-white aerial baseline. Natural dark wetland/pond west of the main dirt road, with open rangeland and pastures across the central and southern basins prior to lake excavation or residential development.'
  },
  {
    id: '2000-07-26',
    file: '26JUL2000.png',
    dateISO: '2000-07-26',
    displayDate: 'July 26, 2000',
    shortLabel: "Jul '00",
    season: 'Mid-Summer (B&W)',
    seasonColor: '#94a3b8',
    width: 2559,
    height: 1007,
    notes: 'Summer black-and-white aerial capture. Early grading and earthwork activity begins in the southeastern basin while the western wetland edge and central pastures remain open.'
  },
  {
    id: '2003-08-18',
    file: '18AUG2003.png',
    dateISO: '2003-08-18',
    displayDate: 'August 18, 2003',
    shortLabel: "Aug '03",
    season: 'Late Summer',
    seasonColor: '#eab308',
    width: 2558,
    height: 1006,
    notes: 'First color satellite capture. The western pond is sculpted into a distinctive multi-fingered ("stick-figure") channel layout, a small rectangular outbuilding stands east of the road, and earthmoving continues in the southeast.'
  },
  {
    id: '2005-08-13',
    file: '13AUG2005.png',
    dateISO: '2005-08-13',
    displayDate: 'August 13, 2005',
    shortLabel: "Aug 13 '05",
    season: 'Late Summer',
    seasonColor: '#22c55e',
    width: 2558,
    height: 1006,
    notes: 'Lush green center-pivot irrigation operates on the northern field and southwest of the multi-fingered pond, which is filled with dark water and aquatic vegetation. Excavation expands across the southeastern area.'
  },
  {
    id: '2005-08-15',
    file: '15AUG2005.png',
    dateISO: '2005-08-15',
    displayDate: 'August 15, 2005',
    shortLabel: "Aug 15 '05",
    season: 'Late Summer',
    seasonColor: '#22c55e',
    width: 2559,
    height: 1006,
    notes: 'High-resolution capture taken two days later showing sharp detail of the branched western finger-pond, the small outbuilding east of the main road, and active grading and stockpiles in the southeastern basin.'
  },
  {
    id: '2006-08-18',
    file: '18AUG2006.png',
    dateISO: '2006-08-18',
    displayDate: 'August 18, 2006',
    shortLabel: "Aug '06",
    season: 'Late Summer',
    seasonColor: '#f59e0b',
    width: 2559,
    height: 1007,
    notes: 'Major earthworks underway across the south-central and southeastern valley: two large artificial lake basins and a connecting stream corridor are actively excavated, exposing bright tan soil.'
  },
  {
    id: '2006-09-30',
    file: '30SEP2006.png',
    dateISO: '2006-09-30',
    displayDate: 'September 30, 2006',
    shortLabel: "Sep '06",
    season: 'Early Autumn',
    seasonColor: '#f97316',
    width: 2559,
    height: 1007,
    notes: 'Six weeks later, the sculpted V-shaped western lake basin and curved eastern basin feature steep contoured banks with initial pools of greenish water collecting at the bottom of the western basin.'
  },
  {
    id: '2011-11-17',
    file: '17NOV2011.png',
    dateISO: '2011-11-17',
    displayDate: 'November 17, 2011',
    shortLabel: "Nov '11",
    season: 'Late Autumn',
    seasonColor: '#10b981',
    width: 2559,
    height: 1006,
    notes: 'Major water and agricultural milestone: both excavated basins are now flooded dark-water lakes connected by a meandering landscaped stream with weirs and a bridge, and a large central center-pivot irrigated field is established.'
  },
  {
    id: '2012-08-30',
    file: '30AUG2012.png',
    dateISO: '2012-08-30',
    displayDate: 'August 30, 2012',
    shortLabel: "Aug '12",
    season: 'Late Summer',
    seasonColor: '#eab308',
    width: 2559,
    height: 1005,
    notes: 'The central center-pivot crop field and turf corridor surrounding the twin lakes and winding stream are lush green; the western finger-pond is partially vegetated and residential home sites remain open.'
  },
  {
    id: '2014-07-30',
    file: '30JUL2014.png',
    dateISO: '2014-07-30',
    displayDate: 'July 30, 2014',
    shortLabel: "Jul '14",
    season: 'Mid-Summer',
    seasonColor: '#22c55e',
    width: 2558,
    height: 1006,
    notes: 'Peak summer irrigation across the northern, central, and eastern agricultural fields and lake corridors. The western finger-pond bed is dry prior to reshaping, and the ridge parcels remain undeveloped.'
  },
  {
    id: '2017-05-30',
    file: '30MAY2017.png',
    dateISO: '2017-05-30',
    displayDate: 'May 30, 2017',
    shortLabel: "May '17",
    season: 'Late Spring',
    seasonColor: '#4ade80',
    width: 2558,
    height: 1005,
    notes: 'Residential transformation: the western multi-wing house, upgraded outbuilding & fenced court, and SW equestrian barn/paddock complex are built; the finger-pond is reshaped into a triangular pond; and the central ridge residence & shop are under construction.'
  },
  {
    id: '2018-07-30',
    file: '30JUL2018.png',
    dateISO: '2018-07-30',
    displayDate: 'July 30, 2018',
    shortLabel: "Jul '18",
    season: 'Mid-Summer',
    seasonColor: '#22c55e',
    width: 2556,
    height: 1005,
    notes: 'Construction of the central ridge residence and detached shop is completed with a reddish-brown paved driveway and green lawn. An additional estate residence with a small pond is visible along the northern boundary.'
  },
  {
    id: '2020-03-30',
    file: '30MAR2020.png',
    dateISO: '2020-03-30',
    displayDate: 'March 30, 2020',
    shortLabel: "Mar '20",
    season: 'Early Spring',
    seasonColor: '#a8a29e',
    width: 2559,
    height: 1006,
    notes: 'Early-spring dormant capture with tan pastures and crop fields, dark water in the twin lakes and western triangular pond, and clear roof footprints across all residential compounds.'
  },
  {
    id: '2022-07-30',
    file: '30JUL2022.png',
    dateISO: '2022-07-30',
    displayDate: 'July 30, 2022',
    shortLabel: "Jul '22",
    season: 'Mid-Summer',
    seasonColor: '#22c55e',
    width: 2558,
    height: 1007,
    notes: 'Full mid-summer irrigation across the northern, central, and eastern fields, with maturing perimeter trees and landscaping around the central ridge home, western compound, and twin lakes.'
  },
  {
    id: '2024-06-22',
    file: '22JUN2024.png',
    dateISO: '2024-06-22',
    displayDate: 'June 22, 2024',
    shortLabel: "Jun '24",
    season: 'Early Summer',
    seasonColor: '#10b981',
    width: 2556,
    height: 1006,
    notes: 'Vibrant early-summer green-up across all irrigated fields, pastures, and lake banks, with dense tree canopies and established landscaping around every residence.'
  },
  {
    id: '2025-02-28',
    file: '28FEB2025.png',
    dateISO: '2025-02-28',
    displayDate: 'February 28, 2025',
    shortLabel: "Feb '25",
    season: 'Late Winter',
    seasonColor: '#38bdf8',
    width: 2557,
    height: 1006,
    notes: 'Crisp late-winter dormancy capture showing tan pastures and crop fields, long northern winter shadows, and sharp contrast along the reddish-brown road and driveway network.'
  },
  {
    id: '2025-04-30',
    file: '30APR2025.png',
    dateISO: '2025-04-30',
    displayDate: 'April 30, 2025',
    shortLabel: "Apr '25",
    season: 'Mid-Spring',
    seasonColor: '#4ade80',
    width: 2557,
    height: 1004,
    notes: 'Latest spring capture showing vibrant green-up across the pastures, center-pivot fields, and landscaped twin-lake corridor after 31 years of documented property evolution.'
  }
];

// Application State
const state = {
  currentIndex: 0,
  previousIndex: null,
  isPlaying: false,
  playSpeedMs: 1400,
  loopPlayback: true,
  smoothCrossfade: true,
  proportionalTimeline: false,
  viewMode: 'single', // 'single' | 'split' | 'onion'
  compareIndex: 0,    // Reference frame for split/onion compare (default May 1994)
  splitPercent: 50,
  onionOpacity: 50,
  zoom: 1,
  panX: 0,
  panY: 0,
  isDraggingStage: false,
  isDraggingSplit: false,
  dragStartX: 0,
  dragStartY: 0,
  baseWidth: 1200,
  baseHeight: 472
};

let playTimer = null;

// DOM Elements
const viewportEl = document.getElementById('viewport');
const stageEl = document.getElementById('stageTransform');
const baseLayersEl = document.getElementById('baseLayers');
const compareLayerEl = document.getElementById('compareLayer');
const compareImgEl = document.getElementById('compareImg');
const splitHandleEl = document.getElementById('splitHandle');
const splitLeftLabelEl = document.getElementById('splitLeftLabel');
const splitRightLabelEl = document.getElementById('splitRightLabel');
const splitLeftYearEl = document.getElementById('splitLeftYear');
const splitRightYearEl = document.getElementById('splitRightYear');
const btnSplitLeftPrev = document.getElementById('btnSplitLeftPrev');
const btnSplitLeftNext = document.getElementById('btnSplitLeftNext');
const splitLeftSelectEl = document.getElementById('splitLeftSelect');
const btnSplitRightPrev = document.getElementById('btnSplitRightPrev');
const btnSplitRightNext = document.getElementById('btnSplitRightNext');
const splitRightSelectEl = document.getElementById('splitRightSelect');

// Bottom Dock Section Blocks & Split/Blend Controls
const blockSingleEl = document.getElementById('blockSingle');
const blockSplitEl = document.getElementById('blockSplit');
const blockOnionEl = document.getElementById('blockOnion');
const btnDockSplitLeftPrev = document.getElementById('btnDockSplitLeftPrev');
const btnDockSplitLeftNext = document.getElementById('btnDockSplitLeftNext');
const dockSplitLeftSelectEl = document.getElementById('dockSplitLeftSelect');
const btnDockSplitRightPrev = document.getElementById('btnDockSplitRightPrev');
const btnDockSplitRightNext = document.getElementById('btnDockSplitRightNext');
const dockSplitRightSelectEl = document.getElementById('dockSplitRightSelect');
const dockOnionSelectEl = document.getElementById('dockOnionSelect');

const dateBadgeEl = document.getElementById('dateBadge');
const seasonTagEl = document.getElementById('seasonTag');
const deltaInfoEl = document.getElementById('deltaInfo');
const captionTextEl = document.getElementById('captionText');
const btnToggleDescEl = document.getElementById('btnToggleDesc');
const descCollapsibleEl = document.getElementById('descCollapsible');

const timelineTrackBgEl = document.getElementById('timelineTrackBg');
const timelineProgressEl = document.getElementById('timelineProgress');
const timelineNodesEl = document.getElementById('timelineNodes');

const btnFirst = document.getElementById('btnFirst');
const btnPrev = document.getElementById('btnPrev');
const btnPlay = document.getElementById('btnPlay');
const btnNext = document.getElementById('btnNext');
const btnLast = document.getElementById('btnLast');
const stepCounterEl = document.getElementById('stepCounter');

const speedSelectEl = document.getElementById('speedSelect');
const chkCrossfadeEl = document.getElementById('chkCrossfade');
const chkProportionalEl = document.getElementById('chkProportional');
const btnFilmstripEl = document.getElementById('btnFilmstrip');
const filmstripDrawerEl = document.getElementById('filmstripDrawer');

const onionSliderEl = document.getElementById('onionSlider');
const onionValEl = document.getElementById('onionVal');

const btnZoomIn = document.getElementById('btnZoomIn');
const btnZoomOut = document.getElementById('btnZoomOut');
const btnZoomReset = document.getElementById('btnZoomReset');
const zoomReadoutEl = document.getElementById('zoomReadout');

// Parse Dates for Proportional Timeline & Delta Calculation
const timestamps = IMAGERY_FRAMES.map(f => new Date(f.dateISO + 'T12:00:00Z').getTime());
const minTime = timestamps[0];
const maxTime = timestamps[timestamps.length - 1];

function getNodePercentage(index) {
  if (!state.proportionalTimeline) {
    return (index / (IMAGERY_FRAMES.length - 1)) * 100;
  }
  return ((timestamps[index] - minTime) / (maxTime - minTime)) * 100;
}

function formatTimeDelta(index) {
  if (index === 0) {
    return 'Baseline capture (Frame 1 of ' + IMAGERY_FRAMES.length + ')';
  }
  const diffDaysPrev = Math.round((timestamps[index] - timestamps[index - 1]) / (1000 * 60 * 60 * 24));
  const diffYearsBase = ((timestamps[index] - minTime) / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1);
  let prevStr;
  if (diffDaysPrev < 30) {
    prevStr = `+${diffDaysPrev} days since prior`;
  } else if (diffDaysPrev < 365) {
    prevStr = `+${Math.round(diffDaysPrev / 30.4)} mos since prior`;
  } else {
    prevStr = `+${(diffDaysPrev / 365.25).toFixed(1)} yrs since prior`;
  }
  return `${prevStr} • +${diffYearsBase} yrs from May 1994`;
}

// Initialize DOM Layers, Timeline Nodes, Compare Dropdown, and Filmstrip
function initApp() {
  // 1. Create stacked <img> layers for instant switching & smooth crossfading
  baseLayersEl.innerHTML = '';
  IMAGERY_FRAMES.forEach((frame, idx) => {
    const img = document.createElement('img');
    img.src = frame.file;
    img.alt = frame.displayDate;
    img.className = 'layer-img' + (idx === 0 ? ' active' : '');
    img.dataset.index = idx;
    baseLayersEl.appendChild(img);
  });

  // 2. Populate Split Left, Split Right, and Blend Date Selectors (both floating & bottom dock)
  const allSelects = [
    splitLeftSelectEl,
    splitRightSelectEl,
    dockSplitLeftSelectEl,
    dockSplitRightSelectEl,
    dockOnionSelectEl
  ];
  allSelects.forEach(sel => { if (sel) sel.innerHTML = ''; });

  IMAGERY_FRAMES.forEach((frame, idx) => {
    allSelects.forEach(sel => {
      if (!sel) return;
      const opt = document.createElement('option');
      opt.value = idx;
      opt.textContent = frame.displayDate;
      sel.appendChild(opt);
    });
  });
  state.compareIndex = 0; // Default left/reference side to May 1994 baseline
  splitLeftSelectEl.value = '0';
  dockSplitLeftSelectEl.value = '0';
  dockOnionSelectEl.value = '0';
  splitRightSelectEl.value = String(state.currentIndex);
  dockSplitRightSelectEl.value = String(state.currentIndex);

  // 3. Build Timeline Nodes & Filmstrip Thumbnails
  renderTimelineNodes();
  renderFilmstrip();

  // 4. Size Stage to Fit Viewport cleanly
  computeStageSize();
  window.addEventListener('resize', computeStageSize);

  // 5. Bind Controls & Interactions
  bindEvents();

  // 6. Initial UI Render
  updateUI();
}

function computeStageSize() {
  const vw = Math.max(320, viewportEl.clientWidth);
  const vh = Math.max(200, viewportEl.clientHeight);

  state.baseWidth = vw;
  state.baseHeight = vh;

  stageEl.style.width = `${state.baseWidth}px`;
  stageEl.style.height = `${state.baseHeight}px`;
  applyTransform();
}

function clampPan() {
  state.zoom = Math.max(1, Math.min(6, state.zoom));
  const vw = viewportEl.clientWidth;
  const vh = viewportEl.clientHeight;
  const scaledW = state.baseWidth * state.zoom;
  const scaledH = state.baseHeight * state.zoom;
  const maxPanX = Math.max(0, (scaledW - vw) / 2);
  const maxPanY = Math.max(0, (scaledH - vh) / 2);
  state.panX = Math.max(-maxPanX, Math.min(maxPanX, state.panX));
  state.panY = Math.max(-maxPanY, Math.min(maxPanY, state.panY));
}

function syncSplitClip() {
  if (state.viewMode !== 'split') return;
  const vw = Math.max(320, viewportEl.clientWidth);
  // Keep split handle & both Left/Right date badges strictly inside the viewing window
  const leftCardW = (splitLeftLabelEl?.offsetWidth || 128) + 20;
  const rightCardW = (splitRightLabelEl?.offsetWidth || 128) + 20;
  const minScreenX = Math.min(leftCardW, vw * 0.42);
  const maxScreenX = Math.max(vw - rightCardW, vw * 0.58);

  let screenX = (state.splitPercent / 100) * vw;
  screenX = Math.max(minScreenX, Math.min(maxScreenX, screenX));
  state.splitPercent = (screenX / vw) * 100;

  splitHandleEl.style.left = `${screenX}px`;

  // Map viewport screenX to stage coordinate so the image clip line matches the viewport split line under any zoom/pan
  const stageX = state.baseWidth / 2 + (screenX - vw / 2 - state.panX) / state.zoom;
  const stageClipPct = Math.max(0, Math.min(100, (stageX / state.baseWidth) * 100));
  compareLayerEl.style.clipPath = `inset(0 ${100 - stageClipPct}% 0 0)`;
}

function applyTransform() {
  clampPan();
  stageEl.style.transform = `translate(${state.panX}px, ${state.panY}px) scale(${state.zoom})`;
  zoomReadoutEl.textContent = `${Math.round(state.zoom * 100)}%`;
  syncSplitClip();
}

function renderTimelineNodes() {
  timelineNodesEl.innerHTML = '';
  IMAGERY_FRAMES.forEach((frame, idx) => {
    const node = document.createElement('div');
    node.className = 'timeline-node';
    node.style.left = `${getNodePercentage(idx)}%`;
    node.title = `${frame.displayDate} (${frame.season})`;

    const dot = document.createElement('div');
    dot.className = 'node-dot';

    const label = document.createElement('div');
    label.className = 'node-label';
    label.textContent = frame.shortLabel;

    node.appendChild(dot);
    node.appendChild(label);

    node.addEventListener('click', (e) => {
      e.stopPropagation();
      stopPlayback();
      goToFrame(idx);
    });

    timelineNodesEl.appendChild(node);
  });
}

function renderFilmstrip() {
  filmstripDrawerEl.innerHTML = '';
  IMAGERY_FRAMES.forEach((frame, idx) => {
    const card = document.createElement('div');
    card.className = 'thumb-card';
    card.dataset.index = idx;

    const img = document.createElement('img');
    img.src = frame.file;
    img.alt = frame.shortLabel;
    img.loading = 'lazy';

    const meta = document.createElement('div');
    meta.className = 'thumb-meta';

    const titleSpan = document.createElement('span');
    titleSpan.textContent = frame.shortLabel;

    const dotSpan = document.createElement('span');
    dotSpan.className = 'season-dot';
    dotSpan.style.backgroundColor = frame.seasonColor;
    dotSpan.title = frame.season;

    meta.appendChild(titleSpan);
    meta.appendChild(dotSpan);

    card.appendChild(img);
    card.appendChild(meta);

    card.addEventListener('click', () => {
      stopPlayback();
      goToFrame(idx);
    });

    filmstripDrawerEl.appendChild(card);
  });
}

function goToFrame(targetIndex) {
  const clamped = Math.max(0, Math.min(IMAGERY_FRAMES.length - 1, targetIndex));
  if (clamped === state.currentIndex) return;
  state.previousIndex = state.currentIndex;
  state.currentIndex = clamped;
  updateUI();
}

function stepForward(fromAutoPlay = false) {
  if (state.currentIndex < IMAGERY_FRAMES.length - 1) {
    goToFrame(state.currentIndex + 1);
  } else if (fromAutoPlay && state.loopPlayback) {
    goToFrame(0);
  } else if (fromAutoPlay) {
    stopPlayback();
  }
}

function stepBackward() {
  if (state.currentIndex > 0) {
    goToFrame(state.currentIndex - 1);
  }
}

function togglePlayback() {
  if (state.isPlaying) {
    stopPlayback();
  } else {
    startPlayback();
  }
}

function startPlayback() {
  if (state.currentIndex === IMAGERY_FRAMES.length - 1) {
    state.previousIndex = state.currentIndex;
    state.currentIndex = 0;
    updateUI();
  }
  state.isPlaying = true;
  btnPlay.classList.add('playing');
  btnPlay.innerHTML = `<span>⏸</span> Pause`;
  scheduleNextTick();
}

function stopPlayback() {
  state.isPlaying = false;
  if (playTimer) {
    clearTimeout(playTimer);
    playTimer = null;
  }
  btnPlay.classList.remove('playing');
  btnPlay.innerHTML = `<span>▶</span> Play`;
}

function scheduleNextTick() {
  if (!state.isPlaying) return;
  if (playTimer) clearTimeout(playTimer);
  playTimer = setTimeout(() => {
    if (!state.isPlaying) return;
    stepForward(true);
    scheduleNextTick();
  }, state.playSpeedMs);
}

function updateUI() {
  const frame = IMAGERY_FRAMES[state.currentIndex];

  // 1. Update Image Layer Visibility & Crossfade
  const layerImgs = baseLayersEl.querySelectorAll('.layer-img');
  layerImgs.forEach((img, idx) => {
    img.classList.toggle('no-transition', !state.smoothCrossfade);
    if (idx === state.currentIndex) {
      img.classList.add('active');
      img.classList.remove('previous-fade');
    } else if (idx === state.previousIndex && state.smoothCrossfade) {
      img.classList.remove('active');
      img.classList.add('previous-fade');
    } else {
      img.classList.remove('active', 'previous-fade');
    }
  });

  // 2. Update HUD Metadata
  dateBadgeEl.textContent = frame.displayDate;
  seasonTagEl.textContent = frame.season;
  seasonTagEl.style.borderColor = frame.seasonColor;
  seasonTagEl.style.color = frame.seasonColor;
  deltaInfoEl.textContent = formatTimeDelta(state.currentIndex);
  captionTextEl.textContent = frame.notes;

  // 3. Update Timeline Progress & Active Node (with overlap prevention in True Time Scale)
  const pct = getNodePercentage(state.currentIndex);
  timelineProgressEl.style.width = `${pct}%`;

  const nodes = timelineNodesEl.querySelectorAll('.timeline-node');
  let lastShownPct = -999;
  nodes.forEach((node, idx) => {
    const nodePct = getNodePercentage(idx);
    node.style.left = `${nodePct}%`;
    const isAct = idx === state.currentIndex;
    node.classList.toggle('active', isAct);
    node.classList.toggle('passed', idx < state.currentIndex);

    if (state.proportionalTimeline) {
      const tooClose = Math.abs(nodePct - lastShownPct) < 4.2;
      if (tooClose && !isAct) {
        node.classList.add('compact-hide');
      } else {
        node.classList.remove('compact-hide');
        lastShownPct = nodePct;
      }
    } else {
      node.classList.remove('compact-hide');
    }
  });

  // 4. Update Transport Buttons & Counter (Enabled only in 'single' Time-Lapse mode)
  const inSingle = state.viewMode === 'single';
  btnFirst.disabled = !inSingle || state.currentIndex === 0;
  btnPrev.disabled = !inSingle || state.currentIndex === 0;
  btnPlay.disabled = !inSingle;
  btnNext.disabled = !inSingle || state.currentIndex === IMAGERY_FRAMES.length - 1;
  btnLast.disabled = !inSingle || state.currentIndex === IMAGERY_FRAMES.length - 1;
  speedSelectEl.disabled = !inSingle;
  chkCrossfadeEl.disabled = !inSingle;
  chkProportionalEl.disabled = !inSingle;
  stepCounterEl.textContent = `${state.currentIndex + 1} / ${IMAGERY_FRAMES.length}`;

  // 5. Update Filmstrip Active Card
  const thumbs = filmstripDrawerEl.querySelectorAll('.thumb-card');
  thumbs.forEach((card, idx) => {
    const isAct = idx === state.currentIndex;
    card.classList.toggle('active', isAct);
    if (isAct && filmstripDrawerEl.classList.contains('open')) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  });

  // 6. Update Compare Layer (Split Curtain or Onion-Skin)
  updateCompareView();
}

function updateCompareView() {
  const refFrame = IMAGERY_FRAMES[state.compareIndex];
  const curFrame = IMAGERY_FRAMES[state.currentIndex];

  // Always keep Split & Blend date controls in sync with current state (single clean date)
  splitLeftYearEl.textContent = refFrame.displayDate;
  splitRightYearEl.textContent = curFrame.displayDate;

  splitLeftSelectEl.value = String(state.compareIndex);
  dockSplitLeftSelectEl.value = String(state.compareIndex);
  dockOnionSelectEl.value = String(state.compareIndex);
  splitRightSelectEl.value = String(state.currentIndex);
  dockSplitRightSelectEl.value = String(state.currentIndex);

  const leftAtMin = state.compareIndex === 0;
  const leftAtMax = state.compareIndex === IMAGERY_FRAMES.length - 1;
  const rightAtMin = state.currentIndex === 0;
  const rightAtMax = state.currentIndex === IMAGERY_FRAMES.length - 1;

  btnSplitLeftPrev.disabled = leftAtMin;
  btnSplitLeftNext.disabled = leftAtMax;
  btnDockSplitLeftPrev.disabled = leftAtMin || state.viewMode !== 'split';
  btnDockSplitLeftNext.disabled = leftAtMax || state.viewMode !== 'split';

  btnSplitRightPrev.disabled = rightAtMin;
  btnSplitRightNext.disabled = rightAtMax;
  btnDockSplitRightPrev.disabled = rightAtMin || state.viewMode !== 'split';
  btnDockSplitRightNext.disabled = rightAtMax || state.viewMode !== 'split';

  dockSplitLeftSelectEl.disabled = state.viewMode !== 'split';
  dockSplitRightSelectEl.disabled = state.viewMode !== 'split';
  dockOnionSelectEl.disabled = state.viewMode !== 'onion';
  onionSliderEl.disabled = state.viewMode !== 'onion';

  // Highlight only the active mode block and its mode button
  blockSingleEl.classList.toggle('active-block', state.viewMode === 'single');
  blockSplitEl.classList.toggle('active-block', state.viewMode === 'split');
  blockOnionEl.classList.toggle('active-block', state.viewMode === 'onion');

  if (state.viewMode === 'single') {
    compareLayerEl.classList.remove('visible');
    splitHandleEl.classList.remove('visible');
    return;
  }

  compareLayerEl.classList.add('visible');
  compareImgEl.src = refFrame.file;

  if (state.viewMode === 'split') {
    splitHandleEl.classList.add('visible');
    compareLayerEl.style.opacity = '1';
    syncSplitClip();
  } else if (state.viewMode === 'onion') {
    splitHandleEl.classList.remove('visible');
    compareLayerEl.style.clipPath = 'none';
    compareLayerEl.style.opacity = (state.onionOpacity / 100).toString();
  }
}

function setViewMode(mode) {
  if (mode !== 'single') {
    stopPlayback();
  }
  state.viewMode = mode;
  if (mode === 'split' && state.compareIndex === state.currentIndex) {
    if (state.currentIndex === 0) {
      goToFrame(IMAGERY_FRAMES.length - 1);
    } else {
      state.compareIndex = 0;
    }
  }
  document.querySelectorAll('[data-mode]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });
  updateUI();
}

function setCompareFrame(targetIndex) {
  const clamped = Math.max(0, Math.min(IMAGERY_FRAMES.length - 1, targetIndex));
  if (clamped === state.compareIndex) return;
  state.compareIndex = clamped;
  updateCompareView();
}

function bindEvents() {
  // Transport Buttons
  btnFirst.addEventListener('click', () => { stopPlayback(); goToFrame(0); });
  btnPrev.addEventListener('click', () => { stopPlayback(); stepBackward(); });
  btnPlay.addEventListener('click', togglePlayback);
  btnNext.addEventListener('click', () => { stopPlayback(); stepForward(false); });
  btnLast.addEventListener('click', () => { stopPlayback(); goToFrame(IMAGERY_FRAMES.length - 1); });

  // Playback Speed, Crossfade, Proportional Timeline
  speedSelectEl.addEventListener('change', (e) => {
    state.playSpeedMs = Number(e.target.value);
    if (state.isPlaying) scheduleNextTick();
  });

  chkCrossfadeEl.addEventListener('change', (e) => {
    state.smoothCrossfade = e.target.checked;
    updateUI();
  });

  chkProportionalEl.addEventListener('change', (e) => {
    state.proportionalTimeline = e.target.checked;
    updateUI();
  });

  // Filmstrip Toggle
  btnFilmstripEl.addEventListener('click', () => {
    const isOpen = filmstripDrawerEl.classList.toggle('open');
    btnFilmstripEl.classList.toggle('active', isOpen);
  });

  // Clicking on the Timeline Track Background jumps to nearest node
  timelineTrackBgEl.addEventListener('click', (e) => {
    const rect = timelineTrackBgEl.getBoundingClientRect();
    const clickPct = ((e.clientX - rect.left) / rect.width) * 100;
    let bestIdx = 0;
    let bestDist = Infinity;
    for (let i = 0; i < IMAGERY_FRAMES.length; i++) {
      const d = Math.abs(getNodePercentage(i) - clickPct);
      if (d < bestDist) {
        bestDist = d;
        bestIdx = i;
      }
    }
    stopPlayback();
    goToFrame(bestIdx);
  });

  // Upper-Left Word Description Show/Hide Toggle
  btnToggleDescEl.addEventListener('click', () => {
    const isCollapsed = descCollapsibleEl.classList.toggle('collapsed');
    btnToggleDescEl.setAttribute('aria-expanded', String(!isCollapsed));
    btnToggleDescEl.textContent = isCollapsed ? 'Show Info ▾' : 'Hide Info ▴';
  });

  // View Mode Switcher Buttons
  document.querySelectorAll('[data-mode]').forEach(btn => {
    btn.addEventListener('click', () => setViewMode(btn.dataset.mode));
  });

  // Split Left & Right Date Control Buttons and Selectors (Active only when in Split Mode)
  const stepLeftPrev = (e) => {
    e.stopPropagation();
    if (state.viewMode !== 'split') return;
    setCompareFrame(state.compareIndex - 1);
  };
  const stepLeftNext = (e) => {
    e.stopPropagation();
    if (state.viewMode !== 'split') return;
    setCompareFrame(state.compareIndex + 1);
  };
  const selectLeftDate = (e) => {
    e.stopPropagation();
    if (state.viewMode !== 'split') return;
    setCompareFrame(Number(e.target.value));
  };

  const stepRightPrev = (e) => {
    e.stopPropagation();
    if (state.viewMode !== 'split') return;
    stepBackward();
  };
  const stepRightNext = (e) => {
    e.stopPropagation();
    if (state.viewMode !== 'split') return;
    stepForward(false);
  };
  const selectRightDate = (e) => {
    e.stopPropagation();
    if (state.viewMode !== 'split') return;
    goToFrame(Number(e.target.value));
  };

  btnSplitLeftPrev.addEventListener('click', stepLeftPrev);
  btnSplitLeftNext.addEventListener('click', stepLeftNext);
  splitLeftSelectEl.addEventListener('change', selectLeftDate);

  btnDockSplitLeftPrev.addEventListener('click', stepLeftPrev);
  btnDockSplitLeftNext.addEventListener('click', stepLeftNext);
  dockSplitLeftSelectEl.addEventListener('change', selectLeftDate);

  btnSplitRightPrev.addEventListener('click', stepRightPrev);
  btnSplitRightNext.addEventListener('click', stepRightNext);
  splitRightSelectEl.addEventListener('change', selectRightDate);

  btnDockSplitRightPrev.addEventListener('click', stepRightPrev);
  btnDockSplitRightNext.addEventListener('click', stepRightNext);
  dockSplitRightSelectEl.addEventListener('change', selectRightDate);

  // Layers Blend Controls in Bottom Dock Block (Active only when in Onion Mode)
  dockOnionSelectEl.addEventListener('change', (e) => {
    if (state.viewMode !== 'onion') return;
    setCompareFrame(Number(e.target.value));
  });

  onionSliderEl.addEventListener('input', (e) => {
    if (state.viewMode !== 'onion') return;
    state.onionOpacity = Number(e.target.value);
    onionValEl.textContent = `${state.onionOpacity}%`;
    updateCompareView();
  });

  // Split Curtain Dragging (In Viewport Coordinates so Dates Stay Inside Viewing Window)
  splitHandleEl.addEventListener('pointerdown', (e) => {
    if (e.target.closest('.split-ctrl-card')) return;
    e.stopPropagation();
    state.isDraggingSplit = true;
    splitHandleEl.setPointerCapture(e.pointerId);
  });

  window.addEventListener('pointermove', (e) => {
    if (state.isDraggingSplit) {
      const rect = viewportEl.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      state.splitPercent = (relX / Math.max(1, rect.width)) * 100;
      syncSplitClip();
      return;
    }

    if (state.isDraggingStage) {
      state.panX = e.clientX - state.dragStartX;
      state.panY = e.clientY - state.dragStartY;
      applyTransform();
    }
  });

  window.addEventListener('pointerup', () => {
    state.isDraggingSplit = false;
    state.isDraggingStage = false;
    viewportEl.classList.remove('dragging');
  });

  // Viewport Pan & Wheel Zoom
  viewportEl.addEventListener('pointerdown', (e) => {
    if (e.target.closest('.split-handle')) return;
    state.isDraggingStage = true;
    state.dragStartX = e.clientX - state.panX;
    state.dragStartY = e.clientY - state.panY;
    viewportEl.classList.add('dragging');
  });

  viewportEl.addEventListener('wheel', (e) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.15 : 1 / 1.15;
    zoomBy(zoomFactor, e.clientX, e.clientY);
  }, { passive: false });

  // Zoom Buttons
  btnZoomIn.addEventListener('click', () => zoomBy(1.25));
  btnZoomOut.addEventListener('click', () => zoomBy(1 / 1.25));
  btnZoomReset.addEventListener('click', () => {
    state.zoom = 1;
    state.panX = 0;
    state.panY = 0;
    applyTransform();
  });

  // Keyboard Shortcuts (Left/Right Arrows, Space, Home/End)
  window.addEventListener('keydown', (e) => {
    if (['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      stopPlayback();
      stepForward(false);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      stopPlayback();
      stepBackward();
    } else if (e.key === ' ') {
      e.preventDefault();
      togglePlayback();
    } else if (e.key === 'Home') {
      e.preventDefault();
      stopPlayback();
      goToFrame(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      stopPlayback();
      goToFrame(IMAGERY_FRAMES.length - 1);
    }
  });
}

function zoomBy(factor, clientX, clientY) {
  const newZoom = Math.max(1, Math.min(6, state.zoom * factor));
  const actualFactor = newZoom / state.zoom;

  if (clientX !== undefined && clientY !== undefined) {
    const rect = viewportEl.getBoundingClientRect();
    const cx = clientX - (rect.left + rect.width / 2);
    const cy = clientY - (rect.top + rect.height / 2);
    state.panX = cx - (cx - state.panX) * actualFactor;
    state.panY = cy - (cy - state.panY) * actualFactor;
  } else {
    state.panX *= actualFactor;
    state.panY *= actualFactor;
  }

  state.zoom = newZoom;
  applyTransform();
}

// Start App when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
