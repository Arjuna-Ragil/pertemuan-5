window.addEventListener('load', () => {
	const form = document.querySelector("#formToDoBaru");
	const input = document.querySelector("#toDoBaru");
	const listToDo = document.querySelector("#list");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const toDo = input.value;

		const toDoBaru = document.createElement('div');
		toDoBaru.classList.add('task');

		const isiToDo = document.createElement('div');
		isiToDo.classList.add('content');

		toDoBaru.appendChild(isiToDo);

		const inputToDoBaru = document.createElement('input');
		inputToDoBaru.classList.add('text');
		inputToDoBaru.type = 'text';
		inputToDoBaru.value = toDo;
		inputToDoBaru.setAttribute('readonly', 'readonly');

		isiToDo.appendChild(inputToDoBaru);

		const kolomTombol = document.createElement('div');
		kolomTombol.classList.add('actions');
		
		const editButton = document.createElement('button');
		editButton.classList.add('edit');
		editButton.innerText = 'Edit';

		const deleteButton = document.createElement('button');
		deleteButton.classList.add('delete');
		deleteButton.innerText = 'Delete';

		kolomTombol.appendChild(editButton);
		kolomTombol.appendChild(deleteButton);

		toDoBaru.appendChild(kolomTombol);

		listToDo.appendChild(toDoBaru);

		input.value = '';

		editButton.addEventListener('click', (e) => {
			if (editButton.innerText.toLowerCase() == "edit") {
				editButton.innerText = "Save";
				inputToDoBaru.removeAttribute("readonly");
				inputToDoBaru.focus();
			} else {
				editButton.innerText = "Edit";
				inputToDoBaru.setAttribute("readonly", "readonly");
			}
		});

		deleteButton.addEventListener('click', (e) => {
			listToDo.removeChild(toDoBaru);
		});
	});
});