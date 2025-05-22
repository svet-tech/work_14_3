// Класс Employee, описывающий работника банка
class Employee {
    constructor(id, name, position, salary) {
        this.id = id;             // уникальный идентификатор
        this.name = name;         // имя работника
        this.position = position; // должность
        this.salary = salary;     // зарплата
    }
}

// Класс EmpTable для генерации HTML таблицы по массиву работников
class EmpTable {
    constructor(employees) {
        this.employees = employees; // массив объектов Employee
    }

    getHtml() {
        let html = '<table border="1" cellpadding="5" cellspacing="0">';
        // Заголовки таблицы
        html += `
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Position</th>
                <th>Salary</th>
            </tr>`;
        // Строки таблицы с данными работников
        for (const emp of this.employees) {
            html += `
            <tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.position}</td>
                <td>${emp.salary}</td>
            </tr>`;
        }
        html += '</table>';
        return html;
    }
}

// Создаем массив работников банка
const employees = [
    new Employee(1, 'Иван Иванов', 'Бухгалтер', 50000),
    new Employee(2, 'Петр Петров', 'Менеджер', 60000),
    new Employee(3, 'Светлана Смирнова', 'Аналитик', 55000),
    new Employee(4, 'Алексей Кузнецов', 'Техник', 48000)
];

// Создаем объект EmpTable и выводим HTML таблицу на страницу
const empTable = new EmpTable(employees);
document.body.innerHTML = empTable.getHtml();