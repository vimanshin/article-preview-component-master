// Function: инициализирует Share-комponent
// Accepts: ничего
// Returns: ничего (ранний выход, если элементов нет на странице)
const initShare = () => {
  const shareButton = document.querySelector('.card__share-btn');
  const sharePanel = document.querySelector('#share-panel');
  const shareBlock = document.querySelector('.card__share');

  if (!shareButton || !sharePanel || !shareBlock) return;

  // Function: проверяет, открыта ли панель
  // Accepts: ничего
  // Returns: true / false
  const isPanelOpen = () => {
    return sharePanel.classList.contains('card__share-panel--visible');
  };

  // Function: открывает панель Share
  // Accepts: ничего
  // Returns: ничего
  const openSharePanel = () => {
    sharePanel.removeAttribute('hidden');
    sharePanel.classList.add('card__share-panel--visible');
    shareButton.classList.add('card__share-btn--active');
    shareButton.setAttribute('aria-expanded', 'true');
  };

  // Function: закрывает панель Share
  // Accepts: ничего
  // Returns: ничего
  const closeSharePanel = () => {
    sharePanel.setAttribute('hidden', '');
    sharePanel.classList.remove('card__share-panel--visible');
    shareButton.classList.remove('card__share-btn--active');
    shareButton.setAttribute('aria-expanded', 'false');
  };

  // Function: переключает панель (открыть ↔ закрыть)
  // Accepts: ничего
  // Returns: ничего
  const toggleSharePanel = () => {
    if (isPanelOpen()) {
      closeSharePanel();
    } else {
      openSharePanel();
    }
  };

  // Function: обрабатывает клик по кнопке Share
  // Accepts: event — объект события
  // Returns: ничего
  const handleShareButtonClick = (event) => {
    event.stopPropagation(); // чтобы document сразу не закрыл панель
    toggleSharePanel();
  };

  // Function: закрывает панель при клике вне блока Share
  // Accepts: event — объект события
  // Returns: ничего
  const handleDocumentClick = (event) => {
    if (!isPanelOpen()) return;

    const clickedInsideShare = shareBlock.contains(event.target);
    if (!clickedInsideShare) {
      closeSharePanel();
    }
  };

  // Function: закрывает панель по клавише Escape
  // Accepts: event — объект события клавиатуры
  // Returns: ничего
  const handleDocumentKeydown = (event) => {
    if (event.key !== 'Escape') return;
    if (!isPanelOpen()) return;

    closeSharePanel();
    shareButton.focus(); // фокус возвращаем на кнопку
  };

  // Function: блокирует переход по href="#" у соцсетей
  // Accepts: event — объект события
  // Returns: ничего
  const handleSocialLinkClick = (event) => {
    event.preventDefault();
  };

  shareButton.addEventListener('click', handleShareButtonClick);
  document.addEventListener('click', handleDocumentClick);
  document.addEventListener('keydown', handleDocumentKeydown);

  document.querySelectorAll('.card__social-link').forEach((link) => {
    link.addEventListener('click', handleSocialLinkClick);
  });
};

initShare();