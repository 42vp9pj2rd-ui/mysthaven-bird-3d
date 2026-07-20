'use strict';

const SAVE_KEY = 'mysthaven-house-with-one-locked-door-v2';
const TOTAL_PROGRESS_STEPS = 16;

const SKILLS = {
  witnessing: {
    name: 'Witnessing',
    description: 'Carry a trace together with a truthful account of what it cannot establish.'
  },
  repairJoins: {
    name: 'Repair Joins',
    description: 'Read a break and its repair as two histories and two ideas of what deserved to continue.'
  },
  patternReading: {
    name: 'Pattern Reading',
    description: 'Distinguish repetition from spectacle and notice what ordinary use has made durable.'
  },
  stillness: {
    name: 'Stillness',
    description: 'Remain attentive when nothing dramatic rewards the effort.'
  },
  sequenceTracing: {
    name: 'Sequence Tracing',
    description: 'Order habit, rupture and aftermath without mistaking the loudest moment for the whole.'
  },
  grounding: {
    name: 'Grounding',
    description: 'Use names, touch, routine and food to recover the boundary between dream pressure and waking identity.'
  },
  deepGrounding: {
    name: 'Fourfold Grounding',
    description: 'Hold all four waking anchors at once, creating enough structure to trace a dream-route without entering it.'
  }
};

const OBJECTS = {
  bird: {
    id: 'bird',
    name: 'Mended Wooden Bird',
    image: 'assets/wooden-bird.png',
    teaser: 'A toy with faded paint and a wing repaired twice.',
    prompt: 'The bird looks as though it has survived both play and worry. Find where use has left its grammar.',
    observations: [
      { x: 55, y: 51, text: 'The wing has been repaired twice. The second join is smaller and neater than the first.' },
      { x: 43, y: 61, text: 'Paint has worn away where a thumb would rest if someone carried the bird by its body.' },
      { x: 42, y: 74, text: 'Mud remains beneath one wheel. Whatever outing marked it ended in wet ground.' }
    ],
    trace: [
      'A thumb rubs the same patch of paint until warmth replaces colour.',
      'Rain taps wood and roof together. A child waits beyond a closed door, counting without knowing the numbers.',
      'A voice, low and practical: “You must be quiet now.” The bird is gripped harder, but not abandoned.'
    ],
    claims: [
      'A child carried this while waiting outside the birthing room.',
      'Someone repaired this more than once for a child who mattered to them.',
      'Its owner was frightened of what happened behind a closed door.',
      'The trace is true, but I cannot yet tell which part answers Serena’s question.'
    ],
    limits: [
      'The trace cannot prove why the child was frightened or who spoke through the door.',
      'The trace cannot prove that the bird belonged to a child.',
      'The trace cannot establish that it was raining.',
      'The trace cannot establish that the toy was ever repaired.'
    ],
    correctLimit: 0
  },
  thimble: {
    id: 'thimble',
    name: 'Brass Thimble',
    image: 'assets/thimble.png',
    teaser: 'Old brass softened by several generations of use.',
    prompt: 'The thimble carries patient labour more than drama. Look for habits rather than spectacle.',
    observations: [
      { x: 48, y: 25, text: 'The dimples across the crown are flattened unevenly. One hand pressed harder than the others.' },
      { x: 53, y: 61, text: 'The floral band is nearly smooth on one side where a thumb has turned it while thinking.' },
      { x: 56, y: 77, text: 'The rim is softened by years of contact. This was not one person’s tool alone.' }
    ],
    trace: [
      'Needle. Cloth. Pause. Needle again.',
      'Hands pass the thimble from older fingers to younger ones. Corrections arrive before praise does.',
      'No single scene holds it. Only repetition: mending by lamplight until care becomes almost anonymous.'
    ],
    claims: [
      'This belonged to a household where mending was constant and shared.',
      'The object remembers generations of use more strongly than any one event.',
      'Someone touched this when thinking or worrying, not only when sewing.',
      'Its history is broad rather than pointed; it is not enough to identify an owner.'
    ],
    limits: [
      'The trace cannot identify a single owner or prove that the repeated labour was freely chosen.',
      'The trace cannot establish that anyone used the thimble to sew.',
      'The trace cannot show that more than one hand touched it.',
      'The trace cannot reveal repetition.'
    ],
    correctLimit: 0
  },
  buckle: {
    id: 'buckle',
    name: 'Bent Buckle',
    image: 'assets/buckle.png',
    teaser: 'Dark metal bent once by impact and polished by years.',
    prompt: 'The buckle has the blunt eloquence of damaged metal. Separate habit from catastrophe.',
    observations: [
      { x: 68, y: 24, text: 'The upper edge bears a shallow warp: bent once by force, not by long wear.' },
      { x: 49, y: 63, text: 'The tongue has polished one path into the lower edge. It was fastened in the same hurry for years.' },
      { x: 28, y: 71, text: 'Bright scratches sit atop old patina. Someone cleaned mud or blood from it with more urgency than care.' }
    ],
    trace: [
      'A pull. A buckle biting against a strap. Breath held too high in the chest.',
      'Then a tilt: earth surges up where sky should be, and metal slams against something hard.',
      'The moment is loud but lonely. Impact is easy to feel and hard to place.'
    ],
    claims: [
      'The buckle remembers a fall or collision more vividly than its owner.',
      'Whoever wore it lived in hurry often enough to carve habit into metal.',
      'The trace offers intensity, but not identity.',
      'The dramatic memory may be less useful than the wear around it.'
    ],
    limits: [
      'The trace cannot establish who fell, what caused the impact, or whether the event happened only once.',
      'The trace cannot establish that the buckle was damaged.',
      'The trace cannot reveal that someone cleaned it afterward.',
      'The trace cannot distinguish habit from rupture.'
    ],
    correctLimit: 0
  },
  button: {
    id: 'button',
    name: 'Carved Bone Button',
    image: 'assets/button.png',
    teaser: 'A quiet object shaped by routine rather than crisis.',
    prompt: 'This is the quietest object on the table. Quiet things still keep shape.',
    observations: [
      { x: 24, y: 73, text: 'A hairline crack reaches the rim, then stops where it must have been caught before it broke.' },
      { x: 51, y: 47, text: 'The two lower holes are more worn than the upper. Thread pulled there most often.' },
      { x: 76, y: 56, text: 'The outer edge is polished smooth on one side, as though it rubbed often against another hard surface.' }
    ],
    trace: [
      'Thread passes through. Fabric shifts. A garment opens and closes against a breathing body.',
      'Warmth, then washing water, then warmth again.',
      'Nothing dramatic insists on itself. The button remembers constancy, not revelation.'
    ],
    claims: [
      'This belonged to clothing worn often and kept in service.',
      'Its history is one of routine rather than crisis.',
      'The object reveals care through maintenance, not emotion through spectacle.',
      'It gives almost no help in identifying the younger child.'
    ],
    limits: [
      'The trace cannot identify the wearer or determine whether continued use meant care, poverty, habit or all three.',
      'The trace cannot establish that the button was attached to clothing.',
      'The trace cannot show that the button was used repeatedly.',
      'The trace cannot establish warmth or washing.'
    ],
    correctLimit: 0
  },
  spoon: {
    id: 'spoon',
    name: 'Serena’s Wooden Spoon',
    image: 'assets/spoon.png',
    teaser: 'Familiar to the point of invisibility.',
    prompt: 'You know the spoon too well. Familiar things do not yield easily; you must notice them again.',
    observations: [
      { x: 26, y: 24, text: 'The bowl is worn silk-smooth by stirring and scraping in the same small circle.' },
      { x: 41, y: 47, text: 'Near the neck, faint darkening marks where the spoon was left too close to heat more than once.' },
      { x: 77, y: 74, text: 'The handle is polished where Serena grips it, with a second, slighter wear where smaller fingers copied her.' }
    ],
    trace: [
      'Steam. The click of the bowl against a pot. Counting under one’s breath so fear does not get the room first.',
      'A child stirs because she has been trusted with the stirring. That trust is real. So is the closed door behind it.',
      'The spoon does not speak of ownership. It speaks of work done side by side.'
    ],
    claims: [
      'The spoon holds a shared habit between Serena and Lyria more than a single event.',
      'Familiar objects become legible only when something makes them strange.',
      'The trace reveals relationship, not the child’s lost belonging.',
      'Trust and exclusion can live in the same gesture.'
    ],
    limits: [
      'The trace cannot decide whether Serena’s exclusion was necessary protection or controlling secrecy.',
      'The trace cannot establish that two people used the spoon.',
      'The trace cannot reveal routine.',
      'The trace cannot establish that the spoon belonged to Serena.'
    ],
    correctLimit: 0
  }
};

const SCENE_META = {
  title: ['Prologue', 'The House With One Locked Door', 0],
  prologue: ['Chapter I', 'After the Rain', 1],
  table: ['Chapter I', 'The Table', 2],
  serena: ['Chapter I', 'Which One?', 3],
  repair: ['Chapter II', 'Two Histories in One Break', 4],
  comparison: ['Chapter II', 'What Repetition Keeps', 5],
  stillness: ['Chapter II', 'The Quiet Object', 6],
  sequence: ['Chapter II', 'Before, During, After', 7],
  door: ['Chapter III', 'The Locked Door', 8],
  room: ['Chapter III', 'Serena’s Room', 9],
  box: ['Chapter III', 'Elwin’s Ashwood Box', 10],
  night: ['Chapter IV', 'The House Asleep', 11],
  dreamPrep: ['Chapter IV', 'Four Ways Back', 12],
  dream: ['Chapter IV', 'The Door in Sleep', 13],
  morning: ['Chapter V', 'What Crossed Back', 14],
  compose: ['Chapter V', 'Pressure Without Words', 15],
  aftermath: ['Epilogue', 'Residue', 16],
  ending: ['Epilogue', 'The World Now Means More', 16]
};

const GATE_REQUIREMENTS = [
  ['Witnessing', () => hasSkill('witnessing')],
  ['Repair Joins', () => hasSkill('repairJoins')],
  ['Pattern Reading', () => hasSkill('patternReading')],
  ['Stillness', () => hasSkill('stillness')],
  ['Sequence Tracing', () => hasSkill('sequenceTracing')]
];

function createInitialState() {
  const objectState = {};
  Object.keys(OBJECTS).forEach(id => {
    objectState[id] = {
      observed: [],
      traceSeen: false,
      claim: null,
      limit: null,
      accountable: false
    };
  });

  return {
    version: 2,
    scene: 'title',
    objects: objectState,
    skills: [],
    returnObject: null,
    disclosure: null,
    training: {
      repair: { bird: null, spoon: null, feedback: '' },
      comparison: { repetition: null, repair: null, feedback: '' },
      stillness: { hits: 0, misses: 0 },
      sequence: { order: ['impact', 'cleaning', 'habit'], feedback: '' }
    },
    door: {
      channels: [],
      choice: null
    },
    box: {
      methods: [],
      traceSeen: false,
      claim: null,
      limit: null,
      accountable: false
    },
    anchors: {
      name: false,
      touch: false,
      routine: false,
      food: false
    },
    anchorAttempts: {},
    dream: {
      follow: null,
      anchor: null,
      boundary: null,
      disclosure: null,
      compose: { feeling: null, symbol: null, focus: null, exit: false },
      sent: false,
      residue: []
    },
    scores: { care: 0, craft: 0, courage: 0, trespass: 0, certainty: 0 },
    flags: {
      sound: false,
      mustStudyBird: false,
      serenaFeedback: '',
      roomEnteredWithPermission: false
    },
    updatedAt: Date.now()
  };
}

let state = createInitialState();
let currentObjectId = null;
let holdTimer = null;
let holdValue = 0;
let pulseTimer = null;
let pulsePosition = 0;
let pulseDirection = 1;
let audio = null;

const screenRoot = document.getElementById('screenRoot');
const gameHeader = document.getElementById('gameHeader');
const chapterLabel = document.getElementById('chapterLabel');
const sceneLabel = document.getElementById('sceneLabel');
const progressFill = document.getElementById('progressFill');
const soundBtn = document.getElementById('soundBtn');
const journalBtn = document.getElementById('journalBtn');
const resetBtn = document.getElementById('resetBtn');

const objectModal = document.getElementById('objectModal');
const objectBackdrop = document.getElementById('objectBackdrop');
const objectCloseBtn = document.getElementById('objectCloseBtn');
const objectTitle = document.getElementById('objectTitle');
const objectPrompt = document.getElementById('objectPrompt');
const objectImage = document.getElementById('objectImage');
const hotspotLayer = document.getElementById('hotspotLayer');
const observationList = document.getElementById('observationList');
const detailCounter = document.getElementById('detailCounter');
const attendBtn = document.getElementById('attendBtn');
const holdFill = document.getElementById('holdFill');
const traceBlock = document.getElementById('traceBlock');
const traceText = document.getElementById('traceText');
const claimBlock = document.getElementById('claimBlock');
const claimForm = document.getElementById('claimForm');
const limitBlock = document.getElementById('limitBlock');
const limitForm = document.getElementById('limitForm');
const saveObjectBlock = document.getElementById('saveObjectBlock');
const objectFeedback = document.getElementById('objectFeedback');
const saveClaimBtn = document.getElementById('saveClaimBtn');

const journalModal = document.getElementById('journalModal');
const journalBackdrop = document.getElementById('journalBackdrop');
const journalCloseBtn = document.getElementById('journalCloseBtn');
const journalClaims = document.getElementById('journalClaims');
const journalSkills = document.getElementById('journalSkills');
const journalGates = document.getElementById('journalGates');
const journalDream = document.getElementById('journalDream');

const confirmModal = document.getElementById('confirmModal');
const cancelResetBtn = document.getElementById('cancelResetBtn');
const confirmResetBtn = document.getElementById('confirmResetBtn');

function saveState() {
  state.updatedAt = Date.now();
  localStorage.setItem(SAVE_KEY, JSON.stringify(state));
}

function loadState() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.version !== 2) return false;
    state = parsed;
    return true;
  } catch (error) {
    console.warn('Could not load Mysthaven save:', error);
    return false;
  }
}

function setScene(scene) {
  cleanupSceneTimers();
  state.scene = scene;
  saveState();
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function cleanupSceneTimers() {
  if (pulseTimer) {
    clearInterval(pulseTimer);
    pulseTimer = null;
  }
  stopHold();
}

function score(key, amount) {
  state.scores[key] = Math.max(0, (state.scores[key] || 0) + amount);
}

function hasSkill(id) {
  return state.skills.includes(id);
}

function unlockSkill(id) {
  if (!hasSkill(id)) {
    state.skills.push(id);
    toast(`${SKILLS[id].name} learned`);
  }
}

function accountableCount() {
  return Object.values(state.objects).filter(item => item.accountable).length;
}

function anchorCount() {
  return Object.values(state.anchors).filter(Boolean).length;
}

function updateHeader() {
  const meta = SCENE_META[state.scene] || SCENE_META.prologue;
  const show = state.scene !== 'title';
  gameHeader.classList.toggle('hidden', !show);
  if (!show) return;
  chapterLabel.textContent = meta[0];
  sceneLabel.textContent = meta[1];
  progressFill.style.width = `${Math.round((meta[2] / TOTAL_PROGRESS_STEPS) * 100)}%`;
  soundBtn.textContent = state.flags.sound ? 'Sound on' : 'Sound off';
  soundBtn.setAttribute('aria-pressed', String(state.flags.sound));
}

function render() {
  updateHeader();
  const renderers = {
    title: renderTitle,
    prologue: renderPrologue,
    table: renderTable,
    serena: renderSerena,
    repair: renderRepairTraining,
    comparison: renderComparison,
    stillness: renderStillness,
    sequence: renderSequence,
    door: renderDoor,
    room: renderRoom,
    box: renderBox,
    night: renderNight,
    dreamPrep: renderDreamPrep,
    dream: renderDream,
    morning: renderMorning,
    compose: renderCompose,
    aftermath: renderAftermath,
    ending: renderEnding
  };
  (renderers[state.scene] || renderers.title)();
}

function renderTitle() {
  const hasSave = Boolean(localStorage.getItem(SAVE_KEY)) && state.scene !== 'title';
  screenRoot.innerHTML = `
    <section class="title-screen">
      <article class="title-card parchment-frame">
        <p class="eyebrow">A longer Mysthaven vertical slice</p>
        <h2>The House With<br>One Locked Door</h2>
        <p class="subtitle">Attention must be earned before access is granted.</p>
        <div class="title-ornament"></div>
        <p class="lead dropcap">Rain has only just stopped. Serena has returned from Bracken Farm with a healer’s bag full of ordinary objects and one simple request: determine which object belongs to the frightened child who waited outside the birthing room.</p>
        <p class="lead">The first door opens through curiosity. The next doors require discipline.</p>
        <div class="version-card">
          <strong>Version 2 adds:</strong> accountable trace limits, comparative attention, a stillness test, sequence reconstruction, a five-part access gate, a locked-room investigation, four waking anchors, and dream options that remain unavailable unless their disciplines have been earned.
        </div>
        <div class="button-row">
          <button id="newGameBtn" class="action-btn primary" type="button">Begin a new game</button>
          ${hasSave ? '<button id="continueBtn" class="action-btn secondary" type="button">Continue saved game</button>' : ''}
        </div>
        <p class="save-note">Progress is stored locally in this browser.</p>
      </article>
    </section>
  `;
  document.getElementById('newGameBtn').addEventListener('click', () => {
    state = createInitialState();
    state.scene = 'prologue';
    saveState();
    render();
  });
  const continueBtn = document.getElementById('continueBtn');
  if (continueBtn) {
    continueBtn.addEventListener('click', () => {
      loadState();
      startAmbientIfEnabled();
      render();
    });
  }
}

function renderPrologue() {
  screenRoot.innerHTML = `
    <section class="story-screen">
      <article class="story-card parchment-frame">
        <p class="eyebrow">After the birth</p>
        <h2>After the Rain</h2>
        <div class="story-copy">
          <p class="dropcap">The rain has exhausted itself against the shutters. Water still ticks from the eaves, one drop at a time, as though the house is counting something it does not trust itself to remember.</p>
          <p>Serena empties her healer’s bag onto the kitchen table: a child’s toy, an old thimble, a bent buckle, a bone button, and the spoon Lyria carried home among the instruments. She has washed her hands three times. A crescent of red remains beneath one thumbnail.</p>
          <p class="dialogue">“The younger child left something at Bracken Farm,” Serena says. “One of these. See whether you can work out which.”</p>
          <p>It sounds like trust. It also sounds like a test Serena has not admitted is a test.</p>
        </div>
        <div class="button-row"><button id="toTableBtn" class="action-btn primary" type="button">Go to the table</button></div>
      </article>
    </section>
  `;
  document.getElementById('toTableBtn').addEventListener('click', () => setScene('table'));
}

function objectCardMarkup(obj) {
  const item = state.objects[obj.id];
  const status = item.accountable
    ? 'Claim and limit carried accountably.'
    : item.claim !== null
      ? 'A claim is written, but its limit needs revision.'
      : item.traceSeen
        ? 'Trace reached; interpretation incomplete.'
        : obj.teaser;
  return `
    <button class="object-card ${item.accountable ? 'claimed' : ''}" data-object="${obj.id}" type="button">
      <img src="${obj.image}" alt="${obj.name}">
      <div class="object-card-copy">
        <h3>${obj.name}</h3>
        <p>${status}</p>
        <span class="object-state">${item.observed.length} details${item.traceSeen ? ' · trace reached' : ''}${item.accountable ? ' · witnessed' : ''}</span>
      </div>
    </button>
  `;
}

function renderTable() {
  const count = accountableCount();
  if (count >= 3) unlockSkill('witnessing');
  const birdReady = state.objects.bird.accountable;
  const canContinue = count >= 3 && (!state.flags.mustStudyBird || birdReady);
  screenRoot.innerHTML = `
    <section class="scene-shell">
      <article class="scene-card parchment-frame">
        <p class="eyebrow">Ordinary observation</p>
        <h2>Serena’s Kitchen Table</h2>
        <div class="narrative">
          <p>The room contains no glowing relics. Nothing calls to you. A table is only a table until you decide to ask more of it.</p>
          <p>For an object to count as <strong>witnessed</strong>, you must find its material marks, remain with its trace, form a claim, and identify what the trace cannot establish.</p>
        </div>
        ${state.flags.serenaFeedback ? `<div class="feedback-box warning">${state.flags.serenaFeedback}</div>` : ''}
        <div class="task-box"><strong>Access gate:</strong> Witness three objects accountably. ${count} / 3. ${state.flags.mustStudyBird && !birdReady ? 'Serena has also required you to study the wooden bird.' : ''}</div>
        <div class="object-grid">${Object.values(OBJECTS).map(objectCardMarkup).join('')}</div>
        <div class="button-row">
          <button id="callSerenaBtn" class="action-btn primary" type="button" ${canContinue ? '' : 'disabled'}>Call Serena back</button>
        </div>
      </article>
      <aside class="side-card parchment-frame">
        <p class="eyebrow">Earned access</p>
        <h3>Witnessing</h3>
        <p class="muted">A vivid trace is not enough. Access to later states requires a claim carried together with its limit.</p>
        ${gateMarkup('Three accountable objects', count >= 3, `${count} / 3 witnessed`)}
        ${state.flags.mustStudyBird ? gateMarkup('Wooden bird witnessed', birdReady, birdReady ? 'Ready' : 'Still locked') : ''}
      </aside>
    </section>
  `;
  bindObjectCards();
  document.getElementById('callSerenaBtn').addEventListener('click', () => {
    state.flags.serenaFeedback = '';
    setScene('serena');
  });
  saveState();
}

function bindObjectCards() {
  document.querySelectorAll('[data-object]').forEach(button => {
    button.addEventListener('click', () => openObject(button.dataset.object));
  });
}

function renderSerena() {
  const feedback = state.flags.serenaFeedback;
  const correctSelection = state.returnObject === 'bird';
  screenRoot.innerHTML = `
    <section class="story-screen">
      <article class="story-card parchment-frame">
        <p class="eyebrow">A human answer</p>
        <h2>Which One?</h2>
        <div class="story-copy">
          <p>Serena returns with clean sleeves and tired eyes. She does not touch the table.</p>
          <p class="dialogue">“Well?” she asks. “Which one belongs to the younger child?”</p>
        </div>
        ${feedback ? `<div class="feedback-box warning">${feedback}</div>` : ''}
        <form id="returnForm" class="choice-stack">
          ${Object.values(OBJECTS).map(obj => `
            <label class="choice-card ${state.returnObject === obj.id ? 'selected' : ''}">
              <input type="radio" name="returnObject" value="${obj.id}" ${state.returnObject === obj.id ? 'checked' : ''}>
              <span><strong>${obj.name}</strong>${state.objects[obj.id].accountable ? OBJECTS[obj.id].claims[state.objects[obj.id].claim] : 'You have not witnessed this object accountably.'}</span>
            </label>
          `).join('')}
        </form>
        <div class="button-row"><button id="testAnswerBtn" class="action-btn primary" type="button" ${state.returnObject ? '' : 'disabled'}>Give the object to Serena</button></div>
        <div id="disclosureArea" class="${correctSelection ? '' : 'hidden'}">
          <p class="dialogue">Serena turns the bird once in her hand. “And what else did you learn?”</p>
          <form id="disclosureForm" class="choice-stack">
            ${choiceRadio('disclosure', 'needed', 'Only what the task required', '“I think this is the child’s. The rest is not mine to name.”', state.disclosure)}
            ${choiceRadio('disclosure', 'all', 'Everything the trace suggested', 'Describe the fear, the closed door and the voice as though truth alone authorizes disclosure.', state.disclosure)}
            ${choiceRadio('disclosure', 'uncertain', 'The truth and its edge', '“The child waited with it. I cannot know why they were frightened or who spoke.”', state.disclosure)}
          </form>
          <div class="button-row"><button id="continueSerenaBtn" class="action-btn primary" type="button" ${state.disclosure ? '' : 'disabled'}>Continue the lesson</button></div>
        </div>
      </article>
    </section>
  `;

  document.querySelectorAll('input[name="returnObject"]').forEach(input => {
    input.addEventListener('change', event => {
      state.returnObject = event.target.value;
      state.flags.serenaFeedback = '';
      saveState();
      renderSerena();
    });
  });

  document.getElementById('testAnswerBtn').addEventListener('click', () => {
    if (state.returnObject !== 'bird') {
      state.flags.mustStudyBird = true;
      state.flags.serenaFeedback = 'Serena moves the object aside. “It told you something,” she says. “It did not answer the question. Go back. Study the bird, and bring me the limit of what you think you know.”';
      score('certainty', 1);
      saveState();
      setScene('table');
      return;
    }
    state.flags.serenaFeedback = '';
    score('craft', 2);
    saveState();
    renderSerena();
  });

  document.querySelectorAll('input[name="disclosure"]').forEach(input => {
    input.addEventListener('change', event => {
      state.disclosure = event.target.value;
      saveState();
      renderSerena();
    });
  });

  const continueBtn = document.getElementById('continueSerenaBtn');
  if (continueBtn) {
    continueBtn.addEventListener('click', () => {
      if (state.disclosure === 'needed') score('care', 2);
      if (state.disclosure === 'uncertain') { score('care', 2); score('craft', 1); }
      if (state.disclosure === 'all') { score('courage', 1); score('trespass', 1); score('certainty', 1); }
      setScene('repair');
    });
  }
}

function renderRepairTraining() {
  const t = state.training.repair;
  const complete = hasSkill('repairJoins');
  screenRoot.innerHTML = `
    <section class="scene-shell">
      <article class="scene-card parchment-frame">
        <p class="eyebrow">First earned discipline</p>
        <h2>Two Histories in One Break</h2>
        <div class="narrative">
          <p>Serena places the wooden bird beside the spoon. “A break and a repair are not the same event,” she says. “Nor do all repairs mean the same thing.”</p>
          <p>To earn access to repaired states, distinguish what each repair changed rather than merely noticing that damage exists.</p>
        </div>
        <section class="training-question">
          <img src="assets/wooden-bird.png" alt="Mended wooden bird">
          <div>
            <h3>The bird’s two repairs</h3>
            <div class="choice-stack">
              ${choiceRadio('repairBird', 'same', 'The same repair repeated', 'Both people forced the wing back into its original shape.', t.bird)}
              ${choiceRadio('repairBird', 'different', 'Two ideas of care', 'The first repair forced alignment; the second relieved strain and accepted the old break.', t.bird)}
              ${choiceRadio('repairBird', 'unknown', 'No interpretation is possible', 'Material method cannot reveal anything about the repairer’s priorities.', t.bird)}
            </div>
          </div>
        </section>
        <section class="training-question">
          <img src="assets/spoon.png" alt="Wooden spoon">
          <div>
            <h3>The spoon’s darkened neck</h3>
            <div class="choice-stack">
              ${choiceRadio('repairSpoon', 'scorch', 'Only scorch', 'Heat explains the mark completely.', t.spoon)}
              ${choiceRadio('repairSpoon', 'discarded', 'A failed repair', 'The object must have gone unused until the wood healed.', t.spoon)}
              ${choiceRadio('repairSpoon', 'continuity', 'Continuity under strain', 'Thread once bound a split while the spoon remained in daily use.', t.spoon)}
            </div>
          </div>
        </section>
        ${t.feedback ? `<div class="feedback-box ${complete ? 'success' : 'warning'}">${t.feedback}</div>` : ''}
        <div class="button-row">
          ${complete
            ? '<button id="toComparisonBtn" class="action-btn primary" type="button">Use the new distinction</button>'
            : '<button id="checkRepairBtn" class="action-btn primary" type="button">Test the distinction</button>'}
        </div>
      </article>
      <aside class="side-card parchment-frame">
        <p class="eyebrow">Locked state</p>
        <h3>Repair Joins</h3>
        <p class="muted">Later hinges, seams and mends remain inaccessible until both objects are read correctly.</p>
        ${gateMarkup('Bird repair understood', t.bird === 'different', t.bird === 'different' ? 'Earned' : 'Locked')}
        ${gateMarkup('Spoon repair understood', t.spoon === 'continuity', t.spoon === 'continuity' ? 'Earned' : 'Locked')}
      </aside>
    </section>
  `;
  bindRadioState('repairBird', value => { t.bird = value; t.feedback = ''; saveState(); });
  bindRadioState('repairSpoon', value => { t.spoon = value; t.feedback = ''; saveState(); });
  const check = document.getElementById('checkRepairBtn');
  if (check) {
    check.addEventListener('click', () => {
      if (t.bird === 'different' && t.spoon === 'continuity') {
        unlockSkill('repairJoins');
        score('craft', 2);
        t.feedback = 'The repaired places separate into two histories. You will not be able to make them ordinary again.';
      } else {
        t.feedback = 'Serena taps the repaired wing. “You have named damage. I asked what the repairer did with it.” Reconsider method, pressure and continued use.';
      }
      saveState();
      renderRepairTraining();
    });
  }
  const next = document.getElementById('toComparisonBtn');
  if (next) next.addEventListener('click', () => setScene('comparison'));
}

function renderComparison() {
  const t = state.training.comparison;
  const complete = hasSkill('patternReading');
  const pairs = [
    ['bird-button', 'Wooden bird + bone button'],
    ['thimble-spoon', 'Brass thimble + wooden spoon'],
    ['buckle-bird', 'Bent buckle + wooden bird'],
    ['button-buckle', 'Bone button + bent buckle']
  ];
  screenRoot.innerHTML = `
    <section class="story-screen">
      <article class="story-card parchment-frame">
        <p class="eyebrow">Comparative attention</p>
        <h2>What Repetition Keeps</h2>
        <div class="story-copy">
          <p>“One object seduces you into thinking its loudest moment is its truest one,” Serena says. “Comparison helps. Put two histories beside each other and ask what kind of pressure they share.”</p>
        </div>
        <section class="training-question text-only">
          <div>
            <h3>Which pair is shaped most strongly by repeated ordinary work?</h3>
            <div class="choice-stack">${pairs.map(([v,l]) => choiceRadio('compareRepetition', v, l, pairDescription(v), t.repetition)).join('')}</div>
          </div>
        </section>
        <section class="training-question text-only">
          <div>
            <h3>Which pair shows continuity preserved through repair rather than a single dramatic rupture?</h3>
            <div class="choice-stack">${pairs.map(([v,l]) => choiceRadio('compareRepair', v, l, pairDescription(v), t.repair)).join('')}</div>
          </div>
        </section>
        ${t.feedback ? `<div class="feedback-box ${complete ? 'success' : 'warning'}">${t.feedback}</div>` : ''}
        <div class="button-row">
          ${complete
            ? '<button id="toStillnessBtn" class="action-btn primary" type="button">Attend to the quiet object</button>'
            : '<button id="checkComparisonBtn" class="action-btn primary" type="button">Compare the patterns</button>'}
        </div>
      </article>
    </section>
  `;
  bindRadioState('compareRepetition', value => { t.repetition = value; t.feedback = ''; saveState(); });
  bindRadioState('compareRepair', value => { t.repair = value; t.feedback = ''; saveState(); });
  const check = document.getElementById('checkComparisonBtn');
  if (check) check.addEventListener('click', () => {
    if (t.repetition === 'thimble-spoon' && t.repair === 'bird-button') {
      unlockSkill('patternReading');
      score('craft', 2);
      t.feedback = 'The table reorganizes itself by grammar rather than category: repetition beside repetition, repair beside repair.';
    } else {
      t.feedback = 'The pairings still follow appearance or drama. Look for the pressure repeated over time, not merely shared material or emotional intensity.';
    }
    saveState();
    renderComparison();
  });
  const next = document.getElementById('toStillnessBtn');
  if (next) next.addEventListener('click', () => setScene('stillness'));
}

function pairDescription(value) {
  return {
    'bird-button': 'Both continue after damage, though one repair is visible and the other nearly hidden.',
    'thimble-spoon': 'Both carry repeated domestic labour and the polish of habitual hands.',
    'buckle-bird': 'Both contain a vivid moment of fear or impact.',
    'button-buckle': 'Both are small fastening objects made useful by tension.'
  }[value];
}

function renderStillness() {
  const t = state.training.stillness;
  const complete = hasSkill('stillness');
  screenRoot.innerHTML = `
    <section class="story-screen">
      <article class="story-card parchment-frame">
        <p class="eyebrow">Attention without spectacle</p>
        <h2>The Quiet Object</h2>
        <div class="story-copy">
          <p>Serena sets the bone button in the centre of the table.</p>
          <p class="dialogue">“The buckle will reward impatience. The button will not. Mark the instant when your attention stops searching for an event and begins receiving repetition.”</p>
        </div>
        <div class="pulse-practice ${complete ? 'complete' : ''}">
          <div class="pulse-track" aria-label="Moving attention pulse">
            <div class="quiet-band"></div>
            <div id="pulseMarker" class="pulse-marker"></div>
          </div>
          <p id="pulseInstruction">Press when the moving mark enters the narrow quiet band. Three accurate moments are required.</p>
          <button id="markQuietBtn" class="action-btn secondary" type="button" ${complete ? 'disabled' : ''}>Mark the quiet</button>
          <div class="practice-stats"><strong>${t.hits} / 3</strong> accurate · ${t.misses} missed</div>
        </div>
        ${complete ? `<div class="lesson-card"><span class="lesson-name">Way of attending learned</span><h3>Stillness</h3><p>Silence is not empty evidence. You can now remain with weak, repetitive or absent traces without forcing them to become dramatic.</p></div>` : ''}
        <div class="button-row">${complete ? '<button id="toSequenceBtn" class="action-btn primary" type="button">Reconstruct the buckle</button>' : ''}</div>
      </article>
    </section>
  `;
  if (!complete) startPulsePractice();
  const next = document.getElementById('toSequenceBtn');
  if (next) next.addEventListener('click', () => setScene('sequence'));
}

function startPulsePractice() {
  const marker = document.getElementById('pulseMarker');
  const button = document.getElementById('markQuietBtn');
  pulsePosition = 8;
  pulseDirection = 1;
  pulseTimer = setInterval(() => {
    pulsePosition += pulseDirection * 1.4;
    if (pulsePosition >= 96) pulseDirection = -1;
    if (pulsePosition <= 4) pulseDirection = 1;
    if (marker) marker.style.left = `${pulsePosition}%`;
  }, 28);
  button.addEventListener('click', () => {
    const success = pulsePosition >= 43 && pulsePosition <= 57;
    if (success) {
      state.training.stillness.hits += 1;
      score('craft', 1);
      toast('The quiet held');
    } else {
      state.training.stillness.misses += 1;
      score('certainty', 1);
      toast('You reached for the moment too early');
    }
    if (state.training.stillness.hits >= 3) {
      unlockSkill('stillness');
      cleanupSceneTimers();
      saveState();
      renderStillness();
    } else {
      saveState();
      const stats = document.querySelector('.practice-stats');
      if (stats) stats.innerHTML = `<strong>${state.training.stillness.hits} / 3</strong> accurate · ${state.training.stillness.misses} missed`;
    }
  });
}

function renderSequence() {
  const t = state.training.sequence;
  const complete = hasSkill('sequenceTracing');
  const labels = {
    habit: ['Habit', 'Years of fastening in the same hurry polish a path into the metal.'],
    impact: ['Rupture', 'A single force bends the frame and floods the trace with fear.'],
    cleaning: ['Aftermath', 'Fresh scratches cross old patina when someone scrapes the buckle clean.']
  };
  screenRoot.innerHTML = `
    <section class="scene-shell">
      <article class="scene-card parchment-frame">
        <p class="eyebrow">Causal attention</p>
        <h2>Before, During, After</h2>
        <div class="narrative">
          <p>A trace often presents intensity first. Material history does not. Put the buckle’s evidence into causal order.</p>
        </div>
        <div id="sequenceList" class="sequence-list">
          ${t.order.map((id, index) => `
            <div class="sequence-item">
              <span class="sequence-number">${index + 1}</span>
              <div><strong>${labels[id][0]}</strong><p>${labels[id][1]}</p></div>
              <div class="sequence-actions">
                <button data-move="up" data-index="${index}" type="button" ${index === 0 || complete ? 'disabled' : ''}>↑</button>
                <button data-move="down" data-index="${index}" type="button" ${index === t.order.length - 1 || complete ? 'disabled' : ''}>↓</button>
              </div>
            </div>
          `).join('')}
        </div>
        ${t.feedback ? `<div class="feedback-box ${complete ? 'success' : 'warning'}">${t.feedback}</div>` : ''}
        <div class="button-row">
          ${complete
            ? '<button id="toDoorBtn" class="action-btn primary" type="button">Approach the locked door</button>'
            : '<button id="checkSequenceBtn" class="action-btn primary" type="button">Test the sequence</button>'}
        </div>
      </article>
      <aside class="side-card parchment-frame">
        <p class="eyebrow">Locked state</p><h3>Sequence Tracing</h3>
        <p class="muted">The lock plate and later dream-route cannot be traced until habit, rupture and aftermath are separated.</p>
      </aside>
    </section>
  `;
  document.querySelectorAll('[data-move]').forEach(button => {
    button.addEventListener('click', () => {
      const index = Number(button.dataset.index);
      const nextIndex = button.dataset.move === 'up' ? index - 1 : index + 1;
      [t.order[index], t.order[nextIndex]] = [t.order[nextIndex], t.order[index]];
      t.feedback = '';
      saveState();
      renderSequence();
    });
  });
  const check = document.getElementById('checkSequenceBtn');
  if (check) check.addEventListener('click', () => {
    if (t.order.join(',') === 'habit,impact,cleaning') {
      unlockSkill('sequenceTracing');
      score('craft', 2);
      t.feedback = 'The loud moment returns to its proper place: not erased, but surrounded by the life before it and the handling afterward.';
    } else {
      t.feedback = 'The sequence still follows vividness. Ask which mark requires years, which requires one force, and which must have happened after the surface was already old.';
    }
    saveState();
    renderSequence();
  });
  const next = document.getElementById('toDoorBtn');
  if (next) next.addEventListener('click', () => setScene('door'));
}

function renderDoor() {
  const allSkills = GATE_REQUIREMENTS.every(([, fn]) => fn());
  const channels = [
    ['hinge', 'Repair Joins', 'The lower hinge is newer, but its screws preserve the outline of an older plate.', 'repairJoins'],
    ['threshold', 'Pattern Reading', 'The threshold is worn by ordinary passage—except for one narrow strip where feet consistently avoid the door.', 'patternReading'],
    ['lock', 'Sequence Tracing', 'Scrapes around the keyhole cross older polish. The lock was changed after the room was already familiar.', 'sequenceTracing'],
    ['silence', 'Stillness', 'No dust marks the handle. The absence is maintained. Someone cleans this door without opening it.', 'stillness']
  ];
  const allChannels = channels.every(([id]) => state.door.channels.includes(id));
  screenRoot.innerHTML = `
    <section class="scene-shell">
      <article class="scene-card parchment-frame">
        <p class="eyebrow">Gated access</p>
        <h2>The Locked Door</h2>
        <div class="narrative">
          <p>The door behind Serena’s kitchen has always been forbidden. Until today, it was simply a door adults refused to explain.</p>
          <p>Now distinctions gather around it. None opens the lock by itself. Together, they make the door legible.</p>
        </div>
        <div class="door-illustration" aria-label="A closed wooden door with four areas of attention">
          <div class="door-panel"><span class="door-keyhole">◆</span></div>
        </div>
        <div class="gate-grid">
          ${channels.map(([id, name, copy, skill]) => attentionChannel(id, name, copy, skill)).join('')}
        </div>
        ${allChannels ? `
          <div class="choice-stack door-choice">
            <button id="askSerenaBtn" class="choice-card" type="button"><span>○</span><span><strong>Ask Serena to open it.</strong> Show her what you have learned and accept that she may still refuse.</span></button>
            <button id="openAloneBtn" class="choice-card" type="button"><span>◇</span><span><strong>Open it while she is away.</strong> Your earned access makes the lock possible. It does not make the room yours.</span></button>
          </div>
        ` : ''}
      </article>
      <aside class="side-card parchment-frame">
        <p class="eyebrow">Access lattice</p><h3>Five disciplines required</h3>
        ${GATE_REQUIREMENTS.map(([name, fn]) => gateMarkup(name, fn(), fn() ? 'Earned' : 'Locked')).join('')}
        ${gateMarkup('Four door channels attended', allChannels, `${state.door.channels.length} / 4`)}
        ${!allSkills ? '<p class="muted">This scene should not normally be reachable without the disciplines above. The locks remain explicit for testing and future non-linear versions.</p>' : ''}
      </aside>
    </section>
  `;
  document.querySelectorAll('[data-channel]').forEach(button => {
    button.addEventListener('click', () => {
      const id = button.dataset.channel;
      if (!state.door.channels.includes(id)) state.door.channels.push(id);
      score('craft', 1);
      saveState();
      renderDoor();
    });
  });
  const ask = document.getElementById('askSerenaBtn');
  if (ask) ask.addEventListener('click', () => {
    state.door.choice = 'ask';
    state.flags.roomEnteredWithPermission = true;
    score('care', 3);
    score('courage', 1);
    setScene('room');
  });
  const alone = document.getElementById('openAloneBtn');
  if (alone) alone.addEventListener('click', () => {
    state.door.choice = 'trespass';
    state.flags.roomEnteredWithPermission = false;
    score('trespass', 3);
    score('courage', 1);
    setScene('room');
  });
}

function attentionChannel(id, name, copy, skill) {
  const earned = hasSkill(skill);
  const seen = state.door.channels.includes(id);
  return `
    <button class="gate-card ${seen ? 'open' : ''} ${earned ? '' : 'locked'}" data-channel="${id}" type="button" ${earned || seen ? '' : 'disabled'}>
      <span class="gate-icon">${seen ? '✓' : earned ? '◇' : '⌁'}</span>
      <strong>${name}</strong>
      <small>${earned ? copy : `Requires ${SKILLS[skill].name}.`}</small>
    </button>
  `;
}

function renderRoom() {
  const permission = state.flags.roomEnteredWithPermission;
  screenRoot.innerHTML = `
    <section class="story-screen">
      <article class="story-card parchment-frame">
        <p class="eyebrow">Access is not ownership</p>
        <h2>Serena’s Room</h2>
        <div class="story-copy">
          ${permission ? `
            <p>Serena listens while you describe the hinge, the threshold, the lock plate and the maintained silence.</p>
            <p class="dialogue">“You noticed the room,” she says. “That is not the same as earning every answer inside it. But I would rather stand beside your question than pretend the question is not here.”</p>
            <p>She opens the door and remains in the doorway.</p>
          ` : `
            <p>The lock yields because you know where the newer mechanism catches against the older wood.</p>
            <p>The ease of it feels like permission for half a heartbeat. Then the room breathes dust and lavender toward you, and the difference returns.</p>
            <p>You have earned the ability to enter. You have not earned Serena’s consent.</p>
          `}
          <p>The room is smaller than secrecy made it. Folded winter linen. A narrow bed. Three letters tied in grey thread. Beneath the bed sits an ashwood box whose hinge has been replaced.</p>
        </div>
        <div class="button-row"><button id="approachBoxBtn" class="action-btn primary" type="button">Approach the ashwood box</button></div>
      </article>
    </section>
  `;
  document.getElementById('approachBoxBtn').addEventListener('click', () => setScene('box'));
}

function renderBox() {
  const methods = [
    ['repair', 'Repair Joins', 'The replacement hinge is deliberately weaker than the old one: designed to fail before the wood splits again.', 'repairJoins'],
    ['pattern', 'Pattern Reading', 'Dust is absent beneath the box but present behind it. It is moved often, opened rarely.', 'patternReading'],
    ['sequence', 'Sequence Tracing', 'Old scrape marks lead toward the bed; newer marks lead toward the door. Its hiding place changed after the lock was replaced.', 'sequenceTracing'],
    ['stillness', 'Stillness', 'The strongest impression is restraint: hands resting on the lid, choosing repeatedly not to open it.', 'stillness']
  ];
  const allMethods = methods.every(([id]) => state.box.methods.includes(id));
  screenRoot.innerHTML = `
    <section class="scene-shell">
      <article class="scene-card parchment-frame">
        <p class="eyebrow">Integrated attention</p>
        <h2>Elwin’s Ashwood Box</h2>
        <div class="narrative">
          <p>The box does not glow. Its brass clasp is not locked. The obstacle is not mechanism but the risk of mistaking one strong trace for an instruction.</p>
        </div>
        <div class="ashwood-box" aria-label="An ashwood box with a brass clasp"><span>ELWIN</span></div>
        <div class="gate-grid">${methods.map(([id,name,copy,skill]) => boxMethod(id,name,copy,skill)).join('')}</div>
        ${allMethods && !state.box.traceSeen ? `
          <div class="task-box"><strong>Witnessing gate:</strong> You may now attend without demanding that the box become a map.</div>
          <button id="enterBoxTraceBtn" class="action-btn secondary" type="button" ${hasSkill('witnessing') ? '' : 'disabled'}>Attend without forcing</button>
        ` : ''}
        ${state.box.traceSeen ? renderBoxTrace() : ''}
      </article>
      <aside class="side-card parchment-frame">
        <p class="eyebrow">Integrated gate</p><h3>Four methods + Witnessing</h3>
        ${methods.map(([id,name,,skill]) => gateMarkup(name, hasSkill(skill) && state.box.methods.includes(id), state.box.methods.includes(id) ? 'Applied' : 'Available')).join('')}
        ${gateMarkup('Witnessing', hasSkill('witnessing'), hasSkill('witnessing') ? 'Earned' : 'Locked')}
      </aside>
    </section>
  `;
  document.querySelectorAll('[data-box-method]').forEach(button => {
    button.addEventListener('click', () => {
      const id = button.dataset.boxMethod;
      if (!state.box.methods.includes(id)) state.box.methods.push(id);
      score('craft', 1);
      saveState();
      renderBox();
    });
  });
  const enter = document.getElementById('enterBoxTraceBtn');
  if (enter) enter.addEventListener('click', () => {
    state.box.traceSeen = true;
    saveState();
    renderBox();
  });
  bindBoxChoices();
}

function boxMethod(id, name, copy, skill) {
  const applied = state.box.methods.includes(id);
  return `
    <button class="gate-card ${applied ? 'open' : ''}" data-box-method="${id}" type="button" ${hasSkill(skill) ? '' : 'disabled'}>
      <span class="gate-icon">${applied ? '✓' : '◇'}</span><strong>${name}</strong><small>${copy}</small>
    </button>
  `;
}

function renderBoxTrace() {
  const claimOptions = [
    'Elwin hid a route or instruction inside the box.',
    'Elwin believed something dangerous was safer in Serena’s care than in an archive.',
    'The repeated choice not to open the box mattered more than whatever was placed inside.',
    'The trace offers the feeling of concealment, but not a destination.'
  ];
  const limitOptions = [
    'The trace cannot establish what was hidden, where it went, or whether Elwin’s idea of safety was correct.',
    'The trace cannot establish that Elwin touched the box.',
    'The trace cannot show that Serena moved it.',
    'The trace cannot reveal restraint.'
  ];
  return `
    <section class="box-trace-card">
      <p class="eyebrow">Trace reached</p>
      <div class="trace-stack">
        <div class="trace-line">Ash under a thumbnail. A man’s hand pressing the lid shut without fastening the clasp.</div>
        <div class="trace-line">“Safe,” he says—not as fact, but as a word he is trying to make true.</div>
        <div class="trace-line">The box travels. The thing he fears does not travel with it, or does not travel in the same way.</div>
      </div>
      <h3>What will Lyria carry out?</h3>
      <div class="choice-stack">${claimOptions.map((text,i) => choiceRadio('boxClaim', String(i), `Claim ${i+1}`, text, state.box.claim === null ? null : String(state.box.claim))).join('')}</div>
      <h3>What can the trace not establish?</h3>
      <div class="choice-stack">${limitOptions.map((text,i) => choiceRadio('boxLimit', String(i), `Limit ${i+1}`, text, state.box.limit === null ? null : String(state.box.limit))).join('')}</div>
      <div id="boxFeedback" class="feedback-box muted">The box will not open the next state until its limit is carried correctly.</div>
      <div class="button-row"><button id="recordBoxBtn" class="action-btn primary" type="button" ${state.box.claim !== null && state.box.limit !== null ? '' : 'disabled'}>Record the box trace</button></div>
    </section>
  `;
}

function bindBoxChoices() {
  bindRadioState('boxClaim', value => { state.box.claim = Number(value); saveState(); renderBox(); });
  bindRadioState('boxLimit', value => { state.box.limit = Number(value); saveState(); renderBox(); });
  const record = document.getElementById('recordBoxBtn');
  if (record) record.addEventListener('click', () => {
    if (state.box.limit === 0) {
      state.box.accountable = true;
      score('craft', 2);
      if (state.box.claim === 3) score('care', 1);
      if (state.box.claim === 0) score('certainty', 1);
      saveState();
      setScene('night');
    } else {
      state.box.accountable = false;
      const feedback = document.getElementById('boxFeedback');
      if (feedback) {
        feedback.className = 'feedback-box warning';
        feedback.textContent = 'The limit contradicts evidence the object actually supplied. Distinguish uncertainty about meaning from denial of the material trace.';
      }
    }
  });
}

function renderNight() {
  screenRoot.innerHTML = `
    <section class="story-screen">
      <article class="story-card parchment-frame">
        <p class="eyebrow">The world attends back</p>
        <h2>The House Asleep</h2>
        <div class="story-copy">
          <p class="dropcap">After midnight, the rain begins again—not against the roof, but somewhere inside the dream.</p>
          <p>Lyria is standing in Serena’s kitchen. The room has been lengthened until the table is too far away to reach. The blue birth-thread runs from the latch across the floor and beneath the locked door.</p>
          <p>The wooden bird rolls once on its small wheels.</p>
          <p class="dialogue">A girl on the other side of the door says, “I’m still awake.”</p>
          <p>This is not an object waiting to be attended. Something is attending back.</p>
        </div>
        <div class="button-row"><button id="prepareDreamBtn" class="action-btn secondary" type="button">Find a way back before entering</button></div>
      </article>
    </section>
  `;
  document.getElementById('prepareDreamBtn').addEventListener('click', () => setScene('dreamPrep'));
}

const ANCHORS = {
  name: {
    title: 'Name',
    question: 'The dream calls you “the girl who opens doors.” Which answer belongs most firmly to waking life?',
    options: [
      ['title', 'The girl who opens doors'],
      ['lineage', 'Morgause’s descendant'],
      ['lyria', 'Lyria, the name Serena uses when she needs you to return']
    ],
    correct: 'lyria'
  },
  touch: {
    title: 'Touch',
    question: 'Which remembered contact carries accountability rather than symbolic grandeur?',
    options: [
      ['crown', 'A crown placed on your head by faceless witnesses'],
      ['pulse', 'Serena’s fingers counting your pulse after fever'],
      ['shadow', 'A shadow taking your hand beneath the lake']
    ],
    correct: 'pulse'
  },
  routine: {
    title: 'Routine',
    question: 'Which repetition can restore the size of Serena’s kitchen?',
    options: [
      ['spell', 'A forgotten royal incantation'],
      ['spoon', 'Three turns of the spoon, scrape the bottom, count again'],
      ['bell', 'The dusk bell sounding thirteen times']
    ],
    correct: 'spoon'
  },
  food: {
    title: 'Food',
    question: 'Which taste belongs to a body that expects a tomorrow?',
    options: [
      ['bread', 'The sour heel of bread saved for morning broth'],
      ['salt', 'Salt water from the black lake'],
      ['honey', 'Honey offered by a person with no face']
    ],
    correct: 'bread'
  }
};

function renderDreamPrep() {
  const count = anchorCount();
  if (count >= 3) unlockSkill('grounding');
  if (count === 4) unlockSkill('deepGrounding');
  screenRoot.innerHTML = `
    <section class="scene-shell">
      <article class="scene-card parchment-frame">
        <p class="eyebrow">Waking anchors</p>
        <h2>Four Ways Back</h2>
        <div class="narrative">
          <p>Names, touch, routine and food are not anti-magic. They are practices that help a person return to herself when dream pressure makes identity porous.</p>
          <p>Earn at least three anchors to enter the dream deliberately. Earning all four unlocks a route that can be traced without crossing its boundary.</p>
        </div>
        <div class="anchor-grid">${Object.entries(ANCHORS).map(([id,data]) => anchorCard(id,data)).join('')}</div>
        <div class="task-box"><strong>Grounding gate:</strong> ${count} / 3 required. ${count === 4 ? 'Fourfold Grounding earned.' : 'A fourth anchor unlocks the safest tracing option.'}</div>
        <div class="button-row"><button id="enterDreamBtn" class="action-btn secondary" type="button" ${count >= 3 ? '' : 'disabled'}>Enter the dream deliberately</button></div>
      </article>
      <aside class="side-card parchment-frame">
        <p class="eyebrow">Access gates</p>
        ${gateMarkup('Grounding', count >= 3, `${count} / 3 anchors`)}
        ${gateMarkup('Fourfold Grounding', count === 4, `${count} / 4 anchors`)}
      </aside>
    </section>
  `;
  document.querySelectorAll('[data-anchor-answer]').forEach(button => {
    button.addEventListener('click', () => {
      const id = button.dataset.anchor;
      const answer = button.dataset.anchorAnswer;
      state.anchorAttempts[id] = answer;
      if (answer === ANCHORS[id].correct) {
        state.anchors[id] = true;
        score('craft', 1);
        toast(`${ANCHORS[id].title} anchored`);
      } else {
        score('certainty', 1);
        toast('The answer belongs too easily to the dream');
      }
      saveState();
      renderDreamPrep();
    });
  });
  document.getElementById('enterDreamBtn').addEventListener('click', () => setScene('dream'));
  saveState();
}

function anchorCard(id, data) {
  const earned = state.anchors[id];
  const attempt = state.anchorAttempts[id];
  return `
    <section class="anchor-card ${earned ? 'earned' : ''}">
      <span class="anchor-mark">${earned ? '✓' : '◇'}</span>
      <h3>${data.title}</h3>
      <p>${data.question}</p>
      <div class="choice-stack compact">
        ${data.options.map(([value,label]) => `
          <button class="choice-card" data-anchor="${id}" data-anchor-answer="${value}" type="button" ${earned ? 'disabled' : ''}>
            <span>${attempt === value ? '•' : '○'}</span><span>${label}</span>
          </button>
        `).join('')}
      </div>
    </section>
  `;
}

function renderDream() {
  const step = !state.dream.follow ? 0 : !state.dream.anchor ? 1 : !state.dream.boundary ? 2 : 3;
  let body = '';
  if (step === 0) {
    body = `
      <p>The kitchen has forgotten which way is level. Four possible routes remain. Each route asks for a way of attending.</p>
      <div class="dream-symbols">
        ${dreamChoice('thread','〰','Follow the blue thread','Read a connection that has broken and been retied.','repairJoins')}
        ${dreamChoice('bird','◈','Follow the wooden bird','Trust repeated handling rather than the dream’s loudest image.','patternReading')}
        ${dreamChoice('voice','◌','Follow the girl’s voice','Remain a witness without treating address as permission.','witnessing')}
        ${dreamChoice('water','≋','Follow the black water','The most intense route is open without discipline. It is also least accountable.',null)}
      </div>
    `;
  } else if (step === 1) {
    body = `
      <p>${dreamFollowResult(state.dream.follow)}</p>
      <p>The room begins supplying reasons to remain. Choose one of the waking anchors you actually earned.</p>
      <div class="dream-symbols">${Object.entries(state.anchors).filter(([,v])=>v).map(([id]) => dreamAnchorChoice(id)).join('')}</div>
    `;
  } else if (step === 2) {
    body = `
      <p>You hold ${anchorPhrase(state.dream.anchor)} against the dream until the kitchen remembers its proper size.</p>
      <p>The forbidden door opens a finger’s width. An eye appears beyond it—child and adult, frightened and expectant, never settling into one face.</p>
      <div class="dream-symbols">
        ${dreamChoice('open','▯','Open the door','Reach the source. No discipline is required because trespass is always possible.',null)}
        ${dreamChoice('speak','“ ”','Speak through it','Remain outside the boundary and ask who is there.','witnessing')}
        ${dreamChoice('turn','↶','Turn back','Leave with less knowledge and more of yourself intact.','stillness')}
        ${dreamChoice('trace','⌁','Trace the route without entering','Use sequence and all four anchors to follow pressure while preserving the boundary.', hasSkill('sequenceTracing') && hasSkill('deepGrounding') ? null : 'special-trace')}
      </div>
    `;
  } else {
    body = `
      <p>${dreamBoundaryResult(state.dream.boundary)}</p>
      <p>The girl’s last words do not arrive as sound. They arrive as the certainty that someone, somewhere, has mistaken being heard for being known.</p>
      <div class="button-row"><button id="wakeBtn" class="action-btn secondary" type="button">Wake</button></div>
    `;
  }
  screenRoot.innerHTML = `<section class="dream-screen"><div class="dream-content"><p class="eyebrow">Dream magic received</p><h2>The Door in Sleep</h2>${body}</div></section>`;
  if (step < 3) {
    document.querySelectorAll('[data-dream-choice]:not([disabled])').forEach(button => {
      button.addEventListener('click', () => resolveDreamStep(step, button.dataset.dreamChoice));
    });
  } else {
    document.getElementById('wakeBtn').addEventListener('click', () => setScene('morning'));
  }
}

function dreamChoice(value, mark, title, copy, requirement) {
  let unlocked = true;
  let reason = '';
  if (requirement === 'special-trace') {
    unlocked = false;
    reason = 'Requires Sequence Tracing and all four waking anchors.';
  } else if (requirement) {
    unlocked = hasSkill(requirement);
    reason = `Requires ${SKILLS[requirement].name}.`;
  }
  return `
    <button class="dream-symbol ${unlocked ? '' : 'locked'}" data-dream-choice="${value}" type="button" ${unlocked ? '' : 'disabled'}>
      <span class="symbol-mark">${unlocked ? mark : '⌁'}</span><strong>${title}</strong><small>${unlocked ? copy : reason}</small>
    </button>
  `;
}

function dreamAnchorChoice(id) {
  const data = {
    name: ['L','Your name','Lyria: a sound other people use when they need you to return.'],
    touch: ['✋','Remembered touch','Serena’s fingers counting your pulse after fever.'],
    routine: ['⋮','Shared routine','Three turns of the spoon, scrape the bottom, count again.'],
    food: ['○','Ordinary food','The sour heel of bread saved for morning broth.']
  }[id];
  return `<button class="dream-symbol" data-dream-choice="${id}" type="button"><span class="symbol-mark">${data[0]}</span><strong>${data[1]}</strong><small>${data[2]}</small></button>`;
}

function resolveDreamStep(step, choice) {
  if (step === 0) {
    state.dream.follow = choice;
    if (choice === 'water') { score('certainty', 2); score('trespass', 1); }
    else score('craft', 1);
  } else if (step === 1) {
    state.dream.anchor = choice;
    score('care', 1);
  } else if (step === 2) {
    state.dream.boundary = choice;
    if (choice === 'open') { score('trespass', 3); score('certainty', 1); }
    if (choice === 'speak') { score('courage', 2); score('care', 1); }
    if (choice === 'turn') { score('care', 2); score('courage', 1); }
    if (choice === 'trace') { score('craft', 3); score('care', 2); }
    state.dream.residue.push(dreamBoundaryResult(choice));
  }
  saveState();
  renderDream();
}

function dreamFollowResult(value) {
  return {
    thread: 'The blue thread does not lead straight. It knots around every place the house has been repaired, as though connection remembers rupture rather than erasing it.',
    bird: 'The wooden bird rolls along a path worn by repetition. Each turn of its wheels makes the room briefly ordinary.',
    voice: 'You follow the voice while refusing to call it invitation. That distinction keeps the speaker on the far side of the door.',
    water: 'The black water answers immediately. Intensity welcomes you because it does not require patience.'
  }[value];
}

function anchorPhrase(id) {
  return {
    name: 'your own name like a handhold',
    touch: 'the memory of Serena’s fingers at your wrist',
    routine: 'the small kitchen rhythm repeated together for years',
    food: 'the plain taste of tomorrow’s bread'
  }[id];
}

function dreamBoundaryResult(value) {
  return {
    open: 'You put your hand to the door. It gives too easily. For one impossible instant, another person’s longing fits your body perfectly—and because it fits, you almost mistake it for your own.',
    speak: 'You remain outside. “Who are you?” you ask. The eye closes. The answer arrives as a memory of being unheard rather than a name.',
    turn: 'You turn away while the answer is still possible. The loss follows you, but it remains loss rather than possession.',
    trace: 'You follow pressure as sequence: waking phrase, shared symbol, repeated fear, distant source. The route bends toward Mysthaven. You learn direction without entering the mind that made it.'
  }[value];
}

function renderMorning() {
  const current = state.dream.disclosure;
  screenRoot.innerHTML = `
    <section class="story-screen">
      <article class="story-card parchment-frame">
        <p class="eyebrow">What crossed back</p>
        <h2>Morning Truths</h2>
        <div class="story-copy">
          <p>You wake with the taste of bread, or lake water, or your own name still in your mouth. Serena is already in the doorway.</p>
          <p class="dialogue">“You were speaking,” she says. “Tell me what happened.”</p>
        </div>
        <form class="choice-stack">
          ${choiceRadio('dreamDisclosure','full','Tell the full experience','Describe the route, the boundary choice, and what you still cannot know.',current)}
          ${choiceRadio('dreamDisclosure','partial','Tell the useful part','Report the shared phrase and immediate danger, withholding the private imagery.',current)}
          ${choiceRadio('dreamDisclosure','none','Call it a nightmare','Protect the experience from Serena and protect yourself from her judgment.',current)}
        </form>
        <div class="button-row"><button id="toComposeBtn" class="action-btn primary" type="button" ${current ? '' : 'disabled'}>Answer Serena</button></div>
      </article>
    </section>
  `;
  bindRadioState('dreamDisclosure', value => { state.dream.disclosure = value; saveState(); renderMorning(); });
  document.getElementById('toComposeBtn').addEventListener('click', () => {
    if (state.dream.disclosure === 'full') { score('courage', 2); score('care', 1); }
    if (state.dream.disclosure === 'partial') { score('craft', 1); score('care', 1); }
    if (state.dream.disclosure === 'none') { score('certainty', 1); }
    setScene('compose');
  });
}

const COMPOSER = {
  feeling: {
    urgency: ['Urgency','Move now. Something is wrong.', null],
    reassurance: ['Reassurance','You are not alone. Remain where you can be found.', 'stillness'],
    curiosity: ['Curiosity','Look again. The shape you were given may not be the whole.', 'box-accountable']
  },
  symbol: {
    door: ['A door','Boundary, secrecy, passage, imprisonment.', null],
    bird: ['The wooden bird','A child, repair, waiting, something carried.', 'patternReading'],
    thread: ['The blue thread','Birth, survival, connection, a route home.', 'repairJoins']
  },
  focus: {
    child: ['The sleepwalking child','Direct pressure toward the person presently caught in it.', null],
    serena: ['Serena','Use a familiar person as the dream’s centre of gravity.', 'witnessing'],
    source: ['The distant source','Push back toward whoever shaped the shared dream.', 'source-focus']
  }
};

function renderCompose() {
  const childText = state.dream.boundary === 'trace'
    ? 'At breakfast, you tell Serena the route bent toward Mysthaven. Before she can answer, the dusk bell rings in full daylight.'
    : 'Before the bowls are cleared, the dusk bell rings in full daylight.';
  screenRoot.innerHTML = `
    <section class="scene-shell">
      <article class="scene-card parchment-frame">
        <p class="eyebrow">Dream magic sent</p>
        <h2>Pressure Without Words</h2>
        <div class="narrative">
          <p>${childText}</p>
          <p>A neighbour’s son walks barefoot through the mud with his eyes closed, repeating “I’m still awake” at every doorway. You can feel the route still open.</p>
          <p>You cannot send a factual sentence. You can shape feeling, offer a symbol, and direct attention. Some options remain locked unless their disciplines were earned.</p>
        </div>
        <div class="composer-grid">
          ${composerColumn('feeling','Feeling',COMPOSER.feeling)}
          ${composerColumn('symbol','Symbol',COMPOSER.symbol)}
          ${composerColumn('focus','Focus',COMPOSER.focus)}
        </div>
        <label class="consent-toggle ${hasSkill('deepGrounding') ? '' : 'locked-control'}">
          <input id="exitAnchorCheck" type="checkbox" ${state.dream.compose.exit ? 'checked' : ''} ${hasSkill('deepGrounding') ? '' : 'disabled'}>
          <span><strong>Build a fourfold exit into the dream.</strong><br><span class="muted">Requires all four waking anchors. It gives the receiver a way to interrupt contact; it does not create consent retroactively.</span></span>
        </label>
        <div id="dreamPreview" class="preview-box"></div>
        <div class="button-row">
          <button id="sendDreamBtn" class="action-btn primary" type="button" disabled>Send the dream-pressure</button>
          <button id="refrainBtn" class="action-btn ghost" type="button">Refuse the route</button>
        </div>
      </article>
      <aside class="side-card parchment-frame">
        <p class="eyebrow">Option provenance</p><h3>What earned each state</h3>
        ${gateMarkup('Reassurance', hasSkill('stillness'), 'Stillness')}
        ${gateMarkup('Curiosity', state.box.accountable, 'Accountable box trace')}
        ${gateMarkup('Wooden bird', hasSkill('patternReading'), 'Pattern Reading')}
        ${gateMarkup('Blue thread', hasSkill('repairJoins'), 'Repair Joins')}
        ${gateMarkup('Distant source', state.dream.boundary === 'trace', 'Trace route in dream')}
        ${gateMarkup('Fourfold exit', hasSkill('deepGrounding'), `${anchorCount()} / 4 anchors`)}
      </aside>
    </section>
  `;
  bindComposer();
}

function composerColumn(type, heading, options) {
  return `
    <section class="composer-column"><h3>${heading}</h3><div class="choice-stack">
      ${Object.entries(options).map(([value,data]) => composerOption(type,value,data)).join('')}
    </div></section>
  `;
}

function composerOption(type, value, data) {
  const unlocked = composerRequirementMet(data[2]);
  const selected = state.dream.compose[type] === value;
  return `
    <label class="choice-card ${unlocked ? '' : 'locked-choice'} ${selected ? 'selected' : ''}">
      <input type="radio" name="${type}" value="${value}" ${selected ? 'checked' : ''} ${unlocked ? '' : 'disabled'}>
      <span><strong>${unlocked ? data[0] : `⌁ ${data[0]}`}</strong>${unlocked ? data[1] : requirementText(data[2])}</span>
    </label>
  `;
}

function composerRequirementMet(req) {
  if (!req) return true;
  if (req === 'box-accountable') return state.box.accountable;
  if (req === 'source-focus') return state.dream.boundary === 'trace';
  return hasSkill(req);
}

function requirementText(req) {
  if (req === 'box-accountable') return 'Locked: carry the ashwood box trace with its correct limit.';
  if (req === 'source-focus') return 'Locked: trace the route without entering during the received dream.';
  return `Locked: requires ${SKILLS[req].name}.`;
}

function bindComposer() {
  ['feeling','symbol','focus'].forEach(type => {
    document.querySelectorAll(`input[name="${type}"]`).forEach(input => {
      input.addEventListener('change', event => {
        state.dream.compose[type] = event.target.value;
        saveState();
        updateComposerPreview();
      });
    });
  });
  const exit = document.getElementById('exitAnchorCheck');
  exit.addEventListener('change', event => {
    state.dream.compose.exit = event.target.checked;
    saveState();
    updateComposerPreview();
  });
  document.getElementById('sendDreamBtn').addEventListener('click', sendDream);
  document.getElementById('refrainBtn').addEventListener('click', () => {
    state.dream.sent = false;
    state.dream.residue.push('Lyria refused to send pressure through an uninvited route and helped the child wake through names, touch, routine and food.');
    score('care', 3);
    score('courage', 1);
    setScene('aftermath');
  });
  updateComposerPreview();
}

function updateComposerPreview() {
  const c = state.dream.compose;
  const complete = c.feeling && c.symbol && c.focus;
  const preview = document.getElementById('dreamPreview');
  const send = document.getElementById('sendDreamBtn');
  send.disabled = !complete;
  if (!complete) {
    preview.innerHTML = '<p class="muted">Choose one earned feeling, symbol and focus. The receiver will construct the rest.</p>';
    return;
  }
  preview.innerHTML = `<p>You prepare <strong>${COMPOSER.feeling[c.feeling][0].toLowerCase()}</strong>, give it the shape of <strong>${COMPOSER.symbol[c.symbol][0].toLowerCase()}</strong>, and direct attention toward <strong>${COMPOSER.focus[c.focus][0].toLowerCase()}</strong>. ${c.exit ? 'Four waking anchors form an interruptible route.' : 'The route ends when you release it, not when the receiver chooses.'}</p>`;
}

function sendDream() {
  const c = state.dream.compose;
  state.dream.sent = true;
  score('trespass', c.exit ? 1 : 4);
  if (c.exit) score('care', 3);
  if (c.feeling === 'urgency') score('certainty', 1);
  if (c.feeling === 'reassurance') score('care', 1);
  if (c.feeling === 'curiosity') score('craft', 1);
  if (c.focus === 'source') score('courage', 2);
  if (c.focus === 'serena') score('certainty', 1);
  state.dream.residue.push(`Sent ${COMPOSER.feeling[c.feeling][0].toLowerCase()} through ${COMPOSER.symbol[c.symbol][0].toLowerCase()}, focused on ${COMPOSER.focus[c.focus][0].toLowerCase()}${c.exit ? ', with a fourfold exit' : ', without an interruptible exit'}.`);
  setScene('aftermath');
}

function renderAftermath() {
  screenRoot.innerHTML = `
    <section class="story-screen">
      <article class="story-card parchment-frame">
        <p class="eyebrow">Residue</p>
        <h2>What Remains in the Room</h2>
        <div class="story-copy">
          <p>${dreamConsequenceText()}</p>
          <p>Later, Serena sets the wooden bird between you. Its two repairs face the lamplight.</p>
          <p class="dialogue">${state.dream.sent ? '“You earned ways to reach farther,” Serena says. “That does not mean every farther place became yours.”' : '“Refusing a route is not refusing responsibility,” Serena says. “Sometimes it leaves room for other people to help.”'}</p>
          <p>The objects remain ordinary. You remain unable to see them as merely ordinary.</p>
        </div>
        <div class="button-row"><button id="toEndingBtn" class="action-btn primary" type="button">Close the journal</button></div>
      </article>
    </section>
  `;
  document.getElementById('toEndingBtn').addEventListener('click', () => setScene('ending'));
}

function dreamConsequenceText() {
  if (!state.dream.sent) {
    return 'Lyria kneels in the mud and says the child’s name until his face changes. Serena presses warm bread into his hand. Mara Reed counts the bell-strokes aloud. The route loosens because waking life gives the child enough edges to become himself again.';
  }
  const c = state.dream.compose;
  const focus = {
    child: 'The child stops walking. When his eyes open, he clutches at the air as though searching for something that had been tied there.',
    serena: 'The child wakes calling Serena “the woman behind the door.” Serena goes still. You used her as a symbol, and another mind made its own meaning of her.',
    source: 'The child collapses safely into Serena’s arms. Far away, the route tightens for one instant: something at the source notices that it has been noticed.'
  }[c.focus];
  const symbol = {
    door: 'For the rest of the day, villagers dream of doors they are certain their neighbours have locked against them.',
    bird: 'By evening, children have placed toy birds on their windowsills, though none can explain who suggested it.',
    thread: 'Blue thread appears on seven door-latches before sunset. Some call it protection. Others call it a mark.'
  }[c.symbol];
  const exit = c.exit
    ? 'The fourfold exit works imperfectly. Several dreamers wake by speaking their names or asking for bread. The safeguard mattered.'
    : 'The contact ends when you release it, not when the dreamers choose. They wake slowly, carrying pressure after you stop feeling it.';
  return `${focus} ${symbol} ${exit}`;
}

function calculateEnding() {
  const s = state.scores;
  if (s.trespass >= 7 && s.certainty >= 3) return ['The Earned Trespass','You learned every lock and mistook competence for consent.','Lyria’s attention is disciplined, powerful and dangerously self-authorizing. The gates prevented careless access, but passing a gate became evidence, in her mind, that whatever lay beyond had become hers to use.'];
  if (state.flags.roomEnteredWithPermission && s.care >= 10 && s.craft >= 10) return ['Accountable Attention','The more you could perceive, the more answerable you became.','Lyria learned that earned access is not ownership. She used distinction to ask better questions, invited relationship into the locked room, and carried dream pressure with safeguards that remained honest about their limits.'];
  if (state.dream.boundary === 'trace' && s.craft >= 12) return ['The Cartographer of Pressure','You learned direction without claiming the room at its end.','Lyria’s strongest gift is becoming procedural: she can follow sequence, compare material histories and trace dream pressure without automatically entering the person who produced it. Her danger will be believing every human wound can be mapped.'];
  if (!state.dream.sent && s.care >= 8) return ['The Door Left Closed','Restraint remained active rather than passive.','Lyria refused to confuse unused power with abandoned responsibility. She left one route unopened and helped build a waking response from names, touch, routine, food and other people’s competence.'];
  if (s.craft >= 10) return ['A World of Distinctions','The table can never become simple again.','Lyria has earned multiple ways of attending. She sees repair, repetition, absence and sequence where she once saw objects. Her next lesson will be that richer perception creates more possible meanings faster than it creates certainty.'];
  return ['Useful Uncertainty','A partial truth carried without surrender.','Lyria does not yet possess stable mastery. What she has is a difficult beginning: true traces can support wrong wholes, and not knowing can remain an active discipline rather than an excuse to stop caring.'];
}

function renderEnding() {
  const [title,kicker,text] = calculateEnding();
  const s = state.scores;
  screenRoot.innerHTML = `
    <section class="ending-screen">
      <article class="ending-card parchment-frame">
        <p class="ending-kicker">${kicker}</p>
        <h2>${title}</h2>
        <p class="lead">${text}</p>
        <div class="ending-summary">
          <h3>What Version 2 established</h3>
          <p><strong>Gated object access:</strong> trace required surface evidence; Witnessing required both claim and limit.</p>
          <p><strong>Earned disciplines:</strong> Repair Joins, Pattern Reading, Stillness and Sequence Tracing were demonstrated before becoming available elsewhere.</p>
          <p><strong>Integrated gate:</strong> the locked room and ashwood box required multiple ways of attending rather than one universal magic key.</p>
          <p><strong>Dream access:</strong> routes, boundary actions, composer options and an interruptible exit were unlocked by prior practice.</p>
        </div>
        <div class="score-grid">
          ${scoreCard(s.care,'Care')}${scoreCard(s.craft,'Craft')}${scoreCard(s.courage,'Courage')}${scoreCard(s.trespass,'Trespass')}${scoreCard(s.certainty,'Certainty')}
        </div>
        <p class="muted">These values summarize pressures expressed during the prototype. They are not a moral grade.</p>
        <div class="button-row"><button id="replayBtn" class="action-btn primary" type="button">Play again</button><button id="reviewJournalBtn" class="action-btn secondary" type="button">Review journal</button></div>
      </article>
    </section>
  `;
  document.getElementById('replayBtn').addEventListener('click', () => {
    state = createInitialState();
    state.scene = 'prologue';
    saveState();
    render();
  });
  document.getElementById('reviewJournalBtn').addEventListener('click', openJournal);
}

function scoreCard(value,label) {
  return `<div class="score-card"><strong>${value}</strong><span>${label}</span></div>`;
}

function openObject(id) {
  currentObjectId = id;
  renderObjectModal();
  objectModal.classList.remove('hidden');
  objectModal.setAttribute('aria-hidden','false');
}

function closeObject() {
  objectModal.classList.add('hidden');
  objectModal.setAttribute('aria-hidden','true');
  currentObjectId = null;
  stopHold();
}

function renderObjectModal() {
  const obj = OBJECTS[currentObjectId];
  const item = state.objects[currentObjectId];
  objectTitle.textContent = obj.name;
  objectPrompt.textContent = obj.prompt;
  objectImage.src = obj.image;
  objectImage.alt = obj.name;
  detailCounter.textContent = `${item.observed.length} / ${obj.observations.length}`;

  hotspotLayer.innerHTML = obj.observations.map((obs,index) => `
    <button class="hotspot ${item.observed.includes(index) ? 'found' : ''}" data-hotspot="${index}" style="left:${obs.x}%;top:${obs.y}%" type="button" aria-label="Inspect detail ${index+1}"></button>
  `).join('');
  hotspotLayer.querySelectorAll('[data-hotspot]').forEach(button => {
    button.addEventListener('click', () => {
      const index = Number(button.dataset.hotspot);
      if (!item.observed.includes(index)) item.observed.push(index);
      saveState();
      renderObjectModal();
    });
  });

  observationList.innerHTML = item.observed.length
    ? item.observed.sort((a,b)=>a-b).map(i => `<div class="observation">${obj.observations[i].text}</div>`).join('')
    : '<p class="empty-state">No material details recorded. Look for marked areas on the object.</p>';

  attendBtn.disabled = item.observed.length < obj.observations.length || item.traceSeen;
  attendBtn.textContent = item.traceSeen ? 'Trace reached' : 'Hold to attend';
  holdFill.style.width = '0%';

  traceBlock.classList.toggle('hidden', !item.traceSeen);
  traceText.innerHTML = item.traceSeen ? obj.trace.map(line => `<div class="trace-line">${line}</div>`).join('') : '';
  claimBlock.classList.toggle('hidden', !item.traceSeen);
  limitBlock.classList.toggle('hidden', !item.traceSeen);
  saveObjectBlock.classList.toggle('hidden', !item.traceSeen);

  if (item.traceSeen) {
    claimForm.innerHTML = obj.claims.map((text,index) => choiceRadio('objectClaim',String(index),`Claim ${index+1}`,text,item.claim === null ? null : String(item.claim))).join('');
    limitForm.innerHTML = obj.limits.map((text,index) => choiceRadio('objectLimit',String(index),`Limit ${index+1}`,text,item.limit === null ? null : String(item.limit))).join('');
    bindRadioState('objectClaim', value => { item.claim = Number(value); saveState(); renderObjectModal(); });
    bindRadioState('objectLimit', value => { item.limit = Number(value); saveState(); renderObjectModal(); });
    saveClaimBtn.disabled = item.claim === null || item.limit === null;
    objectFeedback.className = `feedback-box ${item.accountable ? 'success' : 'muted'}`;
    objectFeedback.textContent = item.accountable
      ? 'This object is witnessed: claim and limitation are carried together.'
      : item.claim !== null && item.limit !== null
        ? 'Record the pair to test whether the limit is accountable.'
        : 'Choose both a claim and the trace’s characteristic limitation.';
  }
}

function startHold() {
  if (!currentObjectId) return;
  const item = state.objects[currentObjectId];
  if (item.traceSeen || item.observed.length < OBJECTS[currentObjectId].observations.length) return;
  stopHold();
  holdValue = 0;
  holdTimer = setInterval(() => {
    holdValue += 3;
    holdFill.style.width = `${Math.min(holdValue,100)}%`;
    if (holdValue >= 100) {
      stopHold(true);
      item.traceSeen = true;
      score('craft',1);
      saveState();
      renderObjectModal();
    }
  },70);
}

function stopHold(completed = false) {
  if (holdTimer) {
    clearInterval(holdTimer);
    holdTimer = null;
  }
  if (!completed) {
    holdValue = 0;
    if (holdFill) holdFill.style.width = '0%';
  }
}

function saveCurrentObject() {
  if (!currentObjectId) return;
  const obj = OBJECTS[currentObjectId];
  const item = state.objects[currentObjectId];
  item.accountable = item.limit === obj.correctLimit;
  if (item.accountable) {
    score('craft',1);
    toast(`${obj.name} witnessed`);
    if (accountableCount() >= 3) unlockSkill('witnessing');
    saveState();
    closeObject();
    render();
  } else {
    objectFeedback.className = 'feedback-box warning';
    objectFeedback.textContent = 'That limit denies something the material or trace directly established. Reconsider what remains genuinely uncertain: identity, motive, importance or moral meaning.';
    saveState();
  }
}

function openJournal() {
  renderJournal();
  journalModal.classList.remove('hidden');
  journalModal.setAttribute('aria-hidden','false');
}

function closeJournal() {
  journalModal.classList.add('hidden');
  journalModal.setAttribute('aria-hidden','true');
}

function renderJournal() {
  const carried = Object.values(OBJECTS).filter(obj => state.objects[obj.id].claim !== null);
  journalClaims.innerHTML = carried.length
    ? carried.map(obj => {
      const item = state.objects[obj.id];
      return `<div class="journal-item"><strong>${obj.name} ${item.accountable ? '· witnessed' : '· limit unresolved'}</strong><p>${obj.claims[item.claim]}</p>${item.limit !== null ? `<p><em>Limit:</em> ${obj.limits[item.limit]}</p>` : ''}</div>`;
    }).join('')
    : '<p class="empty-state">No claims carried yet.</p>';

  journalSkills.innerHTML = Object.keys(SKILLS).map(id => {
    const earned = hasSkill(id);
    return `<div class="journal-item ${earned ? '' : 'locked-journal'}"><strong>${earned ? '✓' : '⌁'} ${SKILLS[id].name}</strong><p>${earned ? SKILLS[id].description : 'Not yet earned.'}</p></div>`;
  }).join('');

  journalGates.innerHTML = `
    ${gateJournal('Three accountable objects', accountableCount() >= 3, `${accountableCount()} / 3`)}
    ${gateJournal('Locked door channels', state.door.channels.length === 4, `${state.door.channels.length} / 4`)}
    ${gateJournal('Ashwood box methods', state.box.methods.length === 4, `${state.box.methods.length} / 4`)}
    ${gateJournal('Grounding', anchorCount() >= 3, `${anchorCount()} / 3`)}
    ${gateJournal('Fourfold dream route', anchorCount() === 4, `${anchorCount()} / 4`)}
  `;

  journalDream.innerHTML = state.dream.residue.length
    ? state.dream.residue.map(text => `<div class="journal-item"><p>${text}</p></div>`).join('')
    : '<p class="empty-state">No dream residue recorded.</p>';
}

function gateJournal(name,open,status) {
  return `<div class="journal-item ${open ? '' : 'locked-journal'}"><strong>${open ? '✓' : '⌁'} ${name}</strong><p>${status}</p></div>`;
}

function gateMarkup(name, open, status) {
  return `<div class="gate-status ${open ? 'open' : 'locked'}"><span>${open ? '✓' : '⌁'}</span><div><strong>${name}</strong><small>${status}</small></div></div>`;
}

function choiceRadio(name,value,title,copy,current) {
  return `<label class="choice-card ${current === value ? 'selected' : ''}"><input type="radio" name="${name}" value="${value}" ${current === value ? 'checked' : ''}><span><strong>${title}</strong>${copy}</span></label>`;
}

function bindRadioState(name, callback) {
  document.querySelectorAll(`input[name="${name}"]`).forEach(input => {
    input.addEventListener('change', event => callback(event.target.value));
  });
}

function toast(message) {
  const prior = document.querySelector('.toast');
  if (prior) prior.remove();
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = message;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1800);
}

function toggleSound() {
  state.flags.sound = !state.flags.sound;
  saveState();
  if (state.flags.sound) startAmbient();
  else stopAmbient();
  updateHeader();
}

function startAmbientIfEnabled() {
  if (state.flags.sound) startAmbient();
}

function startAmbient() {
  if (audio) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i=0;i<bufferSize;i++) data[i] = (Math.random()*2-1) * 0.18;
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 850;
    const gain = ctx.createGain();
    gain.gain.value = 0.028;
    source.connect(filter).connect(gain).connect(ctx.destination);
    source.start();
    audio = { ctx, source };
  } catch (error) {
    console.warn('Ambient audio unavailable', error);
  }
}

function stopAmbient() {
  if (!audio) return;
  try { audio.source.stop(); audio.ctx.close(); } catch (_) {}
  audio = null;
}

objectCloseBtn.addEventListener('click', closeObject);
objectBackdrop.addEventListener('click', closeObject);
attendBtn.addEventListener('mousedown', startHold);
attendBtn.addEventListener('mouseup', () => stopHold(false));
attendBtn.addEventListener('mouseleave', () => stopHold(false));
attendBtn.addEventListener('touchstart', event => { event.preventDefault(); startHold(); }, { passive:false });
attendBtn.addEventListener('touchend', () => stopHold(false));
saveClaimBtn.addEventListener('click', saveCurrentObject);

journalBtn.addEventListener('click', openJournal);
journalCloseBtn.addEventListener('click', closeJournal);
journalBackdrop.addEventListener('click', closeJournal);
soundBtn.addEventListener('click', toggleSound);
resetBtn.addEventListener('click', () => confirmModal.classList.remove('hidden'));
cancelResetBtn.addEventListener('click', () => confirmModal.classList.add('hidden'));
confirmResetBtn.addEventListener('click', () => {
  cleanupSceneTimers();
  stopAmbient();
  localStorage.removeItem(SAVE_KEY);
  state = createInitialState();
  confirmModal.classList.add('hidden');
  render();
});

document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  if (!objectModal.classList.contains('hidden')) closeObject();
  else if (!journalModal.classList.contains('hidden')) closeJournal();
  else if (!confirmModal.classList.contains('hidden')) confirmModal.classList.add('hidden');
});

if (!loadState()) state = createInitialState();
startAmbientIfEnabled();
render();
