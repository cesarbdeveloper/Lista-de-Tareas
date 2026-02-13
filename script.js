const form = document.getElementById('task-form');
        const input = document.getElementById('task-input');
        const list = document.getElementById('task-list');

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const taskText = input.value.trim();

            if (taskText !== '') {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <span>${taskText}</span>
                    <button class="delete-btn">Eliminar</button>
                `;
                list.appendChild(listItem);
                input.value = '';

                listItem.querySelector('span').addEventListener('click', function() {
                    listItem.classList.toggle('completed');
                });

                listItem.querySelector('.delete-btn').addEventListener('click', function() {
                    list.removeChild(listItem);
                });
            }
        });