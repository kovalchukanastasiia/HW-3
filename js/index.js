/*
Создайте массив styles с єлементами "Джаз" и "Блюз". 
Добавьте "Рок-н-ролл" в конец. 
Замените значение в средине на "Классика". Ваш код для поиска значение всередине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте "Рэп" и "Рэгги" в начало массива.
*/

var styles = ["Джаз", "Блюз"];
document.write("Cоздание массива styles с элементами Джаз и Блюз - " + styles)
document.write("<br/>")
var pushed = styles.push("Рок-н-ролл");
document.write("Добавление Рок-н-ролл в конце - " + styles)
document.write("<br/>")
styles[Math.floor(styles.length / 2)] = "Классика";
document.write("Замените значение в средине на Классика - " + styles)
document.write("<br/>")
var del = styles.shift();
document.write("Удаленный элемент массива - " + del)
document.write("<br/>")
document.write("Массив сейчас - " + styles)
document.write("<br/>")
var newElements = styles.splice(0, 0, "Рэп", "Рэгги");
document.write("Массив после вставки Рэп и Рэгги в начало массива - " + styles)
document.write("<br/>")