// ---------------------------------------------
// 역할 정의
// ---------------------------------------------
const ROLES = [
  { id: 'all', label: '전체' },
  { id: 'lead', label: '리드 에디터' },
  { id: 'assistant', label: '조에디터' },
  { id: 'trailer', label: '트레일러 에디터' },
  { id: 'doc', label: '다큐멘터리 에디터' },
];

// 역할별 썸네일 듀오톤 (CSS 변수 매핑)
const ROLE_TONES = {
  lead: ['--tone-drama-1', '--tone-drama-2'],
  assistant: ['--tone-thriller-1', '--tone-thriller-2'],
  trailer: ['--tone-trailer-1', '--tone-trailer-2'],
  doc: ['--tone-doc-1', '--tone-doc-2'],
};

// ---------------------------------------------
// 작품 데이터 (포트폴리오 예시)
// ---------------------------------------------
const WORKS = [
  {
    id: 1,
    year: 2024,
    title: '밤의 조각들',
    director: '박서준',
    genre: '드라마',
    role: 'lead',
    roleLabel: '리드 에디터',
    runtime: '118분',
    festival: '부산국제영화제 경쟁부문 상영',
    synopsis:
      '기억을 잃어가는 아버지와 그를 돌보는 딸의 마지막 여름을 담은 드라마. 파편적인 기억의 흐름을 편집으로 재구성했습니다.',
  },
  {
    id: 2,
    year: 2023,
    title: '여름, 어른',
    director: '정다은',
    genre: '드라마',
    role: 'lead',
    roleLabel: '리드 에디터',
    runtime: '102분',
    festival: '전주국제영화제 한국경쟁 초청',
    synopsis:
      '세 친구의 마지막 방학을 그린 성장 영화. 인물 간 대사의 리듬을 살리기 위해 롱테이크 위주로 편집했습니다.',
  },
  {
    id: 3,
    year: 2023,
    title: '적막의 시간',
    director: '이도현',
    genre: '스릴러',
    role: 'assistant',
    roleLabel: '조에디터',
    runtime: '110분',
    festival: '',
    synopsis:
      '실종 사건을 쫓는 형사의 이야기. 리드 에디터와 함께 초반 가편집과 사운드 큐 정리를 담당했습니다.',
  },
  {
    id: 4,
    year: 2022,
    title: '빛과 그림자',
    director: '최윤서',
    genre: '다큐멘터리',
    role: 'doc',
    roleLabel: '다큐멘터리 에디터',
    runtime: '89분',
    festival: 'EBS 국제다큐영화제 상영작',
    synopsis:
      '유리공예 장인의 40년을 기록한 다큐멘터리. 방대한 촬영본에서 장인의 손끝 리듬을 중심으로 구조를 설계했습니다.',
  },
  {
    id: 5,
    year: 2022,
    title: '노스탤지어',
    director: '강민호',
    genre: '예고편',
    role: 'trailer',
    roleLabel: '트레일러 에디터',
    runtime: '1분 40초',
    festival: '',
    synopsis: '멜로 영화의 메인 예고편. 음악 큐 포인트에 맞춰 감정선을 점층적으로 쌓아 편집했습니다.',
  },
  {
    id: 6,
    year: 2021,
    title: '우리가 사랑한 계절',
    director: '김하늘',
    genre: '드라마',
    role: 'lead',
    roleLabel: '리드 에디터',
    runtime: '124분',
    festival: '청룡영화상 편집상 후보',
    synopsis:
      '이별 후 재회하는 두 사람의 이야기를 사계절에 걸쳐 그린 작품. 계절의 흐름과 감정의 흐름을 교차 편집했습니다.',
  },
  {
    id: 7,
    year: 2021,
    title: '고요한 방',
    director: '오세훈',
    genre: '드라마',
    role: 'assistant',
    roleLabel: '조에디터',
    runtime: '96분',
    festival: '',
    synopsis: '독립영화 저예산 프로젝트. 로그 정리와 씬 순서 재배열 등 초기 편집 작업에 참여했습니다.',
  },
  {
    id: 8,
    year: 2020,
    title: '바다의 기억',
    director: '신지훈',
    genre: '다큐멘터리',
    role: 'doc',
    roleLabel: '다큐멘터리 에디터',
    runtime: '95분',
    festival: 'DMZ국제다큐멘터리영화제 상영',
    synopsis:
      '사라져가는 어촌 마을과 마지막 뱃사람들의 기록. 인터뷰와 관찰 화면의 균형을 맞추는 데 중점을 두었습니다.',
  },
  {
    id: 9,
    year: 2020,
    title: '런던, 다시',
    director: '한소희',
    genre: '예고편',
    role: 'trailer',
    roleLabel: '트레일러 에디터',
    runtime: '2분 10초',
    festival: '',
    synopsis: '해외 로케이션 로맨스 영화의 티저 예고편. 도시의 풍경과 인물의 표정을 대비시켜 편집했습니다.',
  },
  {
    id: 10,
    year: 2019,
    title: '겨울 손님',
    director: '한소희',
    genre: '드라마',
    role: 'lead',
    roleLabel: '리드 에디터',
    runtime: '105분',
    festival: '',
    synopsis: '오래된 여관을 배경으로 낯선 손님이 가족에게 일으키는 균열을 그린 이야기.',
  },
  {
    id: 11,
    year: 2019,
    title: '안개 속에서',
    director: '윤태호',
    genre: '스릴러',
    role: 'assistant',
    roleLabel: '조에디터',
    runtime: '108분',
    festival: '',
    synopsis: '데뷔 장편 프로젝트. 촬영본 로깅과 1차 스트럭처 편집을 담당했습니다.',
  },
];

// ---------------------------------------------
// 상태
// ---------------------------------------------
let activeRole = 'all';

// ---------------------------------------------
// 렌더링
// ---------------------------------------------
const filterList = document.getElementById('filterList');
const workList = document.getElementById('workList');
const emptyState = document.getElementById('emptyState');

// 상세 모달 요소
const workModal = document.getElementById('workModal');
const workModalThumb = document.getElementById('workModalThumb');
const workModalMeta = document.getElementById('workModalMeta');
const workModalTitle = document.getElementById('workModalTitle');
const workModalDesc = document.getElementById('workModalDesc');
const workModalFacts = document.getElementById('workModalFacts');

function renderFilters() {
  filterList.innerHTML = '';
  ROLES.forEach((role) => {
    const count =
      role.id === 'all' ? WORKS.length : WORKS.filter((w) => w.role === role.id).length;

    const li = document.createElement('li');
    li.className = 'filter__item';

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'filter__btn';
    btn.innerHTML = `${role.label}<span class="filter__count">${count}</span>`;
    btn.setAttribute('aria-pressed', String(role.id === activeRole));
    btn.addEventListener('click', () => {
      activeRole = role.id;
      renderFilters();
      renderWorks();
    });

    li.appendChild(btn);
    filterList.appendChild(li);
  });
}

function renderWorks() {
  const filtered =
    activeRole === 'all' ? WORKS : WORKS.filter((w) => w.role === activeRole);

  workList.innerHTML = '';

  if (filtered.length === 0) {
    emptyState.hidden = false;
    return;
  }
  emptyState.hidden = true;

  filtered.forEach((work) => {
    const [toneAVar, toneBVar] = ROLE_TONES[work.role] || ROLE_TONES.lead;

    const li = document.createElement('li');
    li.className = 'work';
    li.setAttribute('tabindex', '0');
    li.setAttribute('role', 'button');
    li.setAttribute('aria-label', `${work.title} 상세 보기`);

    li.innerHTML = `
      <div class="work__info">
        <div class="work__meta">
          <span>${work.year}</span>
          <span>${work.director} 감독</span>
        </div>
        <h3 class="work__title">${work.title}</h3>
        <p class="work__desc">${work.synopsis}</p>
        <div class="work__facts">
          <span><strong>러닝타임</strong> ${work.runtime}</span>
          ${work.festival ? `<span><strong>비고</strong> ${work.festival}</span>` : ''}
        </div>
      </div>
      <div class="work__thumb">
        <span class="work__thumb-tone" style="--tone-a: var(${toneAVar}); --tone-b: var(${toneBVar});"></span>
        <span class="work__thumb-role">${work.roleLabel}</span>
        <span class="work__thumb-year">${work.year}</span>
      </div>
    `;

    li.addEventListener('click', () => openWorkModal(work));
    li.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openWorkModal(work);
      }
    });

    workList.appendChild(li);
  });
}

// ---------------------------------------------
// 상세 모달
// ---------------------------------------------
function openWorkModal(work) {
  const [toneAVar, toneBVar] = ROLE_TONES[work.role] || ROLE_TONES.lead;

  workModalThumb.innerHTML = `<span class="work-modal__thumb-tone" style="--tone-a: var(${toneAVar}); --tone-b: var(${toneBVar});"></span>`;
  workModalMeta.innerHTML = `<span>${work.year}</span><span>${work.director} 감독</span><span>${work.genre}</span>`;
  workModalTitle.textContent = work.title;
  workModalDesc.textContent = work.synopsis;
  workModalFacts.innerHTML = `
    <span><strong>역할</strong>${work.roleLabel}</span>
    <span><strong>러닝타임</strong>${work.runtime}</span>
    ${work.festival ? `<span><strong>비고</strong>${work.festival}</span>` : ''}
  `;

  workModal.classList.add('is-open');
  workModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
}

function closeWorkModal() {
  workModal.classList.remove('is-open');
  workModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
}

workModal.querySelectorAll('[data-close]').forEach((el) => {
  el.addEventListener('click', closeWorkModal);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && workModal.classList.contains('is-open')) {
    closeWorkModal();
  }
});

renderFilters();
renderWorks();
