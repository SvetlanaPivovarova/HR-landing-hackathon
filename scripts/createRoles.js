import { roles } from "./rolesDescription.js";
import { roleCard } from "./roleCard.js";

const rolesContainer = document.querySelector(".roles__container");

const createRoles = (role) => {
  const roleElement = new roleCard(role);
  return roleElement.generateCard();
};

const render = (element) => {
  rolesContainer.append(element);
};

roles.forEach((item) => {
  render(createRoles(item));
});
