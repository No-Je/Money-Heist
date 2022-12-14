const Question = [
  {
    // #11
    q: '드디어 내일 준비해온 작전이 시작된다. 전날 밤 잠이 오지않는 당신. 침대에서 일어나 책상에 앉았다. 당신은 무엇을 하고 있는가?',
    a1: '전체 계획을 다시 떠올리며 예상되는 변수가 더 있는지 확인한다.',
    a2: '마음을 가다듬고 심호흡을 하며 명상한다.',
    a3: '잠이 오지 않으니 넷플릭스를 켜서 “종이의 집”을 정주행한다.',
  },
  {
    // #4
    q: '조폐국에 잠입할 계획을 세우는 당신. 어떤 상황이 가장 위협적인가?',
    a1: '나의 동료들이 내가 위험에 빠졌을 때, 나를 배신하고 이용하면 어떡하지?',
    a2: '밤에 경비가 허술해진 동안 경찰이 들이닥쳐 제압되면 어떡하지?',
    a3: '그 많은 돈을 어떻게 가져 나가지?',
  },
  {
    // #5
    q: '오랜 계획 끝에 드디어 조폐국 입구에 들어서는 당신. 팀원들과 당당히 걸어 들어가며 머릿속에 떠오르는 생각은?',
    a1: '안에서 돈을 얼마나 가져 나올 수 있을까? 성공 할 수 있겠지?',
    a2: '인질 중에 내가 아는 사람 있으면 어떻게 하지..? 그냥 모르는 척하고 계속 협박할까? 아니면 몰래 빼줄까?',
    a3: '집에 가고 싶다… 언제 끝날까…?',
  },
  {
    // #1
    q: '처음 조폐국에 투입된 당신. 처음 만난 사람들과 함께 조폐국을 털어야 하는데 어떻게 할 것인가?',
    a1: '옆에 있는 사람에게 말을 걸어 우선 친해지고 생각하자!',
    a2: '아직 분위기를 잘 모르니 가만히 파악해보자…!',
    a3: '잘 모르겠고 나는 내 할 일만 잘 하면 된다.',
  },
  {
    // #2
    q: '인질이 된 당신, 강압적으로 다가오며 엎드리라고 협박하는 가면 쓴 강도들을 마주하고는 이렇게 말한다!',
    a1: '“살려주세요~ 저 진짜 가진 거 아무것도 없고, 집에는 70대 노모가 계시고,,” 구구절절 설명하며 빈다.',
    a2: '눈치 좀 보다가, 진짜 쏠거 같으면 엎드린다.',
    a3: '“죄송합니다...”',
  },
  {
    // #3
    q: '인질을 관리하는 강도들끼리 싸움이 났다. 나만 아는 비밀 탈출구가 생각났다. 지금이 기회인가…?',
    a1: '지금이 기회다! 다른 인질들과 함께 도망가자!',
    a2: '나부터 살고보자! 일단 눈치를 보다 슬그머니 혼자 도망간다.',
    a3: '총 맞기 싫다… 그냥 가만히 있는다.',
  },
  {
    // #6
    q: '강도들과 대치중인 당신. 갑자기 조폐국 내부에서 총성이 울려퍼진다. 무슨 일이 일어난걸까?',
    a1: '인질이 총에 맞았다',
    a2: '강도가 총을 가지고 놀다가 잘못 발사됐다',
    a3: '우리를 방심하게 하기 위해 녹음된 총소리를 틀었다',
  },
  {
    // #7
    q: '인질을 관리하는 당신. 인질이 갑작스럽게 복통을 호소한다. 당신은 어떻게 할 것인가?',
    a1: '아프다고…? 아픈건 어쩔 수 없지… 약을 구해준다',
    a2: '아프다고? 거짓말 하는거 아니야? 인질은 조용히 해라!',
    a3: '어쩌라고. (무시)',
  },
  {
    // #10
    q: '당신은 팀원이나 인질중에 마음에 드는 이성을 발견했다. 하지만, 팀의 제 1원칙 “연애하지 말라”가 떠오른다. 어떻게 할 것인가?',
    a1: '계획은 계획이고, 규칙은 규칙이니 어쩔 수 없다.',
    a2: '계획은 지켜야하니 우선 번호를 따고 나가서 연락한다.',
    a3: '어쩌라고. 바로 고백한다. 나랑 사귈래 죽을래!',
  },
  {
    // #8
    q: '인질을 데리고 있는 당신. 모든 것이 마무리 되었다. 남은 인질들을 어떻게 할 것인가?',
    a1: '협조를 해준 착한 인질들을 가족들이 기다리는 따뜻한 집으로 보내준다',
    a2: '우리를 봤기 때문에 증언하지 못하도록 제거한다',
    a3: '집에 보내는 주는데 혹시 모르니 추적기를 달고 지속적으로 감시한다',
  },
  {
    // #9
    q: '내부에서 인질을 감시하던 당신. 경찰과 협상하러 밖으로 나간 동료들과 경찰사이에 총격전이 벌어졌다. 총을 맞고 다시 내부로 돌아온 동료에게 당신은 말을 건다.',
    a1: '“무슨 일이야? 왜 총을 쏜거야?” ',
    a2: '“괜찮아? 피가 많이 나는데 우선 지혈부터 하자”',
    a3: '“총알 다 쓴건 아니지?”',
  },
  {
    // #12
    q: '임무를 성공한 당신. 드디어 막대한 돈과 함께 집으로 돌아왔다. 당신이 가장 먼저 할 일은?',
    a1: '기분이 좋으니 가족들에게 1억씩 나누어 주고, 수고한 동료들에게 자축의 메시지를 보내고 수고한 나에게 꿀잠을 선물한다.',
    a2: '너무 피곤하지만 잠을 자기 전에 이 돈으로 무엇을 할 지 우선 생각해본다.',
    a3: '우선 모든 채무관계를 청산하고 미리 알아보았던 부동산을 매입하러 간다.',
  },
];

export default Question;
