const banner = document.getElementById('banner');
const slides = banner.querySelectorAll('li');
const totalSlides = slides.length;

// 현재 슬라이드 인덱스 (초기값은 0)
let currentIndex = 0;

// 이전, 다음 네비게이션 버튼 요소 가져오기
const navPrev = document.querySelector('.nav-prev');
const navNext = document.querySelector('.nav-next');

// 페이지네이션 버튼 요소들 가져오기
const pageBtns = document.querySelectorAll('.page-btn');

// 슬라이드: bannerSlide
function bannerSlide(index) {
  if (index >= 0 && index < totalSlides) {
    banner.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
    updatePagination();
  }
}

// 자동 슬라이드 설정: 5초마다 슬라이드를 이동시키는 함수
function startAutoSlide() {
  setInterval(() => {
    // 5초마다 다음 슬라이드로 자동 이동
    currentIndex = (currentIndex + 1) % totalSlides;
    bannerSlide(currentIndex);
  }, 5000); // 5000ms = 5초
}

// 자동 슬라이드 실행
startAutoSlide();

// 이전 슬라이드로 이동 (현재 인덱스에서 -1)
navPrev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  bannerSlide(currentIndex);
});

// 다음 슬라이드로 이동 (현재 인덱스에서 +1)
navNext.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  bannerSlide(currentIndex);
});

// 페이지네이션 
function updatePagination() {
  // 모든 페이지네이션 버튼을 순회하며 현재 슬라이드에 맞는 버튼에 active 클래스를 추가
  pageBtns.forEach((btn, idx) => {
    btn.classList.toggle('active', idx === currentIndex);
  });
}

// 페이지네이션 버튼 클릭 시 해당 슬라이드로 이동하는 이벤트 설정
pageBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => bannerSlide(idx));
});

// 초기 페이지네이션 버튼 상태 업데이트
updatePagination();

//changeBackgroundImage
function applyGreenFilter() {
  const listItems = document.querySelectorAll('li');
  
  listItems.forEach(item => {
    const back1imgDiv = item.querySelector('.back1img'); 

    // (호버 시)
    item.addEventListener('mouseover', () => {
      back1imgDiv.style.filter = 'brightness(0.7) hue-rotate(90deg)'; 
    });

    // (호버 해제 시)
    item.addEventListener('mouseout', () => {
      back1imgDiv.style.filter = 'none'; 
    });
  });
}

applyGreenFilter();
