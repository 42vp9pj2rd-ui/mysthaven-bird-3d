'use strict';

const SAVE_KEY = 'mysthaven-things-we-carry-v2';
const TOTAL_PROGRESS_STEPS = 10;

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
    advanced: {
      x: 62, y: 57,
      text: 'Now that Serena has taught you to see repair joins, the two mends no longer look like one history. The first repair forced the wing back into place. The second respected the old break and relieved its strain. Two people repaired the same wound with different ideas of care.'
    },
    trace: [
      'A thumb rubs the same patch of paint until warmth replaces colour.',
      'Rain taps wood and roof together. A child waits beyond a closed door, counting without knowing the numbers.',
      'A voice, low and practical: “You must be quiet now.” The bird is gripped harder, but not abandoned.'
    ],
    claims: [
      'A child carried this while waiting outside the birthing room.',
      'Someone repaired this more than once for a child who mattered to them.',
      'Its owner was frightened of what happened behind a closed door.',
      'The trace is true, but I cannot yet tell which part matters most.'
    ]
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
    advanced: {
      x: 39, y: 68,
      text: 'A thin replacement band sits beneath the ornament. Someone preserved the decorated shell after its working edge failed. The repair values inheritance over efficiency.'
    },
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
    ]
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
    advanced: {
      x: 72, y: 58,
      text: 'The frame was heated and straightened after the impact, but not fully. The repairer restored function and left the scar visible—either from haste, poverty, or refusal to pretend nothing happened.'
    },
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
    ]
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
    advanced: {
      x: 31, y: 41,
      text: 'A nearly invisible resin fills the oldest crack. The button was repaired while still sewn to the garment. Whoever did it valued continuity more than neatness.'
    },
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
    ]
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
    advanced: {
      x: 48, y: 53,
      text: 'What looked like scorch is partly a closed split. Fine thread once bound the handle while the wood healed around grease and heat. Serena kept using it during the repair. The spoon learned continuity under strain.'
    },
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
    ]
  }
};

const SCENE_META = {
  title: { chapter: 'Prologue', label: 'The Things We Carry', progress: 0 },
  prologue: { chapter: 'Chapter I', label: 'After the Rain', progress: 1 },
  objectTable: { chapter: 'Chapter I', label: 'The Table', progress: 2 },
  serenaReturns: { chapter: 'Chapter I', label: 'A Human Answer', progress: 3 },
  lesson: { chapter: 'Chapter II', label: 'Witness Marks', progress: 4 },
  secondLook: { chapter: 'Chapter II', label: 'The Same Table', progress: 5 },
  nightfall: { chapter: 'Chapter III', label: 'The House Asleep', progress: 6 },
  dreamReceive: { chapter: 'Chapter III', label: 'The Door in Sleep', progress: 7 },
  morning: { chapter: 'Chapter IV', label: 'What Crossed Back', progress: 8 },
  dreamDecision: { chapter: 'Chapter IV', label: 'Pressure', progress: 9 },
  dreamCompose: { chapter: 'Chapter IV', label: 'A Message Without Words', progress: 9 },
  aftermath: { chapter: 'Epilogue', label: 'Residue', progress: 10 },
  ending: { chapter: 'Epilogue', label: 'What the World Now Means', progress: 10 }
};

function createInitialState() {
  const objectState = {};
  Object.keys(OBJECTS).forEach(id => {
    objectState[id] = {
      observed: [],
      traceSeen: false,
      claim: null,
      advancedSeen: false
    };
  });
  return {
    version: 2,
    scene: 'title',
    objects: objectState,
    returnObject: null,
    disclosure: null,
    skills: [],
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
    flags: { answeredCorrectly: false, sound: false },
    updatedAt: Date.now()
  };
}

let state = createInitialState();
let currentObjectId = null;
let holdTimer = null;
let holdValue = 0;
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
const advancedObservationBlock = document.getElementById('advancedObservationBlock');
const advancedHeading = document.getElementById('advancedHeading');
const advancedObservationList = document.getElementById('advancedObservationList');
const attendBtn = document.getElementById('attendBtn');
const holdFill = document.getElementById('holdFill');
const traceBlock = document.getElementById('traceBlock');
const traceText = document.getElementById('traceText');
const claimBlock = document.getElementById('claimBlock');
const claimForm = document.getElementById('claimForm');
const saveClaimBtn = document.getElementById('saveClaimBtn');

const journalModal = document.getElementById('journalModal');
const journalBackdrop = document.getElementById('journalBackdrop');
const journalCloseBtn = document.getElementById('journalCloseBtn');
const journalClaims = document.getElementById('journalClaims');
const journalSkills = document.getElementById('journalSkills');
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
    console.warn('Could not load save:', error);
    return false;
  }
}

function setScene(scene) {
  state.scene = scene;
  saveState();
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function score(key, amount) {
  state.scores[key] = Math.max(0, (state.scores[key] || 0) + amount);
}

function hasSkill(skill) {
  return state.skills.includes(skill);
}

function unlockSkill(skill) {
  if (!hasSkill(skill)) state.skills.push(skill);
}

function claimCount() {
  return Object.values(state.objects).filter(item => item.claim !== null).length;
}

function observationCount(id) {
  return state.objects[id].observed.length;
}

function advancedCount() {
  return Object.values(state.objects).filter(item => item.advancedSeen).length;
}

function updateHeader() {
  const meta = SCENE_META[state.scene] || SCENE_META.prologue;
  const showHeader = state.scene !== 'title';
  gameHeader.classList.toggle('hidden', !showHeader);
  if (!showHeader) return;
  chapterLabel.textContent = meta.chapter;
  sceneLabel.textContent = meta.label;
  progressFill.style.width = `${Math.round((meta.progress / TOTAL_PROGRESS_STEPS) * 100)}%`;
  soundBtn.textContent = state.flags.sound ? 'Sound on' : 'Sound off';
  soundBtn.setAttribute('aria-pressed', String(state.flags.sound));
}

function render() {
  updateHeader();
  const renderers = {
    title: renderTitle,
    prologue: renderPrologue,
    objectTable: renderObjectTable,
    serenaReturns: renderSerenaReturns,
    lesson: renderLesson,
    secondLook: renderSecondLook,
    nightfall: renderNightfall,
    dreamReceive: renderDreamReceive,
    morning: renderMorning,
    dreamDecision: renderDreamDecision,
    dreamCompose: renderDreamCompose,
    aftermath: renderAftermath,
    ending: renderEnding
  };
  (renderers[state.scene] || renderers.title)();
}

function renderTitle() {
  const hasSave = localStorage.getItem(SAVE_KEY) && state.scene !== 'title';
  screenRoot.innerHTML = `
    <section class="title-screen">
      <article class="title-card parchment-frame">
        <p class="eyebrow">A Mysthaven vertical slice</p>
        <h2>The Things<br>We Carry</h2>
        <p class="subtitle">Object-memory. Dream pressure. Attention made accountable.</p>
        <div class="title-ornament"></div>
        <p class="lead dropcap">Rain has only just stopped. Serena has returned from Bracken Farm with her healer’s bag and a scatter of ordinary things. One belongs to the frightened younger child who waited outside the birthing room. Serena asks Lyria to work out which one should be returned.</p>
        <p class="lead">The task is simple. The looking is not.</p>
        <div class="button-row">
          <button id="newGameBtn" class="action-btn primary" type="button">Begin a new game</button>
          ${hasSave ? '<button id="continueBtn" class="action-btn secondary" type="button">Continue saved game</button>' : ''}
        </div>
        <p class="save-note">Progress is saved locally in this browser. No account or server is required.</p>
      </article>
    </section>
  `;
  document.getElementById('newGameBtn').addEventListener('click', () => {
    state = createInitialState();
    state.scene = 'prologue';
    saveState();
    startAmbientIfEnabled();
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
          <p class="dropcap">The rain has exhausted itself against the shutters. Water still ticks from the eaves, one drop at a time, as if the house is counting something it does not trust itself to remember.</p>
          <p>Serena empties her healer’s bag onto the kitchen table: folded cloth, a brass clasp, a child’s toy, the wooden spoon Lyria carried home by mistake among the instruments. She has washed her hands three times. A crescent of red remains beneath one thumbnail.</p>
          <p class="dialogue">“The younger child left something at Bracken Farm,” Serena says. “One of these. See whether you can work out which.”</p>
          <p>It sounds like trust. It also sounds like a test Serena has not admitted is a test.</p>
        </div>
        <div class="button-row">
          <button id="toTableBtn" class="action-btn primary" type="button">Go to the table</button>
        </div>
      </article>
    </section>
  `;
  document.getElementById('toTableBtn').addEventListener('click', () => setScene('objectTable'));
}

function objectCardMarkup(obj, secondLook = false) {
  const item = state.objects[obj.id];
  let status = obj.teaser;
  if (item.claim !== null) status = 'A claim has been written.';
  if (secondLook && item.advancedSeen) status = 'A learned distinction has changed this object.';
  return `
    <button class="object-card ${item.claim !== null ? 'claimed' : ''} ${item.advancedSeen ? 'advanced-seen' : ''}" data-object="${obj.id}" type="button">
      <img src="${obj.image}" alt="${obj.name}">
      <div class="object-card-copy">
        <h3>${obj.name}</h3>
        <p>${status}</p>
        <span class="object-state">${observationCount(obj.id)} details${item.traceSeen ? ' · trace reached' : ''}</span>
      </div>
    </button>
  `;
}

function renderObjectTable() {
  const count = claimCount();
  const canContinue = count >= 3;
  screenRoot.innerHTML = `
    <section class="scene-shell">
      <article class="scene-card parchment-frame">
        <p class="eyebrow">Ordinary observation</p>
        <h2>Serena’s Kitchen Table</h2>
        <div class="narrative">
          <p>The room contains no glowing relics. Nothing calls to you. A table is only a table until you decide to ask more of it.</p>
          <p>Examine at least three objects. Find their material marks before holding your attention on them. Then decide what the trace seems to mean.</p>
        </div>
        <div class="task-box"><strong>Current task:</strong> Record claims about at least three objects. ${count} / 3 required.</div>
        <div class="object-grid">
          ${Object.values(OBJECTS).map(obj => objectCardMarkup(obj)).join('')}
        </div>
        <div class="button-row">
          <button id="callSerenaBtn" class="action-btn primary" type="button" ${canContinue ? '' : 'disabled'}>Call Serena back</button>
        </div>
      </article>
      <aside class="side-card parchment-frame">
        <p class="eyebrow">Working rule</p>
        <h3>Trace is not verdict</h3>
        <p class="muted">An object keeps pressure, repetition, proximity, neglect, repair and loss. It does not keep an omniscient account.</p>
        <div class="status-list">
          ${renderClaimStatus()}
        </div>
      </aside>
    </section>
  `;
  bindObjectCards();
  document.getElementById('callSerenaBtn').addEventListener('click', () => setScene('serenaReturns'));
}

function renderClaimStatus() {
  const claimed = Object.values(OBJECTS).filter(obj => state.objects[obj.id].claim !== null);
  if (!claimed.length) return '<p class="empty-state">No claims recorded yet.</p>';
  return claimed.map(obj => `<div class="status-item"><strong>${obj.name}</strong><p>${obj.claims[state.objects[obj.id].claim]}</p></div>`).join('');
}

function bindObjectCards() {
  document.querySelectorAll('[data-object]').forEach(button => {
    button.addEventListener('click', () => openObject(button.dataset.object));
  });
}

function renderSerenaReturns() {
  screenRoot.innerHTML = `
    <section class="story-screen">
      <article class="story-card parchment-frame">
        <p class="eyebrow">A human answer</p>
        <h2>Which One?</h2>
        <div class="story-copy">
          <p>Serena returns with clean sleeves and tired eyes. She does not touch the table.</p>
          <p class="dialogue">“Well?” she asks. “Which one belongs to the younger child?”</p>
        </div>
        <form id="returnForm" class="choice-stack">
          ${Object.values(OBJECTS).map(obj => `
            <label class="choice-card">
              <input type="radio" name="returnObject" value="${obj.id}" ${state.returnObject === obj.id ? 'checked' : ''}>
              <span><strong>${obj.name}</strong>${state.objects[obj.id].claim !== null ? obj.claims[state.objects[obj.id].claim] : 'You did not form a claim about this object.'}</span>
            </label>
          `).join('')}
        </form>

        <div id="disclosureArea" class="hidden">
          <p class="dialogue">Serena glances at the object you indicate. “And what else did you learn?”</p>
          <form id="disclosureForm" class="choice-stack">
            <label class="choice-card"><input type="radio" name="disclosure" value="needed"><span><strong>Only what the task required.</strong> “I think this is the child’s. The rest is not mine to name.”</span></label>
            <label class="choice-card"><input type="radio" name="disclosure" value="all"><span><strong>Everything the trace suggested.</strong> Describe the child’s fear, the closed door and the voice.</span></label>
            <label class="choice-card"><input type="radio" name="disclosure" value="uncertain"><span><strong>Admit the limits.</strong> “I learned several true things. I do not know which one answers you.”</span></label>
          </form>
          <div class="button-row">
            <button id="answerSerenaBtn" class="action-btn primary" type="button" disabled>Give Serena your answer</button>
          </div>
        </div>
      </article>
    </section>
  `;

  const disclosureArea = document.getElementById('disclosureArea');
  const answerBtn = document.getElementById('answerSerenaBtn');
  document.querySelectorAll('input[name="returnObject"]').forEach(input => {
    input.addEventListener('change', event => {
      state.returnObject = event.target.value;
      disclosureArea.classList.remove('hidden');
      saveState();
    });
  });
  if (state.returnObject) disclosureArea.classList.remove('hidden');

  document.querySelectorAll('input[name="disclosure"]').forEach(input => {
    input.addEventListener('change', event => {
      state.disclosure = event.target.value;
      answerBtn.disabled = false;
    });
  });

  answerBtn.addEventListener('click', resolveSerenaAnswer);
}

function resolveSerenaAnswer() {
  state.flags.answeredCorrectly = state.returnObject === 'bird';
  if (state.flags.answeredCorrectly) score('craft', 2);
  else score('certainty', 1);

  if (state.disclosure === 'needed') score('care', 2);
  if (state.disclosure === 'all') { score('courage', 1); score('trespass', 1); score('certainty', 1); }
  if (state.disclosure === 'uncertain') { score('care', 1); score('craft', 1); }
  setScene('lesson');
}

function renderLesson() {
  const correct = state.flags.answeredCorrectly;
  const disclosureText = {
    needed: 'When you stop at the edge of what the task required, Serena’s shoulders ease by a fraction.',
    all: 'When you describe the child’s fear, Serena listens without interrupting. The silence afterward has an edge.',
    uncertain: 'When you admit the limits of the trace, Serena looks less disappointed than relieved.'
  }[state.disclosure];
  screenRoot.innerHTML = `
    <section class="story-screen">
      <article class="story-card parchment-frame">
        <p class="eyebrow">First discipline</p>
        <h2>Witness Marks</h2>
        <div class="story-copy">
          <p>${correct ? 'Serena lifts the wooden bird.' : 'Serena moves your chosen object aside and lifts the wooden bird.'}</p>
          <p class="dialogue">“This one,” she says. “The others told you things. This one answered the question.”</p>
          <p>${disclosureText}</p>
          <p>She turns the bird’s repaired wing toward the window.</p>
          <p class="dialogue">“Do not begin with what an object wants to show you. Begin with what hands have actually done to it.”</p>
        </div>
        <div class="lesson-card">
          <span class="lesson-name">Way of attending learned</span>
          <h3>Repair Joins</h3>
          <p>A break and its repair form two histories. Shape, material, pressure and method reveal what the repairer believed should be restored—and what they allowed to remain changed.</p>
          <p><strong>Irreversible effect:</strong> repaired areas will now appear as distinct evidence. The table cannot return to being as simple as it was.</p>
        </div>
        <div class="button-row">
          <button id="learnSkillBtn" class="action-btn primary" type="button">Look at the table again</button>
        </div>
      </article>
    </section>
  `;
  document.getElementById('learnSkillBtn').addEventListener('click', () => {
    unlockSkill('repairJoins');
    score('craft', 1);
    saveState();
    setScene('secondLook');
  });
}

function renderSecondLook() {
  const birdSeen = state.objects.bird.advancedSeen;
  const spoonSeen = state.objects.spoon.advancedSeen;
  const canContinue = birdSeen && spoonSeen;
  screenRoot.innerHTML = `
    <section class="scene-shell">
      <article class="scene-card parchment-frame">
        <p class="eyebrow">Irreversible attention</p>
        <h2>The Same Table</h2>
        <div class="narrative">
          <p>The objects have not changed. That is what makes the change difficult to deny.</p>
          <p>The repaired places stand apart now: not glowing, not louder, simply impossible to collapse back into undifferentiated wear.</p>
        </div>
        <div class="task-box"><strong>Current task:</strong> Use Repair Joins on the wooden bird and Serena’s spoon. ${Number(birdSeen) + Number(spoonSeen)} / 2 required.</div>
        <div class="object-grid">
          ${Object.values(OBJECTS).map(obj => objectCardMarkup(obj, true)).join('')}
        </div>
        <div class="button-row">
          <button id="toNightBtn" class="action-btn primary" type="button" ${canContinue ? '' : 'disabled'}>Let the house grow quiet</button>
        </div>
      </article>
      <aside class="side-card parchment-frame">
        <p class="eyebrow">New distinction</p>
        <h3>Repair Joins</h3>
        <p class="muted">A repair does not erase a break. It adds another will, another method and another idea of what deserved to continue.</p>
        <div class="status-list">
          <div class="status-item"><strong>Wooden bird</strong><p>${birdSeen ? OBJECTS.bird.advanced.text : 'The repair has more to teach.'}</p></div>
          <div class="status-item"><strong>Wooden spoon</strong><p>${spoonSeen ? OBJECTS.spoon.advanced.text : 'Familiarity still hides a join.'}</p></div>
        </div>
      </aside>
    </section>
  `;
  bindObjectCards();
  document.getElementById('toNightBtn').addEventListener('click', () => setScene('nightfall'));
}

function renderNightfall() {
  screenRoot.innerHTML = `
    <section class="story-screen">
      <article class="story-card parchment-frame">
        <p class="eyebrow">The world pushes back</p>
        <h2>The House Asleep</h2>
        <div class="story-copy">
          <p class="dropcap">After midnight, the rain begins again—not against the roof, but somewhere inside the dream.</p>
          <p>Lyria is standing in Serena’s kitchen. The room has been lengthened until the table is too far away to reach. The blue birth-thread runs from the latch across the floor and under the forbidden door behind the kitchen.</p>
          <p>The wooden bird rolls once on its small wheels.</p>
          <p class="dialogue">A girl on the other side of the door says, “I’m still awake.”</p>
          <p>This is not an object waiting to be attended. Something is attending back.</p>
        </div>
        <div class="button-row">
          <button id="enterDreamBtn" class="action-btn secondary" type="button">Enter the dream</button>
        </div>
      </article>
    </section>
  `;
  document.getElementById('enterDreamBtn').addEventListener('click', () => setScene('dreamReceive'));
}

function renderDreamReceive() {
  const step = !state.dream.follow ? 0 : !state.dream.anchor ? 1 : !state.dream.boundary ? 2 : 3;
  let content = '';

  if (step === 0) {
    content = `
      <p>The kitchen has forgotten which way is level. Three things remain steady enough to follow.</p>
      <div class="dream-symbols">
        ${dreamSymbol('thread', '〰', 'The blue thread', 'A line tied by waking hands. It leads under the door.')}
        ${dreamSymbol('bird', '◈', 'The wooden bird', 'Its repaired wing opens and closes without moving.')}
        ${dreamSymbol('voice', '◌', 'The girl’s voice', 'Nearer than the door. Farther than the house.')}
        ${dreamSymbol('water', '≋', 'Black water', 'A reflection of a lake where no lake should be.')}
      </div>
    `;
  } else if (step === 1) {
    content = `
      <p>You follow ${dreamFollowText(state.dream.follow)}. The room notices the choice. The walls lean closer.</p>
      <p>The dream begins supplying reasons to remain inside it. You need something waking to answer with.</p>
      <div class="dream-symbols">
        ${dreamSymbol('name', 'L', 'Your name', 'Lyria. A sound other people use when they need you to return.')}
        ${dreamSymbol('touch', '✋', 'Remembered touch', 'Serena’s fingers checking your pulse after fever.')}
        ${dreamSymbol('routine', '⋮', 'A shared routine', 'Three turns of the spoon, scrape the bottom, count again.')}
        ${dreamSymbol('food', '○', 'Ordinary food', 'The sour heel of bread saved for morning broth.')}
      </div>
      <p class="dream-footnote">Names, touch, routine and food belong to waking life. Any may help. None makes you invulnerable.</p>
    `;
  } else if (step === 2) {
    content = `
      <p>You hold ${dreamAnchorText(state.dream.anchor)} against the dream until the kitchen remembers its proper size.</p>
      <p>The forbidden door opens a finger’s width. An eye appears in the darkness beyond it—child and adult, frightened and expectant, never settling into one face.</p>
      <div class="dream-symbols">
        ${dreamSymbol('open', '▯', 'Open the door', 'Reach the source before the dream can close again.')}
        ${dreamSymbol('speak', '“ ”', 'Speak through it', 'Remain outside the boundary and ask who is there.')}
        ${dreamSymbol('turn', '↶', 'Turn back', 'Leave with less knowledge and more of yourself intact.')}
      </div>
    `;
  } else {
    content = `
      <p>${dreamBoundaryResult(state.dream.boundary)}</p>
      <p>The girl’s last words do not arrive as sound. They arrive as the certainty that someone, somewhere, has mistaken being heard for being known.</p>
      <div class="button-row">
        <button id="wakeBtn" class="action-btn secondary" type="button">Wake</button>
      </div>
    `;
  }

  screenRoot.innerHTML = `
    <section class="dream-screen">
      <div class="dream-content">
        <p class="eyebrow">Dream magic received</p>
        <h2>The Door in Sleep</h2>
        ${content}
      </div>
    </section>
  `;

  if (step < 3) {
    document.querySelectorAll('[data-dream-choice]').forEach(button => {
      button.addEventListener('click', () => resolveDreamStep(step, button.dataset.dreamChoice));
    });
  } else {
    document.getElementById('wakeBtn').addEventListener('click', () => setScene('morning'));
  }
}

function dreamSymbol(value, mark, title, copy) {
  return `<button class="dream-symbol" data-dream-choice="${value}" type="button"><span class="symbol-mark">${mark}</span><strong>${title}</strong><small>${copy}</small></button>`;
}

function dreamFollowText(value) {
  return {
    thread: 'the blue thread, trusting an ordinary ritual to know where the room ends',
    bird: 'the wooden bird, allowing a familiar object to carry you toward a stranger’s fear',
    voice: 'the voice itself, because being addressed feels too much like responsibility to ignore',
    water: 'the black water, following the most frightening symbol because intensity feels like importance'
  }[value];
}

function dreamAnchorText(value) {
  return {
    name: 'your own name like a handhold',
    touch: 'the memory of Serena’s fingers at your wrist',
    routine: 'the small kitchen rhythm you have repeated together for years',
    food: 'the plain taste of tomorrow’s bread'
  }[value];
}

function dreamBoundaryResult(value) {
  return {
    open: 'You put your hand to the door. It gives too easily. For one impossible instant, another person’s longing fits your body perfectly—and because it fits, you almost call it yours. You wrench yourself backward only after seeing a black lake beneath a castle and a woman reaching through sleep with both hands.',
    speak: 'You keep your hand from the latch. “Who are you?” you ask. The eye becomes a girl’s face, then a woman’s, then your own reflection with someone else’s grief behind it. “You know,” she answers. You do not. The refusal to pretend becomes the only solid thing in the room.',
    turn: 'You step backward. The door follows without crossing the floor. Not opening it does not end the contact, but it preserves the difference between invitation and access. The girl says your name once, softly, as if testing whether it belongs to her.'
  }[value];
}

function resolveDreamStep(step, choice) {
  if (step === 0) {
    state.dream.follow = choice;
    if (choice === 'thread') score('care', 1);
    if (choice === 'bird') score('craft', 1);
    if (choice === 'voice') score('courage', 1);
    if (choice === 'water') { score('certainty', 1); score('trespass', 1); }
  } else if (step === 1) {
    state.dream.anchor = choice;
    if (choice === 'routine') score('craft', 2);
    else score('care', 1);
    state.dream.residue.push(`Waking anchor: ${dreamAnchorText(choice)}.`);
  } else if (step === 2) {
    state.dream.boundary = choice;
    if (choice === 'open') { score('trespass', 2); score('courage', 1); score('certainty', 1); }
    if (choice === 'speak') { score('care', 2); score('courage', 1); }
    if (choice === 'turn') { score('care', 1); score('craft', 1); }
    state.dream.residue.push(`At the dream-door, Lyria chose to ${choice === 'open' ? 'open it' : choice === 'speak' ? 'speak without entering' : 'turn back'}.`);
  }
  saveState();
  render();
}

function renderMorning() {
  screenRoot.innerHTML = `
    <section class="story-screen">
      <article class="story-card parchment-frame">
        <p class="eyebrow">What crossed back</p>
        <h2>Morning Names</h2>
        <div class="story-copy">
          <p>Lyria wakes with one hand closed around nothing. The room is ordinary, but ordinary no longer means untouched.</p>
          <p>At breakfast, Serena sets bread and broth between them. She notices the way Lyria keeps looking at the forbidden door.</p>
          <p class="dialogue">“Tell me what happened,” Serena says.</p>
        </div>
        <form id="morningForm" class="choice-stack">
          <label class="choice-card"><input type="radio" name="morningDisclosure" value="full"><span><strong>Tell her everything.</strong> The symbols, the anchor, the choice at the door and the feeling that someone attended back.</span></label>
          <label class="choice-card"><input type="radio" name="morningDisclosure" value="partial"><span><strong>Tell her the useful part.</strong> Admit the shared phrase and the dream-door, but keep the most intimate sensation private.</span></label>
          <label class="choice-card"><input type="radio" name="morningDisclosure" value="none"><span><strong>Call it a nightmare.</strong> Protect your access to the mystery before Serena can restrict it.</span></label>
        </form>
        <div class="button-row">
          <button id="morningContinueBtn" class="action-btn primary" type="button" disabled>Answer Serena</button>
        </div>
      </article>
    </section>
  `;
  let selected = state.dream.disclosure;
  document.querySelectorAll('input[name="morningDisclosure"]').forEach(input => {
    if (selected === input.value) input.checked = true;
    input.addEventListener('change', event => {
      selected = event.target.value;
      document.getElementById('morningContinueBtn').disabled = false;
    });
  });
  if (selected) document.getElementById('morningContinueBtn').disabled = false;
  document.getElementById('morningContinueBtn').addEventListener('click', () => {
    state.dream.disclosure = selected;
    if (selected === 'full') { score('courage', 2); score('care', 1); }
    if (selected === 'partial') score('care', 1);
    if (selected === 'none') { score('certainty', 1); score('trespass', 1); }
    saveState();
    setScene('dreamDecision');
  });
}

function renderDreamDecision() {
  const response = {
    full: 'Serena believes you quickly enough to frighten you. She asks which waking thing helped you return, then makes you eat before she asks anything else.',
    partial: 'Serena hears the shape of what you have omitted. She does not force the rest from you. The restraint feels like trust and warning together.',
    none: 'Serena lets the word nightmare stand. Her acceptance feels less like victory than an unopened door placed between you.'
  }[state.dream.disclosure];
  screenRoot.innerHTML = `
    <section class="story-screen">
      <article class="story-card parchment-frame">
        <p class="eyebrow">Dream as pressure</p>
        <h2>The Dusk Bell</h2>
        <div class="story-copy">
          <p>${response}</p>
          <p>Before the bowls are cleared, the dusk bell rings in full daylight.</p>
          <p>A neighbour’s son is walking barefoot through the mud with his eyes closed. He repeats the same words at every doorway:</p>
          <p class="dialogue">“I’m still awake.”</p>
          <p>The dream was not yours alone. You can feel a route still open—not a road, but a pressure. With enough attention, perhaps you could send something back.</p>
        </div>
        <div class="choice-stack">
          <button id="composeDreamBtn" class="choice-card" type="button"><span>◈</span><span><strong>Attempt a reply.</strong> Shape feeling, symbol and attention into a dream-pressure. The child has not invited you.</span></button>
          <button id="refuseDreamBtn" class="choice-card" type="button"><span>↶</span><span><strong>Refuse the route.</strong> Help the child wake through names, touch, routine and food instead.</span></button>
        </div>
      </article>
    </section>
  `;
  document.getElementById('composeDreamBtn').addEventListener('click', () => setScene('dreamCompose'));
  document.getElementById('refuseDreamBtn').addEventListener('click', () => {
    state.dream.sent = false;
    state.dream.residue.push('Lyria refused to send pressure through an uninvited dream-route.');
    score('care', 3);
    score('craft', 1);
    saveState();
    setScene('aftermath');
  });
}

const COMPOSER = {
  feeling: {
    urgency: ['Urgency', 'Move now. Something is wrong.'],
    reassurance: ['Reassurance', 'You are not alone. Remain where you can be found.'],
    curiosity: ['Curiosity', 'Look again. The shape you were given may not be the whole.']
  },
  symbol: {
    door: ['A door', 'Boundary, secrecy, passage, imprisonment.'],
    bird: ['The wooden bird', 'A child, repair, waiting, something carried.'],
    thread: ['The blue thread', 'Birth, survival, connection, a route home.']
  },
  focus: {
    child: ['The sleepwalking child', 'Direct the pressure toward the person presently caught in it.'],
    stranger: ['The unknown sender', 'Push back along the route toward whoever shaped the shared dream.'],
    serena: ['Serena', 'Use a familiar person as the dream’s centre of gravity.']
  }
};

function renderDreamCompose() {
  screenRoot.innerHTML = `
    <section class="scene-shell">
      <article class="scene-card parchment-frame">
        <p class="eyebrow">Dream composition</p>
        <h2>A Message Without Words</h2>
        <div class="narrative">
          <p>You cannot send a factual sentence. You can shape feeling, offer a symbol and direct attention. The receiver will supply faces, places and explanation.</p>
          <p>The power lies partly in what you choose—and partly in what you cannot control.</p>
        </div>
        <div class="composer-grid">
          ${composerColumn('feeling', 'Feeling', COMPOSER.feeling)}
          ${composerColumn('symbol', 'Symbol', COMPOSER.symbol)}
          ${composerColumn('focus', 'Focus', COMPOSER.focus)}
        </div>
        <label class="consent-toggle">
          <input id="exitAnchorCheck" type="checkbox" ${state.dream.compose.exit ? 'checked' : ''}>
          <span><strong>Build an exit into the dream.</strong><br><span class="muted">Tie the blue-thread ritual to waking names and touch so the receiver can interrupt the contact. This offers control; it does not create consent retroactively.</span></span>
        </label>
        <div id="dreamPreview" class="preview-box"></div>
        <div class="button-row">
          <button id="sendDreamBtn" class="action-btn primary" type="button" disabled>Send the dream-pressure</button>
          <button id="refrainBtn" class="action-btn ghost" type="button">Refrain after all</button>
        </div>
      </article>
      <aside class="side-card parchment-frame">
        <p class="eyebrow">Working rule</p>
        <h3>Empathy is not authorship</h3>
        <p class="muted">A dream cannot manufacture desire from nothing. It can amplify, synchronize, redirect and give symbolic shape to what is already present.</p>
        <p class="muted">The child did not invite contact. An exit makes the act less controlling, not automatically harmless.</p>
      </aside>
    </section>
  `;
  bindComposer();
}

function composerColumn(type, heading, options) {
  return `
    <section class="composer-column">
      <h3>${heading}</h3>
      <div class="choice-stack">
        ${Object.entries(options).map(([value, data]) => `
          <label class="choice-card">
            <input type="radio" name="${type}" value="${value}" ${state.dream.compose[type] === value ? 'checked' : ''}>
            <span><strong>${data[0]}</strong>${data[1]}</span>
          </label>
        `).join('')}
      </div>
    </section>
  `;
}

function bindComposer() {
  ['feeling', 'symbol', 'focus'].forEach(type => {
    document.querySelectorAll(`input[name="${type}"]`).forEach(input => {
      input.addEventListener('change', event => {
        state.dream.compose[type] = event.target.value;
        updateComposerPreview();
      });
    });
  });
  document.getElementById('exitAnchorCheck').addEventListener('change', event => {
    state.dream.compose.exit = event.target.checked;
    updateComposerPreview();
  });
  document.getElementById('sendDreamBtn').addEventListener('click', sendDream);
  document.getElementById('refrainBtn').addEventListener('click', () => {
    state.dream.sent = false;
    state.dream.residue.push('Lyria shaped a possible dream, then chose not to send it.');
    score('care', 2);
    score('courage', 1);
    saveState();
    setScene('aftermath');
  });
  updateComposerPreview();
}

function updateComposerPreview() {
  const compose = state.dream.compose;
  const complete = compose.feeling && compose.symbol && compose.focus;
  const preview = document.getElementById('dreamPreview');
  const sendBtn = document.getElementById('sendDreamBtn');
  sendBtn.disabled = !complete;
  if (!complete) {
    preview.innerHTML = '<p class="muted">Choose a feeling, a symbol and a focus. The receiver will construct the rest.</p>';
    return;
  }
  const feeling = COMPOSER.feeling[compose.feeling][0].toLowerCase();
  const symbol = COMPOSER.symbol[compose.symbol][0].toLowerCase();
  const focus = COMPOSER.focus[compose.focus][0].toLowerCase();
  preview.innerHTML = `<p>You prepare <strong>${feeling}</strong>, give it the shape of <strong>${symbol}</strong>, and turn the dreamer’s attention toward <strong>${focus}</strong>. ${compose.exit ? 'A blue thread is included as a possible way back.' : 'No deliberate exit has been built into the contact.'}</p>`;
  saveState();
}

function sendDream() {
  const compose = state.dream.compose;
  state.dream.sent = true;
  score('trespass', compose.exit ? 1 : 4);
  if (compose.exit) score('care', 2);
  if (compose.feeling === 'urgency') score('certainty', 1);
  if (compose.feeling === 'curiosity') score('craft', 1);
  if (compose.feeling === 'reassurance') score('care', 1);
  if (compose.focus === 'stranger') score('courage', 1);
  if (compose.focus === 'serena') score('certainty', 1);
  state.dream.residue.push(`Sent ${COMPOSER.feeling[compose.feeling][0].toLowerCase()} through ${COMPOSER.symbol[compose.symbol][0].toLowerCase()}, focused on ${COMPOSER.focus[compose.focus][0].toLowerCase()}${compose.exit ? ', with an exit anchor' : ', without an exit anchor'}.`);
  saveState();
  setScene('aftermath');
}

function dreamConsequenceText() {
  if (!state.dream.sent) {
    return 'Lyria kneels in the mud and says the child’s name until his face changes. Serena presses warm bread into his hand. Mara Reed counts the bell-strokes aloud. The route loosens not because anyone defeats it, but because waking life gives the child enough edges to become himself again.';
  }
  const c = state.dream.compose;
  let receiver = '';
  if (c.focus === 'child') receiver = 'The child stops walking. When his eyes open, he clutches at the air as though searching for something that had been tied there.';
  if (c.focus === 'stranger') receiver = 'The child collapses safely into Serena’s arms—but somewhere beyond him, something notices the return pressure and turns toward Glenmorrow.';
  if (c.focus === 'serena') receiver = 'The child wakes calling Serena “the woman behind the door.” Serena goes still. You used her as a symbol, and another mind made its own meaning of her.';

  let symbol = '';
  if (c.symbol === 'door') symbol = 'For the rest of the day, three villagers dream of doors they are certain their neighbours have locked against them.';
  if (c.symbol === 'bird') symbol = 'By evening, children have begun placing toy birds on their windowsills, though none can explain who suggested it.';
  if (c.symbol === 'thread') symbol = 'Blue thread appears on seven door-latches before sunset. Some call it protection. Others call it a mark.';

  let exit = c.exit
    ? 'The blue-thread exit works imperfectly. Several dreamers wake by speaking their own names. The safeguard mattered.'
    : 'The contact ends when you release it, not when the dreamers choose. They wake slowly, carrying the pressure after you have stopped feeling it.';

  return `${receiver} ${symbol} ${exit}`;
}

function renderAftermath() {
  const intro = dreamConsequenceText();
  const serenaLine = state.dream.sent
    ? '“You reached into a room because you could feel the door,” Serena says. “That is not the same as being invited inside.”'
    : '“Refusing power is still a choice with consequences,” Serena says. “Today it left room for other kinds of help.”';
  screenRoot.innerHTML = `
    <section class="story-screen">
      <article class="story-card parchment-frame">
        <p class="eyebrow">Residue</p>
        <h2>What Remains in the Room</h2>
        <div class="story-copy">
          <p>${intro}</p>
          <p>Later, Serena sets the wooden bird between you. Its two repairs face the lamplight.</p>
          <p class="dialogue">${serenaLine}</p>
          <p>Nothing you did can be reduced to a clean success or failure. The child is awake. The shared phrase is spreading. The objects on the table remain ordinary. You remain able to see more in them than you did yesterday.</p>
        </div>
        <div class="button-row">
          <button id="toEndingBtn" class="action-btn primary" type="button">Close the journal</button>
        </div>
      </article>
    </section>
  `;
  document.getElementById('toEndingBtn').addEventListener('click', () => setScene('ending'));
}

function calculateEnding() {
  const s = state.scores;
  if (s.trespass >= 5 && s.certainty >= 2) {
    return {
      title: 'The Bright Trespass',
      kicker: 'You found a door and mistook access for duty',
      text: 'Lyria’s attention is powerful, brave and dangerously persuasive. She has begun to believe that perceiving a private truth grants a claim upon it. The world answers her readily—but the people within it have less room to refuse the shape she gives their pain.'
    };
  }
  if (s.care >= 7 && s.craft >= 4) {
    return {
      title: 'Accountable Attention',
      kicker: 'Skill begins when attention becomes answerable',
      text: 'Lyria has learned that restraint is not the absence of curiosity. It is curiosity willing to remain in relationship with the people it affects. She sees more than before, but treats increased perception as increased responsibility rather than increased ownership.'
    };
  }
  if (s.courage >= 4 && s.care >= 4) {
    return {
      title: 'The Witness at the Door',
      kicker: 'Understanding without surrendering judgment',
      text: 'Lyria meets fear without pretending it has made her omniscient. She is willing to approach, speak and report what happened, while preserving a distinction between another person’s inner room and her own need to enter it.'
    };
  }
  if (s.craft >= 5) {
    return {
      title: 'A World of Distinctions',
      kicker: 'The table can never become simple again',
      text: 'Lyria’s first strength is disciplined perception. She has learned to separate wear from impact, break from repair and intensity from importance. Her danger will be treating every human problem as something that better observation alone can solve.'
    };
  }
  return {
    title: 'Useful Uncertainty',
    kicker: 'A partial truth carried carefully',
    text: 'Lyria does not yet possess a stable discipline. What she has instead is the beginning of a necessary humility: true traces can support wrong wholes, and uncertainty can remain active rather than becoming an excuse to abandon responsibility.'
  };
}

function renderEnding() {
  const ending = calculateEnding();
  const s = state.scores;
  screenRoot.innerHTML = `
    <section class="ending-screen">
      <article class="ending-card parchment-frame">
        <p class="ending-kicker">${ending.kicker}</p>
        <h2>${ending.title}</h2>
        <p class="lead">${ending.text}</p>
        <div class="ending-summary">
          <h3>What this vertical slice established</h3>
          <p><strong>Object magic:</strong> physical observation leads into partial trace; the player, not the object, creates the claim.</p>
          <p><strong>Skill:</strong> learning Repair Joins permanently changes what the player can perceive in earlier objects.</p>
          <p><strong>Dream magic:</strong> feeling, symbol and focus create pressure rather than factual messages; the receiver supplies interpretation.</p>
          <p><strong>Ethics:</strong> an exit mechanism can reduce control without manufacturing consent. Useful magic still leaves relational and civic residue.</p>
        </div>
        <div class="score-grid">
          ${scoreCard(s.care, 'Care')}
          ${scoreCard(s.craft, 'Craft')}
          ${scoreCard(s.courage, 'Courage')}
          ${scoreCard(s.trespass, 'Trespass')}
        </div>
        <p class="muted">This is a design-facing ending, not a morality score. The values summarize pressures expressed during the prototype.</p>
        <div class="button-row">
          <button id="replayBtn" class="action-btn primary" type="button">Play again</button>
          <button id="reviewJournalBtn" class="action-btn secondary" type="button">Review journal</button>
        </div>
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

function scoreCard(value, label) {
  return `<div class="score-card"><strong>${value}</strong><span>${label}</span></div>`;
}

function openObject(id) {
  currentObjectId = id;
  renderObjectModal();
  objectModal.classList.remove('hidden');
  objectModal.setAttribute('aria-hidden', 'false');
}

function closeObject() {
  stopHold(false);
  objectModal.classList.add('hidden');
  objectModal.setAttribute('aria-hidden', 'true');
  currentObjectId = null;
}

function renderObjectModal() {
  const obj = OBJECTS[currentObjectId];
  const item = state.objects[currentObjectId];
  const advancedAvailable = hasSkill('repairJoins') && state.scene === 'secondLook';

  objectTitle.textContent = obj.name;
  objectPrompt.textContent = obj.prompt;
  objectImage.src = obj.image;
  objectImage.alt = obj.name;
  hotspotLayer.innerHTML = '';

  obj.observations.forEach((obs, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `hotspot ${item.observed.includes(index) ? 'found' : ''}`;
    button.style.left = `${obs.x}%`;
    button.style.top = `${obs.y}%`;
    button.setAttribute('aria-label', `Inspect detail ${index + 1}`);
    button.addEventListener('click', () => observeDetail(index));
    hotspotLayer.appendChild(button);
  });

  if (advancedAvailable) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `hotspot advanced ${item.advancedSeen ? 'found' : ''}`;
    button.style.left = `${obj.advanced.x}%`;
    button.style.top = `${obj.advanced.y}%`;
    button.setAttribute('aria-label', 'Inspect repair join');
    button.addEventListener('click', observeAdvanced);
    hotspotLayer.appendChild(button);
  }

  detailCounter.textContent = `${item.observed.length} / ${obj.observations.length}`;
  observationList.innerHTML = item.observed.length
    ? item.observed.map(index => `<div class="observation">${obj.observations[index].text}</div>`).join('')
    : '<div class="observation muted">Nothing written yet. Look for places where hands, use or damage left a mark.</div>';

  advancedObservationBlock.classList.toggle('hidden', !advancedAvailable);
  advancedHeading.textContent = 'Repair Joins';
  advancedObservationList.innerHTML = item.advancedSeen
    ? `<div class="observation">${obj.advanced.text}</div>`
    : '<div class="observation muted">A repair is now visible as a separate history. Find the rust-coloured distinction marker.</div>';

  attendBtn.disabled = item.observed.length < obj.observations.length || item.traceSeen;
  attendBtn.textContent = item.traceSeen ? 'Trace reached' : 'Hold to attend';
  holdFill.style.width = '0%';

  traceBlock.classList.toggle('hidden', !item.traceSeen);
  traceText.innerHTML = item.traceSeen ? obj.trace.map(line => `<div class="trace-line">${line}</div>`).join('') : '';

  claimBlock.classList.toggle('hidden', !item.traceSeen || state.scene === 'secondLook');
  claimForm.innerHTML = '';
  if (item.traceSeen && state.scene !== 'secondLook') {
    obj.claims.forEach((claim, index) => {
      const label = document.createElement('label');
      label.className = 'choice-card';
      label.innerHTML = `<input type="radio" name="objectClaim" value="${index}" ${item.claim === index ? 'checked' : ''}><span>${claim}</span>`;
      claimForm.appendChild(label);
    });
    claimForm.querySelectorAll('input[name="objectClaim"]').forEach(input => {
      input.addEventListener('change', event => {
        item.claim = Number(event.target.value);
        saveClaimBtn.disabled = false;
      });
    });
    saveClaimBtn.disabled = item.claim === null;
  }
}

function observeDetail(index) {
  const item = state.objects[currentObjectId];
  if (!item.observed.includes(index)) {
    item.observed.push(index);
    item.observed.sort((a, b) => a - b);
    score('craft', 0.2);
    saveState();
    playChime(260 + index * 60);
  }
  renderObjectModal();
}

function observeAdvanced() {
  const item = state.objects[currentObjectId];
  if (!item.advancedSeen) {
    item.advancedSeen = true;
    score('craft', 1);
    saveState();
    showToast('A learned distinction has changed what can be seen.');
    playChime(520);
  }
  renderObjectModal();
  if (state.scene === 'secondLook') renderSecondLookBehindModal();
}

function renderSecondLookBehindModal() {
  // Refreshes the page beneath the modal without closing it.
  const wasOpen = !objectModal.classList.contains('hidden');
  if (wasOpen) objectModal.classList.add('hidden');
  renderSecondLook();
  if (wasOpen) objectModal.classList.remove('hidden');
}

function startHold() {
  if (!currentObjectId) return;
  const item = state.objects[currentObjectId];
  if (item.traceSeen || item.observed.length < OBJECTS[currentObjectId].observations.length) return;
  stopHold(false);
  holdValue = 0;
  holdTimer = window.setInterval(() => {
    holdValue += 4;
    holdFill.style.width = `${holdValue}%`;
    if (holdValue >= 100) {
      stopHold(true);
      item.traceSeen = true;
      score('craft', 1);
      saveState();
      playTraceSound();
      renderObjectModal();
    }
  }, 80);
}

function stopHold(completed) {
  if (holdTimer) window.clearInterval(holdTimer);
  holdTimer = null;
  if (!completed) {
    holdValue = 0;
    holdFill.style.width = '0%';
  }
}

function saveCurrentClaim() {
  const item = state.objects[currentObjectId];
  if (item.claim === null) return;
  saveState();
  showToast('Claim written. The trace remains unchanged; the interpretation is yours.');
  closeObject();
  render();
}

function openJournal() {
  renderJournal();
  journalModal.classList.remove('hidden');
  journalModal.setAttribute('aria-hidden', 'false');
}

function closeJournal() {
  journalModal.classList.add('hidden');
  journalModal.setAttribute('aria-hidden', 'true');
}

function renderJournal() {
  const claimed = Object.values(OBJECTS).filter(obj => state.objects[obj.id].claim !== null);
  journalClaims.innerHTML = claimed.length
    ? claimed.map(obj => `<div class="journal-item"><strong>${obj.name}</strong><p>${obj.claims[state.objects[obj.id].claim]}</p></div>`).join('')
    : '<p class="empty-state">No object claims have been carried out yet.</p>';

  journalSkills.innerHTML = hasSkill('repairJoins')
    ? `<div class="journal-item"><strong>Repair Joins</strong><p>A break and its repair form separate histories. ${advancedCount()} advanced marks have been noticed.</p></div>`
    : '<p class="empty-state">No named disciplines have been learned yet.</p>';

  journalDream.innerHTML = state.dream.residue.length
    ? state.dream.residue.map(text => `<div class="journal-item"><p>${text}</p></div>`).join('')
    : '<p class="empty-state">No dream residue has been recorded.</p>';
}

function showToast(message) {
  const old = document.querySelector('.toast');
  if (old) old.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  window.setTimeout(() => toast.remove(), 2600);
}

function ensureAudio() {
  if (audio) return audio;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return null;
  const context = new AudioContext();
  const master = context.createGain();
  master.gain.value = 0.06;
  master.connect(context.destination);

  const bufferSize = context.sampleRate * 2;
  const buffer = context.createBuffer(1, bufferSize, context.sampleRate);
  const data = buffer.getChannelData(0);
  let last = 0;
  for (let i = 0; i < bufferSize; i += 1) {
    const white = Math.random() * 2 - 1;
    last = last * 0.985 + white * 0.015;
    data[i] = last * 0.65;
  }
  const rain = context.createBufferSource();
  rain.buffer = buffer;
  rain.loop = true;
  const filter = context.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 900;
  const rainGain = context.createGain();
  rainGain.gain.value = 0;
  rain.connect(filter).connect(rainGain).connect(master);
  rain.start();

  audio = { context, master, rainGain };
  return audio;
}

function startAmbientIfEnabled() {
  if (!state.flags.sound) return;
  const a = ensureAudio();
  if (!a) return;
  if (a.context.state === 'suspended') a.context.resume();
  a.rainGain.gain.setTargetAtTime(0.45, a.context.currentTime, 0.5);
}

function toggleSound() {
  state.flags.sound = !state.flags.sound;
  const a = ensureAudio();
  if (a) {
    if (a.context.state === 'suspended') a.context.resume();
    a.rainGain.gain.setTargetAtTime(state.flags.sound ? 0.45 : 0, a.context.currentTime, 0.3);
  }
  saveState();
  updateHeader();
}

function playChime(frequency = 440) {
  if (!state.flags.sound) return;
  const a = ensureAudio();
  if (!a) return;
  const osc = a.context.createOscillator();
  const gain = a.context.createGain();
  osc.type = 'sine';
  osc.frequency.value = frequency;
  gain.gain.setValueAtTime(0.001, a.context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.14, a.context.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, a.context.currentTime + 0.55);
  osc.connect(gain).connect(a.master);
  osc.start();
  osc.stop(a.context.currentTime + 0.6);
}

function playTraceSound() {
  playChime(330);
  window.setTimeout(() => playChime(440), 130);
  window.setTimeout(() => playChime(554), 280);
}

objectBackdrop.addEventListener('click', closeObject);
objectCloseBtn.addEventListener('click', closeObject);
attendBtn.addEventListener('mousedown', startHold);
attendBtn.addEventListener('mouseup', () => stopHold(false));
attendBtn.addEventListener('mouseleave', () => stopHold(false));
attendBtn.addEventListener('touchstart', event => { event.preventDefault(); startHold(); }, { passive: false });
attendBtn.addEventListener('touchend', () => stopHold(false));
saveClaimBtn.addEventListener('click', saveCurrentClaim);

journalBtn.addEventListener('click', openJournal);
journalBackdrop.addEventListener('click', closeJournal);
journalCloseBtn.addEventListener('click', closeJournal);
soundBtn.addEventListener('click', toggleSound);
resetBtn.addEventListener('click', () => {
  confirmModal.classList.remove('hidden');
  confirmModal.setAttribute('aria-hidden', 'false');
});
cancelResetBtn.addEventListener('click', () => {
  confirmModal.classList.add('hidden');
  confirmModal.setAttribute('aria-hidden', 'true');
});
confirmResetBtn.addEventListener('click', () => {
  localStorage.removeItem(SAVE_KEY);
  state = createInitialState();
  confirmModal.classList.add('hidden');
  confirmModal.setAttribute('aria-hidden', 'true');
  render();
});

document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  if (!objectModal.classList.contains('hidden')) closeObject();
  else if (!journalModal.classList.contains('hidden')) closeJournal();
  else if (!confirmModal.classList.contains('hidden')) confirmModal.classList.add('hidden');
});

const loaded = loadState();
if (!loaded) state = createInitialState();
render();
