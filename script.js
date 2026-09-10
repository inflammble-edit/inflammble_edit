// ---------------------------------------------
// 역할 정의
// ---------------------------------------------
const ROLES = [
  { id: 'all', label: '전체' },
  { id: 'feature', label: '장편영화 편집' },
  { id: 'short', label: '단편영화 편집' },
  { id: 'featureassistant', label: '장편영화 편집보조' },
  { id: 'dramaassistant', label: '드라마 편집보조' },
];

// 역할별 썸네일 듀오톤 (CSS 변수 매핑)
const ROLE_TONES = {
  feature: ['--tone-drama-1', '--tone-drama-2'],
  short: ['--tone-thriller-1', '--tone-thriller-2'],
  featureassistant: ['--tone-trailer-1', '--tone-trailer-2'],
  dramaassistant: ['--tone-doc-1', '--tone-doc-2'],
};

// ---------------------------------------------
// 작품 데이터 (포트폴리오 예시)
// ---------------------------------------------
const WORKS = [
  {
    id: 1,
    image: 'images/ngog.jpg',
    year: 2026,
    title: '내가 그린 오늘 그림은',
    director: '이진영',
    role: 'feature',
    roleLabel: '장편영화 편집',
    runtime: '95분',
    festival: '제22회 제천국제음악영화제 상영 (2026)',
    synopsis:
      '방구석 예술가 아정, 가까스로 동네 문화센터에 그림책 강사로 취업하지만 그녀의 수업은 수강생 현준으로 인해 시작하자마자 폐강 위기에 놓인다.',
  },
  {
    id: 2,
    image: 'images/lastmankind.jpg',
    year: 2026,
    title: '종말의 인간',
    director: '허건',
    role: 'feature',
    roleLabel: '장편영화 편집',
    runtime: '79분',
    festival: '제30회 부천국제판타스틱영화제 부천초이스 코리안 상영 (2026) · 2026 칸 판타스틱7 선정',
    synopsis:
      '대기 오염으로 인류는 방공호에서 살아야 하는 디스토피아적 미래. 과학자 대승은 딸 신아를 대상으로 끊임없이 실험을 한다. 오염된 바깥 환경에서도 생존할 수 있는 새로운 인류는 과연 탄생할 수 있을까?',
  },
  {
    id: 3,
    image: 'images/jd.jpg',
    year: 2026,
    title: '정동',
    director: '안혜림',
    role: 'short',
    roleLabel: '단편영화 편집',
    runtime: '21분',
    festival: '제14회 디아스포라영화제 (2026) - 디아스포라 단편/관객상(폐막작) · 제22회 인천여성영화제 상영 (2026) · 제19회 여성인권영화제 상영 (2026) ',
    synopsis:
      ' 엄마와 함께 살기 위해 한국으로 온 박림이 한 회사에서 일하게 되는 것으로 영화가 시작된다. 조선족인 박림은 그곳에서 한국인도 외국인도 아닌 존재로 취급된다. ‘조선족도 한국 사람 아니냐’는 소리를 듣다가도, 결정적인 순간엔 한국인이 아니라서, 혹은 덜 한국인이라서 중요한 업무에서 배제된다.',
  },
  {
    id: 4,
    image: 'images/door.jpg',
    year: 2022,
    title: '문 앞에 두고 벨X',
    director: '이주영',
    role: 'short',
    roleLabel: '단편영화 편집',
    runtime: '20분',
    festival: '제27회 부산국제영화제 상영 (2022) · 제48회 서울독립영화제 상영 (2022)',
    synopsis:
      '큰맘 먹고 마련한 중고 자전거를 끌고 배달 일에 나선 지호는 어느 밤 우연찮은 배달 실수로 동분서주하게 된다. 일을 하면 할수록 더 가난해지는 역설적인 날. 골목 어귀마다 배달 라이더와 마주칠 수 있는 시대에 어딘지 익숙한 상황, 있을 법한 일들이 펼쳐진다.',
  },
  {
    id: 5,
    image: 'images/light.jpg',
    year: 2022,
    title: '빛',
    director: '국도원',
    role: 'short',
    roleLabel: '단편영화 편집',
    runtime: '18분',
    festival: '제48회 서울독립영화제 상영 (2022)',
    synopsis: '가영은 밤마다 고장 난 창문으로 몰래 쓰레기를 버린 사람을 찾아 나선다.',
  },
  {
    id: 6,
    image: 'images/layers.jpg',
    year: 2022,
    title: '겹겹이 여름',
    director: '백시원',
    role: 'short',
    roleLabel: '단편영화 편집',
    runtime: '34분',
    festival: '제23회 전주국제영화제 상영, 왓챠가주목한단편상 수상 (2022) · 제48회 서울독립영화제 상영 (2022)',
    synopsis:
      '여름날, 헤어진 연인이 우연히 마주친다. 이들의 우연한 만남은 둘 간의 10년의 세월을 거쳐 세 번의 각기 다른 여름날로 이어진다.',
  },
  {
    id: 7,
    image: 'images/gaus.jpg',
    year: 2022,
    title: '가우스전자',
    director: '박준수',
    role: 'dramaassistant',
    roleLabel: '드라마 편집보조',
    runtime: '12부작',
    festival: '편성 ENA 2022.09.30. ~ 2022.11.05. (금, 토) 오후 09:00',
    synopsis: '다국적 문어발 기업 가우스전자 내 대기발령소 ‘마케팅3부’를 배경으로 펼쳐지는 조금 별난 사람들의 웃음과 공감의 직장인 이야기',
  },
  {
    id: 8,
    image: 'images/kingmaker.jpg',
    year: 2022,
    title: '킹메이커',
    director: '변성현',
    role: 'featureassistant',
    roleLabel: '장편영화 편집보조',
    runtime: '123분',
    festival: '',
    synopsis:
      '세상을 바꾸기 위해 도전하는 네 번 낙선한 정치인 ‘김운범’  앞에 그와 뜻을 함께하고자 선거 전략가 ‘서창대’가 찾아온다. 열세인 상황 속에서 서창대는 아무도 상상하지 못한 선거 전략을 펼치고 ‘김운범’은 선거에 연이어 승리하며, 당을 대표하는 대통령 후보까지 올라서게 된다. 대통령 선거를 향한 본격적인 행보가 시작되고 그들은 당선을 위해 총력을 기울인다. 그러던 중 ‘김운범’ 자택에 폭발물이 터지는 사건이 발생하고 용의자로 ‘서창대’가 지목되면서 둘의 관계는 새로운 국면을 맞이하게 되는데... 치열한 선거판,그 중심에 있던 두 남자의 이야기가 시작된다!',
  },
  {
    id: 9,
    image: 'images/seobok.jpg',
    year: 2021,
    title: '서복',
    director: '이용주',
    role: 'featureassistant',
    roleLabel: '장편영화 편집보조',
    runtime: '114분',
    festival: '',
    synopsis: '과거 트라우마를 안겨준 사건으로 인해 외부와 단절된 삶을 살아가고 있는 전직 요원 ‘기헌’은 정보국으로부터 거절할 수 없는 마지막 제안을 받는다. 줄기세포 복제와 유전자 조작을 통해 만들어진 실험체 ‘서복’을 안전하게 이동시키는 일을 맡게 된 것. 하지만 임무 수행과 동시에 예기치 못한 공격을 받게 되고, 가까스로 빠져나온 ‘기헌’과 ‘서복‘은 둘만의 특별한 동행을 시작하게 된다. 실험실 밖 세상을 처음 만나 모든 것이 신기하기만 한 ‘서복‘과 생애 마지막 임무를 서둘러 마무리 짓고 싶은 ‘기헌’은 가는 곳마다 사사건건 부딪친다. 한편, 인류의 구원이자 재앙이 될 수도 있는 ‘서복’을 차지하기 위해 나선 여러 집단의 추적은 점점 거세지고 이들은 결국 피할 수 없는 선택을 하게 되는데…',
  },
  {
    id: 10,
    image: 'images/die.jpg',
    year: 2020,
    title: '내가 죽던 날',
    director: '박지완',
    role: 'featureassistant',
    roleLabel: '장편영화 편집보조',
    runtime: '116분',
    festival: '',
    synopsis: '태풍이 몰아치던 밤, 외딴섬 절벽 끝에서 유서 한 장만을 남긴 채 소녀가 사라진다. 오랜 공백 이후 복직을 앞둔 형사 ‘현수’는 범죄 사건의 주요 증인이었던 소녀의 실종을 자살로 종결 짓기 위해 그곳으로 향한다. 소녀의 보호를 담당하던 전직 형사, 연락이 두절된 가족, 그리고 소녀를 마지막으로 목격한 마을 주민 ‘순천댁’을 만나 그녀의 행적을 추적해 나가던 '현수'는 소녀가 홀로 감내했을 고통에 가슴 아파한다. 수사가 진행될수록 자신의 모습과 닮아있는 소녀에게 점점 더 몰두하게 된 ‘현수’는 사건 이면에 감춰진 진실 앞에 한걸음 다가서게 되는데…',
  },
  {
    id: 11,
    image: 'images/okmadame.jpg',
    year: 2020,
    title: '오케이 마담',
    director: '이철하',
    role: 'featureassistant',
    roleLabel: '장편영화 편집보조',
    runtime: '100분',
    festival: '',
    synopsis: '인생 최고의 행운인 줄 알았다, 놈들이 타기 전까지.. 극강의 쫄깃함으로 빠른 완판을 기록하는 꽈배기 맛집 사장 '미영'은 컴퓨터 수리 전문가 '석환'의 남다른 외조로 하와이 여행에 당첨되고, 난생 처음 해외 여행을 떠나게 된다. 하지만 비밀요원을 쫓는 테러리스트들도 같은 비행기에 오르고 꿈만 같았던 여행은 아수라장이 된다. 난데없는 비행기 납치 사건의 유일한 해결사가 되어버린 부부. 평범했던 과거는 접어두고, 숨겨왔던 내공을 펼치며 인질이 된 승객을 구하기 시작한다!',
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
    const [toneAVar, toneBVar] = ROLE_TONES[work.role] || ROLE_TONES.feature;

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
        <img
          src="${work.image}"
          alt="${work.title} 스틸컷"
          class="work__thumb-img"
          onerror="this.style.display='none'"
        />
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
  if (!workModal) return;

  const [toneAVar, toneBVar] = ROLE_TONES[work.role] || ROLE_TONES.feature;

  workModalThumb.innerHTML = `
    <span class="work-modal__thumb-tone" style="--tone-a: var(${toneAVar}); --tone-b: var(${toneBVar});"></span>
    <img
      src="${work.image}"
      alt="${work.title} 스틸컷"
      class="work-modal__thumb-img"
      onerror="this.style.display='none'"
    />
  `;
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
  if (!workModal) return;
  workModal.classList.remove('is-open');
  workModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
}

if (workModal) {
  workModal.querySelectorAll('[data-close]').forEach((el) => {
    el.addEventListener('click', closeWorkModal);
  });
}

document.addEventListener('keydown', (e) => {
  if (workModal && e.key === 'Escape' && workModal.classList.contains('is-open')) {
    closeWorkModal();
  }
});

renderFilters();
renderWorks();
