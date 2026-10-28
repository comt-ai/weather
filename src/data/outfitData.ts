/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Gender, StyleCategory, OutfitItem, OutfitRecommendation } from '../types/weather';

export const OUTFIT_IMAGES = {
  maleCasual: '/src/assets/images/outfit_male_look_1793145030031.jpg',
  femaleCasual: '/src/assets/images/outfit_female_look_1793145030553.jpg',
  maleFormal: '/src/assets/images/outfit_male_formal_1793145030759.jpg',
  femaleFormal: '/src/assets/images/outfit_female_formal_1793145031051.jpg',
};

export interface TemperatureBand {
  minTemp: number;
  maxTemp: number;
  tierName: string;
  seasonLabel: string;
  summary: string;
  colors: { name: string; hex: string; label: string }[];
  men: Record<StyleCategory, {
    items: OutfitItem[];
    tips: string[];
  }>;
  women: Record<StyleCategory, {
    items: OutfitItem[];
    tips: string[];
  }>;
}

export const TEMPERATURE_BANDS: TemperatureBand[] = [
  {
    minTemp: 28,
    maxTemp: 50,
    tierName: '28°C 이상',
    seasonLabel: '한여름 · 폭염',
    summary: '통기성과 땀 흡수가 뛰어난 린넨, 시어서커 소재의 가벼운 옷차림이 필수입니다.',
    colors: [
      { name: 'Pure White', hex: '#FFFFFF', label: '화이트' },
      { name: 'Sky Blue', hex: '#BAE6FD', label: '스카이블루' },
      { name: 'Sandy Beige', hex: '#F5F5DC', label: '라이트베이지' },
      { name: 'Sage Green', hex: '#CBD5E1', label: '세이지' }
    ],
    men: {
      casual: {
        items: [
          { id: 'm-28-top', name: '오버핏 린넨 반팔 셔츠', category: 'top', categoryLabel: '상의', description: '바람이 잘 통하는 시원한 린넨 셔츠', warmthLevel: 1 },
          { id: 'm-28-bot', name: '버뮤다 치노 하프팬츠', category: 'bottom', categoryLabel: '하의', description: '무릎 기장의 여유로운 실루엣 쇼츠', warmthLevel: 1 },
          { id: 'm-28-shoe', name: '가죽 스트랩 샌들 / 캔버스 뮬', category: 'shoes', categoryLabel: '신발', description: '발이 쾌적한 통기성 샌들', warmthLevel: 1 },
          { id: 'm-28-acc', name: '자외선 차단 린넨 버킷햇 & 선글라스', category: 'acc', categoryLabel: '악세서리', description: '강한 햇볕으로부터 피부 보호', warmthLevel: 1 }
        ],
        tips: ['실내 에어컨 냉방병 대비용 가벼운 셔츠를 휴대하세요.', '짙은 색보다 빛을 반사하는 밝은 톤을 추천합니다.']
      },
      office: {
        items: [
          { id: 'm-28-o-top', name: '쿨맥스 기능성 피케 폴로셔츠', category: 'top', categoryLabel: '상의', description: '땀 배출이 빠른 단정한 비즈니스 폴로', warmthLevel: 1 },
          { id: 'm-28-o-bot', name: '서머 린넨 블렌드 슬랙스', category: 'bottom', categoryLabel: '하의', description: '달라붙지 않는 테이퍼드 핏', warmthLevel: 1 },
          { id: 'm-28-o-shoe', name: '통기성 페니 로퍼', category: 'shoes', categoryLabel: '신발', description: '맨발 감촉의 가벼운 드레스 로퍼', warmthLevel: 1 },
          { id: 'm-28-o-acc', name: '가벼운 브리프케이스 & 휴대용 손선풍기', category: 'acc', categoryLabel: '악세서리', description: '출퇴근 땀 관리 필수품', warmthLevel: 1 }
        ],
        tips: ['노타이 비즈니스 캐주얼로 목 부위 통기성을 확보하세요.']
      },
      minimal: {
        items: [
          { id: 'm-28-m-top', name: '수피마 코튼 무지 반팔 티셔츠', category: 'top', categoryLabel: '상의', description: '실켓 가공의 정갈한 화이트 반팔티', warmthLevel: 1 },
          { id: 'm-28-m-bot', name: '라이트웨이트 와이드 코튼 쇼츠', category: 'bottom', categoryLabel: '하의', description: '단정하고 심플한 미니멀 쇼츠', warmthLevel: 1 },
          { id: 'm-28-m-shoe', name: '미니멀 가죽 슬라이드', category: 'shoes', categoryLabel: '신발', description: '깔끔한 디자인의 가죽 샌들', warmthLevel: 1 },
          { id: 'm-28-m-acc', name: '실버 메탈 워치 & 슬림 틴트 선글라스', category: 'acc', categoryLabel: '악세서리', description: '시원하고 세련된 포인트', warmthLevel: 1 }
        ],
        tips: ['단색 톤온톤 매치로 시각적으로 차분하고 시원한 느낌을 줍니다.']
      },
      sporty: {
        items: [
          { id: 'm-28-s-top', name: '드라이핏 퀵드라이 그래픽 반팔티', category: 'top', categoryLabel: '상의', description: '흡한속건 기능성 스포츠 웨어', warmthLevel: 1 },
          { id: 'm-28-s-bot', name: '나일론 트레이닝 숏팬츠', category: 'bottom', categoryLabel: '하의', description: '방수 및 건조가 빠른 나일론 팬츠', warmthLevel: 1 },
          { id: 'm-28-s-shoe', name: '메쉬 러닝화 / 스포티 샌들', category: 'shoes', categoryLabel: '신발', description: '땀 흡수가 적고 쿠셔닝이 좋은 슈즈', warmthLevel: 1 },
          { id: 'm-28-s-acc', name: '스포츠 볼캡 & 나일론 사코슈백', category: 'acc', categoryLabel: '악세서리', description: '야외 활동 시 유용한 가방', warmthLevel: 1 }
        ],
        tips: ['수분 보충 텀블러를 챙기시고 자외선 차단제를 꼼꼼히 바르세요.']
      }
    },
    women: {
      casual: {
        items: [
          { id: 'w-28-top', name: '루즈핏 린넨 슬리브리스 블라우스', category: 'top', categoryLabel: '상의', description: '피부에 닿는 촉감이 시원한 린넨 탑', warmthLevel: 1 },
          { id: 'w-28-bot', name: '플리츠 롱 밴딩 스커트 / 와이드 린넨 팬츠', category: 'bottom', categoryLabel: '하의', description: '바람이 잘 통하는 쾌적한 핏', warmthLevel: 1 },
          { id: 'w-28-shoe', name: '스트랩 플랫 샌들', category: 'shoes', categoryLabel: '신발', description: '발이 편안하고 시원한 여름 샌들', warmthLevel: 1 },
          { id: 'w-28-acc', name: '라피아 크로스백 & 자외선 차단 양산', category: 'acc', categoryLabel: '악세서리', description: '햇빛을 차단하는 필수 아이템', warmthLevel: 1 }
        ],
        tips: ['강한 냉방 공간을 위해 얇은 쉬폰 가디건을 가방에 넣어두세요.']
      },
      office: {
        items: [
          { id: 'w-28-o-top', name: '시어서커 숏 슬리브 테일러드 재킷 탑', category: 'top', categoryLabel: '상의', description: '단정하면서도 몸에 붙지 않는 텍스처', warmthLevel: 1 },
          { id: 'w-28-o-bot', name: '하이웨이스트 쿨링 와이드 슬랙스', category: 'bottom', categoryLabel: '하의', description: '우아한 드레이프성의 여름 슬랙스', warmthLevel: 1 },
          { id: 'w-28-o-shoe', name: '블록 힐 슬링백 펌프스', category: 'shoes', categoryLabel: '신발', description: '시원하면서도 포멀한 오피스 슈즈', warmthLevel: 1 },
          { id: 'w-28-o-acc', name: '미니멀 레더 토트백 & 실크 트윌리 스카프', category: 'acc', categoryLabel: '악세서리', description: '감각적인 여름 오피스룩 완성', warmthLevel: 1 }
        ],
        tips: ['모달 또는 텐셀 소재의 이너웨어를 레이어드해 땀 흡수를 돕습니다.']
      },
      minimal: {
        items: [
          { id: 'w-28-m-top', name: '보트넥 코튼 슬리브리스 탑', category: 'top', categoryLabel: '상의', description: '단정한 넥라인의 미니멀 나시 탑', warmthLevel: 1 },
          { id: 'w-28-m-bot', name: '스트레이트 핏 린넨 트라우저', category: 'bottom', categoryLabel: '하의', description: '군더더기 없는 미니멀 실루엣', warmthLevel: 1 },
          { id: 'w-28-m-shoe', name: '미니멀 토링 레더 슬리퍼', category: 'shoes', categoryLabel: '신발', description: '가죽 소재의 고급스러운 슬라이드', warmthLevel: 1 },
          { id: 'w-28-m-acc', name: '클래식 스퀘어 선글라스 & 골드 미니 링', category: 'acc', categoryLabel: '악세서리', description: '절제된 포인트 액세서리', warmthLevel: 1 }
        ],
        tips: ['베이지 & 크림 톤온톤으로 우아하고 청량한 분위기를 연출하세요.']
      },
      sporty: {
        items: [
          { id: 'w-28-s-top', name: '크롭 쿨 에어로 반팔 티셔츠', category: 'top', categoryLabel: '상의', description: '가볍고 통기성이 우수한 애슬레저 탑', warmthLevel: 1 },
          { id: 'w-28-s-bot', name: '바이커 쇼츠 / 쿨링 조거 팬츠', category: 'bottom', categoryLabel: '하의', description: '신축성과 건조력이 뛰어난 하의', warmthLevel: 1 },
          { id: 'w-28-s-shoe', name: '경량 메쉬 스니커즈', category: 'shoes', categoryLabel: '신발', description: '통풍 구멍이 많은 시원한 운동화', warmthLevel: 1 },
          { id: 'w-28-s-acc', name: '패브릭 바이저 썬캡 & 나일론 힙색', category: 'acc', categoryLabel: '악세서리', description: '두 손이 자유로운 액티브 코디', warmthLevel: 1 }
        ],
        tips: ['자외선 노출이 심한 날에는 얇은 UV 차단 팔토시도 좋습니다.']
      }
    }
  },
  {
    minTemp: 23,
    maxTemp: 27,
    tierName: '23°C ~ 27°C',
    seasonLabel: '초여름 · 늦여름',
    summary: '활동하기 좋지만 한낮에는 따뜻한 날씨. 반팔에 얇은 셔츠나 면바지를 조합하기 좋습니다.',
    colors: [
      { name: 'Oatmeal', hex: '#E6DEC9', label: '오트밀' },
      { name: 'Denim Light', hex: '#93C5FD', label: '라이트데님' },
      { name: 'Olive Light', hex: '#A3B18A', label: '소프트올리브' },
      { name: 'Crisp White', hex: '#FAFAFA', label: '크리스프화이트' }
    ],
    men: {
      casual: {
        items: [
          { id: 'm-23-top', name: '베이직 코튼 반팔티 + 얇은 오픈카라 셔츠', category: 'top', categoryLabel: '상의', description: '가볍게 걸치기 좋은 단추 셔츠 레이어드', warmthLevel: 2 },
          { id: 'm-23-bot', name: '테이퍼드 코튼 치노 팬츠', category: 'bottom', categoryLabel: '하의', description: '편안한 핏감의 사계절 면바지', warmthLevel: 2 },
          { id: 'm-23-shoe', name: '독일군 화이트 스니커즈', category: 'shoes', categoryLabel: '신발', description: '어디에나 잘 어울리는 클래식 스니커즈', warmthLevel: 2 },
          { id: 'm-23-acc', name: '코튼 캔버스 토트백 & 가죽 시계', category: 'acc', categoryLabel: '악세서리', description: '깔끔한 데일리 가방', warmthLevel: 1 }
        ],
        tips: ['낮에는 반팔 단독으로, 저녁에는 얇은 셔츠를 걸쳐 일교차에 대비하세요.']
      },
      office: {
        items: [
          { id: 'm-23-o-top', name: '린넨-코튼 블렌드 긴팔 셔츠', category: 'top', categoryLabel: '상의', description: '소매를 롤업해 입기 좋은 셔츠', warmthLevel: 2 },
          { id: 'm-23-o-bot', name: '슬림 스트레이트 울-혼방 슬랙스', category: 'bottom', categoryLabel: '하의', description: '구김 적고 쾌적한 비즈니스 팬츠', warmthLevel: 2 },
          { id: 'm-23-o-shoe', name: '스웨이드 테슬 로퍼', category: 'shoes', categoryLabel: '신발', description: '단정하고 세련된 인상의 로퍼', warmthLevel: 2 },
          { id: 'm-23-o-acc', name: '슬림 레더 벨트 & 서류 가방', category: 'acc', categoryLabel: '악세서리', description: '톤을 맞춘 가죽 소품', warmthLevel: 1 }
        ],
        tips: ['셔츠 소매를 두세 번 롤업하면 활동성과 스타일을 동시에 살릴 수 있습니다.']
      },
      minimal: {
        items: [
          { id: 'm-23-m-top', name: '하프 슬리브 니트 폴로', category: 'top', categoryLabel: '상의', description: '짜임이 정교한 카라 니트', warmthLevel: 2 },
          { id: 'm-23-m-bot', name: '원턱 세미와이드 슬랙스', category: 'bottom', categoryLabel: '하의', description: '자연스럽게 떨어지는 주름 슬랙스', warmthLevel: 2 },
          { id: 'm-23-m-shoe', name: '더비 슈즈 / 미니멀 레더 스니커즈', category: 'shoes', categoryLabel: '신발', description: '모던한 블랙 or 화이트 레더', warmthLevel: 2 },
          { id: 'm-23-m-acc', name: '가죽 카드지갑 & 미니멀 시계', category: 'acc', categoryLabel: '악세서리', description: '절제된 미니멀 액세서리', warmthLevel: 1 }
        ],
        tips: ['상의를 바지 안에 깔끔하게 넣어 입어 다리가 길어 보이도록 연출해보세요.']
      },
      sporty: {
        items: [
          { id: 'm-23-s-top', name: '오버사이즈 헤비웨이트 반팔티', category: 'top', categoryLabel: '상의', description: '체형 보완이 잘 되는 탄탄한 핏', warmthLevel: 2 },
          { id: 'm-23-s-bot', name: '와이드 카고 조거 팬츠', category: 'bottom', categoryLabel: '하의', description: '트렌디한 포켓 디테일의 하의', warmthLevel: 2 },
          { id: 'm-23-s-shoe', name: '레트로 러닝 스니커즈', category: 'shoes', categoryLabel: '신발', description: '활동적인 감성의 스트릿 슈즈', warmthLevel: 2 },
          { id: 'm-23-s-acc', name: '캠프캡 & 크로스 메신저백', category: 'acc', categoryLabel: '악세서리', description: '스포티한 외출 소품', warmthLevel: 1 }
        ],
        tips: ['바지 밑단을 조거 형태로 조여 신발 실루엣을 강조해보세요.']
      }
    },
    women: {
      casual: {
        items: [
          { id: 'w-23-top', name: '스트라이프 보트넥 티셔츠', category: 'top', categoryLabel: '상의', description: '프렌치 시크 감성의 경쾌한 티셔츠', warmthLevel: 2 },
          { id: 'w-23-bot', name: '라이트 블루 스트레이트 데님', category: 'bottom', categoryLabel: '하의', description: '밑위가 긴 편안한 연청 청바지', warmthLevel: 2 },
          { id: 'w-23-shoe', name: '발레리나 플랫 슈즈', category: 'shoes', categoryLabel: '신발', description: '가볍고 우아한 라운드 플랫', warmthLevel: 2 },
          { id: 'w-23-acc', name: '어깨에 걸치는 얇은 니트 가디건', category: 'acc', categoryLabel: '악세서리', description: '저녁 찬바람 대비 및 코디 포인트', warmthLevel: 2 }
        ],
        tips: ['가디건을 어깨에 살짝 둘러 머플러처럼 연출하면 보온성과 멋을 동시에 챙깁니다.']
      },
      office: {
        items: [
          { id: 'w-23-o-top', name: '파스텔 톤 실크 블라우스', category: 'top', categoryLabel: '상의', description: '은은한 광택의 넥타이/카라 블라우스', warmthLevel: 2 },
          { id: 'w-23-o-bot', name: 'H라인 미디 슬릿 스커트', category: 'bottom', categoryLabel: '하의', description: '활동성이 확보된 우아한 미디 기장', warmthLevel: 2 },
          { id: 'w-23-o-shoe', name: '미들 힐 펌프스 (4-5cm)', category: 'shoes', categoryLabel: '신발', description: '장시간 착용에도 편안한 굽 높이', warmthLevel: 2 },
          { id: 'w-23-o-acc', name: '스퀘어 레더 숄더백 & 펄 이어링', category: 'acc', categoryLabel: '악세서리', description: '단정하고 정돈된 비즈니스 룩', warmthLevel: 1 }
        ],
        tips: ['실내 온도가 낮을 수 있으니 책상 위에 둘 자켓을 한 벌 준비해두세요.']
      },
      minimal: {
        items: [
          { id: 'w-23-m-top', name: '하프 슬리브 코튼 셔츠 드레스', category: 'top', categoryLabel: '상의', description: '원피스 형태로 단독 착용 가능한 셔츠룩', warmthLevel: 2 },
          { id: 'w-23-m-bot', name: '이너 슬립 (원피스 일체형)', category: 'bottom', categoryLabel: '하의', description: '깔끔한 비침 방지', warmthLevel: 1 },
          { id: 'w-23-m-shoe', name: '스퀘어토 레더 뮬', category: 'shoes', categoryLabel: '신발', description: '슬림한 앞코의 세련된 뮬', warmthLevel: 2 },
          { id: 'w-23-m-acc', name: '슬림 레더 벨트 & 미니 토트백', category: 'acc', categoryLabel: '악세서리', description: '허리 라인을 잡아주는 포인트', warmthLevel: 1 }
        ],
        tips: ['벨트로 허리 실루엣을 살리거나 풀어서 오버사이즈 튜닉 룩으로 연출하세요.']
      },
      sporty: {
        items: [
          { id: 'w-23-s-top', name: '오버핏 럭비 카라 반팔티', category: 'top', categoryLabel: '상의', description: '스포티한 배색 카라 포인트', warmthLevel: 2 },
          { id: 'w-23-s-bot', name: '플리츠 테니스 스커트 or 와이드 트레이닝 팬츠', category: 'bottom', categoryLabel: '하의', description: '활동성 높은 스포티 하의', warmthLevel: 2 },
          { id: 'w-23-s-shoe', name: '레트로 코트화 / 화이트 스니커즈', category: 'shoes', categoryLabel: '신발', description: '클래식한 테니스화 스타일', warmthLevel: 2 },
          { id: 'w-23-s-acc', name: '헤어 스크런치 & 코튼 에코백', category: 'acc', categoryLabel: '악세서리', description: '경쾌하고 실용적인 소품', warmthLevel: 1 }
        ],
        tips: ['흰색 크루 삭스를 발목 위까지 올려 신으면 트렌디한 무드가 완성됩니다.']
      }
    }
  },
  {
    minTemp: 20,
    maxTemp: 22,
    tierName: '20°C ~ 22°C',
    seasonLabel: '완연한 봄 · 초가을',
    summary: '선선하고 가장 쾌적한 계절. 긴팔 티셔츠, 가디건, 셔츠 단독 또는 가벼운 외투 레이어드가 좋습니다.',
    colors: [
      { name: 'Warm Taupe', hex: '#B39D82', label: '웜토프' },
      { name: 'Soft Navy', hex: '#1E293B', label: '소프트네이비' },
      { name: 'Cream Ivory', hex: '#FAF5EE', label: '크림아이보리' },
      { name: 'Olive Green', hex: '#588157', label: '카키올리브' }
    ],
    men: {
      casual: {
        items: [
          { id: 'm-20-top', name: '와플 조직 롱슬리브 티셔츠 + 옥스포드 셔츠', category: 'top', categoryLabel: '상의', description: '단단하고 탄탄한 코튼 긴팔 셔츠', warmthLevel: 2 },
          { id: 'm-20-bot', name: '레귤러 핏 원워싱 중청 데님', category: 'bottom', categoryLabel: '하의', description: '사계절 착용하기 좋은 클래식 데님', warmthLevel: 2 },
          { id: 'm-20-shoe', name: '그레이 스웨이드 스니커즈', category: 'shoes', categoryLabel: '신발', description: '차분한 색감의 캐주얼 운동화', warmthLevel: 2 },
          { id: 'm-20-acc', name: '가벼운 나일론 바람막이 (아침/저녁용)', category: 'acc', categoryLabel: '악세서리', description: '가방에 접어 넣기 편한 윈드브레이커', warmthLevel: 2 }
        ],
        tips: ['셔츠 단추를 한두 개 풀고 소매를 걷으면 자연스럽고 멋스럽습니다.']
      },
      office: {
        items: [
          { id: 'm-20-o-top', name: '드레스 셔츠 + 경량 메리노울 니트 조끼', category: 'top', categoryLabel: '상의', description: '체온 조절에 탁월한 베스트 코디', warmthLevel: 3 },
          { id: 'm-20-o-bot', name: '울 블렌드 차콜 슬랙스', category: 'bottom', categoryLabel: '하의', description: '구김 없이 깔끔한 출근 룩', warmthLevel: 2 },
          { id: 'm-20-o-shoe', name: '다크 브라운 더비 슈즈', category: 'shoes', categoryLabel: '신발', description: '신뢰감을 주는 포멀 슈즈', warmthLevel: 2 },
          { id: 'm-20-o-acc', name: '가죽 브리프케이스 & 메탈 펜슬 시계', category: 'acc', categoryLabel: '악세서리', description: '프로페셔널한 비즈니스 무드', warmthLevel: 1 }
        ],
        tips: ['니트 베스트(조끼)는 낮에는 덥지 않고 아침저녁 쌀쌀할 때 몸통 체온을 지켜줍니다.']
      },
      minimal: {
        items: [
          { id: 'm-20-m-top', name: '모크넥 롱슬리브 티셔츠', category: 'top', categoryLabel: '상의', description: '반목 형태로 미니멀한 실루엣', warmthLevel: 2 },
          { id: 'm-20-m-bot', name: '블랙 세미와이드 슬랙스', category: 'bottom', categoryLabel: '하의', description: '다리가 길어 보이는 깔끔한 라인', warmthLevel: 2 },
          { id: 'm-20-m-shoe', name: '스퀘어토 첼시 부츠 or 로퍼', category: 'shoes', categoryLabel: '신발', description: '군더더기 없는 가죽 슈즈', warmthLevel: 2 },
          { id: 'm-20-m-acc', name: '미니멀 레더 크로스백', category: 'acc', categoryLabel: '악세서리', description: '스마트폰과 지갑을 담는 컴팩트 백', warmthLevel: 1 }
        ],
        tips: ['올블랙이나 모노톤 컬러 조합에 은은한 메탈 포인트로 정갈함을 더하세요.']
      },
      sporty: {
        items: [
          { id: 'm-20-s-top', name: '하프 집업 아노락 윈드브레이커', category: 'top', categoryLabel: '상의', description: '방풍 기능이 있는 스포티 탑', warmthLevel: 2 },
          { id: 'm-20-s-bot', name: '나일론 트랙 조거 팬츠', category: 'bottom', categoryLabel: '하의', description: '가볍고 발목을 잡아주는 핏', warmthLevel: 2 },
          { id: 'm-20-s-shoe', name: '트레일 러닝화', category: 'shoes', categoryLabel: '신발', description: '접지력이 좋고 트렌디한 슈즈', warmthLevel: 2 },
          { id: 'm-20-s-acc', name: '볼캡 & 메쉬 크로스 바디백', category: 'acc', categoryLabel: '악세서리', description: '활동적인 도심 외출용', warmthLevel: 1 }
        ],
        tips: ['일교차가 클 때 아노락의 지퍼를 열거나 닫아 온도를 조절하세요.']
      }
    },
    women: {
      casual: {
        items: [
          { id: 'w-20-top', name: '소프트 코튼 브이넥 니트 가디건', category: 'top', categoryLabel: '상의', description: '단추를 채워 니트처럼 연출 가능한 가디건', warmthLevel: 2 },
          { id: 'w-20-bot', name: '세미 와이드 크림진 / 중청 부츠컷 데님', category: 'bottom', categoryLabel: '하의', description: '다리 라인이 예쁜 탄탄한 데님', warmthLevel: 2 },
          { id: 'w-20-shoe', name: '화이트 레더 스니커즈', category: 'shoes', categoryLabel: '신발', description: '발이 편한 산뜻한 기본 스니커즈', warmthLevel: 2 },
          { id: 'w-20-acc', name: '캔버스 쇼퍼백 & 미니멀 실버 네크리스', category: 'acc', categoryLabel: '악세서리', description: '내추럴한 데일리 감성', warmthLevel: 1 }
        ],
        tips: ['단추가 달린 가디건은 언제든 벗어서 가방에 넣거나 어깨에 걸칠 수 있어 최적입니다.']
      },
      office: {
        items: [
          { id: 'w-20-o-top', name: '테일러드 노카라 싱글 자켓 + 이너 텐셀 티셔츠', category: 'top', categoryLabel: '상의', description: '가볍고 유연한 소프트 자켓', warmthLevel: 3 },
          { id: 'w-20-o-bot', name: '스트레이트 핏 핀턱 슬랙스', category: 'bottom', categoryLabel: '하의', description: '주름이 잘 가지 않는 데일리 정장 바지', warmthLevel: 2 },
          { id: 'w-20-o-shoe', name: '클래식 포인티드 토 로퍼', category: 'shoes', categoryLabel: '신발', description: '지적인 느낌의 페니 로퍼', warmthLevel: 2 },
          { id: 'w-20-o-acc', name: '레더 숄더백 & 클래식 골드 워치', category: 'acc', categoryLabel: '악세서리', description: '단정하고 우아한 출근 룩', warmthLevel: 1 }
        ],
        tips: ['자켓 안에 반팔이나 얇은 롱슬리브를 입어 기온 상승 시 벗을 수 있게 하세요.']
      },
      minimal: {
        items: [
          { id: 'w-20-m-top', name: '파인 게이지 울 긴팔 니트 탑', category: 'top', categoryLabel: '상의', description: '몸선을 자연스럽게 감싸는 미니멀 니트', warmthLevel: 2 },
          { id: 'w-20-m-bot', name: 'A라인 플리츠 롱 스커트', category: 'bottom', categoryLabel: '하의', description: '걸을 때 실루엣이 우아한 스커트', warmthLevel: 2 },
          { id: 'w-20-m-shoe', name: '스퀘어 토 플랫 뮬', category: 'shoes', categoryLabel: '신발', description: '단정하고 모던한 감성 슈즈', warmthLevel: 2 },
          { id: 'w-20-m-acc', name: '바게트 숄더백', category: 'acc', categoryLabel: '악세서리', description: '깔끔한 기하학적 형태의 백', warmthLevel: 1 }
        ],
        tips: ['모노톤 또는 어스톤(Earth-tone) 계열의 통일감 있는 컬러를 추천합니다.']
      },
      sporty: {
        items: [
          { id: 'w-20-s-top', name: '크롭 집업 후드 + 이너 스포츠 탑', category: 'top', categoryLabel: '상의', description: '경쾌한 길이감의 편안한 후디', warmthLevel: 2 },
          { id: 'w-20-s-bot', name: '와이드 스웨트팬츠 (조거 스트링 겸용)', category: 'bottom', categoryLabel: '하의', description: '포근하고 트렌디한 츄리닝 팬츠', warmthLevel: 2 },
          { id: 'w-20-s-shoe', name: '어글리 스니커즈 / 청키 슈즈', category: 'shoes', categoryLabel: '신발', description: '볼륨감 있는 스포티 운동화', warmthLevel: 2 },
          { id: 'w-20-s-acc', name: '나일론 백팩 & 니트 비니', category: 'acc', categoryLabel: '악세서리', description: '편안한 주말 나들이용 코디', warmthLevel: 1 }
        ],
        tips: ['상의를 크롭으로 선택하면 스웨트팬츠도 둔해 보이지 않고 비율이 좋아 보입니다.']
      }
    }
  },
  {
    minTemp: 17,
    maxTemp: 19,
    tierName: '17°C ~ 19°C',
    seasonLabel: '선선한 환절기',
    summary: '아침저녁으로 찬 바람이 불기 시작합니다. 맨투맨, 가디건, 도톰한 셔츠, 자켓이 제격입니다.',
    colors: [
      { name: 'Camel Brown', hex: '#C19A6B', label: '카멜브라운' },
      { name: 'Heather Grey', hex: '#9CA3AF', label: '헤더그레이' },
      { name: 'Deep Burgundy', hex: '#800020', label: '버건디' },
      { name: 'Forest Green', hex: '#2D4A3E', label: '포레스트그린' }
    ],
    men: {
      casual: {
        items: [
          { id: 'm-17-top', name: '헤비 코튼 스웨트셔츠 (맨투맨) + 흰 티 이너 레이어드', category: 'top', categoryLabel: '상의', description: '밑단 흰 티가 살짝 보이게 레이어링', warmthLevel: 3 },
          { id: 'm-17-bot', name: '테이퍼드 생지 데님 / 치노 팬츠', category: 'bottom', categoryLabel: '하의', description: '두께감이 있어 방풍이 되는 팬츠', warmthLevel: 3 },
          { id: 'm-17-shoe', name: '가죽 스니커즈 / 처커 부츠', category: 'shoes', categoryLabel: '신발', description: '따뜻한 감성의 가을 신발', warmthLevel: 3 },
          { id: 'm-17-acc', name: '가벼운 코튼 트러커 자켓 or 가디건', category: 'outer', categoryLabel: '외투', description: '저녁 귀가 시 덧입을 겉옷', warmthLevel: 3 }
        ],
        tips: ['맨투맨 밑단에 흰 티셔츠 1~2cm를 노출하면 훨씬 센스 있어 보입니다.']
      },
      office: {
        items: [
          { id: 'm-17-o-top', name: '테일러드 블레이저 자켓 + 옥스포드 셔츠', category: 'outer', categoryLabel: '외투/상의', description: '가을의 정석 비즈니스 캐주얼', warmthLevel: 3 },
          { id: 'm-17-o-bot', name: '슬림 울 트라우저', category: 'bottom', categoryLabel: '하의', description: '보온성이 시작되는 가을 슬랙스', warmthLevel: 3 },
          { id: 'm-17-o-shoe', name: '옥스포드화 or 더비 슈즈', category: 'shoes', categoryLabel: '신발', description: '단정하고 품격 있는 드레스 슈즈', warmthLevel: 3 },
          { id: 'm-17-o-acc', name: '가죽 브리프케이스 & 가죽 스트랩 시계', category: 'acc', categoryLabel: '악세서리', description: '지적인 가을 분위기 연출', warmthLevel: 1 }
        ],
        tips: ['네이비 블레이저와 그레이 트라우저는 실패 없는 정석 조합입니다.']
      },
      minimal: {
        items: [
          { id: 'm-17-m-top', name: '울 블렌드 크루넥 니트', category: 'top', categoryLabel: '상의', description: '부드러운 촉감의 미니멀 솔리드 니트', warmthLevel: 3 },
          { id: 'm-17-m-bot', name: '원턱 스트레이트 와이드 팬츠', category: 'bottom', categoryLabel: '하의', description: '차분하게 떨어지는 드레이프', warmthLevel: 3 },
          { id: 'm-17-m-shoe', name: '블랙 플레인토 더비 슈즈', category: 'shoes', categoryLabel: '신발', description: '모던한 스퀘어/라운드 토', warmthLevel: 3 },
          { id: 'm-17-m-acc', name: '블루종 자켓 / 미니멀 짚업 자켓', category: 'outer', categoryLabel: '외투', description: '군더더기 없는 아우터', warmthLevel: 3 }
        ],
        tips: ['톤을 그레이, 차콜, 블랙으로 정돈해 도시적인 세련미를 강조하세요.']
      },
      sporty: {
        items: [
          { id: 'm-17-s-top', name: '후드 스웨트셔츠 + 얇은 웜업 자켓', category: 'outer', categoryLabel: '외투/상의', description: '바람을 막아주는 활동적인 조합', warmthLevel: 3 },
          { id: 'm-17-s-bot', name: '테크 패브릭 스웨트 카고 조거', category: 'bottom', categoryLabel: '하의', description: '방풍 코팅이 된 조거 팬츠', warmthLevel: 3 },
          { id: 'm-17-s-shoe', name: '청키 스니커즈 / 바스켓볼 슈즈', category: 'shoes', categoryLabel: '신발', description: '발목을 안정적으로 잡아주는 신발', warmthLevel: 3 },
          { id: 'm-17-s-acc', name: '백팩 & 코튼 비니', category: 'acc', categoryLabel: '악세서리', description: '선선한 바람을 막는 방한 소품', warmthLevel: 2 }
        ],
        tips: ['후드 모자를 살짝 조여 귀와 목의 체온을 유지하세요.']
      }
    },
    women: {
      casual: {
        items: [
          { id: 'w-17-top', name: '도톰한 케이블 니트 풀오버', category: 'top', categoryLabel: '상의', description: '포근하고 입체적인 꽈배기 니트', warmthLevel: 3 },
          { id: 'w-17-bot', name: '세미 와이드 코듀로이(골덴) 팬츠 or 롱 데님 스커트', category: 'bottom', categoryLabel: '하의', description: '따뜻한 텍스처의 하의', warmthLevel: 3 },
          { id: 'w-17-shoe', name: '스웨이드 플랫 로퍼 / 첼시 숏부츠', category: 'shoes', categoryLabel: '신발', description: '발등을 덮어 보온성을 챙긴 신발', warmthLevel: 3 },
          { id: 'w-17-acc', name: '가벼운 트렌치코트 or 청자켓', category: 'outer', categoryLabel: '외투', description: '간절기 필수 아우터', warmthLevel: 3 }
        ],
        tips: ['일교차가 10도 이상 벌어지므로 외투를 꼭 챙기세요.']
      },
      office: {
        items: [
          { id: 'w-17-o-top', name: '울 블렌드 싱글 테일러드 자켓 + 실크 타이 블라우스', category: 'outer', categoryLabel: '외투/상의', description: '지적이고 격식 있는 가을 오피스 룩', warmthLevel: 3 },
          { id: 'w-17-o-bot', name: '하이웨이스트 롱 와이드 슬랙스', category: 'bottom', categoryLabel: '하의', description: '다리 라인을 길게 살려주는 핏', warmthLevel: 3 },
          { id: 'w-17-o-shoe', name: '가죽 로퍼 / 스퀘어 토 앵클 펌프스', category: 'shoes', categoryLabel: '신발', description: '차분하고 안정감 있는 굽', warmthLevel: 3 },
          { id: 'w-17-o-acc', name: '가죽 토트백 & 실크 스카프', category: 'acc', categoryLabel: '악세서리', description: '목선에 둘러 찬바람을 막는 스카프', warmthLevel: 2 }
        ],
        tips: ['실크 스카프는 보온성과 스타일링 포인트를 동시에 만족시킵니다.']
      },
      minimal: {
        items: [
          { id: 'w-17-m-top', name: '하이넥 메리노울 니트 탑', category: 'top', categoryLabel: '상의', description: '목을 반쯤 감싸는 세련된 넥라인', warmthLevel: 3 },
          { id: 'w-17-m-bot', name: '스트레이트 핏 울 맥시 스커트', category: 'bottom', categoryLabel: '하의', description: '바람을 막아주는 차분한 맥시 기장', warmthLevel: 3 },
          { id: 'w-17-m-shoe', name: '슬림 삭스 앵클 부츠', category: 'shoes', categoryLabel: '신발', description: '발목을 착 감싸는 부츠', warmthLevel: 3 },
          { id: 'w-17-m-acc', name: '오버사이즈 울 블레이저', category: 'outer', categoryLabel: '외투', description: '시크하게 걸치는 매니시 자켓', warmthLevel: 3 }
        ],
        tips: ['자켓 어깨 라인이 살짝 잡힌 것을 고르면 얼굴이 작아 보이는 효과가 있습니다.']
      },
      sporty: {
        items: [
          { id: 'w-17-s-top', name: '오버핏 기모 없는 코튼 후드티 + 바람막이 집업', category: 'outer', categoryLabel: '외투/상의', description: '캐주얼하고 실용적인 조합', warmthLevel: 3 },
          { id: 'w-17-s-bot', name: '스트링 나일론 파라슈트 팬츠', category: 'bottom', categoryLabel: '하의', description: '볼륨감 있고 방풍이 우수한 팬츠', warmthLevel: 3 },
          { id: 'w-17-s-shoe', name: '러닝 쿠션 스니커즈', category: 'shoes', categoryLabel: '신발', description: '발이 편안한 데일리 운동화', warmthLevel: 3 },
          { id: 'w-17-s-acc', name: '크로스 보디 슬링백', category: 'acc', categoryLabel: '악세서리', description: '가볍고 수납력이 좋은 가방', warmthLevel: 1 }
        ],
        tips: ['후드 안에 목티나 티셔츠를 겹쳐 입으면 온도 변화에 유연하게 대응할 수 있습니다.']
      }
    }
  },
  {
    minTemp: 12,
    maxTemp: 16,
    tierName: '12°C ~ 16°C',
    seasonLabel: '쌀쌀한 가을 · 늦봄',
    summary: '겉옷 없이는 춥게 느껴지는 날씨. 자켓, 트렌치코트, 야상, 가죽자켓 및 니트 착용이 필수입니다.',
    colors: [
      { name: 'Rich Espresso', hex: '#4B382A', label: '에스프레소' },
      { name: 'Warm Charcoal', hex: '#374151', label: '차콜' },
      { name: 'Burnt Ochre', hex: '#9A3412', label: '번트오커' },
      { name: 'Ivory Cream', hex: '#F3EDE2', label: '아이보리크림' }
    ],
    men: {
      casual: {
        items: [
          { id: 'm-12-outer', name: '클래식 싱글 트렌치코트 or 스웨이드 자켓', category: 'outer', categoryLabel: '외투', description: '찬바람을 막아주는 가을 필수 겉옷', warmthLevel: 4 },
          { id: 'm-12-top', name: '모크넥 램스울 니트 + 이너 긴팔 티', category: 'top', categoryLabel: '상의', description: '보온성 좋은 도톰한 니트웨어', warmthLevel: 3 },
          { id: 'm-12-bot', name: '도톰한 코튼 치노 팬츠 or 다크 워싱 진', category: 'bottom', categoryLabel: '하의', description: '찬 공기 유입을 차단하는 원단', warmthLevel: 3 },
          { id: 'm-12-shoe', name: '레더 첼시 부츠', category: 'shoes', categoryLabel: '신발', description: '발목까지 덮는 따뜻한 가죽 부츠', warmthLevel: 4 },
          { id: 'm-12-acc', name: '가벼운 캐시미어 블렌드 머플러', category: 'acc', categoryLabel: '악세서리', description: '목 보온으로 체감온도 2°C 상승', warmthLevel: 3 }
        ],
        tips: ['목 부위만 감싸줘도 체감온도가 크게 오릅니다. 얇은 스카프나 머플러를 준비하세요.']
      },
      office: {
        items: [
          { id: 'm-12-o-outer', name: '울 블렌드 맥코트 or 울 헤링본 자켓', category: 'outer', categoryLabel: '외투', description: '클래식하고 깔끔한 비즈니스 코트', warmthLevel: 4 },
          { id: 'm-12-o-top', name: '파인 울 터틀넥 니트 + 드레스 셔츠', category: 'top', categoryLabel: '상의', description: '단정하고 보온성 높은 이너', warmthLevel: 3 },
          { id: 'm-12-o-bot', name: '플란넬 울 슬랙스', category: 'bottom', categoryLabel: '하의', description: '기모감이 있어 따뜻한 정장 바지', warmthLevel: 4 },
          { id: 'm-12-o-shoe', name: '브라운 윙팁 레더 슈즈', category: 'shoes', categoryLabel: '신발', description: '중후하고 고급스러운 슈즈', warmthLevel: 3 },
          { id: 'm-12-o-acc', name: '가죽 서류가방 & 슬림 가죽 장갑(휴대)', category: 'acc', categoryLabel: '악세서리', description: '손 시림 대비', warmthLevel: 2 }
        ],
        tips: ['플란넬 소재 슬랙스는 일반 슬랙스보다 보온성이 뛰어나 찬바람 부는 날 강력 추천합니다.']
      },
      minimal: {
        items: [
          { id: 'm-12-m-outer', name: '미니멀 울 블루종 자켓', category: 'outer', categoryLabel: '외투', description: '포켓이 숨겨진 정갈한 울 숏 자켓', warmthLevel: 4 },
          { id: 'm-12-m-top', name: '블랙 터틀넥 풀오버 니트', category: 'top', categoryLabel: '상의', description: '목을 감싸는 슬림 니트', warmthLevel: 3 },
          { id: 'm-12-m-bot', name: '와이드 핏 차콜 울 트라우저', category: 'bottom', categoryLabel: '하의', description: '자연스러운 실루엣의 팬츠', warmthLevel: 3 },
          { id: 'm-12-m-shoe', name: '스퀘어토 레더 첼시 부츠', category: 'shoes', categoryLabel: '신발', description: '절제된 미니멀 디자인', warmthLevel: 4 },
          { id: 'm-12-m-acc', name: '미니멀 레더 토트백', category: 'acc', categoryLabel: '악세서리', description: '가죽 질감의 정갈한 가방', warmthLevel: 1 }
        ],
        tips: ['올블랙에 차콜 한 방울을 섞은 무채색 조합이 가장 세련됩니다.']
      },
      sporty: {
        items: [
          { id: 'm-12-s-outer', name: '플리스(후리스) 보아 집업 or 가벼운 퀼팅 다운 조끼', category: 'outer', categoryLabel: '외투', description: '보온성과 활동성을 모두 갖춘 아우터', warmthLevel: 4 },
          { id: 'm-12-s-top', name: '기모 안감 스웨트셔츠', category: 'top', categoryLabel: '상의', description: '부드러운 기모로 찬기 차단', warmthLevel: 3 },
          { id: 'm-12-s-bot', name: '도톰한 코튼 조거 팬츠', category: 'bottom', categoryLabel: '하의', description: '발목 시래기를 막는 시보리 하의', warmthLevel: 3 },
          { id: 'm-12-s-shoe', name: '하이탑 스니커즈 / 아웃도어 트래커', category: 'shoes', categoryLabel: '신발', description: '발목을 따뜻하게 보호', warmthLevel: 3 },
          { id: 'm-12-s-acc', name: '워치 캡 & 넥워머', category: 'acc', categoryLabel: '악세서리', description: '추위에 민감한 분을 위한 소품', warmthLevel: 3 }
        ],
        tips: ['조끼 패딩(패딩 베스트)은 팔 움직임이 편하면서 몸통 보온을 극대화합니다.']
      }
    },
    women: {
      casual: {
        items: [
          { id: 'w-12-outer', name: '오버핏 더블 트렌치코트 or 가죽 라이더 자켓', category: 'outer', categoryLabel: '외투', description: '바람을 완벽히 막아주는 시크한 외투', warmthLevel: 4 },
          { id: 'w-12-top', name: '루즈핏 알파카 니트 + 코튼 이너', category: 'top', categoryLabel: '상의', description: '가볍고 보온성이 뛰어난 니트', warmthLevel: 4 },
          { id: 'w-12-bot', name: '기모 스트레이트 데님 or 플리츠 울 롱스커트', category: 'bottom', categoryLabel: '하의', description: '따뜻한 하의 선택', warmthLevel: 3 },
          { id: 'w-12-shoe', name: '가죽 앵클 부츠', category: 'shoes', categoryLabel: '신발', description: '안정적인 굽의 가을 부츠', warmthLevel: 4 },
          { id: 'w-12-acc', name: '소프트 울 체크 머플러', category: 'acc', categoryLabel: '악세서리', description: '얼굴을 화사하게 해주는 머플러', warmthLevel: 3 }
        ],
        tips: ['트렌치코트 허리 벨트를 뒤로 묶으면 캐주얼하게, 앞으로 여미면 방풍 효과가 극대화됩니다.']
      },
      office: {
        items: [
          { id: 'w-12-o-outer', name: '캐시미어 블렌드 벨티드 롱 코트', category: 'outer', categoryLabel: '외투', description: '우아한 실루엣의 고급스러운 가을 코트', warmthLevel: 4 },
          { id: 'w-12-o-top', name: '파인 니트 터틀넥 풀오버', category: 'top', categoryLabel: '상의', description: '코트 안에 입기 좋은 슬림 니트', warmthLevel: 3 },
          { id: 'w-12-o-bot', name: '울 트위드 H라인 스커트 (기모 스타킹 착용)', category: 'bottom', categoryLabel: '하의', description: '도톰한 트위드 소재의 격식 있는 하의', warmthLevel: 4 },
          { id: 'w-12-o-shoe', name: '가죽 롱부츠 / 미들 앵클 부츠', category: 'shoes', categoryLabel: '신발', description: '종아리까지 찬바람을 차단', warmthLevel: 4 },
          { id: 'w-12-o-acc', name: '레더 숄더 토트백 & 가죽 장갑', category: 'acc', categoryLabel: '악세서리', description: '단정하고 따뜻한 겨울 준비', warmthLevel: 2 }
        ],
        tips: ['스커트를 입을 때는 80데니어 이상의 보온 스타킹을 매치하세요.']
      },
      minimal: {
        items: [
          { id: 'w-12-m-outer', name: '핸드메이드 울 숏 코트', category: 'outer', categoryLabel: '외투', description: '가볍고 유연한 핸드메이드 마감', warmthLevel: 4 },
          { id: 'w-12-m-top', name: '모크넥 캐시미어 니트', category: 'top', categoryLabel: '상의', description: '피부에 닿아도 포근한 고급 원사', warmthLevel: 4 },
          { id: 'w-12-m-bot', name: '와이드 울 트라우저', category: 'bottom', categoryLabel: '하의', description: '바지 안에 얇은 이너 착용 가능', warmthLevel: 3 },
          { id: 'w-12-m-shoe', name: '미니멀 스퀘어 첼시 부츠', category: 'shoes', categoryLabel: '신발', description: '군더더기 없는 실루엣', warmthLevel: 4 },
          { id: 'w-12-m-acc', name: '클래식 레더 호보백', category: 'acc', categoryLabel: '악세서리', description: '자연스러운 곡선의 미니멀 백', warmthLevel: 1 }
        ],
        tips: ['숏 코트는 다리가 길어 보이고 활동하기 매우 편리합니다.']
      },
      sporty: {
        items: [
          { id: 'w-12-s-outer', name: '덤블 플리스 뽀글이 집업', category: 'outer', categoryLabel: '외투', description: '귀엽고 포근한 양털 보온 점퍼', warmthLevel: 4 },
          { id: 'w-12-s-top', name: '오버핏 기모 후드티', category: 'top', categoryLabel: '상의', description: '넉넉한 품으로 활동성 만점', warmthLevel: 3 },
          { id: 'w-12-s-bot', name: '기모 코튼 조거 팬츠', category: 'bottom', categoryLabel: '하의', description: '안감 기모로 따뜻한 하의', warmthLevel: 4 },
          { id: 'w-12-s-shoe', name: '어그(UGG) 미니 부츠 or 두꺼운 삭스 + 스니커즈', category: 'shoes', categoryLabel: '신발', description: '발이 시렵지 않은 방한화', warmthLevel: 4 },
          { id: 'w-12-s-acc', name: '골지 니트 비니 & 패딩 백', category: 'acc', categoryLabel: '악세서리', description: '따뜻한 감성의 윈터 소품', warmthLevel: 2 }
        ],
        tips: ['발이 차가우면 온몸이 춥습니다. 도톰한 울 양말을 착용하세요.']
      }
    }
  },
  {
    minTemp: 9,
    maxTemp: 11,
    tierName: '9°C ~ 11°C',
    seasonLabel: '초겨울 · 늦가을',
    summary: '입김이 나기 시작하는 쌀쌀한 날씨. 도톰한 울코트, 가죽자켓, 히트텍, 기모 의류를 갖춰 입으세요.',
    colors: [
      { name: 'Onyx Black', hex: '#111827', label: '블랙' },
      { name: 'Deep Camel', hex: '#A27035', label: '딥카멜' },
      { name: 'Heather Charcoal', hex: '#374151', label: '차콜' },
      { name: 'Wine Red', hex: '#722F37', label: '와인' }
    ],
    men: {
      casual: {
        items: [
          { id: 'm-9-outer', name: '헤비 울 더블 코트 or 무스탕 자켓', category: 'outer', categoryLabel: '외투', description: '두툼한 울 원단으로 찬바람을 차단', warmthLevel: 5 },
          { id: 'm-9-top', name: '발열내의 (히트텍) + 도톰한 터틀넥 니트', category: 'top', categoryLabel: '상의', description: '내의와 도톰한 니트의 철벽 보온', warmthLevel: 4 },
          { id: 'm-9-bot', name: '기모 슬림 스트레이트 팬츠', category: 'bottom', categoryLabel: '하의', description: '안감 기모로 다리 시림 방지', warmthLevel: 4 },
          { id: 'm-9-shoe', name: '방수 가죽 첼시 부츠', category: 'shoes', categoryLabel: '신발', description: '눈/비와 찬바람을 막는 신발', warmthLevel: 4 },
          { id: 'm-9-acc', name: '도톰한 캐시미어 머플러 & 가죽 장갑', category: 'acc', categoryLabel: '악세서리', description: '체온을 3°C 이상 지켜주는 필수품', warmthLevel: 4 }
        ],
        tips: ['이너로 히트텍을 착용하면 겉옷이 너무 두껍지 않아도 하루 종일 따뜻합니다.']
      },
      office: {
        items: [
          { id: 'm-9-o-outer', name: '프리미엄 캐시미어-울 체스터필드 코트', category: 'outer', categoryLabel: '외투', description: '격식과 보온성을 모두 갖춘 남성 코트', warmthLevel: 5 },
          { id: 'm-9-o-top', name: '초경량 패딩 조끼 + 드레스 셔츠 + 타이', category: 'top', categoryLabel: '상의', description: '코트 안에 덧입는 초경량 조끼', warmthLevel: 4 },
          { id: 'm-9-o-bot', name: '헤비 울 트윌 슬랙스', category: 'bottom', categoryLabel: '하의', description: '도톰하고 탄탄한 겨울 수트 팬츠', warmthLevel: 4 },
          { id: 'm-9-o-shoe', name: '프리미엄 레더 옥스포드화 (울 양말 착용)', category: 'shoes', categoryLabel: '신발', description: '보온 양말과 함께 신는 구두', warmthLevel: 3 },
          { id: 'm-9-o-acc', name: '양가죽 방한 장갑 & 캐시미어 머플러', category: 'acc', categoryLabel: '악세서리', description: '품격을 높여주는 겨울 소품', warmthLevel: 4 }
        ],
        tips: ['코트 안에 V넥 경량 패딩 조끼를 입으면 셔츠 타이 라인을 가리지 않으면서 완벽한 방한이 됩니다.']
      },
      minimal: {
        items: [
          { id: 'm-9-m-outer', name: '미니멀 히든 버튼 발마칸 코트', category: 'outer', categoryLabel: '외투', description: '단추가 숨겨진 깔끔한 롱코트', warmthLevel: 5 },
          { id: 'm-9-m-top', name: '모크넥 캐시미어 니트 + 긴팔 발열 이너', category: 'top', categoryLabel: '상의', description: '목선이 정돈된 고급스러운 니트', warmthLevel: 4 },
          { id: 'm-9-m-bot', name: '와이드 울 슬랙스', category: 'bottom', categoryLabel: '하의', description: '코트 밑단과 어우러지는 와이드 핏', warmthLevel: 4 },
          { id: 'm-9-m-shoe', name: '스퀘어토 가죽 부츠', category: 'shoes', categoryLabel: '신발', description: '매끄러운 라인의 부츠', warmthLevel: 4 },
          { id: 'm-9-m-acc', name: '무채색 울 머플러', category: 'acc', categoryLabel: '악세서리', description: '자연스럽게 한 바퀴 둘러매는 스타일', warmthLevel: 3 }
        ],
        tips: ['발마칸 코트의 깃을 세워 목 단추를 채우면 방풍 효과가 극대화됩니다.']
      },
      sporty: {
        items: [
          { id: 'm-9-s-outer', name: '숏 푸퍼 다운 패딩 점퍼', category: 'outer', categoryLabel: '외투', description: '가볍고 보온력이 뛰어난 덕다운 패딩', warmthLevel: 5 },
          { id: 'm-9-s-top', name: '헤비 기모 후드티', category: 'top', categoryLabel: '상의', description: '두툼한 기모 안감의 스트릿 탑', warmthLevel: 4 },
          { id: 'm-9-s-bot', name: '본딩 기모 카고 팬츠', category: 'bottom', categoryLabel: '하의', description: '바람을 막는 2중 원단 팬츠', warmthLevel: 4 },
          { id: 'm-9-s-shoe', name: '방한 트레킹 슈즈 or 부츠 스니커즈', category: 'shoes', categoryLabel: '신발', description: '미끄럼 방지 밑창이 있는 신발', warmthLevel: 4 },
          { id: 'm-9-s-acc', name: '플리스 귀마개 볼캡 & 핫팩', category: 'acc', categoryLabel: '악세서리', description: '주머니에 넣을 핫팩 한 개', warmthLevel: 3 }
        ],
        tips: ['다운 패딩의 밑단 스트링을 조여 밑으로 들어오는 찬바람을 차단하세요.']
      }
    },
    women: {
      casual: {
        items: [
          { id: 'w-9-outer', name: '벨티드 핸드메이드 롱 울 코트 or 무스탕', category: 'outer', categoryLabel: '외투', description: '종아리까지 내려오는 따뜻한 아우터', warmthLevel: 5 },
          { id: 'w-9-top', name: '발열 내의 + 도톰한 폭스블렌드 터틀넥 니트', category: 'top', categoryLabel: '상의', description: '얼굴을 폭닥하게 감싸는 포근한 니트', warmthLevel: 4 },
          { id: 'w-9-bot', name: '기모 스트레이트 슬랙스 or 기모 롱스커트', category: 'bottom', categoryLabel: '하의', description: '안감 기모로 든든한 하의', warmthLevel: 4 },
          { id: 'w-9-shoe', name: '기모 안감 가죽 첼시 부츠', category: 'shoes', categoryLabel: '신발', description: '발목을 따뜻하게 감싸는 부츠', warmthLevel: 4 },
          { id: 'w-9-acc', name: '풍성한 프린지 울 머플러 & 가죽 장갑', category: 'acc', categoryLabel: '악세서리', description: '얼굴을 폭 파묻을 수 있는 머플러', warmthLevel: 4 }
        ],
        tips: ['코트 벨트를 조여주면 찬바람 유입을 막고 실루엣도 날씬해 보입니다.']
      },
      office: {
        items: [
          { id: 'w-9-o-outer', name: '알파카-울 더블 롱코트', category: 'outer', categoryLabel: '외투', description: '기품 있는 텍스처와 뛰어난 보온성', warmthLevel: 5 },
          { id: 'w-9-o-top', name: '경량 다운 패딩 베스트 + 캐시미어 터틀넥', category: 'top', categoryLabel: '상의', description: '실내에서는 베스트만 입어도 온기 유지', warmthLevel: 4 },
          { id: 'w-9-o-bot', name: '울 트윌 머메이드 롱스커트 (100D 기모 타이즈)', category: 'bottom', categoryLabel: '하의', description: '방한 타이즈와 조합한 우아한 스커트', warmthLevel: 4 },
          { id: 'w-9-o-shoe', name: '슬림 레더 니하이 부츠 (롱부츠)', category: 'shoes', categoryLabel: '신발', description: '무릎 아래 전체를 따뜻하게 보호', warmthLevel: 5 },
          { id: 'w-9-o-acc', name: '캐시미어 숄 & 스마트폰 터치 가죽 장갑', category: 'acc', categoryLabel: '악세서리', description: '손 시림 없는 스마트 장갑', warmthLevel: 4 }
        ],
        tips: ['롱부츠는 스커트 밑으로 들어오는 바람을 완벽하게 차단해줍니다.']
      },
      minimal: {
        items: [
          { id: 'w-9-m-outer', name: '미니멀 노카라 울 코트 or 히든 싱글 코트', category: 'outer', categoryLabel: '외투', description: '모던하고 군더더기 없는 겨울 롱코트', warmthLevel: 5 },
          { id: 'w-9-m-top', name: '캐시미어 터틀넥 탑 + 히트텍', category: 'top', categoryLabel: '상의', description: '목 전체를 따뜻하게 덮는 니트', warmthLevel: 4 },
          { id: 'w-9-m-bot', name: '세미와이드 울 플란넬 팬츠', category: 'bottom', categoryLabel: '하의', description: '탄탄하고 따뜻한 텍스처', warmthLevel: 4 },
          { id: 'w-9-m-shoe', name: '스퀘어토 미들힐 앵클 부츠', category: 'shoes', categoryLabel: '신발', description: '깔끔한 가죽 앵클 부츠', warmthLevel: 4 },
          { id: 'w-9-m-acc', name: '톤온톤 캐시미어 머플러', category: 'acc', categoryLabel: '악세서리', description: '코트와 같은 계열 색상으로 정돈', warmthLevel: 3 }
        ],
        tips: ['코트와 이너, 머플러를 동일한 톤으로 맞추면 키가 커 보이고 우아합니다.']
      },
      sporty: {
        items: [
          { id: 'w-9-s-outer', name: '글로시 크롭 숏패딩 점퍼', category: 'outer', categoryLabel: '외투', description: '트렌디한 광택감의 구스다운 숏패딩', warmthLevel: 5 },
          { id: 'w-9-s-top', name: '하프 집업 기모 맨투맨', category: 'top', categoryLabel: '상의', description: '목까지 올릴 수 있는 지퍼 탑', warmthLevel: 4 },
          { id: 'w-9-s-bot', name: '밍크 기모 와이드 스웨트팬츠', category: 'bottom', categoryLabel: '하의', description: '극세사 기모로 영하 가까운 추위도 거뜬', warmthLevel: 5 },
          { id: 'w-9-s-shoe', name: '양털 플랫폼 어그 슬리퍼 / 숏부츠', category: 'shoes', categoryLabel: '신발', description: '발끝까지 따뜻한 윈터 퍼 슈즈', warmthLevel: 5 },
          { id: 'w-9-s-acc', name: '바라클라바 (모자+목도리 일체형)', category: 'acc', categoryLabel: '악세서리', description: '머리와 목을 한 번에 감싸는 핫 아이템', warmthLevel: 4 }
        ],
        tips: ['바라클라바는 칼바람 부는 날 귀와 목을 완벽하게 보호해줍니다.']
      }
    }
  },
  {
    minTemp: -50,
    maxTemp: 8,
    tierName: '8°C 이하',
    seasonLabel: '한겨울 · 혹한',
    summary: '체감온도가 영하로 떨어지는 혹한기입니다. 롱패딩, 두꺼운 헤비 다운, 방한 내의, 목도리, 장갑, 핫팩이 필수입니다.',
    colors: [
      { name: 'Pure Ink Black', hex: '#000000', label: '딥블랙' },
      { name: 'Snow Frost', hex: '#E2E8F0', label: '스노우화이트' },
      { name: 'Dark Navy', hex: '#0F172A', label: '다크네이비' },
      { name: 'Warm Taupe Grey', hex: '#475569', label: '토프그레이' }
    ],
    men: {
      casual: {
        items: [
          { id: 'm-4-outer', name: '헤비 구스다운 롱패딩 or 후드 다운 파카', category: 'outer', categoryLabel: '외투', description: '혹한기 칼바람을 완벽 차단하는 필수 외투', warmthLevel: 5 },
          { id: 'm-4-top', name: '극세사 발열내의 + 헤비 울 터틀넥 니트', category: 'top', categoryLabel: '상의', description: '체온을 꽉 가두는 2중 상의 레이어드', warmthLevel: 5 },
          { id: 'm-4-bot', name: '본딩 기모 데님 or 방한 윈터 팬츠', category: 'bottom', categoryLabel: '하의', description: '안감에 보아털/기모가 합포된 방한 바지', warmthLevel: 5 },
          { id: 'm-4-shoe', name: '방수 방한 워커 부츠 (울 양말 필수)', category: 'shoes', categoryLabel: '신발', description: '눈길 미끄럼 방지 및 발시림 차단', warmthLevel: 5 },
          { id: 'm-4-acc', name: '울 목도리, 기모 스마트폰 장갑, 포켓 핫팩', category: 'acc', categoryLabel: '악세서리', description: '영하권 생존 필수 소품 3종', warmthLevel: 5 }
        ],
        tips: ['패딩 모자털(퍼)이나 후드를 적극 활용해 찬바람이 얼굴을 때리지 않게 하세요.']
      },
      office: {
        items: [
          { id: 'm-4-o-outer', name: '방풍 다운 안감 비즈니스 코트 or 프리미엄 다운 파카', category: 'outer', categoryLabel: '외투', description: '수트 위에 입어도 깔끔한 포멀 다운', warmthLevel: 5 },
          { id: 'm-4-o-top', name: '기모 히트텍 + 경량패딩 조끼 + 정장 셔츠 + 울 스웨터', category: 'top', categoryLabel: '상의', description: '단정함을 유지하면서 철벽 보온', warmthLevel: 5 },
          { id: 'm-4-o-bot', name: '방풍 안감 기모 정장 슬랙스 + 타이즈', category: 'bottom', categoryLabel: '하의', description: '다리 시림을 완벽 차단', warmthLevel: 5 },
          { id: 'm-4-o-shoe', name: '방수 가죽 커뮤터 드레스 부츠', category: 'shoes', categoryLabel: '신발', description: '출퇴근 결빙길에도 안전한 슈즈', warmthLevel: 5 },
          { id: 'm-4-o-acc', name: '캐시미어 롱 머플러 & 울 안감 양가죽 장갑', category: 'acc', categoryLabel: '악세서리', description: '출퇴근길 필수 보온 악세서리', warmthLevel: 5 }
        ],
        tips: ['코트만으로는 추운 날에는 코트 안에 꼭 초경량 패딩 조끼를 레이어드하세요.']
      },
      minimal: {
        items: [
          { id: 'm-4-m-outer', name: '매트 블랙 몬스터 파카 or 심리스 롱 다운 코트', category: 'outer', categoryLabel: '외투', description: '봉제선이 드러나지 않는 미니멀 다운', warmthLevel: 5 },
          { id: 'm-4-m-top', name: '하이 터틀넥 헤비 캐시미어 니트 + 이너 히트텍', category: 'top', categoryLabel: '상의', description: '목 끝까지 감싸는 따뜻한 미니멀 탑', warmthLevel: 5 },
          { id: 'm-4-m-bot', name: '헤비 울 와이드 트라우저 (내복 착용)', category: 'bottom', categoryLabel: '하의', description: '핏을 유지하면서 따뜻한 두께감', warmthLevel: 5 },
          { id: 'm-4-m-shoe', name: '블랙 비브람솔 레더 부츠', category: 'shoes', categoryLabel: '신발', description: '미니멀한 디자인에 뛰어난 접지력', warmthLevel: 5 },
          { id: 'm-4-m-acc', name: '도톰한 블랙 울 머플러 & 비니', category: 'acc', categoryLabel: '악세서리', description: '정갈한 올블랙 방한 소품', warmthLevel: 4 }
        ],
        tips: ['패딩 소재를 광택 없는 매트한 원단으로 고르면 미니멀 룩에 아주 잘 어울립니다.']
      },
      sporty: {
        items: [
          { id: 'm-4-s-outer', name: '아웃도어 익스트림 헤비 다운 자켓', category: 'outer', categoryLabel: '외투', description: '영하 15도 이하도 견디는 필파워 800+ 패딩', warmthLevel: 5 },
          { id: 'm-4-s-top', name: '기모 하프집업 아노락 + 발열 이너웨어', category: 'top', categoryLabel: '상의', description: '스포티하고 목을 감싸는 집업', warmthLevel: 5 },
          { id: 'm-4-s-bot', name: '다운 패딩 팬츠 or 방풍 기모 스노우 조거', category: 'bottom', categoryLabel: '하의', description: '바람 한 점 통하지 않는 방풍 바지', warmthLevel: 5 },
          { id: 'm-4-s-shoe', name: '패딩 방한 스노우 부츠', category: 'shoes', categoryLabel: '신발', description: '빙판길에도 안전하고 따뜻한 부츠', warmthLevel: 5 },
          { id: 'm-4-s-acc', name: '방한 트루퍼햇 (군밤모자) & 방수 스키 장갑', category: 'acc', categoryLabel: '악세서리', description: '귀와 손가락 동상 예방', warmthLevel: 5 }
        ],
        tips: ['모자에 달린 귀마개를 내려 묶으면 체감온도가 급상승합니다.']
      }
    },
    women: {
      casual: {
        items: [
          { id: 'w-4-outer', name: '롱 구스다운 패딩 or 헤비 무스탕 롱코트', category: 'outer', categoryLabel: '외투', description: '무릎 아래까지 포근하게 감싸주는 패딩', warmthLevel: 5 },
          { id: 'w-4-top', name: '초발열 내의 + 도톰한 램스울 터틀넥', category: 'top', categoryLabel: '상의', description: '목과 가슴을 든든하게 보호', warmthLevel: 5 },
          { id: 'w-4-bot', name: '밍크 기모 스키니/일자진 or 기모 롱스커트', category: 'bottom', categoryLabel: '하의', description: '찬 공기가 들어갈 틈 없는 하의', warmthLevel: 5 },
          { id: 'w-4-shoe', name: '어그(UGG) 클래식 울 숏부츠 / 패딩 슈즈', category: 'shoes', categoryLabel: '신발', description: '발끝까지 양털로 감싸는 방한화', warmthLevel: 5 },
          { id: 'w-4-acc', name: '폭신한 니트 머플러, 뽀글이 귀마개, 핫팩', category: 'acc', categoryLabel: '악세서리', description: '영하 날씨 필수 방한 아이템', warmthLevel: 5 }
        ],
        tips: ['발열 내의를 위아래 한 벌로 갖춰 입으면 외출 시 추위 걱정이 사라집니다.']
      },
      office: {
        items: [
          { id: 'w-4-o-outer', name: '구스다운 안감 벨티드 슬림 롱패딩 / 헤비 울코트', category: 'outer', categoryLabel: '외투', description: '허리 라인을 살려 부해 보이지 않는 오피스 패딩', warmthLevel: 5 },
          { id: 'w-4-o-top', name: '발열 이너 + 실키 캐시미어 폴라 니트', category: 'top', categoryLabel: '상의', description: '단정하고 보온성 높은 최고급 니트', warmthLevel: 5 },
          { id: 'w-4-o-bot', name: '울 와이드 슬랙스 (속에 발열 레깅스 착용)', category: 'bottom', categoryLabel: '하의', description: '겉으로는 단정하고 속은 따뜻하게', warmthLevel: 5 },
          { id: 'w-4-o-shoe', name: '퍼 안감 가죽 롱부츠', category: 'shoes', categoryLabel: '신발', description: '단정하면서도 종아리를 따뜻하게', warmthLevel: 5 },
          { id: 'w-4-o-acc', name: '캐시미어 빅 머플러 & 스마트 터치 가죽 장갑', category: 'acc', categoryLabel: '악세서리', description: '고급스럽고 따뜻한 겨울 출근템', warmthLevel: 5 }
        ],
        tips: ['허리 벨트가 있는 패딩은 출근 룩으로도 단정하고 우아합니다.']
      },
      minimal: {
        items: [
          { id: 'w-4-m-outer', name: '심리스 미니멀 구스다운 롱 코트', category: 'outer', categoryLabel: '외투', description: '절개선 없이 미니멀한 실루엣', warmthLevel: 5 },
          { id: 'w-4-m-top', name: '캐시미어 100% 터틀넥 니트 + 히트텍', category: 'top', categoryLabel: '상의', description: '극강의 부드러움과 가벼운 보온', warmthLevel: 5 },
          { id: 'w-4-m-bot', name: '스트레이트 핏 울 트라우저', category: 'bottom', categoryLabel: '하의', description: '정갈하게 일자로 떨어지는 라인', warmthLevel: 5 },
          { id: 'w-4-m-shoe', name: '스퀘어 토 방한 앵클 부츠', category: 'shoes', categoryLabel: '신발', description: '미니멀한 실루엣의 방한 슈즈', warmthLevel: 5 },
          { id: 'w-4-m-acc', name: '미니멀 울 비니 & 가죽 장갑', category: 'acc', categoryLabel: '악세서리', description: '블랙 또는 차콜 단색 코디', warmthLevel: 4 }
        ],
        tips: ['목도리를 안쪽으로 단정하게 넣어 패딩 지퍼를 올리면 미니멀한 룩이 유지됩니다.']
      },
      sporty: {
        items: [
          { id: 'w-4-s-outer', name: '헤비 오버사이즈 숏패딩 / 봄버 다운', category: 'outer', categoryLabel: '외투', description: '빵빵한 볼륨감의 트렌디 숏패딩', warmthLevel: 5 },
          { id: 'w-4-s-top', name: '기모 하프 집업 스웨트셔츠 + 발열 이너', category: 'top', categoryLabel: '상의', description: '캐주얼하고 따뜻한 애슬레저 탑', warmthLevel: 5 },
          { id: 'w-4-s-bot', name: '밍크 기모 조거 팬츠', category: 'bottom', categoryLabel: '하의', description: '발목을 조여 바람 차단', warmthLevel: 5 },
          { id: 'w-4-s-shoe', name: '방수 방한 패딩 부츠', category: 'shoes', categoryLabel: '신발', description: '눈길에도 젖지 않는 스포티 부츠', warmthLevel: 5 },
          { id: 'w-4-s-acc', name: '뽀글이 플리스 바라클라바 & 방한 벙어리 장갑', category: 'acc', categoryLabel: '악세서리', description: '귀엽고 완벽한 한파 무장', warmthLevel: 5 }
        ],
        tips: ['바라클라바와 패딩 부츠를 매치하면 혹한기 야외 활동도 거뜬합니다.']
      }
    }
  }
];

export function getOutfitRecommendation(
  temp: number,
  feelsLike: number,
  conditionId: number,
  gender: Gender,
  style: StyleCategory,
  sensitivity: 'sensitive_cold' | 'normal' | 'sensitive_heat' = 'normal',
  rainChance: number = 0
): OutfitRecommendation {
  // Adjust effective temperature based on sensitivity
  let effectiveTemp = feelsLike ?? temp;
  if (sensitivity === 'sensitive_cold') {
    // Cold sensitive: feels 3 degrees colder
    effectiveTemp -= 3;
  } else if (sensitivity === 'sensitive_heat') {
    // Heat sensitive: feels 3 degrees warmer
    effectiveTemp += 3;
  }

  // Find corresponding temperature band
  const band = TEMPERATURE_BANDS.find(
    (b) => effectiveTemp >= b.minTemp && effectiveTemp <= b.maxTemp
  ) || (effectiveTemp > 27 ? TEMPERATURE_BANDS[0] : TEMPERATURE_BANDS[TEMPERATURE_BANDS.length - 1]);

  const genderConfig = gender === 'men' ? band.men[style] : band.women[style];

  // Lookbook image selection
  let lookbookImage = OUTFIT_IMAGES.maleCasual;
  if (gender === 'men') {
    lookbookImage = style === 'office' ? OUTFIT_IMAGES.maleFormal : OUTFIT_IMAGES.maleCasual;
  } else {
    lookbookImage = style === 'office' ? OUTFIT_IMAGES.femaleFormal : OUTFIT_IMAGES.femaleCasual;
  }

  // Weather-specific alert items (rain, snow, high wind)
  const specialAdvice = [...genderConfig.tips];
  const weatherAlerts: string[] = [];

  const isRain = (conditionId >= 200 && conditionId < 600) || rainChance > 40;
  const isSnow = conditionId >= 600 && conditionId < 700;

  if (isRain) {
    weatherAlerts.push('비 예보가 있습니다! 3단 우산 또는 장우산을 꼭 챙기세요.');
    specialAdvice.unshift('비에 젖기 쉬운 스웨이드나 밝은 가죽 신발은 피하고 방수 신발이나 어두운 색상을 착용하세요.');
  }

  if (isSnow) {
    weatherAlerts.push('눈 예보가 있습니다! 미끄럼 방지 밑창의 방한화를 착용하세요.');
    specialAdvice.unshift('빙판길에 대비해 접지력이 좋은 밑창 신발을 신고, 장갑을 착용해 손을 주머니에 넣지 마세요.');
  }

  if (temp - feelsLike > 2.5) {
    weatherAlerts.push('찬 바람으로 인해 체감온도가 실제 기온보다 훨씬 낮습니다.');
    specialAdvice.push('바람막이나 방풍 기능이 있는 겉옷으로 바람 유입을 차단하세요.');
  }

  return {
    temperatureTier: `${band.tierName} (${band.seasonLabel})`,
    headline: `${band.seasonLabel} 맞춤 ${gender === 'men' ? '남성' : '여성'} ${getStyleLabel(style)} 코디`,
    description: band.summary,
    effectiveTemp: Math.round(effectiveTemp * 10) / 10,
    gender,
    style,
    items: genderConfig.items,
    colorPalette: band.colors,
    specialAdvice,
    weatherAlerts,
    lookbookImage,
  };
}

export function getStyleLabel(style: StyleCategory): string {
  switch (style) {
    case 'casual':
      return '캐주얼 룩';
    case 'office':
      return '오피스 & 출근 룩';
    case 'minimal':
      return '미니멀 & 모던 룩';
    case 'sporty':
      return '스포티 & 스트릿 룩';
  }
}
