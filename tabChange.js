function showTab(tabName) {
    // 모든 탭 숨기기
    const tabs = document.querySelectorAll('.container');
    tabs.forEach(tab => {
        tab.classList.add('hidden');
        tab.scrollTop = 0;  // 각 탭 스크롤 초기화
    });

    // 선택한 탭 보이기
    const activeTab = document.getElementById(tabName);
    activeTab.classList.remove('hidden');
    activeTab.scrollTop = 0;

    // body 스크롤 초기화
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
