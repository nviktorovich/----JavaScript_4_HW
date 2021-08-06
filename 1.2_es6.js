"use strict"

// Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры наследования ->
// механика наследования),
// а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта.
// Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
// б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
// помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
// свойство highlighted со значением false.
// Унаследуйте в объектах типа AttachedPost методы из Post.
// Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
// highlighted значение true.

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(new_text) {
        this.text = new_text
    }
}


class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false
    }
    makeTextHighlighted() {
        this.highlighted = true
    }
}


let obj1 = new AttachedPost("Pushkin", "Привет", "22.06.1980");
console.log(obj1.text)
obj1.edit("Пока")
console.log(obj1.text)

console.log(obj1.highlighted)
obj1.makeTextHighlighted()
console.log(obj1.highlighted)