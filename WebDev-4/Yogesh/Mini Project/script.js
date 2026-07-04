let savedTasks = JSON.parse(localStorage.getItem('kanbanTasks'));
        
        let defaultTasks = [
            { id: 'task-1', text: 'Set up React environment', status: 'todo' },
            { id: 'task-2', text: 'Design database schema', status: 'inprogress' },
            { id: 'task-3', text: 'Create GitHub Repo', status: 'done' }
        ];

        // If local storage is empty (or was cleared), load the default tasks instead
        let tasks = (savedTasks && savedTasks.length > 0) ? savedTasks : defaultTasks;

        function saveToLocalStorage() {
            localStorage.setItem('kanbanTasks', JSON.stringify(tasks));
            updateCounts();
        }

        function updateCounts() {
            const counts = { todo: 0, inprogress: 0, done: 0 };
            tasks.forEach(t => counts[t.status]++);
            document.getElementById('todoCount').textContent = counts.todo;
            document.getElementById('inprogressCount').textContent = counts.inprogress;
            document.getElementById('doneCount').textContent = counts.done;
        }

        function renderBoard() {
            document.querySelectorAll('.task-list').forEach(list => list.innerHTML = '');
            tasks.forEach(task => {
                const list = document.querySelector(`[data-status="${task.status}"] .task-list`);
                if (list) list.appendChild(createTaskElement(task));
            });
            updateCounts();
        }

        function createTaskElement(task) {
            const el = document.createElement('div');
            el.className = 'task-card bg-white p-4 rounded-xl shadow-sm border border-gray-100 border-l-4 border-l-indigo-500 cursor-grab hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group flex justify-between items-start gap-3 relative overflow-hidden';
            el.draggable = true;
            el.id = task.id;
            
            el.innerHTML = `
                <p class="text-sm font-medium text-gray-700 break-words w-full pointer-events-none mt-0.5">${task.text}</p>
                <button onclick="deleteTask('${task.id}')" class="text-gray-400 hover:text-red-500 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-all p-1.5 rounded-lg flex-shrink-0" title="Delete Task">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            `;

            // Drag events attached to the card
            el.addEventListener('dragstart', (e) => {
                el.classList.add('is-dragging');
                e.dataTransfer.setData('text/plain', task.id);
                setTimeout(() => el.classList.add('opacity-0'), 0);
            });

            el.addEventListener('dragend', () => {
                el.classList.remove('is-dragging', 'opacity-0');
                syncStateFromDOM(); 
            });

            return el;
        }

        window.deleteTask = function(taskId) {
            tasks = tasks.filter(t => t.id !== taskId);
            document.getElementById(taskId)?.remove();
            saveToLocalStorage();
        };

        const columns = document.querySelectorAll('.kanban-column');
        
        columns.forEach(col => {
            const list = col.querySelector('.task-list');

            list.addEventListener('dragover', e => {
                e.preventDefault(); 
                col.classList.add('drag-over'); 

                const afterElement = getDragAfterElement(list, e.clientY);
                const draggable = document.querySelector('.is-dragging');
                
                if (draggable) {
                    if (afterElement == null) {
                        list.appendChild(draggable);
                    } else {
                        list.insertBefore(draggable, afterElement);
                    }
                }
            });

            list.addEventListener('dragleave', () => col.classList.remove('drag-over'));
            list.addEventListener('drop', e => {
                e.preventDefault();
                col.classList.remove('drag-over');
            });
        });

        // Helper to determine position during drag
        function getDragAfterElement(container, y) {
            const draggableElements = [...container.querySelectorAll('.task-card:not(.is-dragging)')];

            return draggableElements.reduce((closest, child) => {
                const box = child.getBoundingClientRect();
                const offset = y - box.top - box.height / 2;
                if (offset < 0 && offset > closest.offset) {
                    return { offset: offset, element: child };
                } else {
                    return closest;
                }
            }, { offset: Number.NEGATIVE_INFINITY }).element;
        }

        function syncStateFromDOM() {
            const newTasks = [];
            columns.forEach(col => {
                const status = col.getAttribute('data-status');
                col.querySelectorAll('.task-card').forEach(card => {
                    newTasks.push({
                        id: card.id,
                        text: card.querySelector('p').textContent,
                        status: status
                    });
                });
            });
            tasks = newTasks;
            saveToLocalStorage();
        }

        columns.forEach(col => {
            const addBtn = col.querySelector('.add-card-btn');
            const form = col.querySelector('.add-card-form');
            const saveBtn = col.querySelector('.save-card-btn');
            const cancelBtn = col.querySelector('.cancel-card-btn');
            const textarea = col.querySelector('textarea');
            const list = col.querySelector('.task-list');
            const status = col.getAttribute('data-status');

            function openForm() {
                addBtn.classList.add('hidden');
                form.classList.remove('hidden');
                form.classList.add('flex');
                textarea.focus();
                list.scrollTop = list.scrollHeight; 
            }

            function closeForm() {
                form.classList.add('hidden');
                form.classList.remove('flex');
                addBtn.classList.remove('hidden');
                textarea.value = '';
            }

            function createNewTask() {
                const text = textarea.value.trim();
                if (text) {
                    const newTask = { id: 'task-' + Date.now(), text, status };
                    tasks.push(newTask);
                    list.appendChild(createTaskElement(newTask));
                    saveToLocalStorage();
                    
                    textarea.value = '';
                    textarea.focus();
                    list.scrollTop = list.scrollHeight;
                }
            }

            addBtn.addEventListener('click', openForm);
            cancelBtn.addEventListener('click', closeForm);
            saveBtn.addEventListener('click', createNewTask);
            
            textarea.addEventListener('keydown', e => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault(); 
                    createNewTask();
                }
                if (e.key === 'Escape') closeForm();
            });
        });

        const clearModal = document.getElementById('clear-modal');

        document.getElementById('clear-board-btn').addEventListener('click', () => {
            clearModal.classList.remove('hidden');
        });

        document.getElementById('cancel-clear-btn').addEventListener('click', () => {
            clearModal.classList.add('hidden');
        });

        document.getElementById('confirm-clear-btn').addEventListener('click', () => {
            tasks = [];
            saveToLocalStorage();
            renderBoard();
            clearModal.classList.add('hidden');
        });

        // Initial Render
        renderBoard();