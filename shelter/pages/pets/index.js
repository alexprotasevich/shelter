const result = `
Все пункты верстки выполнены.

Страница Pets (38):

4.Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6:
блок <header>: +2
блок Our Friends: +2
блок <footer>: +2

5.Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6:
блок <header>: +2
блок Our Friends: +2
блок <footer>: +2

6.Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6:
блок <header>: +2
блок Our Friends: +2
блок <footer>: +2

7.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки,
 справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется:
 не обрезается и не удаляется: +20: (+10 для Pets):
нет полосы прокрутки при ширине страницы Main от 1280рх до 768рх: +5
нет полосы прокрутки при ширине страницы Main от 768рх до 320рх: +5

8.Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается 
под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга,
изображения могут менять размер, но сохраняют правильные пропорции  +8: (+4 для Main):
на странице Pets: +4

9.При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается,
появляется иконка бургер-меню: +4 (+2)
Открытие меню при клике на иконку бургер-меню на текущем этапе не проверяется

10.Верстка обеих страниц валидная:
для проверки валидности вёрстки используйте сервис https://validator.w3.org/ : +8

`;

console.log(result);