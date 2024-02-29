function addNewRule() {
	let ruleContainer = document.getElementById("rulesContainer");
	let newRule = document.createElement("div");
	newRule.innerHTML = `
          <input type="text" id="rule_${ruleContainer.childElementCount + 1}">
          <button class="btn btn-primary" onclick="deleteRule(this)">Delete</button>
        `;
	ruleContainer.appendChild(newRule);
}

function deleteRule(button) {
	let ruleContainer = document.getElementById("rulesContainer");
	ruleContainer.removeChild(button.parentElement);
}

function addCoordinator() {
	const coordinatorContainer = document.getElementById("coordinatorContainer");
	const coordinator = document.createElement("div");
	coordinator.classList.add("coordinator");
	coordinator.innerHTML = `
          <br />
          <label for="coordinatorName">Name: </label>
          <input type="text" class="form-control" id="coordinatorName" name="coordinatorName">
          <label for="coordinatorContact">Contact Number: </label>
          <input type="text" class="form-control" id="coordinatorContact" name="coordinatorContact">
          <label for="coordinatorImg">Coordinator Photo</label>
          <input type="text" class="form-control" id="coordinatorImg" name="coordinatorImg">
          <button class="btn btn-primary mt-1" type="button" onclick="deleteCoordinator(this)">Delete</button>
        `;
	coordinatorContainer.appendChild(coordinator);
}

function deleteCoordinator(coordinator) {
	coordinator.parentElement.remove();
}

function submitData() {
	let data = {
		title: document.getElementById("title").value,
		club: document.getElementById("club").value,
		description: document.getElementById("description").value,
		team_size: parseInt(document.getElementById("teamSize").value),
		rounds: parseInt(document.getElementById("rounds").value),
		registration_limit: document.getElementById("registrationLimit").value,
		rules: [],
		event_coordinators: [],
	};

	let rulesContainer = document.getElementById("rulesContainer");
	for (let i = 0; i < rulesContainer.childElementCount; i++) {
		data.rules.push(rulesContainer.children[i].children[0].value);
	}

	let coordinatorsContainer = document.getElementById("coordinatorContainer");
	for (let i = 0; i < coordinatorsContainer.childElementCount; i++) {
		let coordinator = {
			name: coordinatorsContainer.children[i].children[i == 0 ? 1 : 2].value,
			contact_number:
				coordinatorsContainer.children[i].children[i == 0 ? 3 : 4].value,
			image: coordinatorsContainer.children[i].children[i == 0 ? 5 : 6].value,
		};
		data.event_coordinators.push(coordinator);
	}

	document.getElementById("finalData").value = JSON.stringify(data);
}
