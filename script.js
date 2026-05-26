function toMailto(subject, body) {
  return `mailto:sale@nomipak.ru?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

document.getElementById('orderForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const body = [
    `Компания: ${data.get('company')}`,
    `Контактное лицо: ${data.get('person')}`,
    `E-mail: ${data.get('email')}`,
    `Телефон: ${data.get('phone')}`,
    `Позиция: ${data.get('part')}`,
    `Количество: ${data.get('qty')}`,
    `Комментарий: ${data.get('comment') || '-'}`,
  ].join('\n');

  window.location.href = toMailto('Заявка на запасные части NOMIPAK', body);
});

document.getElementById('feedbackForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const body = [
    `Имя: ${data.get('name')}`,
    `Контакты: ${data.get('contact')}`,
    `Сообщение: ${data.get('message')}`,
  ].join('\n');

  window.location.href = toMailto('Обратная связь NOMIPAK', body);
});
