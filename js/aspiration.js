
        async function fetchChecklist() {
            try {
                const response = await fetch('https://script.google.com/macros/s/AKfycby1cxUAyiLk2GwvX2PY0gFR5E7LjuZLdZjOy_6U0m66vKPCGBaHamaQQX3o0lx-ZDue/exec');
                const data = await response.json();
                const checklist = document.getElementById('checklist');

                data.forEach(item => {
                    const listItem = document.createElement('li');

                    const label = document.createElement('span');
                    label.textContent = item.task;

                    const status = document.createElement('span');
                    status.classList.add('status');
                    status.textContent = item.status;

                    // Add appropriate class for status
                    if (item.status === 'Completed') {
                        status.classList.add('completed');
                    } else if (item.status === 'Pending') {
                        status.classList.add('pending');
                    } else if (item.status === 'In Progress') {
                        status.classList.add('in-progress');
                    } else if (item.status === 'Following Up') {
                        status.classList.add('following-up');
                    } else if (item.status === 'Failed') {
                        status.classList.add('failed');
                    }

                    listItem.appendChild(label);
                    listItem.appendChild(status);
                    checklist.appendChild(listItem);
                });
            } catch (error) {
                console.error('Error fetching checklist:', error);
            }
        }

        fetchChecklist();
