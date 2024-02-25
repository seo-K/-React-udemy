const sectionSelectors = [".section_01", ".section_study", ".section_consist", ".section_expert"];
const $CONTAINER = window;

const scrollEvent = () => {
  sectionSelectors.forEach((selector) => {
    // triggerHeight를 동적으로 설정하기 위해 data-parent 속성을 사용하여 해당 요소에 접근
    const triggerHeight = window.innerHeight;
    const triggerOffset = triggerHeight * 0.1; // 화면 높이의 10%에 해당하는 오프셋

    const section = document.querySelector(selector);
    if (!section) return; // 해당 섹션이 존재하지 않으면 처리하지 않음

    const title = section.querySelector("h2");
    let titleData = title.dataset.ani;

    const rect = section.getBoundingClientRect();

    // 섹션이 화면의 일정 부분에 닿았을 때 클래스 추가
    if (rect.top < triggerHeight - triggerOffset && rect.bottom >= triggerOffset) {
      title.classList.add("scroll-active");
    } else {
      title.classList.remove("scroll-active");
    }
  });
};

$CONTAINER.addEventListener("scroll", scrollEvent);
scrollEvent(); // 초기 호출
