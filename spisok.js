$('document').ready(function(){
var elements = document.querySelector('.B');
elements.addEventListener("change", work);
function work() {
  var choice = elements.value;

  if (choice === '0') {
    $('.C').prepend('<option value="01.03.02">01.03.02 - Прикладная информатика и математика</option>');
	$('.C').prepend('<option value="09.03.02">09.03.02 - Информационные системы и технологии в бизнесе</option>');
	$('.C').prepend('<option value="09.03.03">09.03.03 - Прикладная информатика</option>');
	$('.C').prepend('<option value="09.03.03.01">09.03.03.01 - Прикладная информатика в экономике</option>');
	$('.C').prepend('<option value="01.03.02">10.03.01 - Информационная безопасность</option>');
	$('.C').prepend('<option value="27.03.02">27.03.02 - Управление качеством</option>');
	$('.C').prepend('<option value="38.03.01.01">38.03.01.01 - Бухгалтерский учет, анализ и аудит</option>');
	$('.C').prepend('<option value="38.03.01.02">38.03.01.02 - Экономика преприятий и организаций</option>');
	$('.C').prepend('<option value="38.03.01.03">38.03.01.03 - Банковское дело</option>');
	$('.C').prepend('<option value="38.03.01.04">38.03.01.04 - Мировая экономика</option>');
	$('.C').prepend('<option value="38.03.01.05">38.03.01.05 - Налоги и налогооблажение</option>');
	$('.C').prepend('<option value="38.03.01.06">38.03.01.06 - Статистика</option>');
	$('.C').prepend('<option value="38.03.01.07">38.03.01.07 - Финансы и кредит</option>');
	$('.C').prepend('<option value="38.03.01.09">38.03.01.09 - Бизнес-анализ и прогназирование в организациях</option>');
	$('.C').prepend('<option value="38.03.01.10">38.03.01.10 - Региональная экономика</option>');
	$('.C').prepend('<option value="38.03.01.11">38.03.01.11 - Анализ и управление рисками</option>');
	$('.C').prepend('<option value="38.03.01.12">38.03.01.12 - Банковское дело и денежное обращене</option>');
	$('.C').prepend('<option value="38.03.01.13">38.03.01.13 - Финансовая безопасность</option>');
  
  } else if (choice === '1') {
    $('.C').prepend('<option value="38.05.01">38.05.01 - Экономическая безопасность</option>');
	$('.C').prepend('<option value="38.05.02">38.05.02 - Таможенное дело</option>');
	$('.C').prepend('<option value="40.05.03">40.05.03 - Судебная экспертиза</option>');
  
  } else if (choice === '2') {
    $('.C').prepend('<option value="01.04.02">01.04.02 - Прикладная математика и информатика</option>');
	$('.C').prepend('<option value="09.04.03">09.04.03 - Прикладная информатика</option>');
	$('.C').prepend('<option value="09.04.04">09.04.04 - Программная инженерия</option>');
	$('.C').prepend('<option value="38.04.01">38.04.01 - Экономика</option>');
	$('.C').prepend('<option value="38.04.02">38.04.02 - Менеджмент</option>');
	$('.C').prepend('<option value="38.04.03">38.04.03 - Управление персоналом</option>');
	$('.C').prepend('<option value="38.04.04">38.04.04 - Государственное и муниципальное управление</option>');
	$('.C').prepend('<option value="38.04.06">38.04.06 - Торговое дело</option>');
	$('.C').prepend('<option value="38.04.07">38.04.07 - Товароведение</option>');
	$('.C').prepend('<option value="38.04.08">38.04.08 - Финансы и кредит</option>');
	$('.C').prepend('<option value="01.04.02">40.04.01 - Юриспруденция</option>');
	$('.C').prepend('<option value="41.04.01">41.04.01 - Зарубежное регионоведение</option>');
	$('.C').prepend('<option value="42.04.02">42.04.02 - Журналистика</option>');
	$('.C').prepend('<option value="43.04.01">43.04.01 - Сервис</option>');
	$('.C').prepend('<option value="45.04.02">45.04.02 - Лингвистика</option>');
	$('.C').prepend('<option value="27.04.02">27.04.02 - Управление качеством</option>');
	$('.C').prepend('<option value="39.04.03">39.04.03 - Организация работы с молодежью</option>');
	$('.C').prepend('<option value="10.04.01">10.04.01 - Информационная безопасность</option>');
	$('.C').prepend('<option value="44.04.04">44.04.04 - Профессиональное обучение по отраслям</option>');
  
  } else if (choice === '3') {
    $('.C').prepend('<option value="09.06.01">09.06.01 - ИНФОРМАТИКА И ВЫЧИСЛИТЕЛЬНАЯ ТЕХНИКА</option>');
	$('.C').prepend('<option value="10.06.01">10.06.01 - ИНФОРМАЦИОННАЯ БЕЗОПАСНОСТЬ</option>');
	$('.C').prepend('<option value="38.06.01">38.06.01 - ЭКОНОМИКА</option>');
	$('.C').prepend('<option value="40.06.01">40.06.01 - ЮРИСПРУДЕНЦИЯ</option>');
	$('.C').prepend('<option value="44.06.01">44.06.01 - ОБРАЗОВАНИЕ И ПЕДАГОГИЧЕСКИЕ НАУКИ</option>');
	$('.C').prepend('<option value="45.06.01">45.06.01 - ЯЗЫКОЗНАНИЕ И ЛИТЕРАТУРОВЕДЕНИЕ</option>');
	$('.C').prepend('<option value="46.06.01">46.06.01 - ИСТОРИЯ И АРХЕОЛОГИЯ</option>');
	$('.C').prepend('<option value="47.06.01">47.06.01 - ФИЛОСОФИЯ, ЭТИКА РЕЛИГИОВЕДЕНИЕ</option>');
  } else {}
}
})