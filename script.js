document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('detailsForm');
    const table = document.getElementById('detailsTable').querySelector('tbody');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const level = document.getElementById('level').value;
        const university = document.getElementById('university').value;
        const address = document.getElementById('address').value;
        const board = document.getElementById('board').value;
        const gpa = document.getElementById('gpa').value;
        const passedYear = document.getElementById('passedYear').value;

        if (level && university && address && board && gpa && passedYear) {
            addRow(level, university, address, board, gpa, passedYear);
            form.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });

    function addRow(level, university, address, board, gpa, passedYear) {
        const row = table.insertRow();
        row.innerHTML = `
            <td>${level}</td>
            <td>${university}</td>
            <td>${address}</td>
            <td>${board}</td>
            <td>${gpa}</td>
            <td>${passedYear}</td>
            <td>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </td>
        `;

        row.querySelector('.edit').addEventListener('click', () => editRow(row));
        row.querySelector('.delete').addEventListener('click', () => deleteRow(row));
    }

    function deleteRow(row) {
        table.deleteRow(row.rowIndex - 1);
    }

    function editRow(row) {
        const level = row.cells[0].innerText;
        const university = row.cells[1].innerText;
        const address = row.cells[2].innerText;
        const board = row.cells[3].innerText;
        const gpa = row.cells[4].innerText;
        const passedYear = row.cells[5].innerText;

        document.getElementById('level').value = level;
        document.getElementById('university').value = university;
        document.getElementById('address').value = address;
        document.getElementById('board').value = board;
        document.getElementById('gpa').value = gpa;
        document.getElementById('passedYear').value = passedYear;

        form.removeEventListener('submit', onSubmit);
        form.addEventListener('submit', function onUpdate(event) {
            event.preventDefault();

            row.cells[0].innerText = document.getElementById('level').value;
            row.cells[1].innerText = document.getElementById('university').value;
            row.cells[2].innerText = document.getElementById('address').value;
            row.cells[3].innerText = document.getElementById('board').value;
            row.cells[4].innerText = document.getElementById('gpa').value;
            row.cells[5].innerText = document.getElementById('passedYear').value;

            form.reset();
            form.removeEventListener('submit', onUpdate);
            form.addEventListener('submit', onSubmit);
        });
    }

    function onSubmit(event) {
        event.preventDefault();

        const level = document.getElementById('level').value;
        const university = document.getElementById('university').value;
        const address = document.getElementById('address').value;
        const board = document.getElementById('board').value;
        const gpa = document.getElementById('gpa').value;
        const passedYear = document.getElementById('passedYear').value;

        if (level && university && address && board && gpa && passedYear) {
            addRow(level, university, address, board, gpa, passedYear);
            form.reset();
        } else {
            ('Please fill out all fields.');
        }
    }

    form.addEventListener('submit', onSubmit);
});
